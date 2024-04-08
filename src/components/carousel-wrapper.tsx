import React from "react";
import Carousels from "./carousel";
import { iconsCarousel } from "@/utilities/constant";

const CarouselsWrapper = () => {
  const array1 = iconsCarousel;
  const array2 = iconsCarousel;

  return (
    <div className="flex flex-col w-full justify-center items-center overflow-hidden relative pt-8">
      <Carousels direction="left" images={array1} />
      <Carousels direction="right" images={array2} />
      <div className="absolute w-full h-full bg-gradient-to-b from-transparent via-transparent to-fuchsia-100/60 z-40"></div>
    </div>
  );
};

export default CarouselsWrapper;
