import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const LandingButton: React.FC<Props> = ({ children }) => {
  return (
    <button className="text-white font-medium text-sm lg:text-lg py-1 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 border border-white rounded-xl whitespace-nowrap drop-shadow-2xl">
      {children}
    </button>
  );
};

export default LandingButton;
