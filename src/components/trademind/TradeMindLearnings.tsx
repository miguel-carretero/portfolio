import Reveal from "@/components/ui/Reveal";
import styles from "./TradeMindLearnings.module.css";

export default function TradeMindLearnings() {
  return (
    <section className={styles.section} aria-labelledby="trademind-learnings-title">
      <Reveal className={styles.titleGroup}>
        <p className={styles.eyebrow}>CE QUE J&apos;AI APPRIS</p>
        <h2 id="trademind-learnings-title" className={styles.title}>
          Concevoir un produit, c&apos;est d&apos;abord comprendre les besoins
        </h2>
      </Reveal>

      <Reveal className={styles.content} delay={0.08}>
        <p>
          Ce projet m&apos;a confirmé qu&apos;un bon Product Design ne consiste pas
          uniquement à concevoir des interfaces. Il s&apos;agit avant tout de
          comprendre un problème, construire une vision claire et créer une
          solution cohérente qui apporte une réelle valeur aux utilisateurs.
        </p>
      </Reveal>
    </section>
  );
}
