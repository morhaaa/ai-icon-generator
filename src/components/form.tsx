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
    <div className="py-12 px-8 md:px-16 lg:px-20 xl:px-24 flex flex-col">
      <p className="text-white font-semibold text-3xl md:text-3xl lg:text-3xl xl:text-4xl text-center border-b pb-6 lg:pb-8 border-slate-600">
        Let&apos;s generate your icons
      </p>
      {steps.map((step, index) => (
        <div
          key={index}
          className="border-b border-slate-600 py-6 md:py-7 lg:py-8"
        >
          {step.tag}
        </div>
      ))}
      <div className="flex justify-end items-center gap-4 py-8">
        <Button onClick={sendRequest} disabled={!formIsFulfilled}>
          <div className="flex items-center justify-center gap-2 lg:px-2 lg:py-1">
            <p className="text-lg lg:text-xl">Confirm</p>
            <BiRightArrowAlt />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Form;
