import styles from './episodedetail.module.scss';

type EpisodeDetailProps = {
  title: string;
  description: string;
  audio: string;
};

export const EpisodeDetail = ({
  title,
  description,
  audio,
}: EpisodeDetailProps) => {
  return (
    <div className={styles['episode-detail']}>
      <h3 className={styles['title']}>{title}</h3>
      <div
        className={styles['detail']}
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
      <audio controls>
        <source src={audio} type="audio/mpeg" />
        <p>
          Download{' '}
          <a href={audio} download="myAudio.mp3">
            MP3
          </a>{' '}
          audio.
        </p>
      </audio>
    </div>
  );
};
