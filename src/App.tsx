import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { EpisodePage } from '@/pages/EpisodePage';
import { EpisodesPage } from '@/pages/EpisodesPage';
import { FetchPodcast } from '@/infra/FetchPodcast';
import { GetPodcasts } from '@/domain/use-cases/GetPodcasts';
import { LocalStorage } from '@/infra/LocalStorage';
import { MainPage } from '@/pages/MainPage';
import { PodcastPage } from '@/pages/PodcastPage';
import { PodcastsPage } from '@/pages/PodcastsPage';

const localStorage = new LocalStorage(1000 * 60 * 60 * 24);
const fetchPodcast = new FetchPodcast('', localStorage);
const podcastsUseCases = new GetPodcasts(fetchPodcast);

const podcastsLoader = async () => {
  return await podcastsUseCases.get();
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const episodesLoader = async (args: any) => {
  const { params } = args;
  const { id } = params;
  if (!id) {
    throw new Error('Invalid params');
  }
  return await podcastsUseCases.getEpisodes(id);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const episodeLoader = async (args: any) => {
  const { params } = args;
  const { id, episodeId } = params;
  if (!id || !episodeId) {
    throw new Error('Invalid params');
  }
  return await podcastsUseCases.getEpisode(id, episodeId);
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [
      { path: '/', element: <PodcastsPage />, loader: podcastsLoader },
      {
        path: '/podcast/:id',
        element: <PodcastPage />,
        loader: episodesLoader,
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
]);

export const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
