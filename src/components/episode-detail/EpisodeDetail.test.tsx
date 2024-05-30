import { render } from '@testing-library/react';
import { EpisodeDetail } from './EpisodeDetail';

describe('EpisodeDetail', () => {
  const props = {
    title: 'Episode Title',
    description: 'Episode Description',
    audio: 'https://example.com/audio.mp3',
  };

  it('renders the title', () => {
    const { getByText } = render(<EpisodeDetail {...props} />);
    expect(getByText(props.title)).toBeInTheDocument();
  });

  it('renders the description', () => {
    const { getByText } = render(<EpisodeDetail {...props} />);
    expect(getByText(props.description)).toBeInTheDocument();
  });

  it('renders the audio player', () => {
    const { getByRole } = render(<EpisodeDetail {...props} />);
    expect(getByRole('audio')).toBeInTheDocument();
  });
});
