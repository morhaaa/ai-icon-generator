import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import Button from "../ui/button";
import { useState } from "react";
import { colorList } from "@/utilities/constant";
import clsx from "clsx";

interface Props {
  next: () => void;
  back: () => void;
}

type Section = "Predefined" | "Picker" | "Custom";

const sections: Section[] = ["Predefined", "Picker", "Custom"];

const Step2: React.FC<Props> = ({ back, next }) => {
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSection, setSelectedSection] = useState<Section>("Predefined");

  return (
    <div className="h-full w-full flex flex-col justify-between gap-4 overscroll-scroll">
      {/**/}
      <div className="flex flex-col gap-6 w-full h-full overflow-scroll">
        <h2 className="text-white font-medium text-2xl md:text-2xl lg:text-4xl ">
          2-{" "}
          <span className="underline underline-offset-8">
            Select a primary color for your icon
          </span>
        </h2>

        <div className="flex flex-col gap-2 h-full">
          <nav className="flex gap-4 px-2">
            {sections.map((section, index) => (
              <h4
                key={index}
                onClick={() => setSelectedSection(section)}
                className={clsx(
                  "cursor-pointer font-medium",
                  selectedSection === section ? "text-white" : "text-slate-500"
                )}
              >
                {section}
              </h4>
            ))}
          </nav>

          <div className="flex items-start justify-center h-full px-6 md:px-6 lg:px-8 bg-gray-900/20 py-6 md:py-6 lg:py-8 rounded-xl overflow-scroll">
            <div className="flex items-center flex-wrap gap-4 lg:gap-4 md:gap-4 flex-row ">
              {colorList.map((color, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  className="w-14 h-14 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-lg hover:scale-110 cursor-pointer drop-shadow-2xl"
                  style={{
                    backgroundColor: color,
                    opacity: color === selectedColor ? 1 : 0.45,
                    border: color === selectedColor ? "4px solid white" : "",
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end items-center gap-4">
        <Button onClick={back}>
          <div className="flex items-center justify-center gap-2 px-2 py-1">
            <BiLeftArrowAlt />
            <p className="text-xl">Back</p>
          </div>
        </Button>
        <Button onClick={next}>
          <div className="flex items-center justify-center gap-2 px-2 py-1">
            <p className="text-xl">Next</p>
            <BiRightArrowAlt />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Step2;
