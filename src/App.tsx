import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Header } from '@/components/header/Header';
import { Podcasts as PodcastsPage } from '@/pages/Podcasts';
import { Podcast } from '@/pages/Podcast';
import { Episode } from '@/pages/Episode';
import {
  FetchPodcastsService,
  LocalStorageCacheService,
  Podcasts,
} from './domain/Podcasts';

const fetchService = new FetchPodcastsService();
const cacheService = new LocalStorageCacheService();
const podcasts = new Podcasts(fetchService, cacheService);

const router = createBrowserRouter([
  {
    path: '/',
    element: <PodcastsPage />,
    loader: async () => {
      const data = await podcasts.getPodcasts();
      return data;
    },
  },
  {
    path: '/podcast/:id',
    element: <Podcast />,
    loader: async ({ params }) => {
      if (!params.id) throw new Error('Podcast ID is required');
      const data = await podcasts.getEpisodes(params.id);
      return data;
    },
    children: [
      {
        path: '/podcast/:id',
        element: <Podcast />,
      },
      {
        path: '/podcast/:id/episode/:chapterId',
        element: <Episode />,
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
