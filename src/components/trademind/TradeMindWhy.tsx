import Reveal from "@/components/ui/Reveal";
import styles from "./TradeMindWhy.module.css";

export default function TradeMindWhy() {
  return (
    <section className={styles.section} aria-labelledby="trademind-why-title">
      <Reveal className={styles.titleGroup}>
        <p className={styles.eyebrow}>POURQUOI TRADEMIND EXISTE</p>
        <h2 id="trademind-why-title" className={styles.title}>
          Les plateformes montrent les marchés.
          <br />
          Pas les comportements.
        </h2>
      </Reveal>

      <Reveal className={styles.content} delay={0.1}>
        <p>
          Les plateformes d&apos;investissement fournissent une quantité importante
          de données financières : performances, graphiques, actualités ou
          indicateurs de marché. En revanche, elles offrent très peu d&apos;outils
          permettant aux investisseurs de comprendre les comportements qui
          influencent leurs décisions.
        </p>
        <p className={styles.conviction}>TradeMind est né de cette conviction :</p>
        <p className={styles.highlight}>
          comprendre ses comportements est aussi important que comprendre les
          marchés.
        </p>
      </Reveal>
    </section>
  );
}
