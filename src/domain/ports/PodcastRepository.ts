export interface PodcastRepository {
  getAll(): Promise<Podcast[]>;
  getEpisodes(podcastId: string): Promise<Episode[]>;
  getEpisode(podcastId: string, episodeId: string): Promise<Episode | null>;
}
