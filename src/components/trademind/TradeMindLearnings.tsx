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
          Ce projet m’a confirmé que le Product Design ne s’arrête pas aux interfaces.
          Il faut aussi <strong>comprendre les besoins</strong>, tenir compte des contraintes et donner
          une direction cohérente au produit.
        </p>
        <p>
          En réfléchissant à la commercialisation de TradeMind, j’ai approfondi les
          questions de <strong>faisabilité, de différenciation et de modèle économique</strong>. Cette
          exploration m’a permis de prendre du recul et d’envisager d’autres possibilités
          pour le projet.
        </p>
      </Reveal>
    </section>
  );
}
