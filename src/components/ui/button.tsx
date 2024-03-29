"use client";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({ children, onClick, disabled }) => {
  const handleClick = () => {
    onClick ? onClick() : null;
  };

  return (
    <button
      disabled={disabled}
      className="text-white font-medium text-sm lg:text-lg py-1 px-4  bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 border border-slate-700 rounded-xl whitespace-nowrap drop-shadow-md  disabled:text-slate-300/80"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
