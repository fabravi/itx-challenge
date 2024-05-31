import { FetchPodcastService } from '@/infra/FetchPodcastService';
import { GetPodcasts } from './GetPodcasts';
import { RestApiMapper } from '@/infra/RestApiMapper';
import { mockedEpisodes, mockedPodcasts } from '../../mocks';
import { LocalStorageCache } from '@/infra/LocalStorageCache';

describe('GetPodcasts', () => {
  let getPodcasts: GetPodcasts;
  let podcastRepository: any;
  let cache: any;
  let mapper: any;

  describe('With Mocked Cache', () => {
    beforeAll(() => {
      cache = {
        get: jest.fn(),
        set: jest.fn(),
        delete: jest.fn(),
      };

      mapper = new RestApiMapper();

      podcastRepository = new FetchPodcastService(cache, mapper);
      getPodcasts = new GetPodcasts(podcastRepository);
    });

    beforeEach(() => {
      jest.clearAllMocks();
    });

    test('should use cache when available', async () => {
      cache.get.mockResolvedValueOnce('test value');
      global.fetch = jest.fn();

      const podcasts = await getPodcasts.get();
      expect(podcasts).toEqual('test value');
      expect(global.fetch).not.toHaveBeenCalled();
    });

    test('should throw an error if repository fails fetching podcasts', async () => {
      cache.get.mockResolvedValueOnce(null);
      global.fetch = jest.fn(
        () =>
          Promise.resolve({
            json: () => Promise.reject('Error fetching podcasts'),
          }) as Promise<Response>
      );

      await expect(getPodcasts.get()).rejects.toThrow(
        'Error fetching podcasts'
      );
    });

    test('should throw an error if repository fails fetching episodes', async () => {
      cache.get.mockResolvedValueOnce(null);
      global.fetch = jest.fn(
        () =>
          Promise.resolve({
            json: () => Promise.reject('Error fetching episodes'),
          }) as Promise<Response>
      );

      await expect(getPodcasts.getEpisodes('123456')).rejects.toThrow(
        'Error fetching episodes'
      );
    });

    test('should get podcasts', async () => {
      global.fetch = jest.fn(
        () =>
          Promise.resolve({
            json: () => Promise.resolve(mockedPodcasts),
          }) as Promise<Response>
      );

      const podcasts = await getPodcasts.get();
      expect(podcasts[0]).toEqual({
        id: mockedPodcasts.feed.entry[0].id.attributes['im:id'],
        artist: mockedPodcasts.feed.entry[0]['im:artist'].label,
        name: mockedPodcasts.feed.entry[0]['im:name'].label,
        image: mockedPodcasts.feed.entry[0]['im:image'][2].label,
        summary: mockedPodcasts.feed.entry[0].summary.label,
      });
    });

    test('should throw an error when podcastId is not provided', async () => {
      await expect(getPodcasts.getPodcast('')).rejects.toThrow(
        'podcastId is required'
      );
    });

    test('should get details for a podcast from cache', async () => {
      const podcasts = [
        {
          id: mockedPodcasts.feed.entry[0].id.attributes['im:id'],
          artist: mockedPodcasts.feed.entry[0]['im:artist'].label,
          name: mockedPodcasts.feed.entry[0]['im:name'].label,
          image: mockedPodcasts.feed.entry[0]['im:image'][2].label,
          summary: mockedPodcasts.feed.entry[0].summary.label,
        },
        {
          id: mockedPodcasts.feed.entry[1].id.attributes['im:id'],
          artist: mockedPodcasts.feed.entry[1]['im:artist'].label,
          name: mockedPodcasts.feed.entry[1]['im:name'].label,
          image: mockedPodcasts.feed.entry[1]['im:image'][2].label,
          summary: mockedPodcasts.feed.entry[1].summary.label,
        },
      ];
      cache.get.mockResolvedValueOnce(podcasts);

      const podcast = await getPodcasts.getPodcast(podcasts[1].id);

      expect(podcast).toEqual(podcasts[1]);
    });

    test('should get details for a podcast from repository', async () => {
      const podcasts = [
        {
          id: mockedPodcasts.feed.entry[0].id.attributes['im:id'],
          artist: mockedPodcasts.feed.entry[0]['im:artist'].label,
          name: mockedPodcasts.feed.entry[0]['im:name'].label,
          image: mockedPodcasts.feed.entry[0]['im:image'][2].label,
          summary: mockedPodcasts.feed.entry[0].summary.label,
        },
        {
          id: mockedPodcasts.feed.entry[1].id.attributes['im:id'],
          artist: mockedPodcasts.feed.entry[1]['im:artist'].label,
          name: mockedPodcasts.feed.entry[1]['im:name'].label,
          image: mockedPodcasts.feed.entry[1]['im:image'][2].label,
          summary: mockedPodcasts.feed.entry[1].summary.label,
        },
      ];
      cache.get.mockResolvedValueOnce(null);
      global.fetch = jest.fn(
        () =>
          Promise.resolve({
            json: () => Promise.resolve(mockedPodcasts),
          }) as Promise<Response>
      );

      const podcast = await getPodcasts.getPodcast(podcasts[1].id);

      expect(podcast).toEqual(podcasts[1]);
    });

    test('should throw an error when podcast is not found', async () => {
      cache.get.mockResolvedValueOnce(null);
      global.fetch = jest.fn(
        () =>
          Promise.resolve({
            json: () => Promise.resolve(mockedPodcasts),
          }) as Promise<Response>
      );

      await expect(getPodcasts.getPodcast('123456')).rejects.toThrow(
        'Podcast not found'
      );
    });

    test('should get episodes for a podcast from repository', async () => {
      global.fetch = jest.fn(
        () =>
          Promise.resolve({
            json: () => Promise.resolve(mockedEpisodes),
          }) as Promise<Response>
      );
      jest.spyOn(cache, 'get').mockResolvedValueOnce(null);

      const { episodes, count } = await getPodcasts.getEpisodes('123456');
      const [detail, ...parsedEpisodes] = JSON.parse(
        mockedEpisodes.contents
      ).results;

      expect(count).toEqual(detail.trackCount);
      expect(episodes[0]).toEqual({
        audio: parsedEpisodes[0].episodeUrl,
        description: parsedEpisodes[0].description,
        duration: parsedEpisodes[0].trackTimeMillis,
        id: parsedEpisodes[0].trackId,
        image: parsedEpisodes[0].artworkUrl160,
        releaseDate: parsedEpisodes[0].releaseDate,
        trackName: parsedEpisodes[0].trackName,
      });
    });

    test('should get episodes for a podcast from cache', async () => {
      const [detail, ...parsedEpisodes] = JSON.parse(
        mockedEpisodes.contents
      ).results;
      const episodes = [
        {
          audio: parsedEpisodes[0].episodeUrl,
          description: parsedEpisodes[0].description,
          duration: parsedEpisodes[0].trackTimeMillis,
          id: parsedEpisodes[0].trackId,
          image: parsedEpisodes[0].artworkUrl160,
          releaseDate: parsedEpisodes[0].releaseDate,
          trackName: parsedEpisodes[0].trackName,
        },
        {
          audio: parsedEpisodes[1].episodeUrl,
          description: parsedEpisodes[1].description,
          duration: parsedEpisodes[1].trackTimeMillis,
          id: parsedEpisodes[1].trackId,
          image: parsedEpisodes[1].artworkUrl160,
          releaseDate: parsedEpisodes[1].releaseDate,
          trackName: parsedEpisodes[1].trackName,
        },
      ];
      cache.get.mockResolvedValueOnce({ episodes });

      const { episodes: cachedEpisodes } =
        await getPodcasts.getEpisodes('123456');
      expect(cachedEpisodes).toEqual(episodes);
    });

    test('should throw an error when episode is not found', async () => {
      cache.get.mockResolvedValueOnce(null);
      global.fetch = jest.fn(
        () =>
          Promise.resolve({
            json: () => Promise.resolve(mockedEpisodes),
          }) as Promise<Response>
      );

      await expect(getPodcasts.getEpisode('123456', '123456')).rejects.toThrow(
        'Episode not found'
      );
    });

    test('should get details for an episode', async () => {
      const [detail, ...parsedEpisodes] = JSON.parse(
        mockedEpisodes.contents
      ).results;

      const episodes = [
        {
          audio: parsedEpisodes[0].episodeUrl,
          description: parsedEpisodes[0].description,
          duration: parsedEpisodes[0].trackTimeMillis,
          id: parsedEpisodes[0].trackId,
          image: parsedEpisodes[0].artworkUrl160,
          releaseDate: parsedEpisodes[0].releaseDate,
          trackName: parsedEpisodes[0].trackName,
        },
        {
          audio: parsedEpisodes[1].episodeUrl,
          description: parsedEpisodes[1].description,
          duration: parsedEpisodes[1].trackTimeMillis,
          id: parsedEpisodes[1].trackId,
          image: parsedEpisodes[1].artworkUrl160,
          releaseDate: parsedEpisodes[1].releaseDate,
          trackName: parsedEpisodes[1].trackName,
        },
      ];
      cache.get.mockResolvedValueOnce({ episodes });

      const episode = await getPodcasts.getEpisode(
        '123456',
        parsedEpisodes[1].trackId
      );
      expect(episode).toEqual(episodes[1]);
    });

    test('should throw an error when podcastId is not provided', async () => {
      await expect(getPodcasts.getEpisodes('')).rejects.toThrow(
        'podcastId is required'
      );
    });

    test('should throw an error when episodeId is not provided', async () => {
      await expect(getPodcasts.getEpisode('1234', '')).rejects.toThrow(
        'podcastId and episodeId are required'
      );
    });
  });

  describe('With Real Cache', () => {
    beforeAll(() => {});

    beforeEach(() => {
      jest.clearAllMocks();
    });

    test('should use cache if ttl is not expired', async () => {
      const localStorageMock = new LocalStorageMock();
      (global as any).localStorage = localStorageMock;

      cache = new LocalStorageCache(1000 * 60);
      mapper = new RestApiMapper();

      podcastRepository = new FetchPodcastService(
        cache,
        mapper,
        'https://example.com'
      );
      getPodcasts = new GetPodcasts(podcastRepository);

      global.fetch = jest.fn(
        () =>
          Promise.resolve({
            json: () => Promise.resolve(mockedPodcasts),
          }) as Promise<Response>
      );

      await getPodcasts.get();
      await getPodcasts.get();

      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    test('should fetch podcasts if ttl is expired', async () => {
      const localStorageMock = new LocalStorageMock();
      (global as any).localStorage = localStorageMock;

      cache = new LocalStorageCache(1);
      mapper = new RestApiMapper();

      podcastRepository = new FetchPodcastService(
        cache,
        mapper,
        'https://example.com'
      );
      getPodcasts = new GetPodcasts(podcastRepository);

      global.fetch = jest.fn(
        () =>
          Promise.resolve({
            json: () => Promise.resolve(mockedPodcasts),
          }) as Promise<Response>
      );
      await getPodcasts.get();

      // wait for cache to expire
      await new Promise((resolve) => setTimeout(resolve, 20));

      const podcasts = await getPodcasts.get();
      expect(podcasts[0].artist).toEqual(
        mockedPodcasts.feed.entry[0]['im:artist'].label
      );
      expect(global.fetch).toHaveBeenCalledTimes(2);
    });
  });
});

class LocalStorageMock {
  store: { [key: string]: string };

  constructor() {
    this.store = {};
  }

  getItem(key: string): string | null {
    return this.store[key] || null;
  }

  setItem(key: string, value: string): void {
    this.store[key] = value;
  }

  removeItem(key: string): void {
    delete this.store[key];
  }

  clear(): void {
    this.store = {};
  }
}
