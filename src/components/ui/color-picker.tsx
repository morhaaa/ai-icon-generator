import { useState } from "react";
import {
  ChromePicker,
  AlphaPicker,
  HuePicker,
  Color,
  ColorResult,
} from "react-color";

const ColorPicker: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<Color>("#ff2000");

  const handleColor = (newColor: ColorResult) => {
    setSelectedColor(newColor.hex);
  };

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4 bg-white/70 py-8 px-4 rounded-xl">
        <div className="flex flex-col items-center justify-end bg-white rounded-xl ">
          <div
            className="h-60 w-60 rounded-t-xl"
            style={{ backgroundColor: selectedColor as string }}
          ></div>
          <div className="py-2 bg-white">
            <span className="">{selectedColor as string}</span>
          </div>
        </div>
        <HuePicker color={selectedColor} onChange={handleColor} />
      </div>
    </div>
  );
};

export default ColorPicker;
