export default function LandingHero() {
  return (
    <section className="w-[85%] h-[60%] flex items-center justify-center">
      <div className="basis-1/2 text-white">
        <h2 className="text-6xl font-bold">
          Generate icons with a click of a button
        </h2>
        <p>
          Save time by generating icons for your businesses website,
          applications, or brand using our AI digital icon generator.
        </p>
        <div className="flex">
          <div className="bg-gray-200 p-2">
            <input />
          </div>
          <button>Start Generation</button>
        </div>
      </div>
      <div className="basis-1/2">Immagini</div>
    </section>
  );
}
