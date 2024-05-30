import { render, screen, fireEvent } from '@testing-library/react';
import { PodcastPage } from './PodcastPage';
import { Outlet } from 'react-router-dom';

const detail = {
  id: '1',
  image: 'https://example.com/image.jpg',
  name: 'Podcast Name',
  artist: 'Podcast Artist',
  description: 'Podcast Description',
};

const navigate = jest.fn();

jest.mock('@/adapters/hooks/useNavigation', () => ({
  useNavigation: () => ({ navigate }),
}));

jest.mock('react-router-dom', () => ({
  useLoaderData: jest.fn(() => detail),
  Outlet: jest.fn(() => null),
}));

describe('PodcastPage', () => {
  test('renders podcast detail', () => {
    render(<PodcastPage />);
    const podcastDetail = screen.getByText(detail.name);
    expect(podcastDetail).toBeInTheDocument();
  });

  test('navigates to podcast detail page when clicked', () => {
    render(<PodcastPage />);
    const leftPanel = screen.getByText(detail.name);
    fireEvent.click(leftPanel);
    expect(navigate).toHaveBeenCalledWith(`/podcast/${detail.id}`);
  });
});
