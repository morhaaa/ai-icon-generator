import truncateString from "@/utilities/truncateString";
import { DownloadIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Props {
  icon: Icon;
}

const IconCard: React.FC<Props> = ({ icon }) => {
  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href = `data:image/jpeg;base64,${Buffer.from(icon.image).toString(
      "base64"
    )}`;
    link.download = "downloaded-image.jpg";
    link.click();
  };

  return (
    <div className="bg-slate-900/70 border border-slate-700 shadow-2xl rounded-xl p-2  flex flex-col">
      <div className="w-44 h-44 lg:w-56 lg:h-56 relative">
        <Image
          src={`data:image/jpeg;base64,${Buffer.from(icon.image).toString(
            "base64"
          )}`}
          fill
          alt={""}
          className="rounded-md"
        />
      </div>
      <div className="py-1 flex justify-between items-center px-2">
        <p className="text-white text-xs">{truncateString(icon.prompt, 16)}</p>
        <button
          onClick={handleDownloadClick}
          className="h-6 w-6 rounded-full flex items-center justify-center border border-slate-400 bg-gray-500/30 cursor-pointer shadow shadow-gray-700"
        >
          <DownloadIcon color="white" size={16} />
        </button>
      </div>
    </div>
  );
};

export default IconCard;
