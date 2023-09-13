import LandingButton from "@/components/ui/landing-button";
import { Montserrat } from "next/font/google";

const monserrat = Montserrat({ subsets: ["latin"] });

const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex justify-between items-center px-5 py-3 shadow-2xl">
      <div className={monserrat.className}>
        <p className="font-semibold text-white text-2xl">AIconGenerator</p>
      </div>
      <LandingButton>
        <p>SIGN IN</p>
      </LandingButton>
    </nav>
  );
};

export default Navbar;
