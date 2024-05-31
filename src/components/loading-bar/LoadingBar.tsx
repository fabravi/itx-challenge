import styles from './loadingbar.module.scss';

type LoadingBarProps = {
  className?: string;
  loading: boolean;
};

export const LoadingBar = ({ className, loading }: LoadingBarProps) => {
  return (
    <div className={`${styles['loading-bar']} ${className}`}>
      <div
        data-testid="loading-bar"
        className={`${styles['loading-bar-progress']} ${loading ? styles.loading : ''}`}
      />
    </div>
  );
};
