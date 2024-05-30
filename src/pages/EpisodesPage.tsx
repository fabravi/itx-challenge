import { useLoaderData, useNavigate } from 'react-router-dom';
import styles from './episodes.module.scss';
import { EpisodeItem } from '@/components/episode-item/EpisodeItem';

export const EpisodesPage = () => {
  const navigate = useNavigate();
  const episodes = useLoaderData() as Episode[];

  if (!episodes) return null;

  // TODO: refactor to get details
  return (
    <>
      <div className={styles.count}>
        Episodes: {episodes[0].trackCount || episodes?.length}
      </div>
      <ul className={styles.list}>
        {episodes?.map((item) => (
          <EpisodeItem key={item.id} {...item} navigate={navigate} />
        ))}
      </ul>
    </>
  );
};
