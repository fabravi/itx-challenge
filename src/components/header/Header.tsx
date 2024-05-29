import styles from './header.module.scss';

export const Header = () => {
  console.log(styles);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Podcaster</h1>
    </div>
  );
};
