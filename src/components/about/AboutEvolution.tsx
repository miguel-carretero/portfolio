import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import styles from "./AboutEvolution.module.css";

export default function AboutEvolution() {
  return (
    <section className={styles.section} aria-labelledby="about-evolution-title">
      <div className={styles.inner}>
        <Reveal className={styles.heading}>
          <h2 id="about-evolution-title">Une évolution du design vers le produit</h2>
        </Reveal>

        <Reveal className={styles.visual} variant="visual" delay={0.08}>
          <Image
            src="/images/portfolio/evolution about.png"
            alt="Carnet de travail et croquis de conception sur un bureau"
            width={640}
            height={429}
          />
        </Reveal>

        <Reveal className={styles.copy} delay={0.12}>
          <p>
            Mon parcours a débuté autour du <strong>design</strong> et de la{" "}
            <strong>conception d&apos;interfaces.</strong>
          </p>
          <p>
            Avec le temps, je me suis progressivement intéressé à{" "}
            <strong>ce qui se passait avant les écrans</strong> : les{" "}
            <strong>besoins des utilisateurs</strong>, les attentes métier, les objectifs des
            projets et les contraintes qui influencent les décisions.
          </p>
          <p>
            <strong>Comprendre les besoins</strong>, échanger avec les différents acteurs et
            imaginer des solutions sont devenus une part de plus en plus importante de ma
            pratique.
          </p>
          <p>
            Cette évolution m&apos;a naturellement conduit vers une{" "}
            <strong>approche du design davantage centrée sur le produit</strong>, dans laquelle{" "}
            <strong>l&apos;interface n&apos;est qu&apos;une partie d&apos;un ensemble plus large.</strong>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
