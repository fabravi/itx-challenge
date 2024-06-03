import { test as setup } from '@playwright/test';
import fetchMock from 'fetch-mock';
import { mockedPodcasts, mockedEpisodes } from './src/mocks';

setup('mock fetch', async ({}) => {
  // Stub the API endpoint with a mock response
  fetchMock.get(
    'http://localhost:3000/api/us/rss/toppodcasts/limit=100/genre=1310/json',
    { data: mockedPodcasts }
  );

  fetchMock.get(
    'http://localhost:3000/api/lookup?id=123456&media=podcast&entity=podcastEpisode&limit=20',
    mockedEpisodes
  );
});
