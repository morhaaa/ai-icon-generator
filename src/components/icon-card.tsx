import truncateString from "@/utilities/truncateString";
import { DownloadIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Props {
  icon: Icon;
}

const handleDownloadClick = (imageUrl: string) => {
  const link = document.createElement("a");
  link.href = imageUrl;
  link.download = "downloaded-image";
  link.click();
};

const IconCard: React.FC<Props> = ({ icon }) => {
  return (
    <div className="bg-slate-900/70 border border-slate-700 shadow-2xl h-64 w-56 lg:h-72 lg:w-64 xl:h-80 xl:w-72 rounded-xl px-6 pt-6 flex flex-col">
      <div className="w-full flex-1 relative">
        <Image
          src={`data:image/jpeg;base64,${Buffer.from(icon.image).toString(
            "base64"
          )}`}
          fill
          alt={""}
          className="rounded-xl"
        />
      </div>
      <div className="py-3 flex justify-between px-2">
        <p className="text-white">{truncateString(icon.prompt, 16)}</p>
        <button
          onClick={() => handleDownloadClick("/assets/icon.png")}
          className="h-8 w-8 rounded-full flex items-center justify-center border border-slate-400 bg-gray-500/30 cursor-pointer shadow shadow-gray-700"
        >
          <DownloadIcon color="white" size={16} />
        </button>
      </div>
    </div>
  );
};

export default IconCard;
