import { render, screen } from '@testing-library/react';
import { LoadingBar } from './LoadingBar';

describe('LoadingBar', () => {
  it('renders without errors', () => {
    render(<LoadingBar loading={false} />);
    expect(screen.getByTestId('loading-bar')).toBeInTheDocument();
  });

  it('renders with the "loading" class when loading is true', () => {
    render(<LoadingBar loading={true} />);
    expect(screen.getByTestId('loading-bar')).toHaveClass('loading');
  });

  it('does not render the "loading" class when loading is false', () => {
    render(<LoadingBar loading={false} />);
    expect(screen.getByTestId('loading-bar')).not.toHaveClass('loading');
  });
});
