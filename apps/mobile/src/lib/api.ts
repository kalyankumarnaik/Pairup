import { PairUpApiClient } from '@pairup/api-client';
import { Platform } from 'react-native';

// Android emulator routes host machine loopback to 10.0.2.2; iOS / Web use localhost
const DEFAULT_URL = Platform.OS === 'android' ? 'http://10.0.2.2:4000' : 'http://localhost:4000';

let currentAccessToken: string | null = null;

export const mobileApiClient = new PairUpApiClient({
  baseUrl: process.env.EXPO_PUBLIC_API_URL || DEFAULT_URL,
  getAccessToken: () => currentAccessToken,
  setAccessToken: (token) => {
    currentAccessToken = token;
  }
});
