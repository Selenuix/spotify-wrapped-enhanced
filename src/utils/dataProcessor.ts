import {SpotifyStreamingHistory, AnalyticsData} from '../types/spotify';

export const getAvailableYears = (data: SpotifyStreamingHistory[]): number[] => {
  const years = new Set<number>();
  data.forEach((entry: SpotifyStreamingHistory): void => {
    const year: number = new Date(entry.ts).getFullYear();
    years.add(year);
  });
  return Array.from(years).sort((a: number, b: number): number => b - a); // Sort descending
};

export const processStreamingData = (
  data: SpotifyStreamingHistory[],
  selectedYear: number
): AnalyticsData => {
  const start = new Date(selectedYear, 0, 1);
  const end = new Date(selectedYear, 11, 31, 23, 59, 59);

  const filteredData: SpotifyStreamingHistory[] = data.filter(
    (entry: SpotifyStreamingHistory): boolean => {
      const entryDate = new Date(entry.ts);
      return entryDate >= start && entryDate <= end && entry.ms_played >= 30000; // Only count plays longer than 30 seconds
    }
  );

  const analytics: AnalyticsData = {
    totalTracks: 0,
    uniqueArtists: new Set(),
    uniqueAlbums: new Set(),
    uniqueTracks: new Set(),
    totalTimeMs: 0,
    topArtists: new Map(),
    topAlbums: new Map(),
    topTracks: new Map(),
    listeningHours: new Array(24).fill(0),
  };

  filteredData.forEach((entry: SpotifyStreamingHistory): void => {
    analytics.totalTracks++;
    analytics.totalTimeMs += entry.ms_played;

    if (entry.master_metadata_album_artist_name) {
      analytics.uniqueArtists.add(entry.master_metadata_album_artist_name);
      const currentArtistCount: number = analytics.topArtists.get(entry.master_metadata_album_artist_name) || 0;
      analytics.topArtists.set(
        entry.master_metadata_album_artist_name,
        currentArtistCount + (entry.ms_played / 60000) // Count minutes listened per artist
      );
    }

    if (entry.master_metadata_album_album_name) {
      analytics.uniqueAlbums.add(entry.master_metadata_album_album_name);
      const currentAlbumCount: number = analytics.topAlbums.get(entry.master_metadata_album_album_name) || 0;
      analytics.topAlbums.set(
        entry.master_metadata_album_album_name,
        currentAlbumCount + (entry.ms_played / 60000) // Count minutes listened per album
      );
    }

    if (entry.master_metadata_track_name) {
      analytics.uniqueTracks.add(entry.master_metadata_track_name);
      const currentTrackCount: number = analytics.topTracks.get(entry.master_metadata_track_name) || 0;
      analytics.topTracks.set(
        entry.master_metadata_track_name,
        currentTrackCount + (entry.ms_played / 60000) // Count minutes listened per track
      );
    }

    const hour: number = new Date(entry.ts).getHours();
    analytics.listeningHours[hour] += entry.ms_played / 60000; // Add minutes to the hour
  });

  return analytics;
};
