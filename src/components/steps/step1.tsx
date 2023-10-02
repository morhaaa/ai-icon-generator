import InputGenerator from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Props {}
const Step1: React.FC<Props> = () => {
  return (
    <div className="w-full flex flex-col gap-6 justify-between">
      <h2 className="text-white font-medium text-2xl md:text-3xl">
        Describe your icon
      </h2>{" "}
      {/*Content */}
      <div className="flex flex-col gap-4">
        <InputGenerator placeholder="a happy turtle" size="medium" />
        <div className="px-2 text-white flex gap-2 items-center">
          <p className="text-sm">
            {" "}
            Think of an object that you would like to see. Still not sure ?{" "}
          </p>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <h4 className="hover:bg-slate-600 delay-200 bg-black w-[70px] text-white rounded-md text-center">
                  Tips
                </h4>
              </TooltipTrigger>
              <TooltipContent className="  bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 border  border-slate-700  drop-shadow-2xl shadow-xl  text-white ">
                <div className="">
                  {" "}
                  <ul className="list-disc pl-6 overflow-scroll">
                    <li>
                      Do not ask for words or letters, AI does not generate
                      characters correctly
                    </li>
                    <li>Simple prompts work best</li>
                    <li>Use variants once you find a starting icon you like</li>
                    <li>
                      Experiment with adding words, such as happy or vibrant
                    </li>
                  </ul>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default Step1;
