import LandingButton from "./ui/landing-button";

export default function LandingHero() {
  return (
    <section className="w-[85%] pt-28 md:pt-36 lg:pt-40 flex flex-col md:flex-row items-center justify-center ">
      <div className="basis-1/2 text-slate-50 flex flex-col gap-4 md:gap-6 lg:gap-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Generate icons with a click of a button
        </h2>
        <p className="text-sm md:text-base lg:text-xl">
          Save time by generating icons for your businesses website,
          applications, or brand using our AI digital icon generator.
        </p>
        <div className="flex">
          <div className="w-full flex items-center rounded-xl border pl-4 bg-slate-200 drop-shadow-2xl">
            <input
              className="w-full text-sm md:text-base lg:text-xl text-black outline-none bg-transparent font-medium"
              placeholder="provvaaaaa"
            />
            <LandingButton>Start Generation</LandingButton>
          </div>
        </div>
      </div>
      <div className="basis-1/2">Immagini</div>
    </section>
  );
}
