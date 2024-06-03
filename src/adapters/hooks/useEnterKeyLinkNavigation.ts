import { useEffect } from 'react';

export const useEnterKeyLinkNavigation = () => {
  const navigateWithEnter = (event: KeyboardEvent) => {
    if (event.key !== 'Enter') return;
    const focusedElement = document.activeElement as HTMLElement;
    if (focusedElement.getAttribute('role') === 'link') {
      focusedElement.click();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', navigateWithEnter);
    return () => {
      window.removeEventListener('keydown', navigateWithEnter);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
