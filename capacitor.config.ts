
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.c3932129b59a438e93ed848a4e0a064a',
  appName: 'recipe-discovery-playbook',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  ios: {
    contentInset: 'always',
    limitsNavigationsToAppBoundDomains: true,
    scrollEnabled: true
  },
  plugins: {
    SplashScreen: {
      launchAutoHide: false
    }
  }
};

export default config;
