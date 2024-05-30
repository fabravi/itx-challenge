import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoading } from '@/adapters/context/LoadingProvider';

export const useNavigation = () => {
  const routerNavigate = useNavigate();
  const { setLoading } = useLoading();

  useEffect(() => {
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = (path: string) => {
    setLoading(true);
    routerNavigate(path);
  };

  return {
    navigate,
  };
};
