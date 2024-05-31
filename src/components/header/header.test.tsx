import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from './Header';
import { useNavigation } from '@/adapters/hooks/useNavigation';

jest.mock('@/adapters/hooks/useNavigation', () => ({
  useNavigation: jest.fn(),
}));

describe('Header', () => {
  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue({
      navigate: jest.fn(),
    });
  });

  it('renders the title', () => {
    render(<Header loading={false} />);
    const titleElement = screen.getByText('Podcasts');
    expect(titleElement).toBeInTheDocument();
  });

  it('navigates to the home page when the title is clicked', () => {
    const navigate = jest.fn();
    (useNavigation as jest.Mock).mockReturnValue({ navigate });

    render(<Header loading={false} />);
    const titleElement = screen.getByText('Podcasts');
    fireEvent.click(titleElement);

    expect(navigate).toHaveBeenCalledWith('/');
  });

  it('renders the loading bar when loading is true', () => {
    render(<Header loading={true} />);
    const loadingBarElement = screen.getByTestId('loading-bar');
    expect(loadingBarElement).toBeInTheDocument();
  });

  it('does not show the loading bar when loading is false', () => {
    render(<Header loading={false} />);
    const loadingBarElement = screen.queryByTestId('loading-bar');
    expect(loadingBarElement?.classList).not.toContain('loading');
  });
});
