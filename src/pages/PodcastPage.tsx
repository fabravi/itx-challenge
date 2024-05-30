import styles from './podcast.module.scss';

import { Outlet, useLoaderData } from 'react-router-dom';
import { mockDetail } from '../mocks';
import { PodcastDetail } from '@/components/podcast-detail/PodcastDetail';
import { useNavigation } from '@/adapters/hooks/useNavigation';

export const PodcastPage = () => {
  const detail = mockDetail;
  const episodes = useLoaderData();
  const { navigate } = useNavigation();

  console.log('PodcastPage', episodes);

  return (
    <div className={`container ${styles.podcast}`}>
      <div
        className={`pointer ${styles.leftPanel}`}
        onClick={() => navigate(`/podcast/${detail.collectionId}`)}
      >
        <PodcastDetail
          {...detail}
          author={detail.artistName}
          description={'Description'}
        />
      </div>

      <div className={styles.rightPanel}>
        <Outlet />
      </div>
    </div>
  );
};
