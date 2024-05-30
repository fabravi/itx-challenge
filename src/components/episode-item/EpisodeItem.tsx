import styles from './episodeitem.module.scss';

type EpisodeItemProps = {
  id: string;
  trackName: string;
  description: string;
  shortDescription: string;
  artist: string;
  image: string;
  duration: number;
  releaseDate: string;
  author: string;
  podcastName: string;
  podcastDescription: string;
  navigate: (to: string) => void;
};

export const EpisodeItem = ({
  id,
  trackName,
  // eslint-disable-next-line
  description,
  shortDescription,
  // eslint-disable-next-line
  artist,
  image,
  // eslint-disable-next-line
  duration,
  // eslint-disable-next-line
  releaseDate,
  // eslint-disable-next-line
  author,
  podcastName,
  // eslint-disable-next-line
  podcastDescription,
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
        <p>{shortDescription}</p>
      </div>
    </li>
  );
};
