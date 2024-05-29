export class Podcasts {
  private service: PodcastsService;
  private cache: CacheService;
  private podcasts: Podcast[] = [];

  constructor(service: PodcastsService, cache: CacheService) {
    this.service = service;
    this.cache = cache;
  }

  async getPodcasts() {
    if (this.podcasts.length) {
      return this.podcasts;
    }

    if (this.cache.has('podcasts')) {
      this.podcasts = this.cache.get('podcasts');
      return this.podcasts;
    }

    const podcasts = await this.service.getPodcasts();
    this.cache.set('podcasts', podcasts);
    this.podcasts = podcasts;

    return podcasts;
  }

  async getEpisodes(podcastId: string) {
    const episodes = await this.service.getEpisodes(podcastId);

    return episodes;
  }
}

type Podcast = {
  id: string;
  name: string;
  artist: string;
  image: string;
};

type Episode = {
  id: string;
  name: string;
  artist: string;
  image: string;
  duration: number;
  releaseDate: string;
  description: string;
};

interface CacheService {
  has(key: string): boolean;
  get(key: string): any;
  set(key: string, value: any): void;
}

interface PodcastsService {
  getPodcasts(): Promise<Podcast[]>;
  getEpisodes(podcastId: string): Promise<{ detail: any; episodes: Episode[] }>;
}

export class LocalStorageCacheService implements CacheService {
  has(key: string) {
    return !!localStorage.getItem(key);
  }

  get(key: string) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export class FetchPodcastsService implements PodcastsService {
  async getPodcasts() {
    const response = await fetch(
      'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
    );
    const data = await response.json();

    return data.feed.entry.map((item: any) => ({
      id: item.id.attributes['im:id'],
      name: item['im:name'].label,
      artist: item['im:artist'].label,
      image: item['im:image'][0].label,
    }));
  }

  async getEpisodes(podcastId: string) {
    const response = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`)}`
    );
    const data = await response.json();
    const results = JSON.parse(data.contents).results;
    const [detail, ...episodes] = results;

    return {
      detail,
      episodes: episodes.map((item: any) => ({
        id: item.trackId,
        name: item.trackName,
        artist: item.artistName,
        image: item.artworkUrl160,
        duration: item.trackTimeMillis,
        releaseDate: item.releaseDate,
        description: item.description,
      })),
    };
  }
}
