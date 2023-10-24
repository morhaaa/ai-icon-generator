import LandingHero from "@/components/landing-hero";
import Footer from "@/components/footer";
import JoinUs from "@/components/join-us";

export default function Home() {
  return (
    <main className="w-full flex items-center justify-center">
      <main className="w-[70%] flex flex-col">
        <LandingHero />
        <JoinUs />
        <Footer />
      </main>
    </main>
  );
}
