import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import styles from "./TradeMindProductVision.module.css";

export default function TradeMindProductVision() {
  return (
    <section className={styles.section} aria-labelledby="product-vision-title">
      <div className={styles.inner}>
        <Reveal className={styles.visual} variant="visual" aria-label="Aperçus de l’interface TradeMind">
          <div className={`${styles.card} ${styles.scoreCard}`}>
            <Image
              src="/images/trademind/Behaviour Score.png"
              alt="Aperçu du score comportemental TradeMind"
              width={1804}
              height={1462}
              unoptimized
            />
          </div>
          <div className={`${styles.card} ${styles.insightCard}`}>
            <Image
              src="/images/trademind/Behavior inside.png"
              alt="Aperçu d’un insight comportemental TradeMind"
              width={1269}
              height={649}
              unoptimized
            />
          </div>
          <div className={`${styles.card} ${styles.portfolioCard}`}>
            <Image
              src="/images/trademind/Portfolio Overview.png"
              alt="Aperçu du portefeuille TradeMind"
              width={880}
              height={582}
              unoptimized
            />
          </div>
        </Reveal>

        <div className={styles.content}>
          <Reveal className={styles.intro}>
            <p className={styles.eyebrow}>VISION PRODUIT</p>
            <h2 id="product-vision-title" className={styles.title}>
              Une approche comportementale de l&apos;investissement.
            </h2>
          </Reveal>

          <Reveal className={styles.copy} delay={0.1}>
            <p>
              La plupart des applications d&apos;investissement utilisent les
              comportements comme une fonctionnalité supplémentaire.
            </p>
            <p className={styles.highlight}>
              TradeMind adopte l&apos;approche inverse.
            </p>
            <p>
              Le portefeuille devient un support d&apos;observation permettant de
              comprendre les habitudes, les biais et les mécanismes de décision
              de l&apos;investisseur.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
