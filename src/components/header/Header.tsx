import styles from './header.module.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <h1 className={styles.title}>Podcasts</h1>
      </Link>
    </div>
  );
};
