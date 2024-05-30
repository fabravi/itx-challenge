import { useRouteError } from 'react-router-dom';
import styles from './error.module.scss';

export default function ErrorPage() {
  const error: { message?: string } = useRouteError() as { message?: string };
  console.error(error || 'An unexpected error has occurred');

  return (
    <div className={styles.error}>
      <h1>Oops!</h1>
      {error?.message ? <p>{error.message}</p> : <p>Page Not Found</p>}
    </div>
  );
}
