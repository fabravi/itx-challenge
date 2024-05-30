import { useNavigation } from '@/adapters/hooks/useNavigation';
import { EpisodeDetail } from '@/components/episode-detail/EpisodeDetail';
import { useLoaderData } from 'react-router-dom';

export const EpisodePage = () => {
  const episode = useLoaderData();
  useNavigation();

  return (
    <EpisodeDetail
      title={episode.trackName}
      description={episode.description}
      audio={episode.audio}
    />
  );
};
