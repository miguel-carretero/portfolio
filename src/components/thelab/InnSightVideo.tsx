"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./InnSightVideo.module.css";

export default function InnSightVideo() {
  const [hasStarted, setHasStarted] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div>
      <div className={styles.media}>
        {hasStarted ? (
          <video
            className={styles.video}
            src="/videos/thelab/innsight-full-v1.mp4"
            poster="/images/thelab/innsight-full-cropped-poster.png"
            width={1718}
            height={1204}
            controls
            autoPlay
            muted
            playsInline
            preload="none"
            tabIndex={0}
            aria-label="Démonstration InnSight : vue groupe, détail de Bellevue et assistant IA. Vidéo sans son, 32 secondes."
            ref={(video) => video?.focus({ preventScroll: true })}
            onError={() => setHasError(true)}
          >
            Votre navigateur ne peut pas lire cette vidéo.
          </video>
        ) : (
          <button
            className={styles.preview}
            type="button"
            aria-label="Lire la démonstration InnSight"
            onClick={() => setHasStarted(true)}
          >
            <Image
              className={styles.poster}
              src="/images/thelab/innsight-full-cropped-poster.png"
              alt="Vue groupe InnSight : indicateurs et comparaison des performances des établissements"
              width={1718}
              height={1204}
              sizes="(max-width: 759px) calc(100vw - 40px), (max-width: 1100px) calc(100vw - 80px), (max-width: 1440px) calc(100vw - 650px), 790px"
              preload
            />
            <span className={styles.play} aria-hidden="true">
              <Image src="/images/thelab/play.svg" alt="" width={30} height={34} />
            </span>
          </button>
        )}
      </div>
      {hasError && (
        <p className={styles.error} role="alert">
          La vidéo n’a pas pu être chargée.{" "}
          <a href="/videos/thelab/innsight-full-v1.mp4">Ouvrir la vidéo directement</a>.
        </p>
      )}
    </div>
  );
}
