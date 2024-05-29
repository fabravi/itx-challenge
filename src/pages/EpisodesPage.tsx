import { Link } from 'react-router-dom';
import { mockEpisode } from '../mocks';
import styles from './episodes.module.scss';

export const EpisodesPage = () => {
  const episodes = Array(10).fill(mockEpisode);

  return (
    <ul className={styles.list}>
      {episodes?.map((item) => (
        <Link
          to={`/podcast/${item.id}/episode/${item.chapterId}`}
          key={item.chapterId}
        >
          <li key={item.trackId}>
            <img src={item.artworkUrl160} alt={item.collectionName} />
            <div>
              <h2>{item.trackName}</h2>
              <p>{item.artistViewUrl}</p>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
};
