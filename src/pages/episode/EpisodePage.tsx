import { useNavigation } from '@/adapters/hooks/useNavigation';
import { EpisodeDetail } from '@/components/episode-detail/EpisodeDetail';
import { useLoaderData } from 'react-router-dom';

const EpisodePage = () => {
  const episode = useLoaderData() as Episode;
  useNavigation();

  return (
    <EpisodeDetail
      title={episode.trackName}
      description={episode.description}
      audio={episode.audio}
    />
  );
};

export default EpisodePage;
