import React from "react";
import Step1 from "@/components/steps/step1";
import Step2 from "@/components/steps/step2";
import Step3 from "@/components/steps/step3";
import Step4 from "@/components/steps/step4";
import Button from "@/components/ui/button";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";

interface Props {}

const back = () => {};
const next = () => {};
const steps = [<Step1 />, <Step2 />, <Step3 />, <Step4 />];

const Form: React.FC<Props> = ({}) => {
  return (
    <>
      {" "}
      {steps.map((step, index) => (
        <div key={index} className="border-b border-slate-600 py-8 lg:py-10 ">
          {step}
        </div>
      ))}
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
    </>
  );
};

export default Form;
