import styles from './episodeitem.module.scss';

type EpisodeItemProps = Partial<Omit<Episode, 'duration'>> & {
  navigate: (path: string) => void;
  duration: string;
};

export const EpisodeItem = ({
  id,
  trackName,
  image,
  duration,
  releaseDate,
  podcastName,
  navigate,
}: EpisodeItemProps) => {
  return (
    <li
      className={`${styles['episode-item']} pointer`}
      key={id}
      onClick={() => navigate(`episode/${id}`)}
    >
      <img src={image} alt={podcastName} />
      <div>
        <h2>{trackName}</h2>
        <p>{duration}</p>
        <p>{releaseDate}</p>
      </div>
    </li>
  );
};
