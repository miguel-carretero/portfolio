import Image from "next/image";
import SectionIntro from "@/components/ui/SectionIntro";
import styles from "./WhyTradeMind.module.css";

export default function WhyTradeMind() {
  return (
    <section className={styles.section} aria-label="Pourquoi ce projet">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <SectionIntro
            eyebrow="POURQUOI CE PROJET ?"
            title="Concevoir un produit qui comprend l'investisseur"
          >
            <p>
              Ce projet est né d&apos;un constat simple : les plateformes
              d&apos;investissement fournissent de nombreuses données financières,
              mais très peu d&apos;informations sur les comportements des
              investisseurs.
            </p>
            <p>
              <strong>TradeMind explore une approche différente</strong>, centrée
              sur la compréhension des décisions plutôt que sur leur seule
              exécution.
            </p>
          </SectionIntro>
        </div>

        <div className={styles.graph}>
          <Image
            src="/images/portfolio/investment-behavior-graph.png"
            alt="Graphique illustrant l'influence des émotions sur les décisions d'investissement"
            width={1162}
            height={606}
          />
        </div>
      </div>
    </section>
  );
}
