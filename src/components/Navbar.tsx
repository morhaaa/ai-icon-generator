import LandingButton from "@/components/ui/landing-button";
import { Montserrat } from "next/font/google";

const monserrat = Montserrat({ subsets: ["latin"] });

const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex justify-between px-5 py-2">
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
