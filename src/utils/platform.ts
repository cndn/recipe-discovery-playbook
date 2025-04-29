
import { Capacitor } from '@capacitor/core';

/**
 * Platform detection utility
 */
export const getPlatform = () => {
  if (Capacitor.isNativePlatform()) {
    return 'native';
  }
  
  // Check if it's mobile web
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobileWeb = /android|webos|iphone|ipad|ipod|blackberry|windows phone/i.test(userAgent);
  
  return isMobileWeb ? 'mobileweb' : 'web';
};

/**
 * Check if the app is running on a native platform (iOS/Android)
 */
export const isNative = () => {
  return Capacitor.isNativePlatform();
};

/**
 * Check if the app is running on iOS
 */
export const isIOS = () => {
  return Capacitor.getPlatform() === 'ios';
};

/**
 * Check if the app is running on Android
 */
export const isAndroid = () => {
  return Capacitor.getPlatform() === 'android';
};

/**
 * Check if the app is running on mobile web
 */
export const isMobileWeb = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  return /android|webos|iphone|ipad|ipod|blackberry|windows phone/i.test(userAgent) && !Capacitor.isNativePlatform();
};
