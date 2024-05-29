import styles from './podcast.module.scss';

import { Outlet, useNavigate } from 'react-router-dom';
import { mockDetail } from '../mocks';

export const PodcastPage = () => {
  const detail = mockDetail;
  const navigate = useNavigate();

  return (
    <div className={`container ${styles.container}`}>
      <h1>{detail?.collectionName}</h1>
      <div
        className={styles.leftPanel}
        onClick={() => navigate(`/podcast/${detail.collectionId}`)}
      >
        <img src={detail?.artworkUrl600} alt={detail?.collectionName} />
        <p>{detail?.trackCount}</p>
      </div>

      <div className={styles.rightPanel}>
        <Outlet />
      </div>
    </div>
  );
};
