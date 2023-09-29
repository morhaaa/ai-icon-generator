import React from "react";
import { colorList } from "@/utilities/constant";

interface Props {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}

const Colors: React.FC<Props> = ({ selectedColor, setSelectedColor }) => {
  return (
    <div className="flex flex-row flex-wrap  gap-4 md:gap-4 lg:gap-6 pl-8 py-6 pr-4 h-full w-full">
      {colorList.map((color, index) => (
        <div
          key={index}
          onClick={() => setSelectedColor(color)}
          className="w-10 h-10 md:h-14 md:w-14 lg:h-[70px] lg:w-[70px] rounded-full hover:scale-110 cursor-pointer drop-shadow-2xl"
          style={{
            backgroundColor: color,
            opacity: color === selectedColor ? 1 : 0.45,
            border: color === selectedColor ? "4px solid white" : "",
          }}
        ></div>
      ))}
    </div>
  );
};

export default Colors;
