const mockEpisode = {
  country: 'USA',
  episodeUrl:
    'https://verifi.podscribe.com/rss/p/traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_707.mp3?dest-id=2422538',
  previewUrl:
    'https://verifi.podscribe.com/rss/p/traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_707.mp3?dest-id=2422538',
  collectionViewUrl:
    'https://itunes.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?mt=2&uo=4',
  artworkUrl60:
    'https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/03/ed/58/03ed5816-a42d-0746-d550-463d5d27ae0c/mza_1084147978297563330.jpeg/60x60bb.jpg',
  artistViewUrl:
    'https://itunes.apple.com/us/artist/the-joe-budden-network/1535844019?mt=2&uo=4',
  artworkUrl600:
    'https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/03/ed/58/03ed5816-a42d-0746-d550-463d5d27ae0c/mza_1084147978297563330.jpeg/600x600bb.jpg',
  contentAdvisoryRating: 'Explicit',
  trackViewUrl:
    'https://podcasts.apple.com/us/podcast/episode-707-peeing-out-your-a%24%24/id1535809341?i=1000649016848&uo=4',
  closedCaptioning: 'none',
  collectionId: 1535809341,
  collectionName: 'The Joe Budden Podcast',
  trackTimeMillis: 11629000,
  genres: [
    {
      name: 'Music',
      id: '1310',
    },
  ],
  episodeGuid: 'aba8724b-9882-437b-9a68-b8bd929db886',
  description:
    ' In the latest episode, the JBP begins by reacting to another rant from Kanye (17:48) before moving to the latest in music and what is due this Friday (27:15). The internet reacts to Drake’s 4Bat’z remix (35:44), Lebron and Jeanie Buss’ viral video (57:12), and a Boeing whistleblower has been found dead (1:40:48). Also, Bishop Whitehead has been found guilty of fraud (1:47:57), 2024 Oscars results (1:57:26), Black Twitter documentary coming to Hulu (2:01:45), Gilbert Arenas & Nick Young’s comments about Draya (2:18:55), and much more. \n Become a Patron of The Joe Budden Podcast for additional bonus episodes and visual content for all things JBP! Join our Patreon here: www.patreon.com/joebudden\n Sleeper Picks: \n Joe | Rae Khalil - “IS IT WORTH IT”\n Ice | V.A. Verse - “Grown Man Flows 2”\n Parks | DJ Premier & Russ - “Work This Out” \n Emanny | Mack Wilds - “The Sober Up”',
  feedUrl: 'https://jbpod.libsyn.com/applepodcast',
  shortDescription:
    ' In the latest episode, the JBP begins by reacting to another rant from Kanye (17:48) before moving to the latest in music and what is due this Friday (27:15). The internet reacts to Drake’s 4Bat’z remix (35:44), Lebron and Jeanie Buss’...',
  releaseDate: '2024-03-13T07:00:00Z',
  trackId: 1000649016848,
  trackName: 'Episode 707 | "Peeing Out Your A$$"',
  artistIds: [1535844019],
  artworkUrl160:
    'https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/03/ed/58/03ed5816-a42d-0746-d550-463d5d27ae0c/mza_1084147978297563330.jpeg/160x160bb.jpg',
  episodeFileExtension: 'mp3',
  episodeContentType: 'audio',
  kind: 'podcast-episode',
  wrapperType: 'podcastEpisode',
};

const mockDetail = {
  wrapperType: 'track',
  kind: 'podcast',
  artistId: 1535844019,
  collectionId: 1535809341,
  trackId: 1535809341,
  artistName: 'The Joe Budden Network',
  collectionName: 'The Joe Budden Podcast',
  trackName: 'The Joe Budden Podcast',
  collectionCensoredName: 'The Joe Budden Podcast',
  trackCensoredName: 'The Joe Budden Podcast',
  artistViewUrl:
    'https://podcasts.apple.com/us/artist/the-joe-budden-network/1535844019?uo=4',
  collectionViewUrl:
    'https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=4',
  feedUrl: 'https://jbpod.libsyn.com/applepodcast',
  trackViewUrl:
    'https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=4',
  artworkUrl30:
    'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/30x30bb.jpg',
  artworkUrl60:
    'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.jpg',
  artworkUrl100:
    'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/100x100bb.jpg',
  collectionPrice: 0,
  trackPrice: 0,
  collectionHdPrice: 0,
  releaseDate: '2024-05-22T07:00:00Z',
  collectionExplicitness: 'notExplicit',
  trackExplicitness: 'explicit',
  trackCount: 486,
  trackTimeMillis: 13072,
  country: 'USA',
  currency: 'USD',
  primaryGenreName: 'Music',
  contentAdvisoryRating: 'Explicit',
  artworkUrl600:
    'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/600x600bb.jpg',
  genreIds: ['1310', '26'],
  genres: ['Music', 'Podcasts'],
};

const mockedPodcasts = {
  feed: {
    author: {
      name: { label: 'iTunes Store' },
      uri: { label: 'http://www.apple.com/itunes/' },
    },
    entry: [
      {
        'im:name': { label: 'The Joe Budden Podcast' },
        'im:image': [
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/55x55bb.png',
            attributes: { height: '55' },
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.png',
            attributes: { height: '60' },
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png',
            attributes: { height: '170' },
          },
        ],
        summary: {
          label:
            'Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends.',
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' },
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© All rights reserved' },
        title: { label: 'The Joe Budden Podcast - The Joe Budden Network' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2',
          },
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2',
          attributes: { 'im:id': '1535809341' },
        },
        'im:artist': {
          label: 'The Joe Budden Network',
          attributes: {
            href: 'https://podcasts.apple.com/us/artist/the-joe-budden-network/1535844019?uo=2',
          },
        },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music',
          },
        },
        'im:releaseDate': {
          label: '2024-05-29T00:00:00-07:00',
          attributes: { label: 'May 29, 2024' },
        },
      },
      {
        'im:name': { label: 'Bandsplain' },
        'im:image': [
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/db/9c/59/db9c592b-c410-9446-9f4b-7c97c260172e/mza_2651437534972495734.jpg/55x55bb.png',
            attributes: { height: '55' },
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/db/9c/59/db9c592b-c410-9446-9f4b-7c97c260172e/mza_2651437534972495734.jpg/60x60bb.png',
            attributes: { height: '60' },
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/db/9c/59/db9c592b-c410-9446-9f4b-7c97c260172e/mza_2651437534972495734.jpg/170x170bb.png',
            attributes: { height: '170' },
          },
        ],
        summary: {
          label:
            'Bandsplain is a show where host Yasi Salek invites experts to explain cult bands and iconic artists - and why people love them - using a curated playlist to help you understand the hype. ',
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' },
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© All rights reserved.' },
        title: { label: 'Bandsplain - The Ringer' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/bandsplain/id1671021737?uo=2',
          },
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/bandsplain/id1671021737?uo=2',
          attributes: { 'im:id': '1671021737' },
        },
        'im:artist': { label: 'The Ringer' },
        category: {
          attributes: {
            'im:id': '1523',
            term: 'Music Commentary',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-commentary/id1523?uo=2',
            label: 'Music Commentary',
          },
        },
        'im:releaseDate': {
          label: '2024-05-30T03:00:00-07:00',
          attributes: { label: 'May 30, 2024' },
        },
      },
      {
        'im:name': { label: 'A History of Rock Music in 500 Songs' },
        'im:image': [
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts124/v4/88/18/59/881859a5-f344-c249-f4b9-3d9b62add05a/mza_16428964146354887078.png/55x55bb.png',
            attributes: { height: '55' },
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts124/v4/88/18/59/881859a5-f344-c249-f4b9-3d9b62add05a/mza_16428964146354887078.png/60x60bb.png',
            attributes: { height: '60' },
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts124/v4/88/18/59/881859a5-f344-c249-f4b9-3d9b62add05a/mza_16428964146354887078.png/170x170bb.png',
            attributes: { height: '170' },
          },
        ],
        summary: {
          label:
            'Andrew Hickey presents a history of rock music from 1938 to 1999, looking at five hundred songs that shaped the genre.',
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' },
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© 2021 A History of Rock Music in 500 Songs' },
        title: {
          label: 'A History of Rock Music in 500 Songs - Andrew Hickey',
        },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/a-history-of-rock-music-in-500-songs/id1437402802?uo=2',
          },
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/a-history-of-rock-music-in-500-songs/id1437402802?uo=2',
          attributes: { 'im:id': '1437402802' },
        },
        'im:artist': { label: 'Andrew Hickey' },
        category: {
          attributes: {
            'im:id': '1524',
            term: 'Music History',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-history/id1524?uo=2',
            label: 'Music History',
          },
        },
        'im:releaseDate': {
          label: '2024-05-24T13:58:00-07:00',
          attributes: { label: 'May 24, 2024' },
        },
      },
      {
        'im:name': { label: 'Friday Night Karaoke' },
        'im:image': [
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/75/6f/21/756f219f-111f-b47f-48e5-f39946e643bf/mza_12168793512556367093.jpg/55x55bb.png',
            attributes: { height: '55' },
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/75/6f/21/756f219f-111f-b47f-48e5-f39946e643bf/mza_12168793512556367093.jpg/60x60bb.png',
            attributes: { height: '60' },
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/75/6f/21/756f219f-111f-b47f-48e5-f39946e643bf/mza_12168793512556367093.jpg/170x170bb.png',
            attributes: { height: '170' },
          },
        ],
        summary: {
          label:
            'No ads, no gimmicks - just Karaoke! Friday Night Karaoke features amateur artists every week singing the songs they love, just for you! Get your weekly dose of vocal expression. Get featured on the podcast by joining the official Friday Night Karaoke Facebook group at https://www.facebook.com/groups/fridaynightkaraoke!',
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' },
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© 2024 Friday Night Karaoke' },
        title: { label: 'Friday Night Karaoke - Friday Night Karaoke' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/friday-night-karaoke/id1574029840?uo=2',
          },
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/friday-night-karaoke/id1574029840?uo=2',
          attributes: { 'im:id': '1574029840' },
        },
        'im:artist': { label: 'Friday Night Karaoke' },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music',
          },
        },
        'im:releaseDate': {
          label: '2024-05-13T20:14:00-07:00',
          attributes: { label: 'May 13, 2024' },
        },
      },
      {
        'im:name': { label: 'Song Exploder' },
        'im:image': [
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/9c/d8/b0/9cd8b073-0f49-341b-3d3a-ab4da3b2aef2/mza_3440682107671500952.png/55x55bb.png',
            attributes: { height: '55' },
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/9c/d8/b0/9cd8b073-0f49-341b-3d3a-ab4da3b2aef2/mza_3440682107671500952.png/60x60bb.png',
            attributes: { height: '60' },
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/9c/d8/b0/9cd8b073-0f49-341b-3d3a-ab4da3b2aef2/mza_3440682107671500952.png/170x170bb.png',
            attributes: { height: '170' },
          },
        ],
        summary: {
          label:
            'Song Exploder is a podcast where musicians take apart their songs, and piece by piece, tell the story of how they were made. Each episode features an artist discussing a song of theirs, breaking down the sounds and ideas that went into the writing and recording. Hosted and produced by Hrishikesh Hirway.',
        },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' },
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© Translucence' },
        title: { label: 'Song Exploder - Hrishikesh Hirway' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/song-exploder/id788236947?uo=2',
          },
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/song-exploder/id788236947?uo=2',
          attributes: { 'im:id': '788236947' },
        },
        'im:artist': {
          label: 'Hrishikesh Hirway',
          attributes: {
            href: 'https://podcasts.apple.com/us/artist/radiotopia/850139119?uo=2',
          },
        },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music',
          },
        },
        'im:releaseDate': {
          label: '2024-05-29T08:45:00-07:00',
          attributes: { label: 'May 29, 2024' },
        },
      },
    ],
    updated: { label: '2024-05-31T01:43:25-07:00' },
    rights: { label: 'Copyright 2008 Apple Inc.' },
    title: { label: 'iTunes Store: Top Podcasts in Music' },
    icon: { label: 'http://itunes.apple.com/favicon.ico' },
    link: [
      {
        attributes: {
          rel: 'alternate',
          type: 'text/html',
          href: 'https://podcasts.apple.com/WebObjects/MZStore.woa/wa/viewTop?cc=us&id=179537&popId=3',
        },
      },
      {
        attributes: {
          rel: 'self',
          href: 'https://mzstoreservices-int-st.itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
        },
      },
    ],
    id: {
      label:
        'https://mzstoreservices-int-st.itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
    },
  },
};

export { mockDetail, mockEpisode, mockedPodcasts };
