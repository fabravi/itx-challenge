import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoading } from '@/adapters/context/LoadingProvider';

export const useNavigation = () => {
  const routerNavigate = useNavigate();
  const { setLoading } = useLoading();

  const navigateWithEnter = (event: KeyboardEvent) => {
    if (event.key !== 'Enter') return;
    const focusedElement = document.activeElement as HTMLElement;
    focusedElement.click();
  };

  useEffect(() => {
    setLoading(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    window.addEventListener('keypress', navigateWithEnter);
    return () => {
      window.removeEventListener('keypress', navigateWithEnter);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = (path: string) => {
    if (path === window.location.pathname) {
      return;
    }
    setLoading(true);
    routerNavigate(path);
  };

  return {
    navigate,
  };
};
