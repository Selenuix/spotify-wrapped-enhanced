import {useAppContext} from "../context/AppContext";
import {sampleAnalyticsData} from "../data/sampleData.ts";
import {useEffect} from "react";

export function SampleDataIndicator() {
  const {
    setRawData, analyticsData, setAnalyticsData, availableYears, setAvailableYears, selectedYear, setSelectedYear
  } = useAppContext();

  const handleLoadExample: () => void = (): void => {
    setRawData([]);
    setAnalyticsData(sampleAnalyticsData);
    setAvailableYears([2024]);
    setSelectedYear(2024);
  };

  useEffect((): void => {
  }, [analyticsData, availableYears, selectedYear]);

  return (<p className='text-center mt-4'>
    If you don't have data yet, you can load <span
    className='text-blue-600 hover:underline cursor-pointer'
    onClick={handleLoadExample}>
        sample data
      </span>.
  </p>);
}
