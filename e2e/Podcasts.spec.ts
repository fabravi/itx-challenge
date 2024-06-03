import { test, expect } from '@playwright/test';
import { mockedEpisodes, mockedPodcasts } from '../src/mocks';

test.describe('Podcasts Page', () => {
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

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('has title', async ({ page }) => {
    await expect(page).toHaveTitle(/Inditex Podcasts Challenge/);
  });

  test('has a header', async ({ page }) => {
    await page.waitForSelector('h1');
    const title = await page.getByText('Music Podcasts.');

    await expect(title).toBeTruthy();
  });

  test('has a list of music podcasts', async ({ page }) => {
    await page.waitForSelector('[data-testid="podcast-item"]');
    const podcasts = await page.getByTestId('podcast-item').all();

    await expect(podcasts).toHaveLength(100);
  });

  test('can filter podcasts', async ({ page }) => {
    const input = await page.getByPlaceholder('Search');

    await input.type('A');

    const podcasts = await page.getByTestId('podcast-item').all();

    await expect(podcasts.length < 100).toBeTruthy();
  });

  test('filter count matches podcast elements', async ({ page }) => {
    const input = await page.getByPlaceholder('Search');

    await input.type('A');

    const count = await page.getByTestId('filtered-number').textContent();
    console.log('count', count);

    const podcasts = await page.getByTestId('podcast-item').all();

    await expect(podcasts.length).toBe(parseInt(count!));
  });

  test('can clear filter', async ({ page }) => {
    const input = await page.getByPlaceholder('Search');

    await input.type('A');

    let podcasts = await page.getByTestId('podcast-item').all();

    await expect(podcasts.length < 100).toBeTruthy();

    await input.fill('');

    podcasts = await page.getByTestId('podcast-item').all();

    await expect(podcasts.length).toBe(100);
  });

  test('loading bar is hidden when idle', async ({ page }) => {
    await page.getByTestId('loading-bar');

    await page.waitForSelector('[data-testid="loading-bar"]', {
      state: 'hidden',
    });
  });

  test('shows loading bar when navigating', async ({ page }) => {
    const podcast = await page.getByTestId('podcast-item').first();

    await podcast.click();

    // check for loading bar
    await page.waitForSelector('[data-testid="loading-bar"]', {
      state: 'hidden',
    });
  });

  test('can navigate to a podcast', async ({ page }) => {
    const podcast = await page.getByTestId('podcast-item').first();

    await podcast.click();

    // check for loading bar
    await page.waitForSelector('[data-testid="loading-bar"]', {
      state: 'hidden',
    });

    await page.waitForSelector('[data-testid="podcast-detail"]');

    await expect(page.url()).toMatch(/\/podcast/);
  });
});
