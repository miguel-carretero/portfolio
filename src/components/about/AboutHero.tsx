import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Reveal from "@/components/ui/Reveal";
import SecondaryButton from "@/components/ui/SecondaryButton";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.hero} aria-labelledby="about-hero-title">
      <div className={styles.inner}>
        <Reveal className={styles.content}>
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
            <PrimaryButton href="/miguel-carretero-cv.pdf">
              Télécharger mon CV
            </PrimaryButton>
          </div>
        </Reveal>

        <div className={styles.portrait}>
          <Reveal className={styles.portraitReveal} variant="visual" delay={0.08}>
            <Image
              src="/images/portfolio/miguel-portrait.jpg"
              alt="Portrait de Miguel Carretero"
              fill
              priority
              sizes="(max-width: 759px) 300px, (max-width: 1100px) 460px, 460px"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
