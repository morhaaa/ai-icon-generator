import { resetForm, setInputText } from "@/containers/form-reducer";
import InputGenerator from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useDispatch } from "react-redux";

interface Props {}
const Step1: React.FC<Props> = () => {
  const dispatch = useDispatch();

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const txt = event.currentTarget.value;
    dispatch(setInputText(txt));
  };

  return (
    <div className="w-full flex flex-col gap-2 justify-between">
      <h2 className="text-slate-900 font-bold text-lg md:text-xl lg:text-2xl ">
        Describe your icon
      </h2>{" "}
      {/*Content */}
      <div className="flex flex-col gap-2">
        <InputGenerator
          placeholder="a happy panda"
          size="medium"
          onChange={(e) => handleInput(e)}
        />
        <div className=" text-slate-400 flex gap-2 items-center pt-1">
          <p className="text-xs lg:text-sm ">
            {" "}
            Think of an object that you would like to see. Still not sure ?{" "}
          </p>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <h4 className="hover:bg-slate-600 delay-200 bg-black text-slate-50 rounded-md text-center text-sm px-2 md:px-3 lg:px-4">
                  Tips
                </h4>
              </TooltipTrigger>
              <TooltipContent className=" bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 border  border-slate-700  drop-shadow-2xl shadow-xl  text-slate-50 ">
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
