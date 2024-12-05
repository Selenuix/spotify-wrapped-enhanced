import {FC} from "react";

interface TopItemsProps {
  title: string;
  items: [string, number][];
}

export const TopItems: FC<TopItemsProps> = ({title, items}: TopItemsProps) => {
  const formatMinutes = (minutes: number): string => {
    const hours: number = Math.floor(minutes / 60);
    const mins: number = Math.round(minutes % 60);

    if (hours < 1) {
      return `${mins}m`;
    }
    return `${hours}h ${mins}m`;
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="space-y-2">
        {items.map(([name, minutes]: [string, number], index: number) => (
          <div
            key={name}
            className="flex items-center justify-between p-2 bg-gray-50 rounded"
          >
            <span className="flex items-center">
              <span className="w-6 text-gray-500">{index + 1}.</span>
              <span className="font-medium">{name}</span>
            </span>
            <span className="text-gray-600">{formatMinutes(minutes)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
