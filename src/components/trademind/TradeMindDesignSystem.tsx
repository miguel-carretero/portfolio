import Image from "next/image";
import styles from "./TradeMindDesignSystem.module.css";

export default function TradeMindDesignSystem() {
  return (
    <section className={styles.section} aria-labelledby="design-system-title">
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>DESIGN SYSTEM</p>
            <h2 id="design-system-title" className={styles.title}>
              Les fondations du produit
            </h2>
          </div>

          <div className={styles.visual}>
            <Image
              src="/images/portfolio/design-sytem.png"
              alt="Aperçu du Design System de TradeMind"
              width={1092}
              height={728}
              sizes="(max-width: 1000px) min(100vw - 40px, 546px), min(42vw, 546px)"
              unoptimized
            />
          </div>

          <div className={styles.copy}>
            <p>
              Le Design System constitue la base commune qui garantit la
              cohérence de l&apos;expérience.
            </p>
            <p className={styles.highlight}>
              Il facilite également l&apos;évolution du produit et la collaboration
              entre design et développement.
            </p>
            <ul>
              <li>Cohérence</li>
              <li>Réutilisabilité</li>
              <li>Scalabilité</li>
              <li>Collaboration</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
