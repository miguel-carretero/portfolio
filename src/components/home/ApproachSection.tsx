"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import SectionIntro from "@/components/ui/SectionIntro";
import styles from "./ApproachSection.module.css";

const portfolioPath = "/images/portfolio/";

export default function ApproachSection() {
  const shouldReduceMotion = useReducedMotion();
  const finalState = { opacity: 1, scale: 1 };
  const initialState = shouldReduceMotion ? false : { opacity: 0, scale: 0.985 };

  return (
    <section className={styles.section} aria-label="Mon approche">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <SectionIntro
            eyebrow="MON APPROCHE"
            title="Une façon de concevoir qui relie design, métier et technique."
          >
            <p>
              <strong>Mon approche repose sur une conviction simple :</strong>{" "}
              les meilleurs produits naissent de la compréhension des besoins,
              de la collaboration entre les équipes et d&apos;une vision qui relie
              design, métier et technique.
            </p>
            <p>
              Cette manière de travailler guide aujourd&apos;hui chacune de mes
              décisions de conception.
            </p>
          </SectionIntro>
        </div>

        <div className={styles.diagram} aria-label="Métier, Design et Technique au service de la Vision Produit">
          <motion.div
            className={`${styles.circle} ${styles.business}`}
            initial={initialState}
            whileInView={shouldReduceMotion ? undefined : finalState}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image src={`${portfolioPath}Business.svg`} alt="" width={62} height={62} />
            <span>Métier</span>
          </motion.div>
          <motion.div
            className={`${styles.circle} ${styles.design}`}
            initial={initialState}
            whileInView={shouldReduceMotion ? undefined : finalState}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.52, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image src={`${portfolioPath}Pen Tool.svg`} alt="" width={62} height={62} />
            <span>Design</span>
          </motion.div>
          <motion.div
            className={`${styles.circle} ${styles.technical}`}
            initial={initialState}
            whileInView={shouldReduceMotion ? undefined : finalState}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.52, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image src={`${portfolioPath}Source Code xl.svg`} alt="" width={62} height={62} />
            <span>Technique</span>
          </motion.div>
          <motion.div
            className={styles.productVision}
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
            whileInView={shouldReduceMotion ? undefined : finalState}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.52, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image src={`${portfolioPath}Target.svg`} alt="" width={52} height={52} />
            <span>Vision Produit</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
