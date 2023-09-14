import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Button: React.FC<Props> = ({ children }) => {
  return (
    <button className="text-white font-medium text-sm lg:text-lg py-1 px-4  bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 border border-white rounded-xl whitespace-nowrap drop-shadow-2xl shadow-2xl">
      {children}
    </button>
  );
};

export default Button;
