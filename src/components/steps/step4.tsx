import { imagesOptions } from "@/utilities/constant";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setNumberIcons } from "@/containers/form-reducer";
import { openModal } from "@/containers/modal-credit";

interface Props {
  creditsLeft: number;
}

const Step4: React.FC<Props> = ({ creditsLeft }) => {
  const [valueSelector, setValueSelector] = useState<string>("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNumberIcons(valueSelector));
  }, [valueSelector, dispatch]);

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="flex flex-col gap-6 justify-start">
        <div className="flex flex-col gap-1">
          <h2 className="text-white font-medium text-2xl md:text-2xl lg:text-4xl ">
            Select number of icons
          </h2>
          <h3 className="text-sm text-white font-light px-1">
            1 credit per image
          </h3>
        </div>

        <div className="flex w-full flex-col gap-4  ">
          <Select
            onValueChange={(value) => {
              setValueSelector(value);
            }}
          >
            <SelectTrigger className=" w-full md:w-[200px]  bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 border border-slate-700 drop-shadow-2xl shadow-xl  text-white text-base">
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
          <div className="text-sm  px-1 flex gap-2 md:gap-2 items-center">
            <h3 className="text-white">Credits left:</h3>
            <h3 className="text-green-500  text-xs font-bold h-5 w-5 border-2 border-green-500 rounded-full flex items-center justify-center">
              {" "}
              {creditsLeft}
            </h3>
            <h3
              className="text-slate-400 px-2 md:px-4 underline underline-offset-2 cursor-pointer"
              onClick={() => dispatch(openModal())}
            >
              {" "}
              Need more credits?
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4;
