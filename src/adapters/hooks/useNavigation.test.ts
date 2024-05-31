import { renderHook, act } from '@testing-library/react-hooks';
import { useNavigate } from 'react-router-dom';
import { useLoading } from '@/adapters/context/LoadingProvider';
import { useNavigation } from '@/adapters/hooks/useNavigation';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('@/adapters/context/LoadingProvider', () => ({
  useLoading: jest.fn(),
}));

jest.spyOn(window, 'scrollTo').mockImplementation(() => {});

describe('useNavigation', () => {
  const mockNavigate = jest.fn();
  const mockSetLoading = jest.fn();

  (useNavigate as jest.Mock<any>).mockReturnValue(mockNavigate);

  beforeEach(() => {
    (useNavigate as jest.Mock<any>).mockReturnValue(mockNavigate);
    (useLoading as jest.Mock<any>).mockReturnValue({
      setLoading: mockSetLoading,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should set loading to false on mount', () => {
    renderHook(() => useNavigation());

    expect(mockSetLoading).toHaveBeenCalledWith(false);
  });

  it('should set loading to true and navigate to the specified path', () => {
    const { result } = renderHook(() => useNavigation());

    act(() => {
      result.current.navigate('/example-path');
    });

    expect(mockSetLoading).toHaveBeenCalledWith(true);
    expect(mockNavigate).toHaveBeenCalledWith('/example-path');
  });

  it('should not navigate if the path is the same as the current path', () => {
    const { result } = renderHook(() => useNavigation());
    jest.clearAllMocks();

    act(() => {
      result.current.navigate(window.location.pathname);
    });

    expect(mockSetLoading).not.toHaveBeenCalled();
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it('should scroll to the top of the page', () => {
    renderHook(() => useNavigation());

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });
});
