import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Providers from "./containers/provider";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className="bg-gradient-to-br from-blue-900 via-indigo-900 to-violet-900 h-screen w-screen flex flex-col items-center ">
          <Navbar />
          <main className="flex-1 w-full overflow-auto">{children}</main>
        </body>
      </Providers>
    </html>
  );
}
