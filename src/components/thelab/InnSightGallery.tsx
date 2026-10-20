"use client";

import Image from "next/image";
import { useState } from "react";
import ImageLightbox, { type LightboxImage } from "@/components/ui/ImageLightbox";
import hoverStyles from "@/components/ui/CardHover.module.css";
import styles from "./InnSightGallery.module.css";

const screens = [
  {
    title: "Vue groupe",
    src: "/images/thelab/innsight-group.png",
    alt: "Vue groupe InnSight : indicateurs et comparaison des performances des établissements",
    width: 1643,
    height: 1119,
  },
  {
    title: "Détail établissement",
    src: "/images/thelab/innsight-detail.png",
    alt: "Détail de Bellevue : évolution du RevPAR, analyse quotidienne et synthèse IA",
    width: 1643,
    height: 1150,
  },
  {
    title: "Assistant IA",
    src: "/images/thelab/innsight-assistant.png",
    alt: "Assistant IA de Bellevue : analyse du recul et points à vérifier avec la direction",
    width: 1643,
    height: 1150,
  },
  {
    title: "Design System",
    src: "/images/thelab/innsight-design-system.png",
    alt: "Design System InnSight : typographie, couleurs, pictogrammes, composants et états",
    width: 1643,
    height: 1119,
  },
];

export default function InnSightGallery() {
  const [selectedImage, setSelectedImage] = useState<LightboxImage | null>(null);

  return (
    <>
      <ul className={styles.grid} aria-label="Les quatre vues InnSight">
        {screens.map((screen) => (
          <li key={screen.src}>
            <button
              className={`${styles.card} ${hoverStyles.cardHover}`}
              type="button"
              aria-label={`Agrandir le visuel ${screen.title}`}
              onClick={() => setSelectedImage(screen)}
            >
              <span className={styles.thumbnail}>
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  width={screen.width}
                  height={screen.height}
                  sizes="(max-width: 389px) calc(100vw - 40px), (max-width: 759px) calc((100vw - 56px) / 2), (max-width: 1100px) calc((100vw - 96px) / 2), (max-width: 1440px) calc((100vw - 216px) / 4), 306px"
                />
              </span>
              <span className={styles.caption}>
                <span>{screen.title}</span>
                <Image src="/images/thelab/expand.svg" alt="" width={20} height={20} />
              </span>
            </button>
          </li>
        ))}
      </ul>
      <ImageLightbox
        key={selectedImage?.src ?? "closed"}
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
}
