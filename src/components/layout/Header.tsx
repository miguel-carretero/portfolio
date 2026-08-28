"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import hoverStyles from "../ui/ButtonHover.module.css";
import styles from "./Header.module.css";

const navigationItems = [
  { href: "/", label: "Home", mobileLabel: "Home" },
  { href: "/trademind", label: "TradeMind", mobileLabel: "TradeMind" },
  { href: "/about", label: "About", mobileLabel: "À propos" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const updateScrolledState = () => {
      setIsScrolled(window.scrollY > 32);
    };

    updateScrolledState();
    window.addEventListener("scroll", updateScrolledState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolledState);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    firstMenuLinkRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <Link className={styles.logo} href="/" aria-label="Accueil Miguel Carretero">
        <span className={styles.logoVisual}>
          <Image
            className={styles.fullLogo}
            src="/images/portfolio/mac-logo.svg"
            alt="Miguel Carretero"
            width={128}
            height={72}
            priority
          />
          <Image
            className={styles.monogramLogo}
            src="/images/portfolio/MAC 2.svg"
            alt=""
            width={118}
            height={38}
            aria-hidden="true"
            unoptimized
          />
        </span>
      </Link>

      <nav
        id="mobile-navigation"
        className={`${styles.navigation} ${isMenuOpen ? styles.navigationOpen : ""}`}
        aria-label="Navigation principale"
      >
        {navigationItems.map((item, index) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              className={`${styles.navigationLink} ${isActive ? styles.active : ""}`}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              onClick={() => setIsMenuOpen(false)}
              ref={index === 0 ? firstMenuLinkRef : undefined}
            >
              <span className={styles.desktopLabel}>{item.label}</span>
              <span className={styles.mobileLabel}>{item.mobileLabel}</span>
            </Link>
          );
        })}
      </nav>

      <a className={`${styles.cvLink} ${hoverStyles.buttonHover}`} href="/miguel-carretero-cv.pdf" download>
        <span className={hoverStyles.content}>Télécharger mon CV</span>
        <span className={`${styles.downloadIcon} ${hoverStyles.content}`}>
          <Image
            className={styles.downloadIconGreen}
            src="/images/portfolio/download-icon.png"
            alt=""
            width={18}
            height={18}
            aria-hidden="true"
          />
          <Image
            className={styles.downloadIconWhite}
            src="/images/portfolio/hero-download-icon.png"
            alt=""
            width={18}
            height={18}
            aria-hidden="true"
          />
        </span>
      </a>

      <button
        className={styles.menuButton}
        type="button"
        ref={menuButtonRef}
        aria-label={isMenuOpen ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"}
        aria-controls="mobile-navigation"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
