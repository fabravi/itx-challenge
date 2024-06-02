import { test, expect } from '@playwright/test';

test.describe('Podcasts Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.waitForLoadState('networkidle');
  });

  test('has title', async ({ page }) => {
    await expect(page).toHaveTitle(/Inditex Podcasts Challenge/);
  });

  test('has a header', async ({ page }) => {
    await page.waitForSelector('h1');
    const title = await page.getByText('Music Podcasts');

    expect(title).toBeVisible();
  });

  test('has a list of music podcasts', async ({ page }) => {
    await page.waitForSelector('[data-testid="podcast-item"]');
    const podcasts = await page.getByTestId('podcast-item').all();

    expect(podcasts).toHaveLength(100);
  });

  test('can filter podcasts', async ({ page }) => {
    const input = await page.getByPlaceholder('Search');

    await input.type('A');

    const podcasts = await page.getByTestId('podcast-item').all();

    expect(podcasts.length < 100).toBeTruthy();
  });

  test('filter count matches podcast elements', async ({ page }) => {
    const input = await page.getByPlaceholder('Search');

    await input.type('A');

    const count = await page.getByTestId('filtered-number').textContent();
    console.log('count', count);

    const podcasts = await page.getByTestId('podcast-item').all();

    expect(podcasts.length).toBe(parseInt(count!));
  });

  test('can clear filter', async ({ page }) => {
    const input = await page.getByPlaceholder('Search');

    await input.type('A');

    let podcasts = await page.getByTestId('podcast-item').all();

    expect(podcasts.length < 100).toBeTruthy();

    await input.fill('');

    podcasts = await page.getByTestId('podcast-item').all();

    expect(podcasts.length).toBe(100);
  });

  test('loading bar is hidden when idle', async ({ page }) => {
    const loadingBar = await page.getByTestId('loading-bar');

    expect(loadingBar).toBeHidden();
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

    expect(page.url()).toMatch(/\/podcast/);
  });
});
