"use client";

import CardsPagination from "@/components/cards-pagination";

const Icons: React.FC = () => {
  return (
    <section className="h-full w-full flex flex-col items-center overflow-hidden py-10 ">
      <div className="w-[90%] md:w-[80%] flex-1 bg-gradient-to-br from-blue-950/80 via-indigo-900 to-blue-950 overflow-scroll  py-6 px-8 md:px-14 lg:px-16 xl:px-20 rounded-xl flex flex-col border-2 border-slate-500 shadow-2xl ">
        <h2 className="text-white text-4xl md:text-5xl font-medium py-3 md:py-4 lg:py-5 xl:py-6 border-b border-slate-600 ">
          My Icons
        </h2>
        <div className="flex-1 overflow-hidden py-2 md:py-4 lg:py-6 xl:md:py-8">
          <CardsPagination />
        </div>
      </div>
    </section>
  );
};

export default Icons;
