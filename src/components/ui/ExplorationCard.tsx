import Image from "next/image";
import type { ReactNode } from "react";
import styles from "./ExplorationCard.module.css";

type ExplorationCardProps = {
  icon: string;
  title: string;
  children: ReactNode;
};

export default function ExplorationCard({
  icon,
  title,
  children,
}: ExplorationCardProps) {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <Image src={icon} alt="" width={43} height={43} />
        <h3>{title}</h3>
      </header>
      <div className={styles.content}>{children}</div>
    </article>
  );
}
