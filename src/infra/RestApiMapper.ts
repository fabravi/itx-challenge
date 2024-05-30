import { Mapper } from '@/domain/ports/Mapper';

export class RestApiMapper implements Mapper {
  mapPodcasts(data: PodcastApiResponse): Podcast {
    return {
      id: data.id.attributes['im:id'],
      name: data['im:name'].label,
      artist: data['im:artist'].label,
      image: data['im:image'][2].label,
      summary: data.summary.label,
    };
  }

  mapEpisodes(data: EpisodeApiResponse): Episode {
    return {
      audio: data.episodeUrl,
      description: data.description,
      duration: data.trackTimeMillis,
      id: data.trackId,
      image: data.artworkUrl160,
      releaseDate: data.releaseDate,
      trackName: data.trackName,
    };
  }
}
