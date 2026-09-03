import type { ReactNode } from "react";
import styles from "./SectionIntro.module.css";

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
};

export default function SectionIntro({
  eyebrow,
  title,
  children,
}: SectionIntroProps) {
  return (
    <div className={styles.intro}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h2 className={styles.title}>{title}</h2>
      {children ? <div className={styles.content}>{children}</div> : null}
    </div>
  );
}
