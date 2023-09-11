import LandingHero from "@/components/landing-hero";
import LandingNavbar from "@/components/landing-navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-screen flex flex-col bg-gradient-to-br from-zinc-500 to-zinc-900 items-center">
      <LandingNavbar />
      <LandingHero />
    </main>
  );
}
