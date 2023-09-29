"use client";

import Step1 from "@/components/steps/step1";
import Step2 from "@/components/steps/step2";
import Step3 from "@/components/steps/step3";
import Step4 from "@/components/steps/step4";
import Button from "@/components/ui/button";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import { useState } from "react";

type Step = 1 | 2 | 3 | 4;

const Generator: React.FC = () => {
  const back = () => {};
  const next = () => {};
  const steps = [<Step1 />, <Step2 />, <Step3 />, <Step4 />];
  return (
    <div className="h-full w-full flex flex-col items-center overflow-hidden py-16 ">
      <div className="w-[87%] md:w-[80%] flex-1 bg-blue-950/70 overflow-scroll  py-4 px-8 md:px-14 lg:px-16 xl:px-20 rounded-xl flex flex-col border border-slate-600 shadow-2xl">
        {steps.map((step, index) => (
          <div key={index} className="border-b border-slate-600 py-8 ">
            {step}
          </div>
        ))}

        {/*Buttons */}
        <div className="flex justify-end items-center gap-4 py-8">
          <Button onClick={back}>
            <div className="flex items-center justify-center gap-2 lg:px-2 lg:py-1">
              <BiLeftArrowAlt />
              <p className="lg:text-xl text-lg ">Back</p>
            </div>
          </Button>
          <Button onClick={next}>
            <div className="flex items-center justify-center gap-2 lg:px-2 lg:py-1">
              <p className="text-lg lg:text-xl">Next</p>
              <BiRightArrowAlt />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Generator;
