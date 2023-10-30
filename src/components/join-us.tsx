const JoinUs: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center pb-28 pt-10 gap-20 bg-black/80">
      <div className="flex flex-col justify-center gap-4 items-center text-white text-8xl ">
        <h1 className=" font-bold">
         Join{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-300 to-fuchsia-500">
           Us
          </span>{" "}
        </h1>
        <span className="text-base text-center text-slate-400">Join the growing community of over 5518 satisfied users who have experienced the power of the AI Icon Generator App.<br/> Whether you're a designer, developer, marketer, or simply someone who loves to add visual flair to your projects, this app is a game-changer.</span>
      </div>
      <div className="flex gap-60">
        <div className="flex flex-col items-center">
          <p className="font-extrabold text-transparent text-8xl bg-clip-text  bg-gradient-to-br from-fuchsia-300 to-fuchsia-500">
            2300
          </p>
          <p className="text-white text-4xl">Users</p>
        </div>

        <div className="flex flex-col items-center">
          <p className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-br from-fuchsia-300 to-fuchsia-500">
            2500
          </p>
          <p className="text-white text-4xl">Icons Generated</p>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
