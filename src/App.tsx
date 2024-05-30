import { PodcastsPage } from '@/pages/PodcastsPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PodcastPage } from './pages/PodcastPage';
import { EpisodesPage } from './pages/EpisodesPage';
import { EpisodePage } from './pages/EpisodePage';
import { MainPage } from './pages/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [
      { path: '/', element: <PodcastsPage /> },
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
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
