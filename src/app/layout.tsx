import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import type { Metadata } from "next";
import Providers from "../containers/providers";
import { Toaster } from "@/components/ui/toaster";
import Modal from "@/components/modal-credits";
import { cn } from "@/lib/utils";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "AIconGenerator",
  description: "AIconGenerator - icon generator powered by AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body
          className={cn(
            "bg-gradient-to-br from-transparent via-transparent to-pink-100/20 h-screen w-screen flex flex-col items-center overflow-hidden"
          )}
        >
          <Analytics />
          <Toaster />
          <Modal />
          <main className="h-full w-full overflow-y-auto flex flex-col">
            <Navbar />
            <NextTopLoader
              color="#2299DD"
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              easing="ease"
              speed={200}
              shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            />
            <div className="flex-1">{children}</div>
            <Footer />
          </main>
        </body>
      </html>
    </Providers>
  );
}
