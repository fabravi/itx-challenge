import { render } from '@testing-library/react';
import { PodcastDetail } from './PodcastDetail';

describe('PodcastDetail', () => {
  const podcast = {
    id: '1',
    image: 'https://example.com/image.jpg',
    name: 'Podcast Name',
    artist: 'Podcast Artist',
    summary: 'Podcast Summary',
  };

  it('renders the podcast details correctly', () => {
    const { getByAltText, getByText } = render(<PodcastDetail {...podcast} />);

    expect(getByAltText(podcast.name)).toBeInTheDocument();
    expect(getByText(podcast.name)).toBeInTheDocument();
    expect(getByText(`by ${podcast.artist}`)).toBeInTheDocument();
    expect(getByText(podcast.summary)).toBeInTheDocument();
  });
});
