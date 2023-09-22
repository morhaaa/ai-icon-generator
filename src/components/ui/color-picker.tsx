import { useState } from "react";
import InputGenerator from "./input";
import { RgbColorPicker, RgbColor } from "react-colorful";

const ColorPicker: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>("#ff0000");
  const [isCorrect, setIsCorrect] = useState<boolean>(true);

  function checkValue(value: string): boolean {
    const hexRegex = /^#[0-9A-Fa-f]{6}$/g;
    return hexRegex.test(value);
  }

  const rgbToHex = (color: RgbColor): void => {
    const { r, g, b } = color;

    //Check value between 0 and 255
    const validR = Math.min(255, Math.max(0, r));
    const validG = Math.min(255, Math.max(0, g));
    const validB = Math.min(255, Math.max(0, b));

    //Convert Value
    const hexR = validR.toString(16).padStart(2, "0");
    const hexG = validG.toString(16).padStart(2, "0");
    const hexB = validB.toString(16).padStart(2, "0");

    setSelectedColor(`#${hexR}${hexG}${hexB}`);
  };

  function hexToRgb(hex: string): RgbColor | undefined {
    hex = hex.replace(/^#/, "");
    if (!/^[0-9A-Fa-f]{6}$/.test(hex)) {
      return undefined;
    }
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return { r, g, b };
  }

  const submit = (text: string): void => {
    if (checkValue(text)) {
      setIsCorrect(true);
      setSelectedColor(text);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4 py-8 px-4 rounded-xl">
        <div className="flex flex-col items-center justify-end bg-white rounded-xl ">
          <RgbColorPicker onChange={rgbToHex} color={hexToRgb(selectedColor)} />
          <div className="py-2 bg-white">
            <span className="">{selectedColor}</span>
          </div>
        </div>

        <InputGenerator
          size="small"
          placeholder="#ff0000"
          textButton="Confirm"
          submit={submit}
        />

        {!isCorrect && (
          <p className="text-red-500 font-bold underline">Insert HEX color</p>
        )}
      </div>
    </div>
  );
};

export default ColorPicker;
