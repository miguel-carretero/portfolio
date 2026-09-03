import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutConnection from "@/components/about/AboutConnection";
import AboutExperience from "@/components/about/AboutExperience";
import AboutEvolution from "@/components/about/AboutEvolution";
import AboutToday from "@/components/about/AboutToday";

export const metadata: Metadata = {
  title: "À propos — Miguel Carretero, Product Designer",
  description:
    "Découvrez l’expérience et l’approche produit de Miguel Carretero, entre compréhension métier, UI, Design System et pratique Front-End.",
};

export default function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <AboutHero />
      <AboutExperience />
      <AboutEvolution />
      <AboutConnection />
      <AboutToday />
    </main>
  );
}
