import { EpisodeDetail } from '@/components/episode-detail/EpisodeDetail';
import { useLoaderData } from 'react-router-dom';

export const EpisodePage = () => {
  const episode = useLoaderData();

  return (
    <EpisodeDetail
      title={episode.trackName}
      description={episode.description}
      audio={episode.audio}
    />
  );
};
