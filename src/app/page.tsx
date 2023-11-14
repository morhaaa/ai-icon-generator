import LandingHero from "@/components/landing-hero";
import Footer from "@/components/footer";
import JoinUs from "@/components/join-us";
import Tutorial from "@/components/tutorial";
import Presentation from "@/components/presentation";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <main className="w-full flex flex-col">
        <LandingHero />
        <Presentation />
        <Tutorial />
        <JoinUs />
        <div className=" bg-black/90">
          <Footer />
        </div>
      </main>
    </main>
  );
}
