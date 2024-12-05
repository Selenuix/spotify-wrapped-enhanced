import {AnalyticsData} from "../types/spotify.ts";

export const sampleAnalyticsData: AnalyticsData = {
  totalTracks: 1200,
  uniqueArtists: new Set(['Artist 1', 'Artist 2', 'Artist 3', 'Artist 4', 'Artist 5']),
  uniqueAlbums: new Set(['Album 1', 'Album 2', 'Album 3', 'Album 4']),
  uniqueTracks: new Set(['Track 1', 'Track 2', 'Track 3', 'Track 4', 'Track 5']),
  totalTimeMs: 4320000000,
  topArtists: new Map([['Artist 1', 250],
    ['Artist 2', 180],
    ['Artist 3', 150],
    ['Artist 4', 120],
    ['Artist 5', 100],
  ]),
  topAlbums: new Map([['Album 1', 220],
    ['Album 2', 180],
    ['Album 3', 160],
    ['Album 4', 140],
  ]),
  topTracks: new Map([['Track 1', 200],
    ['Track 2', 180],
    ['Track 3', 160],
    ['Track 4', 140],
    ['Track 5', 120],
  ]),
  listeningHours: [0, 15, 30, 45, 60, 75, 90, 80, 70, 60, 50, 40, 30, 20, 10, 50, 40, 30, 20, 10, 5, 8, 15, 20]
};

