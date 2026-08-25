import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import styles from "./AboutToday.module.css";

export default function AboutToday() {
  return (
    <section className={styles.section} aria-labelledby="about-today-title">
      <div className={styles.inner}>
        <h2 id="about-today-title">Aujourd&apos;hui</h2>
        <div className={styles.copy}>
          <p>
            Je souhaite mettre cette expérience au service de projets qui placent{" "}
            <strong>la compréhension des besoins, la collaboration et la recherche de solutions</strong>{" "}
            au cœur de leur démarche. J&apos;aime concevoir des produits qui relient{" "}
            <strong>vision, expérience utilisateur et réalité technique</strong>, avec une approche{" "}
            <strong>pragmatique et collaborative</strong>.
          </p>
          <p>
            Curieux de nature, je continue à <strong>apprendre</strong>, à <strong>explorer</strong>{" "}
            de nouveaux outils et à faire évoluer ma pratique.
          </p>
        </div>
        <div className={styles.actions}>
          <SecondaryButton
            href="https://www.linkedin.com/in/miguel-angel-carretero-000b1747"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </SecondaryButton>
          <PrimaryButton href="/miguel-carretero-cv.pdf" download>
            Télécharger mon CV
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
