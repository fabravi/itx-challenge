import { EpisodePage } from '@/pages/EpisodePage';
import { EpisodesPage } from '@/pages/EpisodesPage';
import { MainPage } from '@/pages/MainPage';
import { PodcastPage } from '@/pages/PodcastPage';
import { PodcastsPage } from '@/pages/PodcastsPage';
import { createBrowserRouter } from 'react-router-dom';
import {
  episodeLoader,
  episodesLoader,
  podcastLoader,
  podcastsLoader,
} from './loaders';

const routes = [
  {
    path: '/',
    element: <MainPage />,
    children: [
      { path: '/', element: <PodcastsPage />, loader: podcastsLoader },
      {
        path: '/podcast/:id',
        element: <PodcastPage />,
        loader: podcastLoader,
        children: [
          {
            path: '/podcast/:id',
            element: <EpisodesPage />,
            loader: episodesLoader,
          },
          {
            path: '/podcast/:id/episode/:episodeId',
            element: <EpisodePage />,
            loader: episodeLoader,
          },
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
