import React from 'react';
import ReactDOM from 'react-dom/client';
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

const App: React.FC = () => {
  return (
    <>
      <Header />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
