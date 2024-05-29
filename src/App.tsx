import { Header } from '@/components/header/Header';
import { Podcasts } from '@/pages/Podcasts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Podcasts />,
  },
  {
    path: '/:id',
    element: <div>Detail</div>,
  },
  {
    path: '/:id/chapter/:chapterId',
    element: <div>Chapter</div>,
  },
]);

export const App = () => {
  return (
    <>
      <Header />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};
