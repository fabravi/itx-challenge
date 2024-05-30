import styles from './podcasts.module.scss';
import { mockListItem } from '../mocks';
import { PodcastItem } from '@/components/podcast-item/PodcastItem';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/input/Input';

export const PodcastsPage = () => {
  const list = Array(100).fill(mockListItem);
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className={styles.top}>
        <h1 className={styles.title}>Trending Now</h1>
        <Input placeholder="Search" />
      </div>
      <ul className={styles.list}>
        {list.map((item) => (
          <PodcastItem key={item.id} {...item} navigate={navigate} />
        ))}
      </ul>
    </div>
  );
};
