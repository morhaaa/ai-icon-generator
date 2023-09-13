import LandingHero from "@/components/landing-hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-[85%] md:w-[80%] lg:w-[85%] flex flex-col items-center">
      <LandingHero />
    </main>
  );
}
