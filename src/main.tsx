
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Capacitor } from '@capacitor/core'

/**
 * Wait for the device to be ready before mounting the app when running natively
 */
const mountApp = () => {
  createRoot(document.getElementById("root")!).render(<App />);
}

if (Capacitor.isNativePlatform()) {
  // Wait for device ready event when running as native app
  document.addEventListener('deviceready', mountApp, false);
} else {
  // Mount immediately when running as web app
  mountApp();
}
