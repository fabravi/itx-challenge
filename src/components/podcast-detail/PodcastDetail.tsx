import styles from './podcastdetail.module.scss';

type PodcastDetailProps = Podcast;

export const PodcastDetail = ({
  image,
  name,
  artist,
  summary,
}: PodcastDetailProps) => {
  return (
    <div className={styles['podcast-detail']}>
      <img src={image} alt={name} />
      <h2 className={styles.title}>{name}</h2>
      <p>by {artist}</p>
      <div>
        <p>{summary}</p>
      </div>
    </div>
  );
};
