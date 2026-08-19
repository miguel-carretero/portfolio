import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./SecondaryButton.module.css";

type SecondaryButtonProps = {
  children: ReactNode;
  href: string;
};

export default function SecondaryButton({ children, href }: SecondaryButtonProps) {
  return (
    <Link className={styles.button} href={href}>
      {children}
    </Link>
  );
}
