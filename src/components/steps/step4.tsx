import Button from "@/components/ui/button";
import { BiLeftArrowAlt } from "react-icons/bi";
import Select from "../ui/select";

interface Props {
  back: () => void;
}

const Step4: React.FC<Props> = ({ back }) => {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="flex flex-col h-full justify-start gap-6 md:gap-10 lg:gap-16 ">
        <h2 className="text-white font-medium text-2xl md:text-2xl lg:text-4xl ">
          4-
          <span className="underline underline-offset-8">
            Recap your selection
          </span>
        </h2>

        <div className="flex h-full items-center justify-center w-full">
          <div className="px-4 lg:px-10 flex flex-col h-full justify-evenly text-white w-full md:w-[400px] lg:w-[600px] bg-black/20 rounded-md">
            {/*Recap*/}
            <div className="flex flex-col gap-6 md:gap-8 w-full text-sm md:text-base lg:text-lg">
              <div className="flex justify-between items-center">
                <p className="font-semibold italic ">Description:</p>
                <p className="">A happy turle</p>
              </div>
              <div className="flex gap-4 justify-between">
                <p className="font-semibold italic">Primary color:</p>
                <div className="flex gap-3 justify-center items-center">
                  <p>red</p>
                  <div className="h-6 w-6 rounded-md bg-red-700 border"></div>
                </div>
              </div>
              <div className="flex gap-4 justify-between">
                <p className="font-semibold italic">Style:</p> A happy turle
              </div>
              <div className="flex gap-4 justify-between">
                <p className=" font-semibold italic">Images To Make:</p>{" "}
                <Select />
              </div>
              <div className="flex gap-4 justify-between">
                <p className="font-semibold italic">Aspect ratio:</p> <Select />
              </div>
            </div>

            <div className="flex gap-6  justify-between border-t w-full py-2">
              <p className="font-semibold italic">Cost:</p>
              <p>99 coins</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end items-center gap-4">
        <Button onClick={back}>
          <div className="flex items-center justify-center gap-2 lg:px-2 lg:py-1">
            <BiLeftArrowAlt />
            <p className="lg:text-xl text-lg ">Back</p>
          </div>
        </Button>
        <Button>
          <div className="flex items-center justify-center gap-2 lg:px-2 lg:py-1">
            <p className="text-lg lg:text-xl">Create</p>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Step4;
