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

const episodesLoader = async ({ params }: { params: { id: string } }) => {
  return await podcastsUseCases.getEpisodes(params.id);
};

const episodeLoader = async ({
  params,
}: {
  params: { id: string; episodeId: string };
}) => {
  return await podcastsUseCases.getEpisode(params.id, params.episodeId);
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
