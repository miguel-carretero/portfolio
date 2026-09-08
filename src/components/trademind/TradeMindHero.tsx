"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import styles from "./TradeMindHero.module.css";

export default function TradeMindHero() {
  const shouldReduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;
  const editorialInitial = shouldReduceMotion ? false : { opacity: 0, y: 16 };
  const visualInitial = shouldReduceMotion ? false : { opacity: 0, y: 14, scale: 0.99 };
  const visualFinal = shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 };

  return (
    <section className={styles.hero} aria-labelledby="trademind-hero-title">
      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          initial={editorialInitial}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.56, ease }}
        >
          <p className={styles.eyebrow}>
            CASE STUDY <span>– TradeMind</span>
          </p>
          <p className={styles.projectStatus}>
            Concept personnel · Product Design, UI &amp; Design System · 2026
          </p>
          <h1 id="trademind-hero-title" className={styles.title}>
            Comprendre l&apos;investisseur derrière le portefeuille
          </h1>
          <p className={styles.description}>
            TradeMind est un compagnon comportemental conçu pour aider les
            investisseurs à mieux comprendre leurs décisions et à développer
            de meilleures habitudes d&apos;investissement.
          </p>
          <blockquote className={styles.quote}>
            <span className={styles.quoteText}>
              Parce que les meilleures décisions commencent par une meilleure
              compréhension de soi.
            </span>
          </blockquote>
        </motion.div>

        <div className={styles.cards} aria-label="Aperçus de l’interface TradeMind">
          <span className={styles.shadow} aria-hidden="true" />
          <Image
            className={styles.glow}
            src="/images/trademind/trademind-hero-glow.svg"
            alt=""
            width={830}
            height={679}
            aria-hidden="true"
            unoptimized
          />
          <motion.div
            className={`${styles.card} ${styles.scoreCard}`}
            initial={visualInitial}
            animate={visualFinal}
            transition={{ duration: 0.64, delay: 0.14, ease }}
          >
            <Image
              src="/images/trademind/Behavioral score.png"
              alt="Aperçu du score comportemental TradeMind"
              width={1042}
              height={745}
              preload
              unoptimized
            />
          </motion.div>
          <motion.div
            className={`${styles.card} ${styles.profileCard}`}
            initial={visualInitial}
            animate={visualFinal}
            transition={{ duration: 0.64, delay: 0.26, ease }}
          >
            <div className={styles.profileFloat}>
              <Image
                src="/images/trademind/Behavioral Profile.png"
                alt="Aperçu du profil comportemental TradeMind"
                width={839}
                height={545}
                unoptimized
              />
            </div>
          </motion.div>
          <motion.div
            className={`${styles.card} ${styles.diversificationCard}`}
            initial={visualInitial}
            animate={visualFinal}
            transition={{ duration: 0.58, delay: 0.38, ease }}
          >
            <div className={styles.diversificationFloat}>
              <Image
                src="/images/trademind/diversification.png"
                alt="Aperçu d’une opportunité de diversification TradeMind"
                width={727}
                height={257}
                unoptimized
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
