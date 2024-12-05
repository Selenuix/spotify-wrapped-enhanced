import {FC} from 'react';
import {Clock, Disc, Mic, Music} from 'lucide-react';

interface StatsProps {
  totalTracks: number;
  uniqueArtists: number;
  uniqueAlbums: number;
  totalTimeMs: number;
}

export const Stats: FC<StatsProps> = ({
                                        totalTracks, uniqueArtists, uniqueAlbums, totalTimeMs,
                                      }: StatsProps) => {
  // Convert milliseconds to minutes (1 minute = 60000 milliseconds)
  const minutes: number = Math.floor(totalTimeMs / 60000);

  // Format the time in a human-readable way
  const formatTime = (totalMinutes: number): string => {
    const hours: number = Math.floor(totalMinutes / 60);
    const minutes: number = totalMinutes % 60;

    if (hours < 1) {
      return `${minutes}m`;
    }

    return `${hours}h ${minutes}m`;
  };

  return (<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    <div className="bg-white rounded-lg shadow p-4 flex items-center space-x-4">
      <Music className="w-8 h-8 text-blue-500"/>
      <div>
        <p className="text-sm text-gray-500">Total Tracks</p>
        <p className="text-2xl font-bold">{totalTracks.toLocaleString()}</p>
      </div>
    </div>

    <div className="bg-white rounded-lg shadow p-4 flex items-center space-x-4">
      <Mic className="w-8 h-8 text-green-500"/>
      <div>
        <p className="text-sm text-gray-500">Unique Artists</p>
        <p className="text-2xl font-bold">{uniqueArtists.toLocaleString()}</p>
      </div>
    </div>

    <div className="bg-white rounded-lg shadow p-4 flex items-center space-x-4">
      <Disc className="w-8 h-8 text-purple-500"/>
      <div>
        <p className="text-sm text-gray-500">Unique Albums</p>
        <p className="text-2xl font-bold">{uniqueAlbums.toLocaleString()}</p>
      </div>
    </div>

    <div className="bg-white rounded-lg shadow p-4 flex items-center space-x-4">
      <Clock className="w-8 h-8 text-red-500"/>
      <div>
        <p className="text-sm text-gray-500">Time Listened</p>
        <p className="text-2xl font-bold">{formatTime(minutes)}</p>
        <p className="text-xs text-gray-500">({Math.round(minutes / 60).toLocaleString()} hours total)</p>
      </div>
    </div>
  </div>);
};
