import { FetchPodcastService } from '@/infra/FetchPodcastService';
import { GetPodcasts } from './GetPodcasts';
import { RestApiMapper } from '@/infra/RestApiMapper';
import { mockedPodcasts } from '../../mocks';

describe('GetPodcasts', () => {
  let getPodcasts: GetPodcasts;
  let podcastRepository: any;
  let cache: any;
  let mapper: any;

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

  test('should use cache when available', async () => {
    cache.get.mockResolvedValueOnce('test value');
    global.fetch = jest.fn();

    const podcasts = await getPodcasts.get();
    expect(podcasts).toEqual('test value');
    expect(global.fetch).not.toHaveBeenCalled();
  });

  test('should get podcasts', async () => {
    // Mock fetch to return podcasts
    global.fetch = jest.fn(
      () =>
        Promise.resolve({
          json: () => Promise.resolve(mockedPodcasts),
        }) as Promise<Response> // Cast the return value to Response type
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

  test.todo('should get details for a podcast');

  test.todo('should get episodes for a podcast');

  test.todo('should get details for an episode');
});
