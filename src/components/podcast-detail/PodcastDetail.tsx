import styles from './podcastdetail.module.scss';

type PodcastDetailProps = {
  artworkUrl600: string;
  collectionName: string;
  author: string;
  description: string;
};

export const PodcastDetail = ({
  artworkUrl600,
  collectionName,
  author,
  description,
}: PodcastDetailProps) => {
  return (
    <div className={styles['podcast-detail']}>
      <img src={artworkUrl600} alt={collectionName} />
      <h2 className={styles.title}>{collectionName}</h2>
      <p>by {author}</p>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
};
