
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

// Add a longer delay for the router context to initialize properly in native mode
if (Capacitor.isNativePlatform()) {
  document.addEventListener('deviceready', () => {
    // A longer timeout to ensure DOM and React Router are fully ready in native environment
    setTimeout(mountApp, 500);
  }, false);
} else {
  // Mount immediately when running as web app
  mountApp();
}
