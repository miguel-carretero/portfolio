import AboutHero from "@/components/about/AboutHero";
import AboutConnection from "@/components/about/AboutConnection";
import AboutExperience from "@/components/about/AboutExperience";
import AboutEvolution from "@/components/about/AboutEvolution";
import AboutToday from "@/components/about/AboutToday";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutExperience />
      <AboutEvolution />
      <AboutConnection />
      <AboutToday />
    </main>
  );
}
