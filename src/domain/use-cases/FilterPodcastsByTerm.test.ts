import { FilterPodcastsByTerm } from './FilterPodcastsByTerm';

describe('FilterPodcastsByTerm', () => {
  let filterPodcastsByTerm: FilterPodcastsByTerm;
  const podcasts = [
    {
      id: '1',
      name: 'Podcast 1',
      artist: 'Artist 1',
      image: 'image-1.jpg',
      summary: 'Summary 1',
    },
    {
      id: '2',
      name: 'Podcast 2',
      artist: 'Artist 2',
      image: 'image-2.jpg',
      summary: 'Summary 2',
    },
    {
      id: '3',
      name: 'Podcast 3',
      artist: 'Artist 3',
      image: 'image-3.jpg',
      summary: 'Summary 3',
    },
  ];

  beforeEach(() => {
    filterPodcastsByTerm = new FilterPodcastsByTerm();
  });

  it('should filter podcasts by term', () => {
    const filteredPodcasts = filterPodcastsByTerm.execute(
      podcasts,
      'Podcast 2'
    );

    expect(filteredPodcasts).toEqual([
      {
        id: '2',
        name: 'Podcast 2',
        artist: 'Artist 2',
        image: 'image-2.jpg',
        summary: 'Summary 2',
      },
    ]);
  });

  it('should filter podcasts by term (case-insensitive)', () => {
    const filteredPodcasts = filterPodcastsByTerm.execute(podcasts, 'artist 3');

    expect(filteredPodcasts).toEqual([
      {
        id: '3',
        name: 'Podcast 3',
        artist: 'Artist 3',
        image: 'image-3.jpg',
        summary: 'Summary 3',
      },
    ]);
  });

  it('should return an empty array if no podcasts match the term', () => {
    const filteredPodcasts = filterPodcastsByTerm.execute(
      podcasts,
      'Podcast 4'
    );

    expect(filteredPodcasts).toEqual([]);
  });
});
