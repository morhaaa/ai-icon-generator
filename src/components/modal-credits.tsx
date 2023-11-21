"use client";
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "@/containers/store";
import { Coins, GemIcon, Landmark, X } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { plans } from "@/utilities/constant";
import { useState } from "react";
import clsx from "clsx";
import { closeModal } from "@/containers/modal-credit";

const Modal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((store: StoreType) => store.modal.value);
  const [isSelected, setIsSelected] = useState<Number>(1);

  if (!isOpen) return;

  const close = () => {
    dispatch(closeModal());
  };

  //   const onSubscribe = async () => {
  //     try {

  //       const response = await axios.get("/api/stripe");

  //       window.location.href = response.data.url;
  //     } catch (error) {
  //       toast.error("Something went wrong");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  return (
    <div className="absolute bg-slate-700/20 backdrop-blur h-screen w-screen z-[9999] flex items-center justify-center">
      <Card
        className={
          "flex flex-col border-2 border-slate-500 bg-gradient-to-br from-indigo-950 via-indigo-950 to-blue-950 w-[350px] md:w-[500px] lg:w-[600px] h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] rounded-2xl drop-shadow-2xl"
        }
      >
        <CardHeader>
          <X
            color="#e2e8f0"
            className="self-end cursor-pointer"
            onClick={close}
          />
          <CardTitle className="text-white text-2xl lg:text-4xl">
            Buy new credits
          </CardTitle>
          <CardDescription className="lg:text-lg">
            Choose your pack
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex">
          <div className="flex-1 flex flex-col">
            <div className="flex-1 flex flex-col gap-2 lg:gap-4">
              {plans.map((plan, index) => (
                <div
                  onClick={() => setIsSelected(index)}
                  key={index}
                  className={clsx(
                    "flex items-center space-x-4 rounded-lg border-slate-400 border-2 py-2 lg:py-6 px-4 cursor-pointer",
                    isSelected === index
                      ? " bg-gradient-to-br from-slate-400 to-slate-300"
                      : "bg-transparent"
                  )}
                >
                  {index === 0 && (
                    <Coins
                      strokeWidth={2.25}
                      size={35}
                      color={isSelected === index ? "#000000" : "#e2e8f0"}
                    />
                  )}
                  {index === 1 && (
                    <GemIcon
                      strokeWidth={2.25}
                      size={35}
                      color={isSelected === index ? "#000000" : "#e2e8f0"}
                    />
                  )}
                  {index === 2 && (
                    <Landmark
                      strokeWidth={2.25}
                      size={35}
                      color={isSelected === index ? "#000000" : "#e2e8f0"}
                    />
                  )}
                  <div className="flex items-center justify-between flex-1">
                    <div className="flex flex-col gap-1">
                      <p
                        className={clsx(
                          "font-semibold md:text-xl leading-none",
                          isSelected === index ? "" : "text-slate-200"
                        )}
                      >
                        {plan.credits} credits
                      </p>
                      <p className="md:text-lg text-muted-foreground">
                        {plan.description}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p
                      className={clsx(
                        "font-semibold text-xl md:text-2xl",
                        isSelected === index ? "" : "text-slate-200"
                      )}
                    >
                      {plan.price}$
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => setIsSelected(2)}
              className=" bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-2 md:py-4 w-full rounded-md border-2 border-slate-500"
            >
              <p className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-slate-300 to-slate-300">
                Next
              </p>
            </button>
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

export default Modal;
