import { PodcastRepository } from '@/domain/ports/PodcastRepository';
import { Cache } from '@/domain/ports/Cache';

export class FetchPodcast implements PodcastRepository {
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

    // TODO: add detail from podcasts

    // TODO: use baseURL
    const response = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`)}`
    );
    const data = await response.json();
    const results = JSON.parse(data.contents).results;
    const [detail, ...episodesRaw] = results;

    console.log(detail);
    console.log(episodesRaw);

    // eslint-disable-next-line
    const episodes = episodesRaw.map((episode: any) => ({
      artist: detail.artist,
      audio: episode.episodeUrl,
      description: episode.description,
      duration: episode.trackTimeMillis,
      id: episode.trackId,
      image: episode.artworkUrl160,
      podcastCover: detail.artworkUrl100,
      podcastDescription: detail.description,
      podcastName: detail.trackName,
      releaseDate: episode.releaseDate,
      shortDescription: episode.shortDescription,
      trackCount: detail.trackCount,
      trackName: episode.trackName,
    }));

    this.cache.set(`episodes:${podcastId}`, episodes);

    return episodes;
  }

  async getEpisode(podcastId: string, episodeId: string): Promise<Episode> {
    if (!podcastId || !episodeId) {
      throw new Error('podcastId and episodeId are required');
    }

    const episodes = await this.getEpisodes(podcastId);
    const episode = episodes.find((episode) => episode.id == episodeId);

    if (!episode) {
      throw new Error('Episode not found');
    }

    return episode;
  }
}
