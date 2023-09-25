import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import Button from "../ui/button";
import { useState } from "react";
import clsx from "clsx";
import ColorSelection from "../ui/color-list";
import ColorPicker from "../ui/color-picker";

interface Props {
  next: () => void;
  back: () => void;
}

type Section = "Predefined" | "Picker";

const sections: Section[] = ["Predefined", "Picker"];

const Step2: React.FC<Props> = ({ back, next }) => {
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSection, setSelectedSection] = useState<Section>("Predefined");

  const setColor = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className="h-full w-full flex flex-col justify-between gap-4 overflow-hidden">
      <div className="flex flex-col gap-6 w-full h-full overflow-hidden">
        {/*title*/}
        <h2 className="text-white font-medium text-2xl md:text-2xl lg:text-4xl ">
          2-{" "}
          <span className="underline underline-offset-8">
            Select a primary color
          </span>
        </h2>

        <div className="flex flex-col gap-2 h-full w-full overflow-hidden">
          {/*navbar*/}
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

          {/*Colors*/}
          <div className="flex items-center justify-center h-full w-full bg-black/10 border border-slate-700 rounded-xl overflow-y-scroll overflow-x-none">
            {selectedSection === "Predefined" ? (
              <ColorSelection
                selectedColor={selectedColor}
                setSelectedColor={setColor}
              />
            ) : (
              <ColorPicker />
            )}
          </div>
        </div>
      </div>

      {/*buttons */}
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

export default Step2;
