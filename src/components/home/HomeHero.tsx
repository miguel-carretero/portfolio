import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import styles from "./HomeHero.module.css";

const colorBlocks = [
  { className: styles.primaryBlock, label: "Primary", value: "#427DAD" },
  { className: styles.secondaryBlock, label: "Secondary", value: "#337C89" },
  { className: styles.backgroundBlock, label: "Background", value: "#FFB63B" },
  { className: styles.highlightBlock, label: "Highlight", value: "#E58F91" },
];

export default function HomeHero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.colorBlocks} aria-hidden="true">
        {colorBlocks.map((block) => (
          <div key={block.label} className={`${styles.colorBlock} ${block.className}`}>
            <span>{block.label}</span>
            <span>{block.value}</span>
          </div>
        ))}
      </div>

      <div className={styles.content}>
        <p className={styles.eyebrow}>DESIGN · MÉTIER · TECHNIQUE</p>
        <h1 id="hero-title" className={styles.title}>
          Comprendre les besoins avant de concevoir les <span>solutions</span>
        </h1>
        <p className={styles.description}>
          J&apos;aide les équipes à concevoir des produits numériques en combinant expérience métier,
          culture design et pratique Front-End.
        </p>
        <blockquote className={styles.experience}>
          Près de 20 ans d&apos;expérience professionnelle nourrissent aujourd&apos;hui ma vision du design.
        </blockquote>
        <div className={styles.actions}>
          <SecondaryButton href="/trademind">Découvrir TradeMind</SecondaryButton>
          <PrimaryButton href="/miguel-carretero-cv.pdf" download>
            Télécharger mon CV
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
