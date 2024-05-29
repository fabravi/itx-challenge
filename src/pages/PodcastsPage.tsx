import styles from './podcasts.module.scss';
import { mockListItem } from '../mocks';
import { PodcastItem } from '@/components/podcast-item/PodcastItem';
import { useNavigate } from 'react-router-dom';

export const PodcastsPage = () => {
  const list = Array(100).fill(mockListItem);
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="title">Los 100 más populares</h1>
      <ul className={styles.list}>
        {list.map((item) => (
          <PodcastItem key={item.id} {...item} navigate={navigate} />
        ))}
      </ul>
    </div>
  );
};
