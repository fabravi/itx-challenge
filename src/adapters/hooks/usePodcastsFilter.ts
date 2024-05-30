import { useState } from 'react';
import { FilterPodcastsByTerm } from '@/domain/use-cases/FilterPodcastsByTerm';

const filterUseCase = new FilterPodcastsByTerm();

export const usePodcastsFilter = (list: Podcast[]) => {
  const [podcasts, setPodcasts] = useState<Podcast[]>(list);

  const filterPodcasts = (term: string) => {
    if (!term) {
      setPodcasts(list);
      return;
    }
    const result = filterUseCase.execute(list, term);
    setPodcasts(result);
  };

  return { podcasts, filterPodcasts };
};
