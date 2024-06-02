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
      className={`${styles['podcast-item']} pointer`}
      key={id}
      onClick={() => navigate(`/podcast/${id}`)}
      data-testid="podcast-item"
      role="link"
      aria-label={`Go to podcast: ${name}`}
      tabIndex={0}
    >
      <img src={image} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{artist}</p>
      </div>
    </li>
  );
};
