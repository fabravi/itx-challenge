import { useLoaderData } from 'react-router-dom';
import styles from './episodes.module.scss';
import { EpisodeItem } from '@/components/episode-item/EpisodeItem';
import { useNavigation } from '@/adapters/hooks/useNavigation';

export const EpisodesPage = () => {
  const { navigate } = useNavigation();
  const episodes = useLoaderData() as Episode[];

  if (!episodes) return null;

  return (
    <>
      <div className={styles.count}>
        Episodes: {episodes[0].trackCount || episodes?.length}
      </div>
      <ul className={styles.list}>
        {episodes?.map((item) => {
          const {
            duration: durationMs,
            releaseDate: releaseDateRaw,
            id,
            ...rest
          } = item;
          const releaseDate = new Date(releaseDateRaw).toLocaleDateString();
          const duration = `${Math.floor(durationMs / 60 / 1000)} min`;

          return (
            <EpisodeItem
              key={id}
              {...rest}
              id={id}
              releaseDate={releaseDate}
              duration={duration}
              navigate={navigate}
            />
          );
        })}
      </ul>
    </>
  );
};
