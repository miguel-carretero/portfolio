import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import styles from "./TradeMindEvolution.module.css";

export default function TradeMindEvolution() {
  return (
    <section className={styles.section} aria-labelledby="trademind-evolution-title">
      <div className={styles.content}>
        <Reveal className={styles.intro}>
          <p className={styles.eyebrow}>UNE VISION EN ÉVOLUTION</p>
          <h2 id="trademind-evolution-title" className={styles.title}>
            Du concept à une réflexion produit
          </h2>
        </Reveal>

        <Reveal className={styles.visual} variant="visual" delay={0.08}>
          <Image
            src="/images/trademind/watchlist mockup.png"
            alt="Une main tient un téléphone affichant la watchlist TradeMind"
            width={1122}
            height={1402}
            sizes="(max-width: 1000px) min(100vw - 40px, 546px), min(42vw, 546px)"
          />
        </Reveal>

        <Reveal className={styles.copy} delay={0.12}>
          <p>
            Initialement imaginé comme un projet personnel pour mon portfolio, TradeMind
            m’a amené à envisager <strong>la création d’une application commerciale destinée
            aux investisseurs.</strong>
          </p>
          <p>
            Cette réflexion m’a conduit à examiner les conditions nécessaires pour
            transformer le concept en produit : l’accès aux données des portefeuilles
            détenus auprès de différents courtiers, la simplicité de l’expérience,
            ainsi que la différenciation et les possibilités de monétisation face aux
            solutions existantes.
          </p>
          <p>
            Une autre orientation s’est alors dessinée : envisager TradeMind comme une
            <strong> solution en marque blanche, intégrée aux services de courtiers.</strong> Cette piste
            reste à explorer, tant sur les besoins des entreprises que sur son modèle
            économique et sa faisabilité.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
