import {
  MainPage,
  EpisodePage,
  EpisodesPage,
  ErrorPage,
  PodcastPage,
  PodcastsPage,
} from '@/pages/index';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
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
      {
        path: '/',
        element: <PodcastsPage />,
        loader: podcastsLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: '/podcast/:id',
        element: <PodcastPage />,
        loader: podcastLoader,
        errorElement: <ErrorPage />,
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
  {
    path: '*',
    element: <ErrorPage />,
  },
];

export const router = createBrowserRouter(routes as RouteObject[]);
