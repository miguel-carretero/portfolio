"use client";

import Image from "next/image";
import { useState } from "react";
import ImageLightbox, { type LightboxImage } from "@/components/ui/ImageLightbox";
import styles from "./TradeMindExperience.module.css";

type ProductScreen = {
  title: string;
  description: string;
  image: string;
  alt: string;
  fullImage: LightboxImage;
};

const productScreens: ProductScreen[] = [
  {
    title: "Dashboard",
    description:
      "Offrir une vue d'ensemble du portefeuille et des premiers indicateurs comportementaux.",
    image: "/images/trademind/dashboard.jpg",
    alt: "Aperçu du tableau de bord TradeMind",
    fullImage: {
      src: "/images/trademind/dashboard screen 2",
      alt: "Vue grand format du tableau de bord TradeMind",
      width: 2160,
      height: 3840,
    },
  },
  {
    title: "Asset Detail",
    description:
      "Comprendre les décisions prises sur chaque position grâce à des données enrichies de contexte.",
    image: "/images/trademind/Asset detail.jpg",
    alt: "Aperçu du détail d'un actif dans TradeMind",
    fullImage: {
      src: "/images/trademind/Asset Detail Screen 2",
      alt: "Vue grand format du détail d'un actif TradeMind",
      width: 1536,
      height: 3072,
    },
  },
  {
    title: "Insights",
    description:
      "Identifier les habitudes, les biais et les comportements qui influencent les décisions d'investissement.",
    image: "/images/trademind/insight.jpg",
    alt: "Aperçu des insights comportementaux TradeMind",
    fullImage: {
      src: "/images/trademind/insight-2",
      alt: "Vue grand format des insights comportementaux TradeMind",
      width: 2160,
      height: 3840,
    },
  },
];

export default function TradeMindExperience() {
  const [selectedImage, setSelectedImage] = useState<LightboxImage | null>(null);

  return (
    <>
      <section className={styles.section} aria-labelledby="trademind-experience-title">
        <div className={styles.intro}>
          <p className={styles.eyebrow}>L&apos;EXPÉRIENCE PRODUIT</p>
          <h2 id="trademind-experience-title" className={styles.title}>
            Une expérience pensée
            <br />
            pour accompagner chaque décision
          </h2>
          <p className={styles.description}>
            Chaque écran répond à un besoin précis tout en contribuant à une
            expérience cohérente centrée sur la compréhension des comportements de
            l&apos;investisseur.
          </p>
        </div>

        <div className={styles.grid}>
          {productScreens.map((screen) => (
            <article className={styles.card} key={screen.title}>
              <button
                className={styles.thumbnail}
                type="button"
                onClick={() => setSelectedImage(screen.fullImage)}
                aria-label={`Ouvrir le visuel grand format ${screen.title}`}
              >
                <Image
                  src={screen.image}
                  alt={screen.alt}
                  width={704}
                  height={652}
                  sizes="(max-width: 759px) calc(100vw - 40px), 33vw"
                />
              </button>
              <h3>{screen.title}</h3>
              <p>{screen.description}</p>
            </article>
          ))}
        </div>
      </section>

      <ImageLightbox
        key={selectedImage?.src ?? "closed"}
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
}
