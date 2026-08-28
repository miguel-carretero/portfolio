import PrimaryButton from "@/components/ui/PrimaryButton";
import Reveal from "@/components/ui/Reveal";
import SecondaryButton from "@/components/ui/SecondaryButton";
import styles from "./ClosingCta.module.css";

export default function ClosingCta() {
  return (
    <section className={styles.section} aria-labelledby="closing-cta-title">
      <Reveal className={styles.content}>
        <p className={styles.eyebrow}>ET MAINTENANT ?</p>
        <h2 id="closing-cta-title" className={styles.title}>
          Construisons la suite
        </h2>
        <p className={styles.description}>
          Si ma démarche, mon parcours ou ma vision du produit résonnent avec vos enjeux,
          <br />
          je serais ravi d&apos;échanger avec vous.
        </p>
        <a className={styles.email} href="mailto:ma-design@outlook.fr">
          ma-design@outlook.fr
        </a>
        <div className={styles.actions}>
          <SecondaryButton
            href="https://www.linkedin.com/in/miguel-angel-carretero-000b1747"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </SecondaryButton>
          <PrimaryButton href="/miguel-carretero-cv.pdf">
            Télécharger mon CV
          </PrimaryButton>
        </div>
      </Reveal>
    </section>
  );
}
