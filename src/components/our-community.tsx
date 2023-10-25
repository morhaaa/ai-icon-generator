"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const images = [
  { src: "/assets/icon.png" },
  { src: "/assets/icon.png" },
  { src: "/assets/icon.png" },
  { src: "/assets/icon.png" },
  { src: "/assets/icon.png" },
  { src: "/assets/icon.png" },
  { src: "/assets/icon.png" },
  { src: "/assets/icon.png" },
  { src: "/assets/icon.png" },
  { src: "/assets/icon.png" },
  { src: "/assets/icon.png" },
  { src: "/assets/icon.png" },
  { src: "/assets/icon.png" },
  { src: "/assets/icon.png" },
  { src: "/assets/icon.png" },
  { src: "/assets/icon.png" },
  { src: "/assets/icon.png" },
  { src: "/assets/icon.png" },
  { src: "/assets/icon.png" },
  { src: "/assets/icon.png" },
  { src: "/assets/icon.png" },
  { src: "/assets/icon.png" },
  { src: "/assets/icon.png" },
  { src: "/assets/icon.png" },
  { src: "/assets/icon.png" },
  { src: "/assets/icon.png" },
  { src: "/assets/icon.png" },
  { src: "/assets/icon.png" },
  { src: "/assets/icon.png" },
  { src: "/assets/icon.png" },
  { src: "/assets/icon.png" },
];

const ImageSlider = () => {
  const settings = {
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 2000, // Aumenta la velocità del passaggio delle immagini
    autoplaySpeed: 100, // Riduci il tempo tra le transizioni
    pauseOnHover: false,
    draggable: false,
    cssEase: "linear",
    variableWidth: true,
  };

  return (
    <div className="h-40">
      <Slider {...settings}>
        {images.map((img, index) => (
          <Image
            key={index}
            src={img.src}
            height={100}
            width={100}
            alt={img.src}
          />
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
