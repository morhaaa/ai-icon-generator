import Form from "@/components/form";

const Generator: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col items-center overflow-hidden py-10 ">
      <div className="w-[90%] md:w-[80%] flex-1 bg-gradient-to-br from-blue-950/80 via-indigo-900 to-blue-950 overflow-scroll  py-6 px-8 md:px-14 lg:px-16 xl:px-20 rounded-xl flex flex-col border-2 border-slate-500 shadow-2xl ">
        <Form />
      </div>
    </div>
  );
};

export default Generator;
