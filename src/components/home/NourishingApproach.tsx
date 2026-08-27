"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import sectionIntroStyles from "@/components/ui/SectionIntro.module.css";
import Reveal from "@/components/ui/Reveal";
import SecondaryButton from "@/components/ui/SecondaryButton";
import styles from "./NourishingApproach.module.css";

export default function NourishingApproach() {
  const shouldReduceMotion = useReducedMotion();
  const editorialInitial = shouldReduceMotion ? false : { opacity: 0, y: 16 };
  const editorialFinal = shouldReduceMotion ? undefined : { opacity: 1, y: 0 };

  return (
    <section className={styles.section} aria-label="Ce qui nourrit mon approche">
      <div className={styles.mainContent}>
        <div className={`${styles.intro} ${sectionIntroStyles.intro}`}>
          <motion.p
            className={sectionIntroStyles.eyebrow}
            initial={editorialInitial}
            whileInView={editorialFinal}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.54, ease: [0.22, 1, 0.36, 1] }}
          >
            CE QUI NOURRIT MON APPROCHE
          </motion.p>
          <motion.h2
            className={sectionIntroStyles.title}
            initial={editorialInitial}
            whileInView={editorialFinal}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.54, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Une expérience construite sur le terrain
          </motion.h2>
          <motion.div
            className={`${sectionIntroStyles.content} ${styles.copy}`}
            initial={editorialInitial}
            whileInView={editorialFinal}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.54, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>
              Au fil de mon parcours, j&apos;ai appris à comprendre des besoins
              parfois peu définis, à naviguer dans des environnements complexes
              et à construire des solutions adaptées aux réalités du terrain.
            </p>
          </motion.div>
          <div className={styles.action}>
            <SecondaryButton href="/about">Découvrir mon expérience</SecondaryButton>
          </div>
        </div>

        <Reveal className={styles.image} variant="visual" delay={0.08}>
          <Image
            src="/images/portfolio/experience-terrain.png"
            alt="Espace de travail avec ordinateur, carnets et éléments de design"
            width={1328}
            height={932}
          />
        </Reveal>
      </div>

      <div className={styles.cards}>
        <Reveal className={styles.cardReveal}>
          <article className={styles.card}>
            <h3>Comprendre les métiers</h3>
            <p>
              Travailler au contact de différents acteurs m&apos;a appris à comprendre leurs enjeux métier et
              à les traduire en solutions compréhensibles et exploitables.
            </p>
          </article>
        </Reveal>

        <Reveal className={styles.cardReveal} delay={0.07}>
          <article className={styles.card}>
            <h3>Une vision globale du produit</h3>
            <p>
              J&apos;aborde les projets en prenant en compte l&apos;ensemble de leur
              écosystème : <strong>utilisateurs, métier, produit, technique et contraintes de mise en œuvre.</strong>
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
