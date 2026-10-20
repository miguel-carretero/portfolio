"use client";

import { useEffect, useState } from "react";
import styles from "./BackToTop.module.css";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(
        window.scrollY >= window.innerHeight &&
          document.body.style.overflow !== "hidden",
      );
    };
    const scrollLockObserver = new MutationObserver(updateVisibility);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    scrollLockObserver.observe(document.body, { attributes: true, attributeFilter: ["style"] });

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
      scrollLockObserver.disconnect();
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  const returnToTop = () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("main-content")?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: reducedMotion ? "instant" : "smooth" });
  };

  return (
    <button
      className={styles.button}
      type="button"
      aria-label="Revenir en haut de la page"
      onClick={returnToTop}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
        <path
          d="m6 12 6-6 6 6M12 6v12"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
