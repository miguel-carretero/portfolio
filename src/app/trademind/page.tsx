import type { Metadata } from "next";
import TradeMindDesignSystem from "@/components/trademind/TradeMindDesignSystem";
import TradeMindHero from "@/components/trademind/TradeMindHero";
import TradeMindExperience from "@/components/trademind/TradeMindExperience";
import TradeMindImpact from "@/components/trademind/TradeMindImpact";
import TradeMindLearnings from "@/components/trademind/TradeMindLearnings";
import TradeMindProductVision from "@/components/trademind/TradeMindProductVision";
import TradeMindSolution from "@/components/trademind/TradeMindSolution";
import TradeMindWhy from "@/components/trademind/TradeMindWhy";
import styles from "./TradeMindCredit.module.css";

export const metadata: Metadata = {
  title: "TradeMind — Case Study Product Design | Miguel Carretero",
  description:
    "TradeMind est un concept personnel dédié à la compréhension des comportements d’investissement, explorant Product Design, UX/UI et Design System.",
};

export default function TradeMindPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <TradeMindHero />
      <TradeMindWhy />
      <TradeMindProductVision />
      <TradeMindImpact />
      <TradeMindSolution />
      <TradeMindExperience />
      <TradeMindDesignSystem />
      <TradeMindLearnings />
      <p className={styles.credit}>
        TradeMind est un concept personnel imaginé et conçu par Miguel Angel Carretero — 2026.
      </p>
    </main>
  );
}
