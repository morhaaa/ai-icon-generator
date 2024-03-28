import { footerLinks } from "@/utilities/constant";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-500/10 py-4 flex flex-col items-center gap-y-2 px-6 text-slate-600 text-xs w-full bg-fuchsia-100/60">
      <div className="flex gap-4">
        {footerLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="cursor-pointer hover:underline"
          >
            {link.text}
          </Link>
        ))}
      </div>
      <div>
        &copy; 2024{" "}
        <a
          href="https://www.mohamedrhanmi.com"
          target="_blank"
          className="cursor-pointer hover:underline"
        >
          {" "}
          Rhanmi Solution
        </a>
        . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
