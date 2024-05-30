import { render, screen, fireEvent } from '@testing-library/react';
import { PodcastsPage } from './PodcastsPage';

const podcasts = [
  {
    id: 1,
    title: 'Podcast 1',
    image: 'https://example.com/image.jpg',
    artist: 'Artist 1',
    summary: 'Summary 1',
  },
  {
    id: 2,
    title: 'Podcast 2',
    image: 'https://example.com/image.jpg',
    artist: 'Artist 2',
    summary: 'Summary 2',
  },
  {
    id: 3,
    title: 'Podcast 3',
    image: 'https://example.com/image.jpg',
    artist: 'Artist 3',
    summary: 'Summary 3',
  },
];

jest.mock('@/adapters/hooks/useNavigation', () => ({
  useNavigation: jest.fn(() => {
    return {
      navigate: jest.fn(),
    };
  }),
}));

jest.mock('react-router-dom', () => ({
  useLoaderData: jest.fn(() => podcasts),
}));

const filterPodcastsMock = jest.fn();

jest.mock('@/domain/use-cases/FilterPodcastsByTerm', () => ({
  FilterPodcastsByTerm: jest.fn().mockImplementation(() => {
    return { execute: filterPodcastsMock };
  }),
}));

describe('PodcastsPage', () => {
  test('renders trending now title', () => {
    render(<PodcastsPage />);
    const titleElement = screen.getByText('Trending Now');
    expect(titleElement).toBeInTheDocument();
  });

  test('renders input component with placeholder', () => {
    render(<PodcastsPage />);
    const inputElement = screen.getByPlaceholderText('Search');
    expect(inputElement).toBeInTheDocument();
  });

  test.todo('calls filterPodcasts when input value changes');

  test('renders podcast items', () => {
    const { container } = render(<PodcastsPage />);
    const podcastItemElements =
      container.getElementsByClassName('podcast-item');
    expect(podcastItemElements.length).toBe(podcasts.length);
  });
});
