
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Capacitor } from '@capacitor/core'

/**
 * Wait for the device to be ready before mounting the app when running natively
 */
const mountApp = () => {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    createRoot(rootElement).render(<App />);
  } else {
    console.error("Root element not found");
  }
}

// Mount when device is ready in native mode
if (Capacitor.isNativePlatform()) {
  document.addEventListener('deviceready', mountApp, false);
} else {
  // Mount immediately when running as web app
  mountApp();
}
