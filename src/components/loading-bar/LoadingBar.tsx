import styles from './loadingbar.module.scss';

type LoadingBarProps = {
  loading: boolean;
};

export const LoadingBar = ({ loading }: LoadingBarProps) => {
  return (
    <div
      data-testid="loading-bar"
      className={`${styles['loading-bar']} ${loading ? styles.loading : ''}`}
    />
  );
};
