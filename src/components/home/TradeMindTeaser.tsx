"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import Reveal from "@/components/ui/Reveal";
import styles from "./TradeMindTeaser.module.css";

export default function TradeMindTeaser() {
  const shouldReduceMotion = useReducedMotion();
  const finalState = {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
  };
  const shadowFinalState = { opacity: 1, scaleX: 1 };
  const hoverState = shouldReduceMotion ? undefined : { scale: 1.02, y: -2 };

  return (
    <section className={styles.section} aria-labelledby="trademind-heading">
      <Reveal className={styles.intro}>
        <span className={styles.divider} aria-hidden="true" />
        <p className={styles.eyebrow}>PROJET PHARE</p>
        <h2 id="trademind-heading" className={styles.projectName}>
          Trade<span>Mind</span>
        </h2>
      </Reveal>

      <div className={styles.screens}>
        <motion.span
          className={`${styles.groundShadow} ${styles.leftGroundShadow}`}
          aria-hidden="true"
          initial={shouldReduceMotion ? false : { opacity: 0, scaleX: 0.94 }}
          whileInView={shouldReduceMotion ? undefined : shadowFinalState}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.82, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.span
          className={`${styles.groundShadow} ${styles.centerGroundShadow}`}
          aria-hidden="true"
          initial={shouldReduceMotion ? false : { opacity: 0, scaleX: 0.94 }}
          whileInView={shouldReduceMotion ? undefined : shadowFinalState}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.66, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.span
          className={`${styles.groundShadow} ${styles.rightGroundShadow}`}
          aria-hidden="true"
          initial={shouldReduceMotion ? false : { opacity: 0, scaleX: 0.94 }}
          whileInView={shouldReduceMotion ? undefined : shadowFinalState}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.82, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className={`${styles.screen} ${styles.leftScreen}`}
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  scale: 0.97,
                  x: 90,
                  y: 8,
                }
          }
          whileInView={shouldReduceMotion ? undefined : finalState}
          whileHover={hoverState}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.82, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/trademind/trademind-screen-portfolio.png"
            alt="Écran de score comportemental de TradeMind"
            width={633}
            height={1021}
            unoptimized
          />
        </motion.div>

        <motion.div
          className={`${styles.screen} ${styles.centerScreen}`}
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  scale: 0.98,
                  y: 10,
                }
          }
          whileInView={shouldReduceMotion ? undefined : finalState}
          whileHover={hoverState}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.66, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/trademind/trademind-screen-dashboard.png"
            alt="Écran d’accueil de TradeMind"
            width={629}
            height={1189}
            unoptimized
          />
        </motion.div>

        <motion.div
          className={`${styles.screen} ${styles.rightScreen}`}
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  scale: 0.97,
                  x: -90,
                  y: 8,
                }
          }
          whileInView={shouldReduceMotion ? undefined : finalState}
          whileHover={hoverState}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.82, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/trademind/trademind-screen-insights.png"
            alt="Écran de profil comportemental de TradeMind"
            width={648}
            height={1060}
            unoptimized
          />
        </motion.div>
      </div>

      <Reveal className={styles.content} delay={0.12}>
        <h3>Comprendre l&apos;investisseur derrière le portefeuille.</h3>
        <p>
          TradeMind est un compagnon comportemental conçu pour aider les investisseurs à mieux
          comprendre leurs décisions et à développer de meilleures habitudes d&apos;investissement.
        </p>
      </Reveal>
    </section>
  );
}
