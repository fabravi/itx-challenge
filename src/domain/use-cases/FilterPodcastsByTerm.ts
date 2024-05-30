export class FilterPodcastsByTerm {
  execute(podcasts: Podcast[], term: string): Podcast[] {
    const lowerCaseTerm = term.toLocaleLowerCase();
    const filtered = podcasts.filter((podcast) => {
      return (
        podcast.name.toLocaleLowerCase().includes(lowerCaseTerm) ||
        podcast.artist.toLocaleLowerCase().includes(lowerCaseTerm)
      );
    });
    return filtered;
  }
}
