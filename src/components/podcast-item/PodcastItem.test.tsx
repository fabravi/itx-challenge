import { render, screen, fireEvent } from '@testing-library/react';
import { PodcastItem } from './PodcastItem';

describe('PodcastItem', () => {
  const mockPodcast = {
    id: '1',
    image: 'https://example.com/image.jpg',
    name: 'Podcast Name',
    artist: 'Podcast Artist',
  };

  it('renders podcast details correctly', () => {
    render(
      <PodcastItem
        id={mockPodcast.id}
        image={mockPodcast.image}
        name={mockPodcast.name}
        artist={mockPodcast.artist}
        navigate={() => {}}
      />
    );

    const podcastImage = screen.getByAltText(mockPodcast.name);
    const podcastName = screen.getByText(mockPodcast.name);
    const podcastArtist = screen.getByText(mockPodcast.artist);

    expect(podcastImage).toBeInTheDocument();
    expect(podcastName).toBeInTheDocument();
    expect(podcastArtist).toBeInTheDocument();
  });

  it('calls navigate function when clicked', () => {
    const mockNavigate = jest.fn();
    render(
      <PodcastItem
        id={mockPodcast.id}
        image={mockPodcast.image}
        name={mockPodcast.name}
        artist={mockPodcast.artist}
        navigate={mockNavigate}
      />
    );

    const podcastItem = screen.getByText(mockPodcast.name);
    fireEvent.click(podcastItem);

    expect(mockNavigate).toHaveBeenCalledWith(`/podcast/${mockPodcast.id}`);
  });
});
