import Button from "./ui/button";
import NeonBorder from "./neon-border";

const JoinUs: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center pb-28 pt-10 gap-24 bg-black/80">
      <div className="flex flex-col justify-center gap-4 items-center text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl ">
        <h1 className=" font-bold">
          Join{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-300 to-fuchsia-500">
            Us
          </span>{" "}
        </h1>
        <span className="text-2xl text-center text-slate-400">
          Join the growing community of over 5518 satisfied users who have
          experienced the power of the AI Icon Generator App.
          <br /> Whether you are a designer, developer, marketer, or simply
          someone who loves to add visual flair to your projects, this app is a
          game-changer.
        </span>
      </div>
      <div className="flex gap-10 md:gap-20 lg:gap-40 xl:gap-60">
        <div className="flex flex-col items-center">
          <p className="font-extrabold text-transparent  text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-clip-text  bg-gradient-to-br from-fuchsia-300 to-fuchsia-500">
            2300
          </p>
          <p className="font-medium text-white text-4xl md:text-5xl lg:text-5xl xl:text-7xl">
            Users
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="font-extrabold text-transparent text-5xl md:text-6xl lg:text-7xl xl:text-8xl  bg-clip-text bg-gradient-to-br from-fuchsia-300 to-fuchsia-500">
            2500
          </p>
          <p className="text-white font-medium  text-4xl md:text-5xl lg:text-5xl xl:text-7xl">
            Icons
          </p>
        </div>
      </div>
      <div className="py-4">
        <NeonBorder>
          <Button>
            <p className="text-3xl p-3"> Start Now!</p>
          </Button>
        </NeonBorder>
      </div>
    </section>
  );
};

export default JoinUs;
