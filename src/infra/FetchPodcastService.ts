import { PodcastRepository } from '@/domain/ports/PodcastRepository';
import { Cache } from '@/domain/ports/Cache';
import { Mapper } from '@/domain/ports/Mapper';

export class FetchPodcastService implements PodcastRepository {
  constructor(
    private cache: Cache,
    private mapper: Mapper,
    private baseUrl?: string
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

    const podcasts = json.feed.entry.map(this.mapper.mapPodcasts);
    this.cache.set('podcasts', podcasts);

    return podcasts;
  }

  async getEpisodes(podcastId: string): Promise<EpisodesWithCount> {
    const cachedEpisodes = await this.cache.get<EpisodesWithCount>(
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

    const episodes = episodesRaw.map(this.mapper.mapEpisodes);
    const episodesWithCount = {
      episodes,
      count: detail.trackCount,
    };

    this.cache.set(`episodes:${podcastId}`, episodesWithCount);

    return episodesWithCount;
  }
}
