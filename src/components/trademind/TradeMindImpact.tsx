import Reveal from "@/components/ui/Reveal";
import styles from "./TradeMindImpact.module.css";

const impacts = [
  {
    title: "Accompagné",
    description:
      "Bénéficier d'un regard extérieur pour prendre du recul sur ses décisions d'investissement.",
  },
  {
    title: "Moins émotionnel",
    description:
      "Identifier les réactions impulsives afin de favoriser des décisions plus rationnelles.",
  },
  {
    title: "Plus discipliné",
    description:
      "Développer des habitudes d'investissement cohérentes sur le long terme.",
  },
  {
    title: "Plus confiant",
    description:
      "Mieux comprendre ses comportements pour investir avec davantage de confiance.",
  },
];

export default function TradeMindImpact() {
  return (
    <section className={styles.section} aria-labelledby="trademind-impact-title">
      <Reveal className={styles.intro}>
        <p className={styles.eyebrow}>LA TRANSFORMATION RECHERCHÉE</p>
        <h2 id="trademind-impact-title" className={styles.title}>
          Vers une prise de décision plus réfléchie
        </h2>
        <p className={styles.description}>
          TradeMind accompagne progressivement l&apos;investisseur vers des
          décisions plus sereines, plus disciplinées et plus conscientes.
        </p>
      </Reveal>

      <div className={styles.grid}>
        {impacts.map((impact, index) => (
          <Reveal className={styles.cardReveal} delay={index * 0.08} key={impact.title}>
            <article className={styles.card}>
            <h3>{impact.title}</h3>
            <p>{impact.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
