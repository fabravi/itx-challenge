import { useLoaderData } from 'react-router-dom';
import styles from './episodes.module.scss';
import { EpisodeItem } from '@/components/episode-item/EpisodeItem';
import { useNavigation } from '@/adapters/hooks/useNavigation';

export const EpisodesPage = () => {
  const { navigate } = useNavigation();
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
