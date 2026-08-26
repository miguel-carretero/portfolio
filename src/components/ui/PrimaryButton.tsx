import Image from "next/image";
import type { ReactNode } from "react";
import hoverStyles from "./ButtonHover.module.css";
import styles from "./PrimaryButton.module.css";

type PrimaryButtonProps = {
  children: ReactNode;
  download?: boolean;
  href: string;
};

export default function PrimaryButton({ children, download, href }: PrimaryButtonProps) {
  return (
    <a className={`${styles.button} ${hoverStyles.buttonHover}`} href={href} download={download}>
      <span className={hoverStyles.content}>{children}</span>
      <Image
        className={hoverStyles.content}
        src="/images/portfolio/hero-download-icon.png"
        alt=""
        width={20}
        height={20}
        aria-hidden="true"
      />
    </a>
  );
}
