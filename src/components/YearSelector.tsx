import {CalendarClock} from 'lucide-react';
import {ChangeEvent, FC} from "react";

interface YearSelectorProps {
  availableYears: number[];
  selectedYear: number;
  onYearChange: (year: number) => void;
}

export const YearSelector: FC<YearSelectorProps> = ({
                                                      availableYears, selectedYear, onYearChange,
                                                    }: YearSelectorProps) => {
  return (<div className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
    <div className="flex items-center space-x-2">
      <CalendarClock className="w-5 h-5 text-gray-500"/>
      <span className="text-gray-700 font-medium">Select Year:</span>
    </div>
    <select
      value={selectedYear}
      onChange={(e: ChangeEvent<HTMLSelectElement>): void => onYearChange(Number(e.target.value))}
      className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {availableYears.map((year: number) => (<option key={year} value={year}>
        {year}
      </option>))}
    </select>
  </div>);
};
