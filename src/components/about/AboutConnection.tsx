import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import styles from "./AboutConnection.module.css";

export default function AboutConnection() {
  return (
    <section className={styles.section} aria-labelledby="about-connection-title">
      <div className={styles.inner}>
        <Reveal className={styles.heading}>
          <h2 id="about-connection-title">Relier métier, design et technique</h2>
        </Reveal>

        <Reveal className={styles.visual} variant="visual" delay={0.08}>
          <Image
            src="/images/portfolio/link work design tech.png"
            alt="Schéma reliant les besoins métier, le design, la technique et le produit"
            width={1180}
            height={824}
            sizes="(max-width: 1100px) 100vw, 520px"
          />
        </Reveal>

        <Reveal className={styles.copy} delay={0.12}>
          <p>
            Mon parcours m&apos;a conduit à travailler à l&apos;<strong>
              intersection du design, de la technique et des enjeux métier.
            </strong>{" "}
            Cette position particulière m&apos;a permis de développer une{" "}
            <strong>compréhension plus globale des projets</strong> et de collaborer avec{" "}
            <strong>des profils aux expertises variées.</strong>
          </p>
          <p>
            J&apos;ai appris à comprendre leurs contraintes respectives, à{" "}
            <strong>
              faciliter le dialogue entre ces différents univers et à faire le lien entre les
              besoins utilisateurs, les enjeux métier et les réalités techniques.
            </strong>
          </p>
          <p>
            Cette vision transversale me permet aujourd&apos;hui de contribuer à la conception de
            solutions plus cohérentes et plus pertinentes.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
