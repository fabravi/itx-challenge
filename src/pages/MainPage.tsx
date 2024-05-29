import { Header } from '@/components/header/Header';
import { Outlet } from 'react-router-dom';

export const MainPage = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
