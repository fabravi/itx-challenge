import { mockedPodcasts, mockedEpisodes } from '../src/mocks';

const BASE_URL = 'http://localhost:3000';
const PODCAST_URL = `${BASE_URL}/podcast/`;
const EPISODE_URL = `${BASE_URL}/podcast/:podcastId/episode/:episodeId`;

export const mockPodcastAPIRequests = async (page) => {
  await page.route(
    '**/api/us/rss/toppodcasts/limit=100/genre=1310/json',
    async (route) => {
      await route.fulfill({ json: mockedPodcasts });
    }
  );

  await page.route(
    '**/lookup?id=*&media=podcast&entity=podcastEpisode&limit=20',
    async (route) => {
      await route.fulfill({ json: mockedEpisodes });
    }
  );
};

export { BASE_URL, PODCAST_URL, EPISODE_URL };
