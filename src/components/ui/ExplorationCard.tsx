import Image from "next/image";
import type { ReactNode } from "react";
import styles from "./ExplorationCard.module.css";

type ExplorationCardProps = {
  className?: string;
  icon: string;
  title: string;
  children: ReactNode;
};

export default function ExplorationCard({
  className,
  icon,
  title,
  children,
}: ExplorationCardProps) {
  return (
    <article className={`${styles.card} ${className ?? ""}`}>
      <header className={styles.header}>
        <Image src={icon} alt="" width={43} height={43} />
        <h3>{title}</h3>
      </header>
      <div className={styles.content}>{children}</div>
    </article>
  );
}
