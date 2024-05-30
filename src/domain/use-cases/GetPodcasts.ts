import { PodcastRepository } from '@/domain/ports/PodcastRepository';

export class GetPodcasts {
  constructor(private podcastRepository: PodcastRepository) {}

  async get(): Promise<Podcast[]> {
    return this.podcastRepository.getAll();
  }

  async getEpisodes(podcastId: string): Promise<Episode[]> {
    return this.podcastRepository.getEpisodes(podcastId);
  }

  async getEpisode(podcastId: string, episodeId: string): Promise<Episode> {
    return this.podcastRepository.getEpisode(podcastId, episodeId);
  }
}
