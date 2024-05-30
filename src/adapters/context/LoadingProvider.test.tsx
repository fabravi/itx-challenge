import { render } from '@testing-library/react';
import { LoadingProvider } from './LoadingProvider';

describe('LoadingProvider', () => {
  it('renders children without throwing an error', () => {
    const children = <div>Test Children</div>;
    render(<LoadingProvider>{children}</LoadingProvider>);
  });
});
