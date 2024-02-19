import styles from "./heading.module.scss";

type HeadingProps = {
  title: string;
  paragraph?: string;
};

export const Heading = ({ title, paragraph }: HeadingProps) => (
  <>
    <h2 className={styles.title}>{title}</h2>
    {paragraph && <p className={styles.paragraph}>{paragraph}</p>}
  </>
);
