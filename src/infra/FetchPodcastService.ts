import { PodcastRepository } from '@/domain/ports/PodcastRepository';
import { Cache } from '@/domain/ports/Cache';

export class FetchPodcastService implements PodcastRepository {
  constructor(
    private baseUrl: string,
    private cache: Cache
  ) {}

  async getAll(): Promise<Podcast[]> {
    const cachedPodcasts = await this.cache.get<Podcast[]>('podcasts');
    if (cachedPodcasts) {
      return cachedPodcasts;
    }

    // TODO: use baseURL
    const response = await fetch(
      'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
    );
    const json = await response.json();

    // eslint-disable-next-line
    const podcasts = json.feed.entry.map((entry: any) => ({
      id: entry.id.attributes['im:id'],
      name: entry['im:name'].label,
      artist: entry['im:artist'].label,
      image: entry['im:image'][2].label,
      summary: entry.summary.label,
    }));
    this.cache.set('podcasts', podcasts);

    return podcasts;
  }

  async getEpisodes(podcastId: string): Promise<Episode[]> {
    const cachedEpisodes = await this.cache.get<Episode[]>(
      `episodes:${podcastId}`
    );
    if (cachedEpisodes) {
      return cachedEpisodes;
    }

    // TODO: use baseURL
    const response = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`)}`
    );
    const data = await response.json();
    const results = JSON.parse(data.contents).results;
    const [detail, ...episodesRaw] = results;

    // eslint-disable-next-line
    const episodes = episodesRaw.map((episode: any) => ({
      artist: detail.artist,
      audio: episode.episodeUrl,
      description: episode.description,
      duration: episode.trackTimeMillis,
      id: episode.trackId,
      image: episode.artworkUrl160,
      releaseDate: episode.releaseDate,
      shortDescription: episode.shortDescription,
      trackName: episode.trackName,
    }));

    this.cache.set(`episodes:${podcastId}`, episodes);

    return episodes;
  }
}
