import Image from "next/image";
import type { ReactNode } from "react";
import styles from "./PrimaryButton.module.css";

type PrimaryButtonProps = {
  children: ReactNode;
  download?: boolean;
  href: string;
};

export default function PrimaryButton({ children, download, href }: PrimaryButtonProps) {
  return (
    <a className={styles.button} href={href} download={download}>
      {children}
      <Image
        src="/images/portfolio/hero-download-icon.png"
        alt=""
        width={20}
        height={20}
        aria-hidden="true"
      />
    </a>
  );
}
