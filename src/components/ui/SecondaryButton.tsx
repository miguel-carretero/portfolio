import Link from "next/link";
import type { ReactNode } from "react";
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
    <Link className={styles.button} href={href} rel={rel} target={target}>
      {children}
    </Link>
  );
}
