import React, { useEffect } from "react";
import { colorList } from "@/utilities/constant";

interface Props {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}

const Colors: React.FC<Props> = ({ selectedColor, setSelectedColor }) => {
  useEffect(() => {
    setSelectedColor("");
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-4 md:gap-4 lg:gap-8 px-2 py-6 h-full w-full">
      {colorList.map((color, index) => (
        <div
          key={index}
          onClick={() => setSelectedColor(color)}
          className="h-[50px] w-[50px] lg:h-[60px] lg:w-[60px] xl:h-[70px] xl:w-[70px] rounded-full transition-transform transform scale-100 hover:scale-105 focus:scale-95 active:scale-100  cursor-pointer shadow-xl"
          style={{
            backgroundColor: color,
            opacity: color === selectedColor ? 1 : 0.8,
            border: color === selectedColor ? "4px solid white" : "",
          }}
        ></div>
      ))}
    </div>
  );
};

export default Colors;
