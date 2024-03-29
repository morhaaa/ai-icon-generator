import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import Button from "../ui/button";
import { useState } from "react";
import clsx from "clsx";
import ColorSelection from "../ui/color-list";
import ColorPicker from "../ui/color-picker";
import { useDispatch } from "react-redux";
import { setColor } from "@/containers/form-reducer";

type Section = "Predefined" | "Picker";

const sections: Section[] = ["Predefined", "Picker"];

const Step2: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSection, setSelectedSection] = useState<Section>("Predefined");

  //dispatch
  const dispatch = useDispatch();

  const handleColor = (color: string) => {
    setSelectedColor(color);
    dispatch(setColor(color));
  };

  return (
    <div className="h-full w-full flex flex-col justify-between gap-2 overflow-hidden">
      {/*title*/}
      <h2 className="text-slate-900 font-bold text-lg md:text-xl lg:text-2xl">
        Select a primary color
      </h2>

      <div className="flex flex-col gap-2 h-full w-full overflow-hidden">
        {/*navbar*/}
        <nav className="flex gap-4  text-sm md:text-sm lg:text-base">
          {sections.map((section, index) => (
            <h4
              key={index}
              onClick={() => setSelectedSection(section)}
              className={clsx(
                "cursor-pointer font-bold",
                selectedSection === section
                  ? "text-fuchsia-500"
                  : "text-slate-400/70"
              )}
            >
              {section}
            </h4>
          ))}
        </nav>

        {/*Colors*/}
        <div className="flex items-center justify-center h-full w-full  bg-gradient-to-br from-black  to-black border border-slate-700 rounded-xl overflow-y-auto overflow-x-none">
          {selectedSection === "Predefined" ? (
            <ColorSelection
              selectedColor={selectedColor}
              setSelectedColor={handleColor}
            />
          ) : (
            <ColorPicker setSelectedColor={handleColor} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Step2;
