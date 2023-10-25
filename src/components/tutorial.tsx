import NeonBorder from "./neon-border";
import InputGenerator from "./ui/input";
import { colorListHome } from "@/utilities/constant";

const Tutorial: React.FC = () => {
  return (
    <section className="w-full h-full flex flex-col gap-20 py-20 bg-gradient-to-b from-transparent via-black/30 to-black/80">
      <div className="flex flex-col justify-center items-center text-white pt-20 text-6xl ">
        <h1 className=" font-bold">
          How does it{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-300 to-fuchsia-500">
            work?
          </span>{" "}
        </h1>
      </div>
      {/* Step 1*/}
      <div className="text-white flex items-center gap-10 px-10 py-10">
        <div className="basis-1/2 border-l-4  border-slate-50 pl-10">
          <h4 className=" text-3xl font-bold">Step 1: Enter a prompt</h4>
          <p className=" text-lg">
            The first step in generating an icon is entering a prompt. A prompt
            is a short description or context that helps us understand the icon
            you want to create.
          </p>
        </div>
        <div className="basis-1/2">
          <NeonBorder>
            <div className="w-[50rem]">
              <InputGenerator
                size="medium"
                placeholder="Enter your prompt"
                textButton="Generate"
              />
            </div>
          </NeonBorder>
        </div>
      </div>
      {/* Step 2*/}
      <div className="text-white flex items-center gap-10 px-10 py-10">
        <div className="basis-1/2 flex items-center justify-center">
          <NeonBorder>
            <div className="p-4 flex  gap-4">
              {colorListHome.map((color, index) => (
                <div
                  key={index}
                  className="h-[50px] w-[50px] lg:h-[60px] lg:w-[60px] xl:h-[70px] xl:w-[70px] rounded-full transition-transform transform scale-100 hover:scale-105 focus:scale-95 active:scale-100  cursor-pointer shadow-xl"
                  style={{
                    backgroundColor: color,
                    opacity: 0.8,
                  }}
                ></div>
              ))}
            </div>
          </NeonBorder>
        </div>
        <div className="basis-1/2  border-r-4  border-slate-50 pr-10 text-right">
          <h4 className=" text-3xl font-bold">Step 2: Select a color</h4>
          <p className=" text-lg">
            In this step, choose the color for your icon. Pick the color that
            best matches your vision for the icon
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tutorial;
