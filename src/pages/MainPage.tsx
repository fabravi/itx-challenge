import { useLoading } from '@/adapters/context/LoadingProvider';
import { useEnterKeyLinkNavigation } from '@/adapters/hooks/useEnterKeyLinkNavigation';
import { Header } from '@/components/header/Header';
import { Outlet } from 'react-router-dom';

export const MainPage = () => {
  const { loading } = useLoading();
  useEnterKeyLinkNavigation();

  return (
    <>
      <Header loading={loading} />
      <Outlet />
    </>
  );
};
