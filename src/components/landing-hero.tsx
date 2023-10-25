import Image from "next/image";
import Button from "./ui/button";
import NeonBorder from "./neon-border";

export default function LandingHero() {
  return (
    <section className="w-full h-[95vh] flex flex-col gap-8 items-center justify-center pb-10 ">
      {/*title*/}
      <div className="flex flex-col justify-center items-center text-white pt-20">
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold">
          Create{" "}
          <span className="text-transparent text-8xl bg-clip-text bg-gradient-to-br from-fuchsia-300 to-fuchsia-500">
            Stunning
          </span>{" "}
          icons with
        </h1>
        <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold">
          <span className="text-transparent text-8xl bg-clip-text bg-gradient-to-br from-fuchsia-300 to-fuchsia-500">
            AI-powered
          </span>{" "}
          icon generator
        </h2>
      </div>
      {/*subtitle*/}
      <div>
        <p className="text-white text-xl text-center">
          Create stunning icons effortlessly with our AI-powered icon generator.
          Streamline your design process and access a vast library of
          high-quality icons tailored to your unique vision.
        </p>
      </div>

      <div className="w-full flex-1 relative">
        <div className="h-full w-full flex items-center justify-center relative">
          <div className="h-[30rem] w-[28rem] absolute rounded-2xl bg-blue-600 z-10"></div>
          <div className="h-[22rem] w-[20rem] absolute rounded-2xl bg-violet-600 left-[26%] opacity-60"></div>
          <div className="h-[22rem] w-[20rem] absolute rounded-2xl bg-red-200 right-[26%] opacity-60"></div>
        </div>
        <div className="absolute bottom-0 w-full flex items-center justify-center z-50">
          <NeonBorder>
            <Button>
              <p className="text-3xl p-3"> Start Generation</p>
            </Button>
          </NeonBorder>
        </div>
      </div>
    </section>
  );
}
/*     
   <Image src="/assets/icon.png" fill alt="landing banner" />
> */
