export interface Mapper<T, U> {
  mapPodcasts(data: T): Podcast;
  mapEpisodes(data: U): Episode;
}
