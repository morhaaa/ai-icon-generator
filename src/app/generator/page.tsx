"use client";

import Step1 from "@/components/steps/step1";
import Step2 from "@/components/steps/step2";
import { useState } from "react";

type Step = 1 | 2 | 3 | 4;

const Generator: React.FC = () => {
  const [step, setStep] = useState<Step>(1);
  console.log(step);

  const next = () => {
    switch (step) {
      case 1:
        setStep(2);
        break;
      case 2:
        setStep(3);
        break;
      case 3:
        setStep(4);
        break;
    }
  };

  const back = () => {
    switch (step) {
      case 2:
        setStep(1);
        break;
      case 3:
        setStep(2);
        break;
      case 4:
        setStep(3);
        break;
    }
  };

  const switchStep = () => {
    switch (step) {
      case 1:
        return <Step1 next={next} />;
      case 2:
        return <Step2 next={next} back={back} />;
      case 3:
        return <Step2 next={next} back={back} />;
      case 4:
        return <Step2 next={next} back={back} />;
    }
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="w-[87%] md:w-[70%] h-[80%] md:h-[80%] overflow-hidden">
        {switchStep()}
      </div>
    </div>
  );
};

export default Generator;
