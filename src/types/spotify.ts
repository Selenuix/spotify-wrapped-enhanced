export interface SpotifyStreamingHistory {
  ts: string;
  username: string;
  platform: string;
  ms_played: number;
  conn_country: string;
  master_metadata_track_name: string;
  master_metadata_album_artist_name: string;
  master_metadata_album_album_name: string;
  spotify_track_uri: string;
  reason_start: string;
  reason_end: string;
  shuffle: boolean | null;
  skipped: boolean | null;
  offline: boolean | null;
}

export interface AnalyticsData {
  totalTracks: number;
  uniqueArtists: Set<string>;
  uniqueAlbums: Set<string>;
  uniqueTracks: Set<string>;
  totalTimeMs: number;
  topArtists: Map<string, number>;
  topAlbums: Map<string, number>;
  topTracks: Map<string, number>;
  listeningHours: number[];
}
