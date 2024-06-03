import { LoadingBar } from '../loading-bar/LoadingBar';
import styles from './header.module.scss';
import { useNavigation } from '@/adapters/hooks/useNavigation';

type HeaderProps = {
  loading: boolean;
};

export const Header = ({ loading }: HeaderProps) => {
  const { navigate } = useNavigation();

  return (
    <header className={styles.header}>
      <LoadingBar loading={loading} />
      <div className={styles.logo}>
        <h1
          className={`pointer ${styles.title}`}
          onClick={() => navigate('/')}
          role="link"
          tabIndex={0}
          aria-label="Go to homepage"
        >
          Music Podcasts.
        </h1>
      </div>
    </header>
  );
};
