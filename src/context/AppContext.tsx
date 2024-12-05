import {Context, createContext, ReactNode, useContext, useState} from 'react';
import {AnalyticsData} from "../types/spotify.ts";
import {AppContextType} from "../types/context.ts";

// Create context for app state
const AppContext: Context<AppContextType | null> = createContext<AppContextType | null>(null);

export function AppProvider({children}: { children: ReactNode }) {
  const [rawData, setRawData] = useState<any[]>([]);
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
  const [availableYears, setAvailableYears] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        rawData,
        setRawData,
        analyticsData,
        setAnalyticsData,
        selectedYear,
        setSelectedYear,
        availableYears,
        setAvailableYears,
        loading,
        setLoading
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// Create a custom hook to access the context
export function useAppContext(): AppContextType {
  const context: AppContextType | null = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
