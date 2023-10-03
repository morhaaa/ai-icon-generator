import { Share2, DownloadIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Props {}

const buttons = [{ icon: Share2 }, { icon: DownloadIcon }];

const IconCard: React.FC<Props> = ({}) => {
  return (
    <div className="bg-slate-900/70 border border-slate-700 shadow-2xl h-80 w-72 rounded-xl px-6 pt-6 flex flex-col">
      <div className="w-full flex-1 relative">
        <Image src="/assets/icon.png" fill alt={""} className="rounded-xl" />
      </div>
      <div className="py-3 flex justify-end px-2 gap-2">
        {buttons.map((button, index) => (
          <button
            key={index}
            className="h-8 w-8 rounded-full flex items-center justify-center border border-slate-400 bg-gray-500/30 cursor-pointer shadow shadow-gray-700"
          >
            <button.icon color="white" size={16} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default IconCard;
