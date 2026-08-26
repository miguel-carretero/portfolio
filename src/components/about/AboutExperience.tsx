"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import styles from "./AboutExperience.module.css";

const timelineSteps = [
  {
    icon: "Pen Tool about.svg",
    title: "Design",
    description: "Imaginer des interfaces intuitives.",
  },
  {
    icon: "Html 5.svg",
    title: "Intégration",
    description: "Transformer les maquettes en produits fonctionnels.",
  },
  {
    icon: "Source Code about.svg",
    title: "Front-End",
    description:
      "Concevoir et développer des interfaces en intégrant les contraintes techniques du Front-End.",
  },
  {
    icon: "Bright Mind about.svg",
    title: "Produit",
    description: "Comprendre les besoins avant de concevoir les solutions.",
  },
];

export default function AboutExperience() {
  const shouldReduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;
  const editorialInitial = shouldReduceMotion ? false : { opacity: 0, y: 16 };
  const stepInitial = shouldReduceMotion ? false : { opacity: 0, y: 10, scale: 0.985 };

  return (
    <section className={styles.section} aria-labelledby="about-experience-title">
      <motion.div
        className={styles.intro}
        initial={editorialInitial}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.54, ease }}
      >
        <h2 id="about-experience-title">Une expérience construite sur le terrain</h2>
        <p>
          <strong>Depuis près de 20 ans,</strong> j&apos;évolue dans l&apos;univers du numérique à
          travers des contextes, des projets et des responsabilités variés.
        </p>
        <p>
          Au fil de mon parcours, j&apos;ai appris à m&apos;adapter à des environnements différents,
          à élargir progressivement mon champ de compétences et à évoluer du design vers une{" "}
          <strong>approche plus globale du produit.</strong>
        </p>
        <p>
          Cette diversité d&apos;expériences m&apos;a permis de développer une{" "}
          <strong>vision plus transversale des projets</strong>, où{" "}
          <strong>compréhension des besoins</strong>, contraintes techniques et enjeux métier
          sont intimement liés.
        </p>
        <p>
          Aujourd&apos;hui, cette expérience nourrit ma manière d&apos;aborder les sujets avec davantage
          de recul, de <strong>pragmatisme</strong> et de confiance.
        </p>
      </motion.div>

      <div className={styles.timeline}>
        <div className={styles.dates} aria-hidden="true">
          <span>2006</span>
          <span>2026</span>
        </div>

        <motion.div
          className={`${styles.track} ${styles.desktopTrack}`}
          aria-hidden="true"
          initial={shouldReduceMotion ? false : { opacity: 0, scaleX: 0 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.32, ease }}
        />
        <motion.div
          className={`${styles.track} ${styles.mobileTrack}`}
          aria-hidden="true"
          initial={shouldReduceMotion ? false : { opacity: 0, scaleY: 0 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, scaleY: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.32, ease }}
        />

        <ol className={styles.steps}>
          {timelineSteps.map((step, index) => (
            <motion.li
              className={styles.step}
              key={step.title}
              initial={stepInitial}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.42, delay: 0.14 + index * 0.13, ease }}
            >
              <span className={styles.point} aria-hidden="true" />
              <span className={styles.connector} aria-hidden="true" />
              <span className={styles.icon}>
                <Image src={`/images/portfolio/${step.icon}`} alt="" width={42} height={42} />
              </span>
              <motion.div
                className={styles.copy}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 6 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.36, delay: 0.22 + index * 0.13, ease }}
              >
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
