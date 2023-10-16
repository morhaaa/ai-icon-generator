"use client";

import CardsPagination from "@/components/cards-pagination";
import Form from "@/components/form";
import IconCard from "@/components/icon-card";
import { useState } from "react";

const Generator: React.FC = () => {
  const [iconsAreGenerated, setIconsAreGenerated] = useState<boolean>(true);
  return (
    <div className="h-full w-full flex flex-col items-center overflow-hidden py-10 ">
      <div className="w-[90%] md:w-[80%] flex-1 bg-gradient-to-br from-blue-950/80 via-indigo-900 to-blue-950 overflow-scroll  py-6 px-8 md:px-14 lg:px-16 xl:px-20 rounded-xl flex flex-col border-2 border-slate-500 shadow-2xl ">
        {iconsAreGenerated ? <IsGenerated /> : <Form />}
      </div>
    </div>
  );
};

export default Generator;

const IsGenerated: React.FC = () => {
  return (
    <div className="h-full overflow-hidden flex flex-col">
      <div className="border-b border-slate-600">
        <h2 className="text-white font-medium text-2xl md:text-3xl lg:text-4l xl:text-5xl py-3 md:py-4 lg:py-6">
          Your icon is just generated!
        </h2>
      </div>

      <div className="flex-1 overflow-hidden py-2 md:py-4 lg:py-6 xl:md:py-8">
        <CardsPagination />
      </div>
    </div>
  );
};
