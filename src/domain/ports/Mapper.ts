export interface Mapper {
  mapPodcasts(data: any): Podcast;
  mapEpisodes(data: any): Episode;
}
