import Image from "next/image";
import styles from "./TradeMindHero.module.css";

export default function TradeMindHero() {
  return (
    <section className={styles.hero} aria-labelledby="trademind-hero-title">
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            CASE STUDY <span>– TradeMind</span>
          </p>
          <h1 id="trademind-hero-title" className={styles.title}>
            Comprendre l&apos;investisseur derrière le portefeuille
          </h1>
          <p className={styles.description}>
            TradeMind est un compagnon comportemental conçu pour aider les
            investisseurs à prendre du recul sur leurs décisions et à développer
            de meilleures habitudes d&apos;investissement.
          </p>
          <blockquote className={styles.quote}>
            <span className={styles.quoteText}>
              Parce que les meilleures décisions commencent par une meilleure
              compréhension de soi.
            </span>
          </blockquote>
        </div>

        <div className={styles.cards} aria-label="Aperçus de l’interface TradeMind">
          <Image
            className={styles.shadow}
            src="/images/trademind/trademind-hero-shadow.svg"
            alt=""
            width={699}
            height={76}
            aria-hidden="true"
            unoptimized
          />
          <Image
            className={styles.glow}
            src="/images/trademind/trademind-hero-glow.svg"
            alt=""
            width={830}
            height={679}
            aria-hidden="true"
            unoptimized
          />
          <div className={`${styles.card} ${styles.scoreCard}`}>
            <Image
              src="/images/trademind/Behavioral score.png"
              alt="Aperçu du score comportemental TradeMind"
              width={1042}
              height={745}
              unoptimized
            />
          </div>
          <div className={`${styles.card} ${styles.profileCard}`}>
            <Image
              src="/images/trademind/Behavioral Profile.png"
              alt="Aperçu du profil comportemental TradeMind"
              width={839}
              height={545}
              unoptimized
            />
          </div>
          <div className={`${styles.card} ${styles.diversificationCard}`}>
            <Image
              src="/images/trademind/diversification.png"
              alt="Aperçu d’une opportunité de diversification TradeMind"
              width={727}
              height={257}
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
