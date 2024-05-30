import { GetPodcasts } from '@/domain/use-cases/GetPodcasts';
import { FetchPodcastService } from '@/infra/FetchPodcastService';
import { LocalStorageCache } from '@/infra/LocalStorageCache';
import { RestApiMapper } from '@/infra/RestApiMapper';

const localStorage = new LocalStorageCache(1000 * 60 * 60 * 24);
const mapper = new RestApiMapper();
const fetchPodcast = new FetchPodcastService(localStorage, mapper);
const podcastsUseCases = new GetPodcasts(fetchPodcast);

interface Params {
  params: Record<string, string>;
}

const podcastsLoader = async () => {
  return await podcastsUseCases.get();
};

const podcastLoader = async ({ params }: Params) => {
  const { id } = params;
  return await podcastsUseCases.getPodcast(id);
};

const episodesLoader = async ({ params }: Params) => {
  const { id } = params;
  return await podcastsUseCases.getEpisodes(id);
};

const episodeLoader = async ({ params }: Params) => {
  const { id, episodeId } = params;
  return await podcastsUseCases.getEpisode(id, episodeId);
};

export { podcastsLoader, podcastLoader, episodesLoader, episodeLoader };
