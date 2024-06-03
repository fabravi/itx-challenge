import { test, expect, chromium } from '@playwright/test';
import { BASE_URL, mockPodcastAPIRequests } from './Setup';
import { mockedPodcasts } from '../src/mocks';

test.describe('Podcasts Page', () => {
  let browser, page;
  const podcastsCount = mockedPodcasts.feed.entry.length;

  test.beforeAll(async () => {
    browser = await chromium.launch();
  });

  test.beforeEach(async () => {
    const context = await browser.newContext();
    page = await context.newPage();

    // Mock API requests
    await mockPodcastAPIRequests(page);

    // Navigate to base URL
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');
  });

  test.afterEach(async () => {
    await page.close();
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test('has title', async () => {
    await expect(page).toHaveTitle(/Inditex Podcasts Challenge/);
  });

  test('has a header', async () => {
    await page.waitForSelector('h1');
    const title = await page.getByText('Music Podcasts.');

    await expect(title).toBeTruthy();
  });

  test('has a list of music podcasts', async () => {
    await page.waitForSelector('[data-testid="podcast-item"]');
    const podcasts = await page.getByTestId('podcast-item').all();

    await expect(podcasts).toHaveLength(podcastsCount);
  });

  test('can filter podcasts', async () => {
    const input = await page.getByPlaceholder('Search');

    await input.type(mockedPodcasts.feed.entry[1]['im:artist'].label);

    const podcasts = await page.getByTestId('podcast-item').all();
    const text = await page.getByTestId('podcast-item').first().textContent();

    await expect(podcasts.length).toBe(1);
    await expect(text).toContain(
      mockedPodcasts.feed.entry[1]['im:artist'].label
    );
  });

  test('filter count matches podcast elements', async () => {
    const input = await page.getByPlaceholder('Search');

    await input.type(mockedPodcasts.feed.entry[1]['im:artist'].label);

    const count = await page.getByTestId('filtered-number').textContent();

    const podcasts = await page.getByTestId('podcast-item').all();

    await expect(podcasts.length).toBe(parseInt(count!));
  });

  test('can clear filter', async () => {
    const input = await page.getByPlaceholder('Search');

    await input.type(mockedPodcasts.feed.entry[1]['im:artist'].label);

    let podcasts = await page.getByTestId('podcast-item').all();
    await input.fill('');

    podcasts = await page.getByTestId('podcast-item').all();

    await expect(podcasts.length).toBe(podcastsCount);
  });

  test('loading bar is hidden when idle', async () => {
    await page.getByTestId('loading-bar');

    await page.waitForSelector('[data-testid="loading-bar"]', {
      state: 'hidden',
    });
  });

  test('shows loading bar when navigating', async () => {
    const podcast = await page.getByTestId('podcast-item').first();

    await podcast.click();

    await page.waitForSelector('[data-testid="loading-bar"]', {
      state: 'hidden',
    });
  });

  test('can navigate to a podcast', async () => {
    const podcast = await page.getByTestId('podcast-item').first();

    await podcast.click();

    await page.waitForSelector('[data-testid="loading-bar"]', {
      state: 'hidden',
    });

    await page.waitForSelector('[data-testid="podcast-detail"]');

    await expect(page.url()).toMatch(/\/podcast/);
  });
});
