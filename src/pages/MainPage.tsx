import { useLoading } from '@/adapters/context/LoadingProvider';
import { Header } from '@/components/header/Header';
import { Outlet } from 'react-router-dom';

export const MainPage = () => {
  const { loading } = useLoading();

  return (
    <>
      <Header loading={loading} />
      <Outlet />
    </>
  );
};
