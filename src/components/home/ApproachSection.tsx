import Image from "next/image";
import SectionIntro from "@/components/ui/SectionIntro";
import styles from "./ApproachSection.module.css";

const portfolioPath = "/images/portfolio/";

export default function ApproachSection() {
  return (
    <section className={styles.section} aria-label="Mon approche">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <SectionIntro
            eyebrow="MON APPROCHE"
            title="Une façon de concevoir qui relie design, métier et technique."
          >
            <p>
              <strong>Mon approche repose sur une conviction simple :</strong>{" "}
              les meilleurs produits naissent de la compréhension des besoins,
              de la collaboration entre les équipes et d&apos;une vision qui relie
              design, métier et technique.
            </p>
            <p>
              Cette manière de travailler guide aujourd&apos;hui chacune de mes
              décisions de conception.
            </p>
          </SectionIntro>
        </div>

        <div className={styles.diagram} aria-label="Métier, Design et Technique au service de la Vision Produit">
          <div className={`${styles.circle} ${styles.business}`}>
            <Image src={`${portfolioPath}Business.svg`} alt="" width={62} height={62} />
            <span>Métier</span>
          </div>
          <div className={`${styles.circle} ${styles.design}`}>
            <Image src={`${portfolioPath}Pen Tool.svg`} alt="" width={62} height={62} />
            <span>Design</span>
          </div>
          <div className={`${styles.circle} ${styles.technical}`}>
            <Image src={`${portfolioPath}Source Code xl.svg`} alt="" width={62} height={62} />
            <span>Technique</span>
          </div>
          <div className={styles.productVision}>
            <Image src={`${portfolioPath}Target.svg`} alt="" width={52} height={52} />
            <span>Vision Produit</span>
          </div>
        </div>
      </div>
    </section>
  );
}
