import IconGenerated from "@/components/icon-card";
interface Props {
  icons: Icon[];
}

const CardsPagination: React.FC<Props> = ({ icons }) => {
  return (
    <div className="h-full w-full flex overflow-hidden">
      <div className="flex justify-center lg:justify-start  gap-4  flex-wrap overflow-auto w-full">
        {icons.map((icon, index) => (
          <div key={index}>
            <IconGenerated icon={icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsPagination;
