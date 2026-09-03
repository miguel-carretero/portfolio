import Image from "next/image";
import hoverStyles from "../ui/ButtonHover.module.css";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.identity}>
          <div className={styles.identityText}>
            <p className={styles.name}>Miguel Angel Carretero</p>
            <p className={styles.role}>UI &amp; Product Designer</p>
            <a className={styles.email} href="mailto:ma-design@outlook.fr">
              ma-design@outlook.fr
            </a>
          </div>
          <p className={styles.copyright}>© 2026</p>
        </div>

        <p className={styles.quote}>“ Comprendre les besoins avant de concevoir les solutions ”</p>

        <div className={styles.actions} aria-label="Liens professionnels">
          <a
            className={`${styles.action} ${styles.linkedinAction} ${hoverStyles.buttonHover}`}
            href="https://www.linkedin.com/in/miguel-angel-carretero-000b1747"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profil LinkedIn de Miguel Carretero"
          >
            <span className={hoverStyles.content}>in</span>
          </a>
          <a className={`${styles.action} ${styles.cvAction} ${hoverStyles.buttonHover}`} href="/miguel-carretero-cv.pdf" download>
            <span className={hoverStyles.content}>CV</span>
          </a>
          <a
            className={`${styles.action} ${hoverStyles.buttonHover}`}
            href="https://github.com/miguel-carretero"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profil GitHub de Miguel Carretero"
          >
            <Image
              className={`${styles.githubIcon} ${hoverStyles.content}`}
              src="/images/portfolio/github-icon.png"
              alt=""
              width={40}
              height={40}
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
