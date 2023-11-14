import NeonBorder from "@/components/neon-border";
import Button from "@/components/ui/button";
import { plans } from "@/utilities/constant";
import clsx from "clsx";

const Pricing = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center  w-full overflow-scroll py-10 md:h-full ">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h2 className=" text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white ">
          Our Pricing
        </h2>
        <p className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl text-center text-slate-400">
          Choose an affordable pack to unlock your creativity
        </p>
      </div>
      <div className="md:w-[90%] md:h-[60%] lg:h-[65%]  xl:w-[70%] xl:h-[65%] flex flex-col md:flex-row md:items-end gap-4 md:gap-2 lg:gap-6 xl:gap-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={clsx(
              "bg-gradient-to-br from-indigo-950 via-indigo-950 to-blue-950 border-2 border-slate-500 drop-shadow-xl text-white rounded-3xl h-full basis-1/3 flex flex-col justify-center items-center p-4",
              index === 1 ? "h-full" : "h-[95%]"
            )}
          >
            <h4 className="text-2xl xl:text-3xl text-slate-200 font-medium whitespace-nowrap bg-gradient-to-br from-blue-800 via-indigo-800 to-violet-800  px-6 py-1 rounded-2xl">
              {plan.description}
            </h4>
            <div className="py-10 md:py-14 lg:py-20 xl:py-24 flex flex-col gap-4 lg:gap-6">
              <h2 className="text-center text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                {plan.price}$
              </h2>
              <h3 className="text-center text-xl lg:text-2xl font-medium">
                {plan.credits} credits
              </h3>
            </div>
            <NeonBorder>
              <Button>
                <p className="text-xl md:text-2xl xl:text-3xl p-1 lg:p-2">
                  Buy Credits
                </p>
              </Button>
            </NeonBorder>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
