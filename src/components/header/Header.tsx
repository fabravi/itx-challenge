import { useNavigate } from 'react-router-dom';
import { LoadingBar } from '../loading-bar/LoadingBar';
import styles from './header.module.scss';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <h1 className={`pointer ${styles.title}`} onClick={() => navigate('/')}>
        Podcasts
      </h1>
      <LoadingBar className={styles.loading} />
    </div>
  );
};
