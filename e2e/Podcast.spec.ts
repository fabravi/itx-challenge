import { test, expect, chromium } from '@playwright/test';
import { mockedEpisodes, mockedPodcasts } from '../src/mocks';
import { EPISODE_URL, PODCAST_URL, mockPodcastAPIRequests } from './Setup';

test.describe('Podcast Page', () => {
  let browser, page;

  test.beforeAll(async () => {
    browser = await chromium.launch();
  });

  test.beforeEach(async () => {
    const context = await browser.newContext();
    page = await context.newPage();

    // Mock API requests
    await mockPodcastAPIRequests(page);

    // Navigate to base URL
    await page.goto(PODCAST_URL);
  });

  test.afterEach(async () => {
    await page.close();
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test('Shows error message when podcast is not found', async () => {
    await navigateToPodcastPage(page, '1234');

    const message = await page.getByText('Podcast not found');
    await expect(message).toBeTruthy();
  });

  test('shows error message when episode is not found', async () => {
    await navigateToEpisodePage(
      page,
      mockedEpisodes.results[1].collectionId,
      '1234'
    );

    const message = await page.getByText('Episode not found');
    await expect(message).toBeTruthy();
  });

  test('show description', async () => {
    await navigateToPodcastPage(page, mockedEpisodes.results[1].collectionId);
    const description = await page.getByTestId('podcast-detail').textContent();
    await expect(description).toContain(
      mockedPodcasts.feed.entry[0].summary.label
    );
  });

  test('show episodes', async () => {
    await navigateToPodcastPage(page, mockedEpisodes.results[1].collectionId);
    const episode = await page.getByTestId('episode-item').first();

    await expect(episode).toContainText(mockedEpisodes.results[1].trackName);
  });

  test('can navigate to episode', async () => {
    await navigateToPodcastPage(page, mockedEpisodes.results[1].collectionId);

    const episode = await page.getByTestId('episode-item').first();

    await episode.click();

    await page.waitForSelector('[data-testid="episode-description"]', {
      state: 'visible',
    });

    const description = await page
      .getByTestId('episode-description')
      .textContent();

    await expect(description).toBeTruthy();
  });

  test('can navigate back to episodes', async () => {
    await navigateToEpisodePage(
      page,
      mockedEpisodes.results[1].collectionId,
      mockedEpisodes.results[1].trackId
    );

    const back = await page.getByTestId('podcast-detail');

    await back.click();

    const episodes = await page.getByTestId('episode-item').all();

    await expect(episodes.length > 1).toBeTruthy();
  });

  test('can navigate back home', async () => {
    await navigateToPodcastPage(page, mockedEpisodes.results[1].collectionId);

    const home = await page.getByText('Music Podcasts');

    await home.click();

    await page.waitForSelector('[data-testid="podcast-item"]', {
      state: 'visible',
    });

    const url = page.url();

    await expect(url).toBe('http://localhost:3000/');
  });
});

const navigateToPodcastPage = async (page, podcastId) => {
  const url = PODCAST_URL + podcastId;
  await page.goto(url);
  await page.waitForLoadState('networkidle');
};

const navigateToEpisodePage = async (page, podcastId, episodeId) => {
  const url = EPISODE_URL.replace(':podcastId', podcastId).replace(
    ':episodeId',
    episodeId
  );
  await page.goto(url);
  await page.waitForLoadState('networkidle');
};
