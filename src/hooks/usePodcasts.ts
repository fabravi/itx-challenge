import { useEffect, useState } from 'react';
import { Podcasts } from '../domain/Podcasts';
import {
  FetchPodcastsService,
  LocalStorageCacheService,
} from '../domain/Podcasts';

const fetchService = new FetchPodcastsService();
const cacheService = new LocalStorageCacheService();
const podcast = new Podcasts(fetchService, cacheService);

export const usePodcasts = () => {
  const [podcasts, setPodcasts] = useState({
    loading: true,
    data: [],
    error: null,
  });

  useEffect(() => {
    podcast
      .getPodcasts()
      .then((data) => setPodcasts({ loading: false, data, error: null }));
  }, []);

  return podcasts;
};
