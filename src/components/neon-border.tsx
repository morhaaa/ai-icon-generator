"use client";
import React, { useState, useEffect, ReactNode } from "react";

interface Props {
  children: ReactNode;
  disabled?: boolean;
}

const NeonBorder: React.FC<Props> = ({ children, disabled = false }) => {
  const colors = ["#d8b4fe", "#c084fc", "#a855f7", "#9333ea", "#7e22ce"];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const animateNeonColor = () => {
      setCurrentColorIndex((currentColorIndex + 1) % colors.length);
      requestAnimationFrame(animateNeonColor);
    };
    const intervalId = setInterval(animateNeonColor, 1000);
    return () => clearInterval(intervalId);
  }, [currentColorIndex, colors.length]);

  const currentColor = colors[currentColorIndex];

  if (disabled) return children;

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "10px solid transparent",
          borderRadius: "10px",
          boxShadow: `0 0 20px ${currentColor}`,
          transition: "box-shadow 0.5s",
        }}
      />
      {children}
    </div>
  );
};

export default NeonBorder;
