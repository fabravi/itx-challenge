import styles from './podcastitem.module.scss';

type PodcastItemProps = {
  id: string;
  image: string;
  name: string;
  artist: string;
  navigate: (to: string) => void;
};

export const PodcastItem = ({
  id,
  image,
  name,
  artist,
  navigate,
}: PodcastItemProps) => {
  return (
    <li
      className={styles.podcastItem}
      key={id}
      onClick={() => navigate(`/podcast/${id}`)}
    >
      <img src={image} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{artist}</p>
      </div>
    </li>
  );
};
