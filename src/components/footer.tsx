import { footerLinks } from "@/utilities/constant";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
      <footer className="border-t border-slate-400 py-6 flex justify-between px-6 text-gray-400 text-sm w-full ">
        <div className="flex gap-4">
          {footerLinks.map((link, index) => (
            <Link 
              key={index}
              href={link.href} 
              className="cursor-pointer hover:underline"> 
                {link.text} 
            </Link>))}
        </div>
      <div>
        &copy; 2024 <a href="https://www.mohamedrhanmi.com"  target="_blank" className="cursor-pointer hover:underline"> Rhanmi Solution</a>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
