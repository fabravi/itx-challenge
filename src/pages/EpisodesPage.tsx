import { useNavigate } from 'react-router-dom';
import { mockEpisode } from '../mocks';
import styles from './episodes.module.scss';
import { EpisodeItem } from '@/components/episode-item/EpisodeItem';

export const EpisodesPage = () => {
  const episodes = Array(10).fill(mockEpisode);
  const navigate = useNavigate();

  return (
    <ul className={styles.list}>
      {episodes?.map((item) => (
        <EpisodeItem key={item.id} {...item} navigate={navigate} />
      ))}
    </ul>
  );
};
