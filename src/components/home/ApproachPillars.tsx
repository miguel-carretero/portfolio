import Image from "next/image";
import SectionIntro from "@/components/ui/SectionIntro";
import styles from "./ApproachPillars.module.css";

const portfolioPath = "/images/portfolio/";

type Pillar = {
  icon: string;
  title: string;
  image?: string;
  alt?: string;
  description: string;
};

const pillars: Pillar[] = [
  {
    icon: "Bright Mind.svg",
    title: "Comprendre avant de concevoir",
    image: "understand-before-design.png",
    alt: "Illustration de l’analyse des besoins avant la conception",
    description:
      "Analyser les besoins utilisateurs, le contexte et les enjeux métier avant de passer à la conception.",
  },
  {
    icon: "Brainstorm Skill.svg",
    title: "Transformer la complexité en solution claires",
    image: "transform-complexity.png",
    alt: "Illustration de la simplification d’un parcours complexe",
    description:
      "Structurer l’information, simplifier les parcours et concevoir des expériences intuitives.",
  },
  {
    icon: "Group Task.svg",
    title: "Relier le design à la réalisation",
    image: "connect-design-to-delivery.png",
    alt: "Illustration de la collaboration entre design et développement",
    description:
      "Collaborer avec les développeurs pour concevoir des interfaces réalistes, cohérentes et prêtes à être développées.",
  },
];

export default function ApproachPillars() {
  return (
    <section className={styles.section} aria-label="Les trois piliers de ma démarche">
      <div className={styles.intro}>
        <SectionIntro eyebrow="" title="Les trois piliers de ma démarche">
          {null}
        </SectionIntro>
      </div>

      <div className={styles.cards}>
        {pillars.map((pillar) => (
          <article className={styles.card} key={pillar.title}>
            <header className={styles.header}>
              <span className={styles.iconWrap}>
                <Image src={`${portfolioPath}${pillar.icon}`} alt="" width={43} height={43} />
              </span>
              <h3>{pillar.title}</h3>
            </header>

            {pillar.image && pillar.alt ? (
              <div className={styles.visual}>
                <Image
                  src={`${portfolioPath}${pillar.image}`}
                  alt={pillar.alt}
                  width={808}
                  height={378}
                />
              </div>
            ) : null}

            <p>{pillar.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
