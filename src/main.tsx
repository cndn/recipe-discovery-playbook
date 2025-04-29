
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

// Add a small delay for the router context to initialize properly in native mode
if (Capacitor.isNativePlatform()) {
  document.addEventListener('deviceready', () => {
    // A small timeout to ensure DOM is fully ready in native environment
    setTimeout(mountApp, 100);
  }, false);
} else {
  // Mount immediately when running as web app
  mountApp();
}
