import { GetPodcasts } from '@/domain/use-cases/GetPodcasts';
import { FetchPodcastService } from '@/infra/FetchPodcastService';
import { LocalStorageCache } from '@/infra/LocalStorageCache';

const localStorage = new LocalStorageCache(1000 * 60 * 60 * 24);
const fetchPodcast = new FetchPodcastService('', localStorage);
const podcastsUseCases = new GetPodcasts(fetchPodcast);

const podcastsLoader = async () => {
  return await podcastsUseCases.get();
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const podcastLoader = async (args: any) => {
  const { params } = args;
  const { id } = params;
  if (!id) {
    throw new Error('Invalid params');
  }
  return await podcastsUseCases.getPodcast(id);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const episodesLoader = async (args: any) => {
  const { params } = args;
  const { id } = params;
  if (!id) {
    throw new Error('Invalid params');
  }
  return await podcastsUseCases.getEpisodes(id);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const episodeLoader = async (args: any) => {
  const { params } = args;
  const { id, episodeId } = params;
  if (!id || !episodeId) {
    throw new Error('Invalid params');
  }
  return await podcastsUseCases.getEpisode(id, episodeId);
};

export { podcastsLoader, podcastLoader, episodesLoader, episodeLoader };
