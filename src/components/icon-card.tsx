import { downloadImage } from "@/firebase/storage";
import truncateString from "@/utilities/truncateString";
import { DownloadIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Props {
  icon: Icon;
}

const IconCard: React.FC<Props> = ({ icon }) => {
  return (
    <div
      className="rounded-2xl shadow-lg 
    bg-gradient-to-tr from-slate-200/20 to-slate-400/30 border border-slate-300 p-2 flex flex-col gap-y-1.5"
    >
      <div className="w-44 h-44 relative">
        <Image src={icon.imageUrl} fill alt={""} className="rounded-xl" />
      </div>
      <div className="py-1 flex justify-between items-center px-2">
        <p className="text-slate-500 font-semibold text-xs">
          {truncateString(icon.prompt, 16)}
        </p>
        <button
          onClick={() => {
            downloadImage(icon.imageUrl);
          }}
          className="h-6 w-6 rounded-full flex items-center justify-center border border-slate-400 bg-gray-700/30 cursor-pointer shadow-sm shadow-gray-700"
        >
          <DownloadIcon color="white" size={16} />
        </button>
      </div>
    </div>
  );
};

export default IconCard;
