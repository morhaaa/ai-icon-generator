import InputGenerator from "@/components/ui/input";
import Button from "@/components/ui/button";
import { BiRightArrowAlt } from "react-icons/bi";

interface Props {}
const Step1: React.FC<Props> = () => {
  return (
    <div className="w-full flex flex-col gap-6 justify-between">
      <h2 className="text-white font-medium text-2xl md:text-3xl">
        Describe your icon +i
      </h2>{" "}
      <div className="flex flex-col gap-8">
        <InputGenerator placeholder="a happy turtle" size="medium" />
      </div>
    </div>
  );
};

export default Step1;
