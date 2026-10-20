import type { Metadata } from "next";
import InnSightVideo from "@/components/thelab/InnSightVideo";
import InnSightGallery from "@/components/thelab/InnSightGallery";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import styles from "./TheLab.module.css";

export const metadata: Metadata = {
  title: "The Lab — Miguel Carretero, Product Designer",
  description:
    "Concepts personnels et expérimentations produit de Miguel Carretero. Découvrez InnSight, un concept de pilotage hôtelier.",
  alternates: {
    canonical: "https://www.miguelcarretero.fr/thelab",
  },
  openGraph: {
    title: "The Lab — Miguel Carretero, Product Designer",
    description:
      "Concepts personnels et expérimentations produit, avec InnSight, un concept de pilotage hôtelier.",
    url: "https://www.miguelcarretero.fr/thelab",
    siteName: "Miguel Carretero — Product Designer",
    locale: "fr_FR",
    type: "website",
  },
};

export default function TheLabPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className={styles.introduction} aria-labelledby="thelab-title">
        <h1 id="thelab-title" className={styles.title}>The Lab</h1>
        <p className={styles.introductionCopy}>
          Mon laboratoire d’idées et d’expérimentations autour du produit et des interfaces.
          Des concepts personnels pour explorer des besoins métier, tester des outils et
          faire évoluer ma pratique de designer.
        </p>
      </section>

      <section className={styles.project} aria-labelledby="innsight-title">
        <div className={styles.presentation}>
          <div className={styles.content}>
            <div className={styles.heading}>
              <p className={styles.eyebrow}>
                PILOTAGE HÔTELIER — <strong>InnSight</strong>
              </p>
              <h2 id="innsight-title" className={styles.projectTitle}>
                Quel établissement demande votre attention, et pourquoi ?
              </h2>
            </div>
            <div className={styles.description}>
              <p>
                J’ai imaginé InnSight pour aider la direction d’un groupe hôtelier à repérer
                les établissements qui demandent son attention. La vue d’ensemble permet de
                comparer leurs performances, puis d’examiner les variations d’occupation et
                de prix moyen au fil des jours.
              </p>
              <p>
                Un assistant IA accompagne cette lecture : il met en évidence les écarts et
                propose des points à vérifier avec les équipes locales, pour passer du
                constat au suivi.
              </p>
            </div>
            <div className={styles.details}>
              <p className={styles.role}>Cadrage produit · UX/UI · Design System</p>
              <p>Concept personnel · Données fictives</p>
            </div>
          </div>
          <div className={styles.visual}>
            <InnSightVideo />
          </div>
        </div>
      </section>
      <section className={styles.conception} aria-labelledby="innsight-conception-title">
        <div className={styles.conceptionContent}>
          <div className={styles.conceptionIntro}>
            <p className={`${styles.eyebrow} ${styles.conceptionEyebrow}`}>MA DÉMARCHE</p>
            <h2 id="innsight-conception-title" className={styles.conceptionTitle}>
              Du scénario métier aux détails de l’interface.
            </h2>
            <div className={styles.conceptionDescription}>
              <p>
                J’ai construit un parcours qui relie la vue groupe, l’analyse d’un
                établissement et une conversation avec l’assistant. Les mêmes indicateurs
                et repères restent présents d’un écran à l’autre. Les{" "}
                <strong>composants, variables et états partagés</strong> dans Figma assurent
                leur cohérence.
              </p>
              <p>
                Ce projet m’a aussi permis d’expérimenter une{" "}
                <strong>conception assistée par IA</strong> :
                Codex, connecté à Figma via MCP, m’a accompagné dans la réalisation des
                maquettes et leurs ajustements. <strong>J’ai orienté les propositions</strong>{" "}
                et affiné les interfaces au fil des revues. La démonstration animée a ensuite été
                réalisée avec Remotion.
              </p>
            </div>
            <p className={styles.tools}>Outils : Figma · Codex / MCP · Remotion</p>
          </div>
          <InnSightGallery />
        </div>
      </section>

      <section className={styles.conclusion} aria-labelledby="thelab-conclusion-title">
        <div className={styles.conclusionContent}>
          <h2 id="thelab-conclusion-title" className={styles.conclusionTitle}>
            La suite s’expérimente ici.
          </h2>
          <div className={styles.conclusionCopy}>
            <p>
              D’autres concepts viendront enrichir ce laboratoire au fil de mes explorations.
            </p>
            <p>
              Vous cherchez un designer pour relier besoins métier, interfaces et réalisation ?
              Échangeons sur votre projet.
            </p>
          </div>
        </div>
        <a className={styles.email} href="mailto:ma-design@outlook.fr">
          ma-design@outlook.fr
        </a>
        <div className={styles.actions}>
          <SecondaryButton
            href="https://www.linkedin.com/in/miguel-carretero-design"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </SecondaryButton>
          <PrimaryButton href="/miguel-carretero-cv.pdf">
            Télécharger mon CV
          </PrimaryButton>
        </div>
      </section>
    </main>
  );
}
