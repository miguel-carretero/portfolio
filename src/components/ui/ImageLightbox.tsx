"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./ImageLightbox.module.css";

export type LightboxImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type ImageLightboxProps = {
  image: LightboxImage | null;
  onClose: () => void;
};

export default function ImageLightbox({ image, onClose }: ImageLightboxProps) {
  const [isClosing, setIsClosing] = useState(false);
  const closeTimeout = useRef<number | null>(null);

  const requestClose = useCallback(() => {
    if (isClosing) {
      return;
    }

    setIsClosing(true);
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const delay = prefersReducedMotion ? 0 : 160;

    closeTimeout.current = window.setTimeout(onClose, delay);
  }, [isClosing, onClose]);

  useEffect(() => {
    if (!image) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
      if (closeTimeout.current !== null) {
        window.clearTimeout(closeTimeout.current);
      }
    };
  }, [image]);

  useEffect(() => {
    if (!image) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        requestClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [image, requestClose]);

  if (!image) {
    return null;
  }

  return (
    <div
      className={`${styles.overlay} ${isClosing ? styles.isClosing : ""}`}
      onClick={requestClose}
    >
      <button
        className={styles.closeButton}
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          requestClose();
        }}
        aria-label="Fermer le visuel grand format"
        autoFocus
      >
        <span className={styles.closeIcon} aria-hidden="true" />
      </button>

      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label={image.alt}
      >
        <Image
          className={styles.image}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(max-width: 759px) calc(100vw - 40px), min(100vw - 96px, 1100px)"
          unoptimized
          priority
          onClick={(event) => event.stopPropagation()}
        />
      </div>
    </div>
  );
}
