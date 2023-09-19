import InputGenerator from "@/components/ui/input";
import Button from "@/components/ui/button";
import { BiRightArrowAlt } from "react-icons/bi";

interface Props {
  next: () => void;
}
const Step1: React.FC<Props> = ({ next }) => {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="flex flex-col h-full justify-center md:justify-start gap-8 md:gap-10 lg:gap-16 ">
        <h2 className="text-white font-medium text-2xl md:text-2xl lg:text-4xl ">
          1-{" "}
          <span className="underline underline-offset-8">
            Describe your icon
          </span>
        </h2>
        <div className="px-4 lg:px-10 flex flex-col gap-2">
          <InputGenerator />
          <div className="flex flex-col gap-2 text-xl  text-white md:pl-8 pt-4">
            <span className="font-medium text-xl">Tips:</span>
            <ul className="list-disc pl-6 text-base">
              <li>
                Do not ask for words or letters, AI does not generate characters
                and words correctly
              </li>
              <li>Simple prompts work best</li>
              <li>Use variants once you find a starting icon you like</li>
              <li>Experiment with adding words, such as happy or vibrant</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-end pt-10">
        <Button onClick={next}>
          <div className="flex items-center justify-center gap-2 lg:px-2 lg:py-1">
            <p className="lg:text-xl text-lg ">Next</p>
            <BiRightArrowAlt />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Step1;
