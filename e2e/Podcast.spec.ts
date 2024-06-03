import { test, expect } from '@playwright/test';
import { mockedEpisodes, mockedPodcasts } from '../src/mocks';

test.describe('Podcast Page', () => {
  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.route(
      '**/api/us/rss/toppodcasts/limit=100/genre=1310/json',
      async (route) => {
        const json = mockedPodcasts;
        await route.fulfill({ json });
      }
    );

    await page.route(
      '**/lookup?id=*&media=podcast&entity=podcastEpisode&limit=20',
      async (route) => {
        const json = mockedEpisodes;
        await route.fulfill({ json });
      }
    );
  });

  test('Shows error message when podcast is not found', async ({ page }) => {
    await page.goto('http://localhost:3000/podcast/1234');
    await page.waitForLoadState('networkidle');

    const message = await page.getByText('Podcast not found');

    await expect(message).toBeTruthy();
  });

  test('shows error message when episode is not found', async ({ page }) => {
    await page.goto('http://localhost:3000/podcast/1535809341/episode/1234');
    await page.waitForLoadState('networkidle');

    const message = await page.getByText('Episode not found');

    await expect(message).toBeTruthy();
  });

  test('show description', async ({ page }) => {
    await page.goto(
      `http://localhost:3000/podcast/${mockedEpisodes.results[1].collectionId}`
    );
    const description = await page.getByTestId('podcast-detail').textContent();
    await expect(description).toContain(
      mockedPodcasts.feed.entry[0].summary.label
    );
  });

  test('show episodes', async ({ page }) => {
    await page.goto('http://localhost:3000/podcast/1535809341');

    const episode = await page.getByTestId('episode-item').first();

    await expect(episode).toContainText(mockedEpisodes.results[1].trackName);
  });

  test('can navigate to episode', async ({ page }) => {
    await page.goto('http://localhost:3000/podcast/1535809341');

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

  test('can navigate back to episodes', async ({ page }) => {
    await page.goto(
      'http://localhost:3000/podcast/1535809341/episode/1000654145267'
    );
    await page.waitForLoadState('networkidle');

    const back = await page.getByTestId('podcast-detail');

    await back.click();

    const episodes = await page.getByTestId('episode-item').all();

    await expect(episodes.length > 1).toBeTruthy();
  });

  test('can navigate back home', async ({ page }) => {
    await page.goto('http://localhost:3000/podcast/1535809341');

    const home = await page.getByText('Music Podcasts');

    await home.click();

    await page.waitForSelector('[data-testid="podcast-item"]', {
      state: 'visible',
    });

    const url = page.url();

    await expect(url).toBe('http://localhost:3000/');
  });

  test('can play episode', async ({ page }) => {});
});
