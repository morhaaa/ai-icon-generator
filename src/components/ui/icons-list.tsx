import React from "react";
import { icons, Icon } from "@/utilities/constant";
import Image from "next/image";

interface Props {
  selectedIcon: Icon | undefined;
  setSelectedIcon: (icon: Icon) => void;
}

const IconsList: React.FC<Props> = ({ setSelectedIcon, selectedIcon }) => {
  return (
    <div className="flex flex-row flex-wrap gap-2 justify-center md:gap-2 lg:gap-2 px-2 py-6 h-full w-full">
      {icons.map((icon, index) => (
        <div
          key={index}
          onClick={() => setSelectedIcon(icon)}
          className="transition-transform transform scale-100 hover:scale-105 focus:scale-95 active:scale-100 cursor-pointer drop-shadow-2xl flex flex-col items-center px-2 w-24 md:w-28 h-28"
          style={{
            opacity: icon === selectedIcon ? 1 : 0.75,
          }}
        >
          <div
            style={{
              border:
                icon === selectedIcon
                  ? "4px solid white"
                  : "4px solid transparent",
            }}
          >
            <Image
              height={90}
              width={90}
              src="/assets/draft.png"
              alt={icon.style}
            />
          </div>
          <p className="text-white text-xs md:text-sm lg:text-sm">
            {icon.style}
          </p>
        </div>
      ))}
    </div>
  );
};

export default IconsList;
