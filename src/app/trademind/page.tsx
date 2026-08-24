import TradeMindHero from "@/components/trademind/TradeMindHero";
import TradeMindImpact from "@/components/trademind/TradeMindImpact";
import TradeMindProductVision from "@/components/trademind/TradeMindProductVision";
import TradeMindSolution from "@/components/trademind/TradeMindSolution";
import TradeMindWhy from "@/components/trademind/TradeMindWhy";

export default function TradeMindPage() {
  return (
    <main>
      <TradeMindHero />
      <TradeMindWhy />
      <TradeMindProductVision />
      <TradeMindImpact />
      <TradeMindSolution />
    </main>
  );
}
