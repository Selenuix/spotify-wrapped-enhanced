import {ChangeEvent, FC, useCallback} from 'react';
import {Upload} from 'lucide-react';
import {SpotifyStreamingHistory} from "../types/spotify.ts";
import {SampleDataIndicator} from "./SampleDataIndicator.tsx";

interface FileUploadProps {
  onFilesSelected: (files: SpotifyStreamingHistory[]) => void;
}

export const FileUpload: FC<FileUploadProps> = ({onFilesSelected}: FileUploadProps) => {
  const handleFileUpload = useCallback(async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const files: FileList | null = event.target.files;
    if (!files) return;

    const jsonData: SpotifyStreamingHistory[] = [];

    for (let i: number = 0; i < files.length; i++) {
      const file: File = files[i];
      const text: string = await file.text();
      try {
        const data: any = JSON.parse(text);
        jsonData.push(...data);
      } catch (error) {
        console.error(`Error parsing file ${file.name}:`, error);
      }
    }

    onFilesSelected(jsonData);
  }, [onFilesSelected]);

  return (
    <>
      <div className="w-full max-w-xl mx-auto p-6">
        <label
          className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Upload className="w-10 h-10 mb-3 text-gray-400"/>
            <p className="mb-2 text-sm text-gray-500">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500">Spotify JSON files</p>
          </div>
          <input
            type="file"
            className="hidden"
            multiple
            accept=".json"
            onChange={handleFileUpload}/>
        </label>
        <SampleDataIndicator/>
      </div>
    </>
  );
};
