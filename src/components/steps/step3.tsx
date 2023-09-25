import React, { useState } from "react";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import Button from "../ui/button";
import { Icon } from "@/utilities/constant";
import IconsList from "../ui/icons-list";

interface Props {
  next: () => void;
  back: () => void;
}

const Step3: React.FC<Props> = ({ next, back }) => {
  const [selectedIcon, setSelectedIcon] = useState<Icon | undefined>();
  return (
    <div className="h-full w-full flex flex-col justify-between gap-4 overflow-hidden">
      <div className="flex flex-col gap-6 w-full h-full overflow-hidden">
        {/*title*/}
        <h2 className="text-white font-medium text-2xl md:text-2xl lg:text-4xl ">
          3-{" "}
          <span className="underline underline-offset-8">
            Select a style for your icon
          </span>
        </h2>

        <div className="flex items-center justify-center h-full w-full bg-black/10 border border-slate-700 rounded-xl overflow-y-scroll overflow-x-none">
          <IconsList
            selectedIcon={selectedIcon}
            setSelectedIcon={setSelectedIcon}
          />
        </div>
      </div>

      {/*Buttons */}
      <div className="flex justify-end items-center gap-4">
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
  );
};

export default Step3;
