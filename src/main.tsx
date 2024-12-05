import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {Analytics} from "@vercel/analytics/react"
import {AppProvider} from "./context/AppContext.tsx";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
      <App/>
      <Analytics/>
    </AppProvider>
  </StrictMode>
);
