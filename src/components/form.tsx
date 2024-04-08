"use client";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { StoreType } from "@/containers/store";
import { useSelector } from "react-redux";
import Step1 from "@/components/steps/step1";
import Step2 from "@/components/steps/step2";
import Step3 from "@/components/steps/step3";
import Step4 from "@/components/steps/step4";
import Button from "@/components/ui/button";
import { BiRightArrowAlt } from "react-icons/bi";
import { resetForm } from "@/containers/form-reducer";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { updateUserBalance } from "@/containers/user-reducer";

interface Props {}

const Form: React.FC<Props> = ({}) => {
  const { toast } = useToast();
  const [formIsFulfilled, setFormIsFulfilled] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //Router
  const router = useRouter();

  //Redux
  const formSelector = useSelector((state: StoreType) => state.form);
  const user = useSelector((state: StoreType) => state.user.value);
  const { inputText, color, iconStyle, numberIcons } = formSelector.value;
  const dispatch = useDispatch();

  //ResetForm
  useEffect(() => {
    dispatch(resetForm());
  }, [dispatch]);

  //Check if form is fulfilled
  useEffect(() => {
    setFormIsFulfilled(!!inputText && !!color && !!iconStyle && !!numberIcons);
  }, [inputText, color, iconStyle, numberIcons]);

  const sendRequest = async () => {
    //if user has a balance
    if (user && user.balance > 0) {
      setIsLoading(true);
      const req = {
        prompt: inputText,
        color: color,
        style: iconStyle,
        n: numberIcons,
        authorId: user?.id ?? "",
      };

      const response = await fetch("/api/openAi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req),
      });

      const result = await response.json();

      if (result.success === true) {
        dispatch(updateUserBalance(result.newBalance));
        router.push(`/icons?generationId=${result.generationId}`);
      } else {
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
        setIsLoading(false);
      }
    } else {
      toast({
        title: "Oops! It seems like you've run out of credit.",
      });
    }
  };

  //steps

  const steps = [
    { id: 1, tag: <Step1 /> },
    { id: 2, tag: <Step2 /> },
    { id: 3, tag: <Step3 /> },
    { id: 4, tag: <Step4 creditsLeft={user?.balance ?? 0} /> },
  ];

  return (
    <div className="flex flex-col">
      <p className="text-slate-900 font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl border-b pb-6 border-slate-200">
        Let&apos;s{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-300 to-fuchsia-500">
          generate
        </span>{" "}
        your icons
      </p>
      {steps.map((step, index) => (
        <div
          key={index}
          className="border-b border-slate-200 pt-8 pb-6 md:pb-7 lg:pb-16"
        >
          {step.tag}
        </div>
      ))}
      <div className="flex justify-end items-center gap-4 py-8">
        <Button onClick={sendRequest} disabled={!formIsFulfilled || isLoading}>
          {isLoading ? (
            <div className="flex items-center justify-center gap-2  w-40 h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill=""
                stroke="#f1f5f9"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-loader-circle animate-spin"
              >
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2  w-40 h-8">
              <p className="text-lg">Confirm</p>
              <BiRightArrowAlt />
            </div>
          )}
        </Button>
      </div>
    </div>
  );
};

export default Form;
