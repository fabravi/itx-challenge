import { useEffect } from 'react';
import styles from './header.module.scss';

export const Header = () => {
  useEffect(() => {
    fetch(
      'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className={styles.container}>
      <a href="/">
        <h1 className={styles.title}>Podcasts</h1>
      </a>
    </div>
  );
};
