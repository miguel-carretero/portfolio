import ApproachSection from "@/components/home/ApproachSection";
import ApproachPillars from "@/components/home/ApproachPillars";
import ClosingCta from "@/components/home/ClosingCta";
import HomeHero from "@/components/home/HomeHero";
import NourishingApproach from "@/components/home/NourishingApproach";
import ProjectExplorations from "@/components/home/ProjectExplorations";
import TradeMindTeaser from "@/components/home/TradeMindTeaser";
import WhyTradeMind from "@/components/home/WhyTradeMind";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <TradeMindTeaser />
      <WhyTradeMind />
      <ProjectExplorations />
      <ApproachSection />
      <ApproachPillars />
      <NourishingApproach />
      <ClosingCta />
    </main>
  );
}
