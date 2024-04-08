import clsx from "clsx";
import Image from "next/image";
import React, { useRef, useEffect } from "react";

interface CarouselsProps {
  direction: "left" | "right";
  images: string[];
}
const Carousels: React.FC<CarouselsProps> = ({ direction, images }) => {
  return (
    <div className="overflow-hidden relative w-full  h-28">
      <div
        className={clsx(
          "flex absolute left-0 justify-center items-center gap-8 w-[100%] ",
          { "animate-infinite-scroll-left": direction === "left" },
          { "animate-infinite-scroll-right": direction === "right" }
        )}
      >
        {images.map((img, index) => (
          <Image
            src={`/assets/icons-home/${img}`}
            alt={img}
            key={index}
            width={100}
            height={100}
            className="rounded-md opacity-50"
            priority
            quality={0}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousels;
