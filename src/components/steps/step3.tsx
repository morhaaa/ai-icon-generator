import React, { useState } from "react";
import { Icon } from "@/utilities/constant";
import IconsList from "../ui/icons-list";
import { useDispatch } from "react-redux";
import { setIconStyle } from "@/containers/form-reducer";

interface Props {}

const Step3: React.FC<Props> = () => {
  const [selectedIcon, setSelectedIcon] = useState<Icon | undefined>();

  const dispatch = useDispatch();

  const handleIcon = (icon: Icon) => {
    setSelectedIcon(icon);
    dispatch(setIconStyle(icon.style));
  };

  return (
    <div className="h-full w-full flex flex-col justify-between gap-4 overflow-hidden">
      <div className="flex flex-col gap-6 w-full h-full overflow-hidden">
        {/*title*/}
        <h2 className="text-white font-medium text-2xl md:text-3xl ">
          Select a style for your icon
        </h2>

        <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-black via-slate-900 to-black border border-slate-700 rounded-xl overflow-y-scroll overflow-x-none">
          <IconsList selectedIcon={selectedIcon} setSelectedIcon={handleIcon} />
        </div>
      </div>
    </div>
  );
};

export default Step3;
