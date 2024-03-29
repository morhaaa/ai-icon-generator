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
      <div className="flex flex-col gap-4 justify-start">
        <div className="flex flex-col">
          <h2 className="text-slate-900 font-bold text-lg md:text-xl lg:text-2xl ">
            Select number of icons
          </h2>
          <h3 className="text-sm text-slate-600 font-medium">
            1 credit per image
          </h3>
        </div>

        <div className="flex w-full flex-col gap-4  ">
          <Select
            onValueChange={(value: string) => {
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
          <div className="text-sm font-semibold px-1 flex gap-1 items-center">
            <h3 className="text-slate-600">Credits left:</h3>
            <h3 className="text-fuchsia-500  text-xs font-bold h-7 w-7 border-2 border-fuchsia-500 rounded-full flex items-center justify-center">
              {" "}
              {creditsLeft}
            </h3>
            <h3
              className="text-slate-400 px-2 md:px-4 underline underline-offset-2 font-light cursor-pointer"
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
