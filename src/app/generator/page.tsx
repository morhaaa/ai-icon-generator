import Footer from "@/components/footer";
import Form from "@/components/form";

const Generator: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col items-center bg-gradient-to-b from-transparent via-fuchsia-100/20 to-fuchsia-100/60 backdrop-blur-md py-12 px-8 md:px-16 lg:px-20 ">
      <Form />
    </div>
  );
};

export default Generator;
