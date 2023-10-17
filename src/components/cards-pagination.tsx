import IconGenerated from "@/components/icon-card";
import clsx from "clsx";
import React, { useState, useEffect } from "react";

const icons = [
  "/assets/icon.png",
  "/assets/icon.png",
  "/assets/icon.png",
  "/assets/icon.png",
  "/assets/icon.png",
  "/assets/icon.png",
  "/assets/icon.png",
  "/assets/icon.png",
  "/assets/icon.png",
  "/assets/icon.png",
  "/assets/icon.png",
  "/assets/icon.png",
];

interface Props {}

const CardsPagination: React.FC<Props> = ({}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const iconsPerPage = 10;
  const totalPages = Math.ceil(icons.length / iconsPerPage);

  const paginatedIcons = icons.slice(
    (currentPage - 1) * iconsPerPage,
    currentPage * iconsPerPage
  );
  useEffect(() => {
    setCurrentPage(1);
  }, [icons]);

  return (
    <div className="h-full w-full flex flex-col overflow-hidden">
      <div className="flex-1 flex overflow-hidden px-4 py-4">
        <div className="flex justify-center gap-4 flex-wrap overflow-scroll w-full">
          {paginatedIcons.map((icon, index) => (
            <div key={index}>
              <IconGenerated />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-1 p-2">
        {totalPages > 1 &&
          Array.from({ length: totalPages }).map((_, index) => (
            <button
              onClick={() => {
                setCurrentPage(index + 1);
              }}
              key={index}
              className={clsx(
                "border shadow-2xl text-white h-8 w-8 rounded-md",
                index + 1 === currentPage
                  ? "border-slate-400 bg-gray-700/70"
                  : "bg-slate-900/70  border-slate-700"
              )}
            >
              {index + 1}
            </button>
          ))}
      </div>
    </div>
  );
};

export default CardsPagination;
