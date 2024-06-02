import { test as setup } from '@playwright/test';
import fetchMock from 'fetch-mock';
import { mockedPodcasts, mockedEpisodes } from './src/mocks';

setup('mock fetch', async ({}) => {
  // Stub the API endpoint with a mock response
  fetchMock.get(
    'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
    { data: mockedPodcasts }
  );

  fetchMock.get(
    'https://api.allorigins.win/get?url=https://itunes.apple.com/lookup?id=123456&media=podcast&entity=podcastEpisode&limit=20',
    mockedEpisodes
  );
});
