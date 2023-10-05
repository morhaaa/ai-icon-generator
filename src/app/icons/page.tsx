"use client";

import CardsPagination from "@/components/cards-pagination";

const Icons: React.FC = () => {
  return (
    <section className=" h-full w-full flex justify-center pt-10 pb-3 overflow-hidden">
      <div className=" w-[80%] md:w-[85%] xl:w-[80%] overflow-hidden flex flex-col">
        <h2 className="text-white text-4xl md:text-5xl font-medium py-3 md:py-4 lg:py-5 xl:py-6 border-b border-slate-600 ">
          My Icons
        </h2>
        <div className="flex-1 overflow-hidden ">
          <CardsPagination />
        </div>
      </div>
    </section>
  );
};

export default Icons;
