import styles from './podcastdetail.module.scss';

type PodcastDetailProps = Podcast;

export const PodcastDetail = ({
  image,
  name,
  artist,
  summary,
}: PodcastDetailProps) => {
  return (
    <div
      className={styles['podcast-detail']}
      data-testid="podcast-detail"
      role="link"
      tabIndex={0}
    >
      <img src={image} alt={`Cover for ${name}`} />
      <h2 className={styles.title}>{name}</h2>
      <p>
        by <strong>{artist}</strong>
      </p>
      <div>
        <p>{summary}</p>
      </div>
    </div>
  );
};
