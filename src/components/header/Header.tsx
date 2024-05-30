import { LoadingBar } from '../loading-bar/LoadingBar';
import styles from './header.module.scss';
import { useNavigation } from '@/adapters/hooks/useNavigation';

type HeaderProps = {
  loading: boolean;
};

export const Header = ({ loading }: HeaderProps) => {
  const { navigate } = useNavigation();

  return (
    <div className={styles.header}>
      {loading}
      <h1 className={`pointer ${styles.title}`} onClick={() => navigate('/')}>
        Podcasts
      </h1>
      <LoadingBar className={styles.loading} loading={loading} />
    </div>
  );
};
