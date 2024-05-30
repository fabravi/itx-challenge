import { render, screen, fireEvent } from '@testing-library/react';
import { EpisodeItem } from './EpisodeItem';

describe('EpisodeItem', () => {
  const episode = {
    id: '1',
    trackName: 'Episode 1',
    image: 'episode1.jpg',
    duration: '30:00',
    releaseDate: '2022-01-01',
    name: 'My Podcast',
  };

  it('renders episode details correctly', () => {
    render(<EpisodeItem {...episode} navigate={() => {}} />);

    expect(screen.getByText(episode.trackName)).toBeInTheDocument();
    expect(screen.getByText(episode.duration)).toBeInTheDocument();
    expect(screen.getByText(episode.releaseDate)).toBeInTheDocument();
  });

  it('calls navigate function when clicked', () => {
    const navigateMock = jest.fn();
    render(<EpisodeItem {...episode} navigate={navigateMock} />);

    fireEvent.click(screen.getByText(episode.trackName));

    expect(navigateMock).toHaveBeenCalledWith(`episode/${episode.id}`);
  });
});
