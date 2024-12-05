import {Dispatch, ReactNode, SetStateAction} from "react";
import {AnalyticsData} from "./spotify.ts";

export interface AppContextType {
  rawData: any[];
  setRawData: Dispatch<SetStateAction<any[]>>;
  analyticsData: AnalyticsData | null;
  setAnalyticsData: Dispatch<SetStateAction<AnalyticsData | null>>;
  selectedYear: number;
  setSelectedYear: Dispatch<SetStateAction<number>>;
  availableYears: number[];
  setAvailableYears: Dispatch<SetStateAction<number[]>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export interface AppProviderProps {
  children: ReactNode;
}
