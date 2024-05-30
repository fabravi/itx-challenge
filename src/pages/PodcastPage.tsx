import styles from './podcast.module.scss';

import { Outlet, useLoaderData, useNavigate } from 'react-router-dom';
import { mockDetail } from '../mocks';
import { PodcastDetail } from '@/components/podcast-detail/PodcastDetail';

export const PodcastPage = () => {
  const detail = mockDetail;
  const episodes = useLoaderData();
  const navigate = useNavigate();

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
