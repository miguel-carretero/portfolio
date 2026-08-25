import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.hero} aria-labelledby="about-hero-title">
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>À propos</p>
          <h1 id="about-hero-title" className={styles.title}>
            Une vision du design
            <br />
            construite par l&apos;expérience
          </h1>
          <p className={styles.description}>
            Au fil de mon parcours, j&apos;ai évolué entre design, technique et enjeux
            métier. Cette diversité d&apos;expériences nourrit aujourd&apos;hui ma manière
            de concevoir les produits et les services numériques.
          </p>
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

        <div
          className={styles.portrait}
          role="img"
          aria-label="Emplacement réservé au portrait de Miguel Carretero"
        >
          <span aria-hidden="true">Portrait</span>
        </div>
      </div>
    </section>
  );
}
