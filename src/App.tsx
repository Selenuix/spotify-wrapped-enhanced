import {useState} from 'react';
import {FileUpload} from './components/FileUpload';
import {Stats} from './components/Stats';
import {ListeningClock} from './components/ListeningClock';
import {TopItems} from './components/TopItems';
import {YearSelector} from './components/YearSelector';
import {SpotifyStreamingHistory, AnalyticsData} from './types/spotify';
import {processStreamingData, getAvailableYears} from './utils/dataProcessor';
import {Instructions} from "./components/Instructions.tsx";

function App() {
  const [rawData, setRawData] = useState<SpotifyStreamingHistory[]>([]);
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(
    null
  );
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  );
  const [availableYears, setAvailableYears] = useState<number[]>([]);

  const handleFilesSelected = (data: SpotifyStreamingHistory[]) => {
    setRawData(data);
    const years = getAvailableYears(data);
    setAvailableYears(years);
    setSelectedYear(years[0]); // Select the most recent year
    const processed = processStreamingData(data, years[0]);
    setAnalyticsData(processed);
  };

  const handleYearChange = (year: number) => {
    setSelectedYear(year);
    if (rawData.length > 0) {
      const processed = processStreamingData(rawData, year);
      setAnalyticsData(processed);
    }
  };

  const getTopItems = (
    map: Map<string, number>,
    limit: number = 10
  ): [string, number][] => {
    return Array.from(map.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Yearly Spotify Listening History
        </h1>

        {!analyticsData && <Instructions/>}

        <FileUpload onFilesSelected={handleFilesSelected}/>

        {analyticsData && (
          <div className="space-y-8">
            <YearSelector
              availableYears={availableYears}
              selectedYear={selectedYear}
              onYearChange={handleYearChange}
            />

            <Stats
              totalTracks={analyticsData.totalTracks}
              uniqueArtists={analyticsData.uniqueArtists.size}
              uniqueAlbums={analyticsData.uniqueAlbums.size}
              totalTimeMs={analyticsData.totalTimeMs}
            />

            <ListeningClock hourlyData={analyticsData.listeningHours}/>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TopItems
                title="Top Artists"
                items={getTopItems(analyticsData.topArtists)}
              />
              <TopItems
                title="Top Albums"
                items={getTopItems(analyticsData.topAlbums)}
              />
              <TopItems
                title="Top Tracks"
                items={getTopItems(analyticsData.topTracks)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
