export interface Mapper {
  mapPodcasts(data: Record<string, string>): Podcast;
  mapEpisodes(data: Record<string, string>): Episode;
}
