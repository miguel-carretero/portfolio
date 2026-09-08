import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import styles from "./TradeMindSolution.module.css";

export default function TradeMindSolution() {
  return (
    <section className={styles.section} aria-labelledby="trademind-solution-title">
      <div className={styles.inner}>
        <div className={styles.content}>
          <Reveal className={styles.intro}>
            <p className={styles.eyebrow}>LA SOLUTION</p>
            <h2 id="trademind-solution-title" className={styles.title}>
              Comprendre l&apos;investissement au-delà des chiffres
            </h2>
          </Reveal>

          <Reveal className={styles.copy} delay={0.1}>
            <p>
              <strong>TradeMind</strong> est conçu pour analyser les données du
              portefeuille afin de révéler des indicateurs comportementaux
              compréhensibles et directement exploitables.
            </p>
            <p>
              TradeMind est conçu non pas pour prédire les marchés, mais pour
              aider l&apos;investisseur à mieux comprendre sa manière d&apos;investir.
            </p>
          </Reveal>
        </div>

        <Reveal
          className={styles.visual}
          variant="visual"
          role="img"
          aria-label="Écran de détail d’un actif TradeMind entouré de ses indicateurs"
        >
          <div className={`${styles.asset} ${styles.screen}`}>
            <Image
              src="/images/trademind/Asset Detail Screen.png"
              alt=""
              width={457}
              height={948}
              sizes="(max-width: 759px) 43vw, (max-width: 1000px) 260px, 250px"
              unoptimized
            />
          </div>

          <div className={`${styles.asset} ${styles.aiPerspective}`}>
            <Image
              src="/images/trademind/AI perspective - solution.png"
              alt=""
              width={669}
              height={385}
              sizes="(max-width: 1000px) 340px, 330px"
              unoptimized
            />
          </div>

          <div className={`${styles.asset} ${styles.behaviorInsight}`}>
            <Image
              src="/images/trademind/Behavior inside - solution.png"
              alt=""
              width={620}
              height={391}
              sizes="(max-width: 759px) 58vw, (max-width: 1000px) 330px, 310px"
              unoptimized
            />
          </div>

          <div className={`${styles.asset} ${styles.inFocus}`}>
            <Image
              src="/images/trademind/In focus - solution.png"
              alt=""
              width={563}
              height={317}
              sizes="(max-width: 1000px) 310px, 280px"
              unoptimized
            />
          </div>

          <div className={`${styles.asset} ${styles.portfolioOverview}`}>
            <Image
              src="/images/trademind/Portfolio Overview - solution.png"
              alt=""
              width={552}
              height={535}
              sizes="(max-width: 759px) 46vw, (max-width: 1000px) 280px, 265px"
              unoptimized
            />
          </div>

          <div className={`${styles.asset} ${styles.portfolioSummary}`}>
            <Image
              src="/images/trademind/Portfolio Summary - solution.png"
              alt=""
              width={537}
              height={354}
              sizes="(max-width: 759px) 56vw, (max-width: 1000px) 310px, 290px"
              unoptimized
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
