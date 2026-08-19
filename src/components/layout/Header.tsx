"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Header.module.css";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/trademind", label: "TradeMind" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/" aria-label="Accueil Miguel Carretero">
        <Image
          src="/images/portfolio/mac-logo.svg"
          alt="Miguel Carretero"
          width={128}
          height={72}
          priority
        />
      </Link>

      <nav
        id="mobile-navigation"
        className={`${styles.navigation} ${isMenuOpen ? styles.navigationOpen : ""}`}
        aria-label="Navigation principale"
      >
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              className={`${styles.navigationLink} ${isActive ? styles.active : ""}`}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          );
        })}
        <a
          className={styles.mobileCvLink}
          href="/miguel-carretero-cv.pdf"
          download
          onClick={() => setIsMenuOpen(false)}
        >
          Télécharger mon CV
          <Image
            src="/images/portfolio/download-icon.png"
            alt=""
            width={18}
            height={18}
            aria-hidden="true"
          />
        </a>
      </nav>

      <a className={styles.cvLink} href="/miguel-carretero-cv.pdf" download>
        Télécharger mon CV
        <Image
          src="/images/portfolio/download-icon.png"
          alt=""
          width={18}
          height={18}
          aria-hidden="true"
        />
      </a>

      <button
        className={styles.menuButton}
        type="button"
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
