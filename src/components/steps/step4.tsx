import { imagesOptions } from "@/utilities/constant";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {}

const Step4: React.FC<Props> = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="flex flex-col gap-6 justify-start">
        <h2 className="text-white font-medium text-2xl md:text-2xl lg:text-4xl ">
          Select number images
        </h2>

        <div className="flex w-full">
          <Select>
            <SelectTrigger className="w-[200px]  bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 border border-white  drop-shadow-2xl shadow-xl  text-white ">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="   bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 border border-white  drop-shadow-2xl shadow-xl  text-white ">
              {imagesOptions.map((value, index) => (
                <SelectItem
                  value={value.toString()}
                  className="flex flex-row"
                  key={index}
                >
                  {value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Step4;
