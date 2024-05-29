import { EpisodeDetail } from '@/components/episode-detail/EpisodeDetail';
import { mockEpisode } from '../mocks';

export const EpisodePage = () => {
  const episode = mockEpisode;

  return (
    <EpisodeDetail
      title={episode.trackName}
      description="<strong>Description</strong> here!"
      audio={episode.episodeUrl}
    />
  );
};
