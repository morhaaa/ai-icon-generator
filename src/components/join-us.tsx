"use client";
import Button from "./ui/button";
import NeonBorder from "./neon-border";
import { useSelector } from "react-redux";
import { StoreType } from "@/containers/store";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const JoinUs: React.FC = () => {
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
    <section className="w-full flex flex-col items-center justify-center pb-28 pt-10  px-4 gap-10 lg:gap-12 xl:gap-16 bg-black/80">
      <div className="flex flex-col justify-center gap-4 items-center text-white text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
        <h1 className=" font-bold">
          Join{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-300 to-fuchsia-500">
            Us
          </span>{" "}
        </h1>
        <span className="text-xs sm:text-sm xl:text-lg  text-center text-slate-400">
          Join the growing community of over 5518 satisfied users who have
          experienced the power of the AI Icon Generator App.
          <br /> Whether you are a designer, developer, marketer, or simply
          someone who loves to add visual flair to your projects, this app is a
          game-changer.
        </span>
      </div>
      <div className="flex gap-10 md:gap-20 lg:gap-40 xl:gap-60">
        <div className="flex flex-col items-center">
          <p className="font-extrabold text-transparent  text-3xl md:text-4xl lg:text-5xl xl:text-6xl bg-clip-text  bg-gradient-to-br from-fuchsia-300 to-fuchsia-500">
            2300
          </p>
          <p className="font-medium text-white text-2xl md:text-3xl lg:text-5xl xl:text-6xl">
            Users
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="font-extrabold text-transparent text-3xl md:text-4xl lg:text-5xl xl:text-6xl  bg-clip-text bg-gradient-to-br from-fuchsia-300 to-fuchsia-500">
            2500
          </p>
          <p className="text-white font-medium  text-2xl md:text-3xl lg:text-5xl xl:text-6xl">
            Icons
          </p>
        </div>
      </div>
      <div className="">
        <NeonBorder>
          <Button onClick={startGeneration}>
            <p className=" text-lg md:text-xl lg:text-2xl xl:text-3xl md:p-1 lg:p-2 lg:p-3">
              {" "}
              Start Now!
            </p>
          </Button>
        </NeonBorder>
      </div>
    </section>
  );
};

export default JoinUs;
