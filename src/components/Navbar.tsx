import Button from "@/components/ui/button";
import Link from 'next/link'
import { Montserrat } from "next/font/google";

const monserrat = Montserrat({ subsets: ["latin"] });

const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex justify-between items-center px-5 py-3 shadow-2xl">
      <div className={monserrat.className}>
        <Link href='/'><p className="font-semibold text-white text-2xl cursor-pointer">AIconGenerator</p></Link>  
      </div>
      <Button>
        <p>SIGN IN</p>
      </Button>
    </nav>
  );
};

export default Navbar;
