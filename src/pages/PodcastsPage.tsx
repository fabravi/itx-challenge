import styles from './podcasts.module.scss';
import { PodcastItem } from '@/components/podcast-item/PodcastItem';
import { useLoaderData } from 'react-router-dom';
import { Input } from '@/components/input/Input';
import { useState } from 'react';
import { FilterPodcastsByTerm } from '@/domain/use-cases/FilterPodcastsByTerm';
import { useNavigation } from '@/adapters/hooks/useNavigation';

// TODO: move to hooks
const filterUseCase = new FilterPodcastsByTerm();

export const PodcastsPage = () => {
  const list = useLoaderData() as Podcast[];
  const { navigate } = useNavigation();
  const [podcasts, setPodcasts] = useState<Podcast[]>(list);

  const filterPodcasts = (term: string) => {
    if (!term) {
      setPodcasts(list);
      return;
    }
    const result = filterUseCase.execute(list, term);
    setPodcasts(result);
  };

  return (
    <div className="container">
      <div className={styles.top}>
        <h1 className={styles.title}>Trending Now</h1>
        <Input
          placeholder="Search"
          onChange={(event) => filterPodcasts(event.target.value)}
        />
      </div>
      <ul className={styles.list}>
        {(podcasts.length ? podcasts : []).map((item) => (
          <PodcastItem key={item.id} {...item} navigate={navigate} />
        ))}
      </ul>
    </div>
  );
};
