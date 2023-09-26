import React from "react";
import { icons, Icon } from "@/utilities/constant";
import Image from "next/image";

interface Props {
  selectedIcon: Icon | undefined;
  setSelectedIcon: (icon: Icon) => void;
}

const IconsList: React.FC<Props> = ({ setSelectedIcon, selectedIcon }) => {
  return (
    <div className="flex flex-row flex-wrap  gap-4 md:gap-4 lg:gap-6 pl-8 py-6 pr-4 h-full w-full">
      {icons.map((icon, index) => (
        <div
          key={index}
          onClick={() => setSelectedIcon(icon)}
          className="hover:scale-110 cursor-pointer drop-shadow-2xl flex flex-col items-center px-2 w-32 h-32"
          style={{
            opacity: icon === selectedIcon ? 1 : 0.65,
          }}
        >
          <div
            style={{
              border: icon === selectedIcon ? "4px solid white" : "",
            }}
          >
            <Image
              height={90}
              width={90}
              src="/assets/draft.png"
              alt={icon.style}
            />
          </div>
          <p className="text-white">{icon.style}</p>
        </div>
      ))}
    </div>
  );
};

export default IconsList;
