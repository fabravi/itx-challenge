type EpisodeItemProps = {
  id: string;
  chapterId: string;
  trackId: string;
  artworkUrl60: string;
  collectionName: string;
  trackName: string;
  artistViewUrl: string;
  navigate: (to: string) => void;
};

export const EpisodeItem = ({
  id,
  chapterId,
  trackId,
  artworkUrl60,
  collectionName,
  trackName,
  artistViewUrl,
  navigate,
}: EpisodeItemProps) => {
  return (
    <li
      key={trackId}
      onClick={() => navigate(`/podcast/${id}/episode/${chapterId}`)}
    >
      <img src={artworkUrl60} alt={collectionName} />
      <div>
        <h2>{trackName}</h2>
        <p>{artistViewUrl}</p>
      </div>
    </li>
  );
};
