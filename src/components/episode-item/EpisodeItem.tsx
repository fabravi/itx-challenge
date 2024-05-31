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
  navigate,
}: EpisodeItemProps) => {
  return (
    <li
      className={`${styles['episode-item']} pointer`}
      key={id}
      onClick={() => navigate(`episode/${id}`)}
    >
      {image ? null : <img src={image} alt={trackName} />}
      <div>
        <h2>{trackName}</h2>
        <p>{releaseDate}</p>
        <p className="episode-duration">{duration}</p>
      </div>
    </li>
  );
};
