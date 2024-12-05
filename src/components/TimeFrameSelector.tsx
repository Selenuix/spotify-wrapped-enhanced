import {FC} from 'react';
import {Calendar} from 'lucide-react';
import {TimeFrame} from '../types/spotify';

interface TimeFrameSelectorProps {
  timeFrame: TimeFrame;
  onTimeFrameChange: (timeFrame: TimeFrame) => void;
}

export const TimeFrameSelector: FC<TimeFrameSelectorProps> = ({
                                                                timeFrame, onTimeFrameChange,
                                                              }: TimeFrameSelectorProps) => {
  return (<div className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
    <div className="flex items-center space-x-2">
      <Calendar className="w-5 h-5 text-gray-500"/>
      <span className="text-gray-700 font-medium">Time Frame:</span>
    </div>
    <div className="flex space-x-2">
      {(['week', 'month', 'year'] as TimeFrame[]).map((frame) => (<button
        key={frame}
        onClick={(): void => onTimeFrameChange(frame)}
        className={`px-4 py-2 rounded-md transition-colors ${timeFrame === frame ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
      >
        {frame.charAt(0).toUpperCase() + frame.slice(1)}
      </button>))}
    </div>
  </div>);
};
