"use client";

import Step1 from "@/components/sterp1";
import { useState } from "react";

type Step = 1 | 2 | 3;

const Generator: React.FC = () => {
  const [step, setStep] = useState<Step>(1);
  return (
    <div className="h-full w-full flex flex-col gap-10 items-center justify-center">
      <div className="w-[80%] md:w-[70%]">
        <Step1 />
      </div>
    </div>
  );
};

export default Generator;
