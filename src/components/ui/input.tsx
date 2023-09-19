const InputGenerator: React.FC = () => {
  return (
    <div className="w-full bg-white py-2 md:py-4 rounded-xl bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 border border-white px-4 drop-shadow-2xl shadow-xl">
      <input
        className="bg-transparent outline-none text-xl md:text-xl text-white w-full"
        placeholder="Prova"
      />
    </div>
  );
};

export default InputGenerator;
