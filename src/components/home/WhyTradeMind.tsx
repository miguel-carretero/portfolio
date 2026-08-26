"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import sectionIntroStyles from "@/components/ui/SectionIntro.module.css";
import Reveal from "@/components/ui/Reveal";
import styles from "./WhyTradeMind.module.css";

export default function WhyTradeMind() {
  const shouldReduceMotion = useReducedMotion();
  const editorialInitial = shouldReduceMotion ? false : { opacity: 0, y: 16 };
  const editorialFinal = shouldReduceMotion ? undefined : { opacity: 1, y: 0 };

  return (
    <section className={styles.section} aria-label="Pourquoi ce projet">
      <div className={styles.inner}>
        <div className={`${styles.intro} ${sectionIntroStyles.intro}`}>
          <motion.p
            className={sectionIntroStyles.eyebrow}
            initial={editorialInitial}
            whileInView={editorialFinal}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.54, ease: [0.22, 1, 0.36, 1] }}
          >
            POURQUOI CE PROJET ?
          </motion.p>
          <motion.h2
            className={sectionIntroStyles.title}
            initial={editorialInitial}
            whileInView={editorialFinal}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.54, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Concevoir un produit qui comprend l&apos;investisseur
          </motion.h2>
          <motion.div
            className={`${sectionIntroStyles.content} ${styles.copy}`}
            initial={editorialInitial}
            whileInView={editorialFinal}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.54, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
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
          </motion.div>
        </div>

        <Reveal className={styles.graph} variant="visual" delay={0.08}>
          <Image
            src="/images/portfolio/investment-behavior-graph.png"
            alt="Graphique illustrant l'influence des émotions sur les décisions d'investissement"
            width={1162}
            height={606}
          />
        </Reveal>
      </div>
    </section>
  );
}
