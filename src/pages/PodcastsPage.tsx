import styles from './podcasts.module.scss';
import { PodcastItem } from '@/components/podcast-item/PodcastItem';
import { useLoaderData } from 'react-router-dom';
import { Input } from '@/components/input/Input';
import { useNavigation } from '@/adapters/hooks/useNavigation';
import { usePodcastsFilter } from '@/adapters/hooks/usePodcastsFilter';

export const PodcastsPage = () => {
  const list = useLoaderData() as Podcast[];
  const { navigate } = useNavigation();

  const { podcasts, filterPodcasts } = usePodcastsFilter(list);

  return (
    <main className="container">
      <div className={styles.top}>
        <h1 className={styles.title}>Trending Now—</h1>
        <div>
          <span>
            <strong data-testid="filtered-number">{podcasts.length}</strong> out
            of <strong>{list.length}</strong>
          </span>
          <Input
            placeholder="Search"
            onChange={(event) => filterPodcasts(event.target.value)}
          />
        </div>
      </div>
      <ul className={styles.list}>
        {(podcasts.length ? podcasts : []).map((item) => (
          <PodcastItem key={item.id} {...item} navigate={navigate} />
        ))}
      </ul>
    </main>
  );
};
