import {useAppContext} from "../context/AppContext";
import {sampleAnalyticsData} from "../data/sampleData.ts";
import {useEffect} from "react";

export function SampleDataIndicator() {
  const {
    setRawData,
    analyticsData,
    setAnalyticsData,
    availableYears,
    setAvailableYears,
    selectedYear,
    setSelectedYear
  } = useAppContext();

  const handleLoadExample: () => void = (): void => {
    console.log('Loading sample data...');
    console.log(sampleAnalyticsData);

    setRawData([]);
    setAnalyticsData(sampleAnalyticsData);
    setAvailableYears([2024]);
    setSelectedYear(2024);
  };

  useEffect((): void => {
    console.log({analyticsData, availableYears, selectedYear});
  }, [analyticsData, availableYears, selectedYear]);

  return (
    <p className='text-center'>
      If you don't have data yet, you can load <span
      className='text-blue-600 hover:underline cursor-pointer'
      onClick={handleLoadExample}>
        sample data
      </span>.
    </p>
  );
}
