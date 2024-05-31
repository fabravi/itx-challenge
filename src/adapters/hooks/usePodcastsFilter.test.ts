import { usePodcastsFilter } from '@/adapters/hooks/usePodcastsFilter';
import { renderHook } from '@testing-library/react-hooks';

describe('usePodcastsFilter', () => {
  const mockedPodcasts = [
    {
      id: '1',
      name: 'Podcast 1',
      artist: 'Artist 1',
      image: 'Image 1',
      summary: 'Summary 1',
    },
    {
      id: '2',
      name: 'Podcast 2',
      artist: 'Artist 2',
      image: 'Image 2',
      summary: 'Summary 2',
    },
    {
      id: '3',
      name: 'Podcast 3',
      artist: 'Artist 3',
      image: 'Image 3',
      summary: 'Summary 3',
    },
  ];

  test('should return the original list when term is empty', () => {
    const { result } = renderHook(() => usePodcastsFilter(mockedPodcasts));

    const { filterPodcasts } = result.current;

    filterPodcasts('');

    const { podcasts } = result.current;

    expect(podcasts).toEqual(mockedPodcasts);
  });

  test('should filter the list based on the provided term', () => {
    const { result } = renderHook(() => usePodcastsFilter(mockedPodcasts));

    const { filterPodcasts } = result.current;

    filterPodcasts('Podcast 1');

    const { podcasts } = result.current;

    expect(podcasts).toEqual([mockedPodcasts[0]]);
  });

  test('should return an empty list when no matches are found', () => {
    const { result } = renderHook(() => usePodcastsFilter(mockedPodcasts));

    const { filterPodcasts } = result.current;

    filterPodcasts('Podcast 4');

    const { podcasts } = result.current;

    expect(podcasts).toEqual([]);
  });
});
