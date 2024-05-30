import styles from './episodeitem.module.scss';

type EpisodeItemProps = {
  id: string;
  chapterId: string;
  trackId: string;
  artworkUrl60: string;
  collectionName: string;
  trackName: string;
  artistViewUrl: string;
  navigate: (to: string) => void;
};

export const EpisodeItem = ({
  trackId,
  artworkUrl60,
  collectionName,
  trackName,
  artistViewUrl,
  navigate,
}: EpisodeItemProps) => {
  return (
    <li
      className={`${styles['episode-item']} pointer`}
      key={trackId}
      onClick={() => navigate(`episode/${trackId}`)}
    >
      <img src={artworkUrl60} alt={collectionName} />
      <div>
        <h2>{trackName}</h2>
        <p>{artistViewUrl}</p>
      </div>
    </li>
  );
};
