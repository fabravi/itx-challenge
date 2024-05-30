export interface PodcastRepository {
  getAll(): Promise<Podcast[]>;
  getEpisodes(podcastId: string): Promise<EpisodesWithCount>;
}
