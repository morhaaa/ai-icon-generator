const JoinUs: React.FC = () => {
  return (
    <section className="h-[50vh] w-full flex flex-col items-center justify-center gap-20">
      <div className="flex flex-col items-center gap-3 text-white">
        <h2 className="text-8xl font-bold">Join Us</h2>
      </div>
      <div className="flex gap-60">
        <div className="flex flex-col items-center">
          <p className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-br from-emerald-400 to-green-600">
            2300
          </p>
          <p className="text-white text-4xl">Users</p>
        </div>

        <div className="flex flex-col items-center">
          <p className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-br from-emerald-400 to-green-600">
            2500
          </p>
          <p className="text-white text-4xl">Icons Generated</p>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
