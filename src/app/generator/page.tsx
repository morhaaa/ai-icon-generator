import InputGenerator from "@/components/ui/input";

const Generator: React.FC = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-[80%] md:w-[70%] flex flex-col gap-6 justify-center">
        <h2 className="text-white font-medium text-2xl md:text-2xl lg:text-3xl">
          1- Describe your icon using a noun and adjective
        </h2>
        <InputGenerator />
        <div className="flex flex-col text-xl  text-white pl-8 pt-4">
          <span>Tips:</span>
          <ul>
            <li>
              Do not ask for words or letters, AI does not generate characters
              and words correctly
            </li>
            <li>Simple prompts often work best</li>
            <li>Use variants once you find a starting icon you like</li>
            <li>Experiment with adding words, such as happy or vibrant</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Generator;
