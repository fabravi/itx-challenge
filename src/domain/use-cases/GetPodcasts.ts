import { PodcastRepository } from '@/domain/ports/PodcastRepository';

export class GetPodcasts {
  constructor(private podcastRepository: PodcastRepository) {}

  async get(): Promise<Podcast[]> {
    return this.podcastRepository.getAll();
  }

  async getPodcast(podcastId: string): Promise<Podcast> {
    if (!podcastId) {
      throw new Error('podcastId is required');
    }

    const podcasts = await this.podcastRepository.getAll();
    const podcast = podcasts.find((podcast) => podcast.id == podcastId);

    console.log('getPodcast', podcast);

    if (!podcast) {
      throw new Error('Podcast not found');
    }

    return podcast;
  }

  async getEpisodes(podcastId: string): Promise<Episode[]> {
    if (!podcastId) {
      throw new Error('podcastId is required');
    }
    return this.podcastRepository.getEpisodes(podcastId);
  }

  async getEpisode(podcastId: string, episodeId: string): Promise<Episode> {
    if (!podcastId || !episodeId) {
      throw new Error('podcastId and episodeId are required');
    }

    const episodes = await this.podcastRepository.getEpisodes(podcastId);
    const episode = episodes.find((episode) => episode.id == episodeId);

    if (!episode) {
      throw new Error('Episode not found');
    }

    return episode;
  }
}
