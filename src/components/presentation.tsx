import { Coins, Sparkles, Infinity, Rainbow, Brain } from "lucide-react";

const tabs = [
  {
    img: <Brain size={50} color="#e879f9" />,
    title: "Chat GPT 4.0",
    text: " Powered by latest Open AI technolige",
  },
  {
    img: <Coins size={50} color="#e879f9" />,
    title: "Time and Cost Efficiency",
    text: "Our AI icon generator tools offer a high degree of customizability.",
  },
  {
    img: <Infinity size={50} color="#e879f9" />,
    title: "Endless Possibilities",
    text: "Our AI icon generator tools offer a high degree of customizability.",
  },
  {
    img: <Rainbow size={50} color="#e879f9" />,
    title: "Highly Customizable",
    text: "Our AI icon generator tools offer a high degree of customizability.",
  },
  {
    img: <Sparkles size={50} color="#e879f9" />,
    title: "User-friendly interface",
    text: "We believe that design should be accessible to everyone. Our intuitive interface makes it easy for beginners and experts alike to create icons effortlessly, even with no prior design experience.",
  },
];

const Presentation: React.FC = () => {
  return (
    <div className="h-full w-full px-10 md:px-20 py-4 flex flex-col  md:gap-4">
      <div className="flex flex-col justify-center items-center text-white pt-20 pb-10 gap-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center">
          Explore our{" "}
          <span className="text-transparent  bg-clip-text bg-gradient-to-br from-fuchsia-300 to-fuchsia-500">
            Feature
          </span>
        </h1>
        <span className="text-xs sm:text-sm xl:text-lg   text-center text-slate-400">
          Let&apos;s be honest, you don&apos;t have the time or money to find a
          designer, communicate back <br /> and forth via email, and refine your
          icon over and over again. Letting AI generate your icon provides many
          benefits.
        </span>
      </div>
      <div className="flex gap-4 md:gap-10 flex-wrap justify-center">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className="h-[200px] w-[300px] md:h-[220px] md:w-[320px] lg:h-[230px] lg:w-[350px] xl:h-[250px] xl:w-[400px] 
            rounded-2xl drop-shadow-lg shadow-lg 
            bg-gradient-to-tr from-slate-500/20 to-slate-900/10 border-2 border-slate-500 
            flex flex-col  items-center pt-6 md:pt-10"
          >
            {tab.img}
            <p className=" text-white font-semibold md:text-lg lg:text-xl xl:text-2xl py-2">
              {tab.title}
            </p>
            <p className="text-sm lg:text-base text-slate-300 px-4 text-center">
              {tab.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Presentation;
