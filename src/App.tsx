import { Header } from '@/components/header/Header';
import { PodcastsPage } from '@/pages/PodcastsPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PodcastPage } from './pages/PodcastPage';
import { EpisodesPage } from './pages/EpisodesPage';
import { EpisodePage } from './pages/EpisodePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PodcastsPage />,
  },
  {
    path: '/podcast/:id',
    element: <PodcastPage />,
    children: [
      {
        path: '/podcast/:id',
        element: <EpisodesPage />,
      },
      {
        path: '/podcast/:id/episode/:chapterId',
        element: <EpisodePage />,
      },
    ],
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
