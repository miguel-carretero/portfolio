import Image from "next/image";
import ExplorationCard from "@/components/ui/ExplorationCard";
import Reveal from "@/components/ui/Reveal";
import SectionIntro from "@/components/ui/SectionIntro";
import SecondaryButton from "@/components/ui/SecondaryButton";
import styles from "./ProjectExplorations.module.css";

const portfolioPath = "/images/portfolio/";

export default function ProjectExplorations() {
  return (
    <section className={styles.section} aria-label="Ce que ce projet m’a permis d’explorer">
      <Reveal className={styles.intro}>
        <SectionIntro
          eyebrow=""
          title="Ce que ce projet m’a permis d’explorer"
        >
          {null}
        </SectionIntro>
      </Reveal>

      <div className={styles.cards}>
        <Reveal className={styles.cardReveal}>
          <ExplorationCard icon={`${portfolioPath}Brain.svg`} title="Product Thinking">
          <div className={styles.thinkingVisual}>
            <div className={styles.thinkingStep}>
              <Image src={`${portfolioPath}Search.svg`} alt="" width={36} height={36} />
              <div>
                <h4>Identifier le problème</h4>
              </div>
            </div>
            <div className={styles.thinkingStep}>
              <Image src={`${portfolioPath}Eye.svg`} alt="" width={36} height={36} />
              <div>
                <h4>Définir une vision</h4>
              </div>
            </div>
            <div className={styles.thinkingStep}>
              <Image src={`${portfolioPath}Idea.svg`} alt="" width={36} height={36} />
              <div>
                <h4>Concevoir la solution</h4>
              </div>
            </div>
          </div>
          <p className={styles.cardText}>
            Croiser besoins utilisateurs, contraintes métier et objectifs du produit pour faire émerger
            une direction claire avant de passer à la conception.
          </p>
          </ExplorationCard>
        </Reveal>

        <Reveal className={styles.cardReveal} delay={0.07}>
          <ExplorationCard icon={`${portfolioPath}Figma.svg`} title="Design System">
          <div className={styles.designSystemVisual}>
            <div className={styles.colorRow}>
              <p className={styles.visualLabel}>Couleurs</p>
              <div className={styles.swatches}>
                <span className={styles.primaryColor} />
                <span className={styles.secondaryColor} />
                <span className={styles.softColor} />
                <span className={styles.neutralColor} />
                <span className={styles.redColor} />
                <span className={styles.yellowColor} />
                <span className={styles.purpleColor} />
              </div>
            </div>
            <div className={styles.uiSamples}>
              <p className={styles.visualLabel}>Composant</p>
              <button className={styles.sampleButton} type="button">
                Button
              </button>
              <div className={styles.sampleCard}>Card</div>
              <div className={styles.sampleInput}>Input</div>
            </div>
            <div className={styles.typeSample}>
              <p className={styles.visualLabel}>Typographie</p>
              <div className={styles.typeWeights}>
                <span> Aa </span>
                <span> Aa </span>
                <strong> Aa </strong>
                <strong> Aa </strong>
              </div>
            </div>
          </div>
          <p className={styles.cardText}>
            Poser des fondations cohérentes pour rendre le produit plus lisible, plus stable et plus facile à faire évoluer.
          </p>
          </ExplorationCard>
        </Reveal>

        <Reveal className={styles.cardReveal} delay={0.14}>
          <ExplorationCard icon={`${portfolioPath}Source Code.svg`} title="Design & Front-End">
          <div className={styles.frontEndVisual}>
            <div className={styles.figmaPanel}>
              <span className={styles.panelLabel}>Composant Figma</span>
              <div className={styles.figmaComponent}>
                <Image src={`${portfolioPath}Figma-mini.svg`} alt="" width={20} height={20} />
                <Image
                  src={`${portfolioPath}line & Area.png`}
                  alt="Aperçu d’un composant graphique Figma"
                  width={170}
                  height={66}
                />
                <p>
                  Type : <strong>Linear Gradient</strong>
                  <br />
                  Color : <strong>#358453</strong>
                  <br />
                  Opacity : <strong>45% → 0%</strong>
                  <br />
                  Angle : <strong>90°</strong>
                </p>
              </div>
            </div>
            <span className={styles.directionArrow} aria-hidden="true">
              →
            </span>
            <div className={styles.implementationPanel}>
              <span className={styles.panelLabel}>Implémentation</span>
              <Image
                src={`${portfolioPath}implémentation.jpg`}
                alt="Aperçu de l’implémentation Front-End"
                width={168}
                height={199}
              />
            </div>
          </div>
          <p className={styles.cardText}>
            Concevoir des interfaces réalisables en gardant à l&apos;esprit les contraintes de développement.
          </p>
          </ExplorationCard>
        </Reveal>
      </div>

      <div className={styles.cta}>
        <SecondaryButton href="/trademind">Découvrir TradeMind</SecondaryButton>
      </div>
    </section>
  );
}
