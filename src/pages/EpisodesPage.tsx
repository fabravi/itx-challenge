import { useLoaderData } from 'react-router-dom';
import styles from './episodes.module.scss';
import { EpisodeItem } from '@/components/episode-item/EpisodeItem';
import { useNavigation } from '@/adapters/hooks/useNavigation';

export const EpisodesPage = () => {
  const { navigate } = useNavigation();
  const { episodes, count } = useLoaderData() as EpisodesWithCount;

  return (
    <>
      <div className={styles.count}>
        <strong>{`${count} Episode${count === 1 ? '' : 's'}`} </strong>
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
          const duration = Math.floor(Number(durationMs) / 60000);
          const durationStr = isNaN(duration) ? '' : `${duration} min`;

          return (
            <EpisodeItem
              key={id}
              {...rest}
              id={id}
              releaseDate={releaseDate}
              duration={durationStr}
              navigate={navigate}
            />
          );
        })}
      </ul>
    </>
  );
};
