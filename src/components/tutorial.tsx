import NeonBorder from "./neon-border";
import InputGenerator from "./ui/input";
import { colorListHome, iconsHome, imagesOptions } from "@/utilities/constant";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Tutorial: React.FC = () => {
  return (
    <section className="w-full h-full flex flex-col gap-6 xl:gap-20 py-20 px-6 lg:px-8 xl:px-14 bg-gradient-to-b from-transparent via-fuchsia-100/40 to-transparent">
      <div className="flex flex-col justify-center items-center text-slate-900 text-3xl md:text-4xl lg:text-5xl  text-center ">
        <h1 className=" font-bold">
          How does it{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-300 to-fuchsia-500">
            work?
          </span>{" "}
        </h1>
      </div>
      {/* Step 1*/}
      <div className="text-slate-600 flex flex-col border-l-4  md:flex-row items-center gap-12 px-6 md:px-6 py-6">
        <div className="basis-1/2  border-slate-600 ">
          <h4 className="md:text-lg font-bold">Step 1: Enter a prompt</h4>
          <p className=" text-slate-400 py-2">
            The first step in generating an icon is entering a prompt. A prompt
            is a short description or context that helps us understand the icon
            you want to create.
          </p>
        </div>
        <div className="basis-1/2 flex justify-center">
          <NeonBorder>
            <div className="xl:w-[45rem]">
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
      <div className="text-white flex items-center gap-12 flex-col-reverse  md:flex-row border-r-4  px-6 md:px-6 py-6">
        <div className="basis-1/2 flex items-center justify-center">
          <NeonBorder>
            <div className="p-4 flex  gap-4 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 border border-slate-700 drop-shadow-2xl shadow-xl rounded-lg">
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
        <div className="basis-1/2  text-right">
          <h4 className="md:text-lg font-bold text-slate-600">
            Step 2: Select a color
          </h4>
          <p className="  text-slate-400 py-2">
            In this step, choose the color for your icon. Pick the color that
            best matches your vision for the icon
          </p>
        </div>
      </div>

      {/* Step 3*/}
      <div className="text-white flex gap-12 flex-col md:flex-row border-l-4 px-6 md:px-6 py-6">
        <div className="basis-1/2 border-slate-50 text-left">
          <h4 className="md:text-lg text-slate-600 font-bold">
            Step 3: Select a style
          </h4>
          <p className="text-slate-400 py-2">
            Here you can choose the style for your icon. We offer a variety of
            options for your needs
          </p>
        </div>
        <div className="basis-1/2 flex items-center justify-center">
          <NeonBorder>
            <div className="p-2 md:p-4 flex gap-2 md:gap-4 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 border border-slate-700 drop-shadow-2xl shadow-xl rounded-lg">
              {iconsHome.map((icon, index) => (
                <div
                  key={index}
                  className="transition-transform transform scale-100 hover:scale-105 focus:scale-95 active:scale-100 cursor-pointer drop-shadow-2xl flex flex-col items-center"
                >
                  <div className="w-16 h-16 md:h-20 md:w-20 xl:w-24 xl:h-24 relative">
                    <Image
                      fill
                      src={`/assets/icons-style/${icon.img}`}
                      alt={icon.style}
                      className="rounded-md"
                      placeholder="blur"
                      blurDataURL={`/assets/icons-style/${icon.img}`}
                    />
                  </div>
                  <p className="text-white text-xs md:text-sm lg:text-sm xl:text-base">
                    {icon.style}
                  </p>
                </div>
              ))}
            </div>
          </NeonBorder>
        </div>
      </div>

      {/* Step 4*/}
      <div className="text-white flex items-center gap-12 flex-col-reverse md:flex-row border-r-4 px-6 md:px-6 py-6">
        <div className="basis-1/2 flex items-center justify-center">
          <NeonBorder>
            <Select>
              <SelectTrigger className="w-[250px] md:w-[270px] lg:w-[300px] xl:w-[500px]  bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 border border-slate-700 drop-shadow-2xl shadow-xl  text-white text-base">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent className="   bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 border  border-slate-700  drop-shadow-2xl shadow-xl  text-white ">
                {imagesOptions.map((value, index) => (
                  <SelectItem
                    value={value.toString()}
                    className="flex flex-row text-base"
                    key={index}
                  >
                    {value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </NeonBorder>
        </div>
        <div className="basis-1/2  border-slate-50 text-right">
          <h4 className="md:text-lg font-bold text-slate-600">
            Step 4: Choose number for your icons
          </h4>
          <p className="  text-slate-400 py-2">
            Finally, you specify the number of icons you want to generate.
            Whether you need a single icon or a set of multiple icons
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tutorial;
