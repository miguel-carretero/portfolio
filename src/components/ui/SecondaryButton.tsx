import Link from "next/link";
import type { ReactNode } from "react";
import hoverStyles from "./ButtonHover.module.css";
import styles from "./SecondaryButton.module.css";

type SecondaryButtonProps = {
  children: ReactNode;
  href: string;
  rel?: string;
  target?: string;
};

export default function SecondaryButton({
  children,
  href,
  rel,
  target,
}: SecondaryButtonProps) {
  return (
    <Link className={`${styles.button} ${hoverStyles.buttonHover}`} href={href} rel={rel} target={target}>
      <span className={hoverStyles.content}>{children}</span>
    </Link>
  );
}
