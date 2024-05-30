import { GetPodcasts } from '@/domain/use-cases/GetPodcasts';
import { FetchPodcast } from '@/infra/FetchPodcast';
import { LocalStorage } from '@/infra/LocalStorage';

const localStorage = new LocalStorage(1000 * 60 * 60 * 24);
const fetchPodcast = new FetchPodcast('', localStorage);
const podcastsUseCases = new GetPodcasts(fetchPodcast);

const podcastsLoader = async () => {
  return await podcastsUseCases.get();
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

export { podcastsLoader, episodesLoader, episodeLoader };
