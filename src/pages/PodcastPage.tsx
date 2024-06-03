import styles from './podcast.module.scss';
import { Outlet, useLoaderData } from 'react-router-dom';
import { PodcastDetail } from '@/components/podcast-detail/PodcastDetail';
import { useNavigation } from '@/adapters/hooks/useNavigation';

export const PodcastPage = () => {
  const detail = useLoaderData() as Podcast;
  const { navigate } = useNavigation();

  return (
    <main className={`container ${styles.podcast}`}>
      <section
        className={`pointer ${styles.leftPanel}`}
        onClick={() => navigate(`/podcast/${detail.id}`)}
      >
        <PodcastDetail
          id={detail.id}
          name={detail.name}
          image={detail.image}
          artist={detail.artist}
          summary={detail.summary}
        />
      </section>

      <section className={styles.rightPanel}>
        <Outlet />
      </section>
    </main>
  );
};
