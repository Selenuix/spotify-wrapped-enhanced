import {FC} from 'react';

interface ListeningClockProps {
  hourlyData: number[];
}

export const ListeningClock: FC<ListeningClockProps> = ({hourlyData}: ListeningClockProps) => {
  const maxValue: number = Math.max(...hourlyData);

  return (
    <div className="w-full max-w-md mx-auto">
      <h3 className="text-lg font-semibold mb-4">Listening Clock</h3>
      <div className="grid grid-cols-6 gap-2">
        {hourlyData.map((count: number, hour: number) => {
          const intensity: number = (count / maxValue) * 100;
          return (
            <div
              key={hour}
              className="aspect-square rounded-lg flex items-center justify-center text-xs"
              style={{
                backgroundColor: `rgba(59, 130, 246, ${intensity / 100})`,
              }}
            >
              {hour}:00
            </div>
          );
        })}
      </div>
    </div>
  );
};
