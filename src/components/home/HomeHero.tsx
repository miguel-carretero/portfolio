"use client";

import PrimaryButton from "@/components/ui/PrimaryButton";
import { motion, useReducedMotion } from "motion/react";
import SecondaryButton from "@/components/ui/SecondaryButton";
import styles from "./HomeHero.module.css";

const colorBlocks = [
  { className: styles.highlightBlock, label: "Highlight", value: "#E58F91" },
  { className: styles.primaryBlock, label: "Primary", value: "#427DAD" },
  { className: styles.backgroundBlock, label: "Background", value: "#FFB63B" },
  { className: styles.secondaryBlock, label: "Secondary", value: "#337C89" },
];

export default function HomeHero() {
  const shouldReduceMotion = useReducedMotion();
  const revealInitial = shouldReduceMotion ? false : { opacity: 0, y: 16 };
  const revealFinal = shouldReduceMotion ? undefined : { opacity: 1, y: 0 };
  const revealTransition = { duration: 0.56, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.colorBlocks} aria-hidden="true">
        {colorBlocks.map((block, index) => (
          <motion.div
            key={block.label}
            className={styles.cardReveal}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 6 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.54, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={`${styles.colorBlock} ${block.className}`}>
              <span>{block.label}</span>
              <span>{block.value}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className={styles.content}>
        <motion.p
          className={styles.eyebrow}
          initial={revealInitial}
          whileInView={revealFinal}
          viewport={{ once: true, amount: 0.3 }}
          transition={revealTransition}
        >
          DESIGN · MÉTIER · TECHNIQUE
        </motion.p>
        <motion.h1
          id="hero-title"
          className={styles.title}
          initial={revealInitial}
          whileInView={revealFinal}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ...revealTransition, delay: 0.1 }}
        >
          Comprendre les besoins avant de concevoir les <span>solutions</span>
        </motion.h1>
        <motion.p
          className={styles.description}
          initial={revealInitial}
          whileInView={revealFinal}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ...revealTransition, delay: 0.22 }}
        >
          J&apos;accompagne les équipes dans la conception de produits numériques en combinant expérience
          métier, culture design et pratique Front-End.
        </motion.p>
        <motion.blockquote
          className={styles.experience}
          initial={revealInitial}
          whileInView={revealFinal}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ...revealTransition, delay: 0.32 }}
        >
          20 ans d&apos;expérience professionnelle nourrissent aujourd&apos;hui ma vision du design.
        </motion.blockquote>
        <motion.div
          className={styles.actions}
          initial={revealInitial}
          whileInView={revealFinal}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ...revealTransition, delay: 0.42 }}
        >
          <SecondaryButton href="/trademind">Découvrir TradeMind</SecondaryButton>
          <PrimaryButton href="/miguel-carretero-cv.pdf" download>
            Télécharger mon CV
          </PrimaryButton>
        </motion.div>
      </div>
    </section>
  );
}
