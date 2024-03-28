"use client";

import Button from "./ui/button";
import NeonBorder from "./neon-border";
import { signIn } from "next-auth/react";
import { useSelector } from "react-redux";
import { StoreType } from "@/containers/store";
import { useRouter } from "next/navigation";
import CarouselsWrapper from "./carousel-wrapper";

export default function LandingHero() {
  //router
  const router = useRouter();

  //redux
  const user = useSelector((store: StoreType) => store.user.value);

  const startGeneration = () => {
    user === null
      ? signIn("google", { callbackUrl: "/generator" })
      : router.push("/generator");
  };

  return (
    <section className="w-full h-full flex flex-col gap-10 md:gap-6 xl:gap-4 items-center justify-center">
      <div className="flex flex-col gap-4 pt-10 px-4">
        {/*title*/}
        <div className=" text-3xl md:text-4xl lg:text-5xl xl:text-6xl flex flex-col justify-center items-center text-slate-900 ">
          <h1 className="font-bold text-center">
            Create{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-300 to-fuchsia-500">
              Stunning
            </span>{" "}
            icons with
          </h1>
          <h2 className="font-bold text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-300 to-fuchsia-500">
              AI-powered
            </span>{" "}
            icon generator
          </h2>
        </div>
        {/*subtitle*/}
        <div className="flex items-center">
          <span className="text-xs sm:text-sm xl:text-base text-center text-slate-500 font-medium">
            Create stunning icons effortlessly with our AI-powered icon
            generator.
            <br />
            Streamline your design process and access a vast library of
            high-quality icons tailored to your unique vision.
          </span>
        </div>
      </div>

      <div className="w-full flex-1 flex  items-center  justify-center relative">
        <CarouselsWrapper />
        <div className="absolute bottom-0 w-full flex items-center justify-center z-50">
          <NeonBorder>
            <Button onClick={startGeneration}>
              <p className="text-xl font-semibold p-2"> Start Generation</p>
            </Button>
          </NeonBorder>
        </div>
      </div>
    </section>
  );
}
