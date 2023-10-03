import IconGenerated from "@/components/icon-card";
import React from "react";

const Icons: React.FC = () => {
  return (
    <section className=" h-full w-full px-60 py-20">
      <div>
        <h2 className="text-white text-5xl font-medium py-6 border-b border-slate-600 ">
          My Icons
        </h2>
        <div className="flex gap-6 py-6">
          <IconGenerated />
          <IconGenerated />
          <IconGenerated />
        </div>
      </div>
    </section>
  );
};

export default Icons;
