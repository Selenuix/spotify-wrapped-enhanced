import {FC} from "react";
import {Download, FileText, Upload} from "lucide-react";

export const Instructions: FC = () => {
  return (<div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 space-y-6">
    <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
      <FileText className="w-6 h-6"/>
      How to Use This App
    </h2>

    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Download className="w-5 h-5"/>
          Step 1: Export Your Spotify Data
        </h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>
            Go to your{' '}
            <a
              href="https://www.spotify.com/account/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Spotify Account Privacy Settings
            </a>
          </li>
          <li>Scroll down to "Download your data"</li>
          <li>Request your "Extended streaming history"</li>
          <li>
            Wait for an email from Spotify (this can take up to 30 days)
          </li>
          <li>Download and extract the ZIP file</li>
          <li>
            Look for JSON files named like
            "Streaming_History_Audio_YYYY_X.json"
          </li>
        </ol>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Upload className="w-5 h-5"/>
          Step 2: Upload Your Files
        </h3>
        <p className="text-gray-700">
          Upload one or more of your Spotify JSON files using the upload area
          below. The app will process your data and show you insights about
          your listening habits.
        </p>
      </div>
    </div>
  </div>);
}
