import Image from "next/image";
import SectionIntro from "@/components/ui/SectionIntro";
import SecondaryButton from "@/components/ui/SecondaryButton";
import styles from "./NourishingApproach.module.css";

export default function NourishingApproach() {
  return (
    <section className={styles.section} aria-label="Ce qui nourrit mon approche">
      <div className={styles.mainContent}>
        <div className={styles.intro}>
          <SectionIntro
            eyebrow="CE QUI NOURRIT MON APPROCHE"
            title="Une expérience construite sur le terrain"
          >
            <p>
              Au fil de mon parcours, j&apos;ai appris à comprendre des besoins
              parfois peu définis, à naviguer dans des environnements complexes
              et à construire des solutions adaptées aux réalités du terrain.
            </p>
          </SectionIntro>
          <div className={styles.action}>
            <SecondaryButton href="/about">Découvrir mon parcours</SecondaryButton>
          </div>
        </div>

        <div className={styles.image}>
          <Image
            src="/images/portfolio/experience-terrain.png"
            alt="Espace de travail avec ordinateur, carnets et éléments de design"
            width={1328}
            height={932}
          />
        </div>
      </div>

      <div className={styles.cards}>
        <article className={styles.card}>
          <h3>Comprendre les métiers</h3>
          <p>
            Travailler au contact de différents acteurs m&apos;a appris à traduire
            des problématiques métier en solutions compréhensibles et
            exploitables.
          </p>
        </article>

        <article className={styles.card}>
          <h3>Une vision globale du produit</h3>
          <p>
            J&apos;aborde les projets en prenant en compte l&apos;ensemble de leur
            écosystème : <strong>utilisateurs, métier, produit, technique et contraintes de mise en œuvre.</strong>
          </p>
        </article>
      </div>
    </section>
  );
}
