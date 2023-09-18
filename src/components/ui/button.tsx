"use client";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ children, onClick }) => {
  const handleClick = () => {
    onClick ? onClick() : null;
  };

  return (
    <button
      className="text-white font-medium text-sm lg:text-lg py-1 px-4  bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 border border-white rounded-xl whitespace-nowrap drop-shadow-2xl shadow-2xl"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
