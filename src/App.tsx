import { Header } from '@/components/header/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>List</div>,
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
