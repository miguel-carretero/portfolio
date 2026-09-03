import type { Metadata } from "next";
import ApproachSection from "@/components/home/ApproachSection";
import ApproachPillars from "@/components/home/ApproachPillars";
import ClosingCta from "@/components/home/ClosingCta";
import HomeHero from "@/components/home/HomeHero";
import NourishingApproach from "@/components/home/NourishingApproach";
import ProjectExplorations from "@/components/home/ProjectExplorations";
import TradeMindTeaser from "@/components/home/TradeMindTeaser";
import WhyTradeMind from "@/components/home/WhyTradeMind";

export const metadata: Metadata = {
  title: "Miguel Carretero — Product Designer & Front-End",
  description:
    "Portfolio de Miguel Carretero, Product Designer spécialisé en UI, Design System et Front-End, avec une approche centrée sur l’expérience produit.",
};

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
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
