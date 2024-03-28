import clsx from "clsx";
import React, { useRef, useEffect } from "react";

interface CarouselsProps {
  direction: "left" | "right";
  images: String[];
}
const Carousels: React.FC<CarouselsProps> = ({ direction, images }) => {
  return (
    <div className="overflow-scroll relative w-full h-40">
      <div
        className={clsx(
          "flex absolute left-0 justify-center items-center gap-8 w-[800%] ",
          { "animate-infinite-scroll-left": direction === "left" },
          { "animate-infinite-scroll-right": direction === "right" }
        )}
      >
        {images.map((_, index) => (
          <div
            key={`${index}`}
            className="flex justify-center items-center h-32 w-32 rounded-md bg-slate-700"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousels;
