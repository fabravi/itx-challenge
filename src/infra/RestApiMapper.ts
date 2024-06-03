import { Mapper } from '@/domain/ports/Mapper';

export class RestApiMapper
  implements Mapper<PodcastApiResponse, EpisodeApiResponse>
{
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
    // replace urls and emails with links
    const urlRegex = /(?<!<a href=")(https?:\/\/[^\s]+)/g;
    const descriptionWithLinks = data.description.replace(
      urlRegex,
      '<a href="$&">$&</a>'
    );

    const emailRegex =
      /(?<!<a href=")([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g;
    const descriptionWithLinksAndEmails = descriptionWithLinks.replace(
      emailRegex,
      '<a href="mailto:$&">$&</a>'
    );

    return {
      audio: data.episodeUrl,
      description: descriptionWithLinksAndEmails,
      duration: data.trackTimeMillis,
      id: data.trackId,
      image: data.artworkUrl160,
      releaseDate: data.releaseDate,
      trackName: data.trackName,
    };
  }
}
