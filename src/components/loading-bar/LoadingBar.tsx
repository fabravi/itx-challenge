import styles from './loadingbar.module.scss';

type LoadingBarProps = {
  className?: string;
};

export const LoadingBar = ({ className }: LoadingBarProps) => {
  return (
    <div className={`${styles['loading-bar']} ${className}`}>
      <div className={styles['loading-bar-progress']} />
    </div>
  );
};
