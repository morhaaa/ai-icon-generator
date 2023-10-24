import Image from "next/image";
import Button from "./ui/button";
import NeonBorder from "./neon-border";

export default function LandingHero() {
  return (
    <section className="w-full h-[85vh] flex flex-col md:flex-row  gap-10 items-center justify-center">
      <div className="basis-1/2 text-slate-50 flex flex-col gap-4 md:gap-6 lg:gap-10">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold">
          Generate icons with a click of a button
        </h2>
        <p className="text-sm md:text-base lg:text-3xl">
          Save time by generating icons for your businesses website,
          applications, or brand using our AI digital icon generator.
        </p>
        <div className="flex">
          <NeonBorder>
            <Button>
              <p className="text-3xl p-3"> Start Generation</p>
            </Button>
          </NeonBorder>
        </div>
      </div>
      <div className="basis-1/2 ">
        <Image
          src="/assets/landing-banner.png"
          height={750}
          width={750}
          alt="landing banner"
        />
      </div>
    </section>
  );
}
