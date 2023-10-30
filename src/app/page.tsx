import LandingHero from "@/components/landing-hero";
import Footer from "@/components/footer";
import JoinUs from "@/components/join-us";
import Tutorial from "@/components/tutorial";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <main className="w-full flex flex-col">
        <LandingHero />
        <Tutorial />
        <JoinUs />
      </main>
      <Footer />
    </main>
  );
}
