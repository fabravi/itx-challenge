import { render, screen } from '@testing-library/react';
import { EpisodesPage } from './EpisodesPage';

const episodes = {
  count: 170,
  episodes: [
    {
      id: 1,
      trackCount: 10,
      duration: 600000,
      releaseDate: '2022-01-01',
      image: 'https://example.com/image.jpg',
      trackName: 'Episode 1',
    },
    {
      id: 2,
      trackCount: 5,
      duration: 300000,
      releaseDate: '2022-02-01',
      image: 'https://example.com/image.jpg',
      trackName: 'Episode 2',
    },
    {
      id: 3,
      trackCount: 3,
      duration: undefined,
      releaseDate: '2022-03-01',
      image: 'https://example.com/image.jpg',
      trackName: 'Episode 3',
    },
  ],
};

jest.mock('@/adapters/hooks/useNavigation', () => ({
  useNavigation: jest.fn(() => {
    return {
      navigate: jest.fn(),
    };
  }),
}));

jest.mock('react-router-dom', () => ({
  useLoaderData: jest.fn(() => episodes),
}));

describe('EpisodesPage', () => {
  test('renders episodes count', () => {
    render(<EpisodesPage />);
    const countElement = screen.getByText('Episodes: 170');
    expect(countElement).toBeInTheDocument();
  });

  test('renders episode items', () => {
    const { container } = render(<EpisodesPage />);
    const episodeItems = container.getElementsByClassName(
      'episode-item'
    ) as HTMLCollectionOf<HTMLElement>;
    expect(episodeItems).toHaveLength(3);
  });

  test('hides duration when it is not a number', () => {
    const { container } = render(<EpisodesPage />);
    const durationElement =
      container.getElementsByClassName('episode-duration')[2];
    expect(durationElement).toHaveTextContent('');
  });

  test('does not render episode items when episodes is undefined', () => {
    jest.clearAllMocks();

    jest
      .spyOn(require('react-router-dom'), 'useLoaderData')
      .mockReturnValue({ episodes: undefined });

    render(<EpisodesPage />);
    const episodeItems = screen.queryAllByRole('listitem');
    expect(episodeItems).toHaveLength(0);
  });
});
