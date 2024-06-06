import { render, screen } from '@testing-library/react';
import { EpisodePage } from './EpisodePage';

jest.mock('@/adapters/hooks/useNavigation', () => ({
  useNavigation: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useLoaderData: jest.fn(() => ({
    trackName: 'Episode Title',
    description: 'Episode Description',
    audio: 'episode-audio.mp3',
  })),
}));

describe('EpisodePage', () => {
  test('renders episode details', () => {
    render(<EpisodePage />);
    const titleElement = screen.getByText('Episode Title');
    const descriptionElement = screen.getByText('Episode Description');
    const audioElement = screen.getByRole('audio');

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(audioElement).toBeInTheDocument();
  });
});
