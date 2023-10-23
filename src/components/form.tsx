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

interface Props {}

const back = () => {};
const next = () => {};
const steps = [
  { id: 1, tag: <Step1 /> },
  { id: 2, tag: <Step2 /> },
  { id: 3, tag: <Step3 /> },
  { id: 4, tag: <Step4 /> },
];

const Form: React.FC<Props> = ({}) => {
  const [formIsFulfilled, setFormIsFulfilled] = useState<boolean>(false);

  //Redux
  const formSelector = useSelector((state: StoreType) => state.form);
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

  return (
    <>
      {steps.map((step, index) => (
        <div key={index} className="border-b border-slate-600 py-8 lg:py-10 ">
          {step.tag}
        </div>
      ))}
      <div className="flex justify-end items-center gap-4 py-8">
        <Button onClick={next}>
          <div className="flex items-center justify-center gap-2 lg:px-2 lg:py-1">
            <p className="text-lg lg:text-xl">Confirm</p>
            <BiRightArrowAlt />
          </div>
        </Button>
      </div>
    </>
  );
};

export default Form;