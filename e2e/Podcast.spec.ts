import { test, expect } from '@playwright/test';

test.describe('Podcast Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/podcast/1535809341');
    await page.waitForLoadState('networkidle');
  });

  test('Shows error message when podcast is not found', async ({ page }) => {
    await page.goto('http://localhost:3000/podcast/1234567890');
    await page.waitForLoadState('networkidle');

    const message = await page.getByText('Podcast not found');

    expect(message).toBeTruthy();
  });

  test('shows error message when episode is not found', async ({ page }) => {
    await page.goto(
      'http://localhost:3000/podcast/1535809341/episode/1234567890'
    );
    await page.waitForLoadState('networkidle');

    const message = await page.getByText('Episode not found');

    expect(message).toBeTruthy();
  });

  test('show description', async ({ page }) => {
    const description = await page.getByTestId('podcast-detail').textContent();

    expect(description).toBeTruthy();
  });

  test('show episodes', async ({ page }) => {
    const episodes = await page.getByTestId('episode-item').all();

    expect(episodes.length > 1).toBeTruthy();
  });

  test('can navigate to episode', async ({ page }) => {
    const episode = await page.getByTestId('episode-item').first();

    await episode.click();

    await page.waitForSelector('[data-testid="episode-description"]', {
      state: 'visible',
    });

    const description = await page
      .getByTestId('episode-description')
      .textContent();

    expect(description).toBeTruthy();
  });

  test('can navigate back to episodes', async ({ page }) => {
    await page.goto(
      'http://localhost:3000/podcast/1535809341/episode/1000654145267'
    );
    await page.waitForLoadState('networkidle');

    const back = await page.getByTestId('podcast-detail');

    await back.click();

    const episodes = await page.getByTestId('episode-item').all();

    expect(episodes.length > 1).toBeTruthy();
  });

  test('can navigate back home', async ({ page }) => {
    const home = await page.getByText('Music Podcasts');

    await home.click();

    await page.waitForSelector('[data-testid="podcast-item"]', {
      state: 'visible',
    });

    const url = page.url();

    expect(url).toBe('http://localhost:3000/');
  });

  test('can play episode', async ({ page }) => {});
});
