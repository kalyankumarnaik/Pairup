import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { apiClient } from '../lib/api';
import { DiscoveryCard } from '@pairup/domain-types';

export interface UserLocation {
  latitude: number;
  longitude: number;
  city: string;
  state: string;
  locality?: string;
  displayName?: string;
  isGps: boolean;
  accuracyMeters?: number;
  lastUpdated: string;
}

export const METRO_CITIES: Record<string, { lat: number; lng: number; state: string; name: string }> = {
  Mumbai: { lat: 19.0760, lng: 72.8777, state: 'Maharashtra', name: 'Mumbai' },
  Bengaluru: { lat: 12.9716, lng: 77.5946, state: 'Karnataka', name: 'Bengaluru' },
  'New Delhi': { lat: 28.6139, lng: 77.2090, state: 'Delhi', name: 'New Delhi' },
  Delhi: { lat: 28.6139, lng: 77.2090, state: 'Delhi', name: 'Delhi' },
  Hyderabad: { lat: 17.3850, lng: 78.4867, state: 'Telangana', name: 'Hyderabad' },
  Pune: { lat: 18.5204, lng: 73.8567, state: 'Maharashtra', name: 'Pune' },
  Kolkata: { lat: 22.5726, lng: 88.3639, state: 'West Bengal', name: 'Kolkata' },
  Chennai: { lat: 13.0827, lng: 80.2707, state: 'Tamil Nadu', name: 'Chennai' },
  Goa: { lat: 15.2993, lng: 74.1240, state: 'Goa', name: 'Goa' },
  Ahmedabad: { lat: 23.0225, lng: 72.5714, state: 'Gujarat', name: 'Ahmedabad' },
  Jaipur: { lat: 26.9124, lng: 75.7873, state: 'Rajasthan', name: 'Jaipur' },
  Gurgaon: { lat: 28.4595, lng: 77.0266, state: 'Haryana', name: 'Gurgaon' },
  Noida: { lat: 28.5355, lng: 77.3910, state: 'Uttar Pradesh', name: 'Noida' },
  Chandigarh: { lat: 30.7333, lng: 76.7794, state: 'Punjab', name: 'Chandigarh' },
  Kochi: { lat: 9.9312, lng: 76.2673, state: 'Kerala', name: 'Kochi' },
  'San Francisco': { lat: 37.7749, lng: -122.4194, state: 'California', name: 'San Francisco' },
  'New York': { lat: 40.7128, lng: -74.0060, state: 'New York', name: 'New York' },
  'Los Angeles': { lat: 34.0522, lng: -118.2437, state: 'California', name: 'Los Angeles' },
  London: { lat: 51.5074, lng: -0.1278, state: 'Greater London', name: 'London' },
  Tokyo: { lat: 35.6762, lng: 139.6503, state: 'Kanto', name: 'Tokyo' },
  Paris: { lat: 48.8566, lng: 2.3522, state: 'Île-de-France', name: 'Paris' },
  Berlin: { lat: 52.5200, lng: 13.4050, state: 'Berlin', name: 'Berlin' },
  Sydney: { lat: -33.8688, lng: 151.2093, state: 'New South Wales', name: 'Sydney' },
  Toronto: { lat: 43.6532, lng: -79.3832, state: 'Ontario', name: 'Toronto' },
  'São Paulo': { lat: -23.5505, lng: -46.6333, state: 'São Paulo', name: 'São Paulo' },
  'Cape Town': { lat: -33.9249, lng: 18.4241, state: 'Western Cape', name: 'Cape Town' },
  Seoul: { lat: 37.5665, lng: 126.9780, state: 'Seoul', name: 'Seoul' },
  Amsterdam: { lat: 52.3676, lng: 4.9041, state: 'North Holland', name: 'Amsterdam' },
  Rome: { lat: 41.9028, lng: 12.4964, state: 'Lazio', name: 'Rome' },
  Singapore: { lat: 1.3521, lng: 103.8198, state: 'Singapore', name: 'Singapore' },
  Dubai: { lat: 25.2048, lng: 55.2708, state: 'Dubai', name: 'Dubai' }
};

export function calculateHaversineDistanceKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 10) / 10;
}

export function formatDistance(distanceKm: number): string {
  if (distanceKm < 0.1) {
    return 'Right here';
  }
  if (distanceKm < 1) {
    const meters = Math.round(distanceKm * 1000);
    return `${meters} m`;
  }
  if (distanceKm < 10) {
    return `${distanceKm.toFixed(1)} km`;
  }
  return `${Math.round(distanceKm)} km`;
}

export function estimateTravelTime(distanceKm: number): { walkingMins: number; drivingMins: number } {
  // Walking speed approx 4.5 km/h
  const walkingMins = Math.max(1, Math.round((distanceKm / 4.5) * 60));
  // City driving speed approx 25 km/h
  const drivingMins = Math.max(2, Math.round((distanceKm / 25) * 60));
  return { walkingMins, drivingMins };
}

export function calculateBearing(lat1: number, lon1: number, lat2: number, lon2: number): string {
  const y = Math.sin(((lon2 - lon1) * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180);
  const x =
    Math.cos((lat1 * Math.PI) / 180) * Math.sin((lat2 * Math.PI) / 180) -
    Math.sin((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.cos(((lon2 - lon1) * Math.PI) / 180);
  let brng = (Math.atan2(y, x) * 180) / Math.PI;
  brng = (brng + 360) % 360;
  const dirs = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', 'N'];
  return dirs[Math.round(brng / 45) % 8];
}

export function findNearestMetroCity(lat: number, lng: number): { city: string; state: string; distanceKm: number } {
  let nearestCity = 'Mumbai';
  let nearestState = 'Maharashtra';
  let minDistance = Infinity;

  for (const [, data] of Object.entries(METRO_CITIES)) {
    const dist = calculateHaversineDistanceKm(lat, lng, data.lat, data.lng);
    if (dist < minDistance) {
      minDistance = dist;
      nearestCity = data.name;
      nearestState = data.state;
    }
  }

  return { city: nearestCity, state: nearestState, distanceKm: minDistance };
}

// Reverse geocode via OpenStreetMap Nominatim with fast timeout and fallback
export async function reverseGeocode(
  lat: number,
  lng: number
): Promise<{ city: string; state: string; locality?: string; displayName?: string }> {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 3500);
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=14&addressdetails=1`,
      {
        signal: controller.signal,
        headers: { Accept: 'application/json' }
      }
    );
    clearTimeout(timer);
    if (res.ok) {
      const data = await res.json();
      const addr = data.address || {};
      const locality = addr.suburb || addr.neighbourhood || addr.residential || addr.quarter || addr.city_district || '';
      const city = addr.city || addr.town || addr.municipality || addr.village || addr.county || locality || 'Current Area';
      const state = addr.state || addr.region || '';
      return {
        city: locality ? `${locality}, ${city}` : city,
        state,
        locality,
        displayName: data.display_name
      };
    }
  } catch {
    // Graceful offline fallback
  }

  const nearest = findNearestMetroCity(lat, lng);
  return { city: nearest.city, state: nearest.state };
}

// Forward search address/place via OpenStreetMap Nominatim with local fallback
export async function searchRealLocation(
  query: string
): Promise<Array<{ displayName: string; city: string; state: string; lat: number; lng: number }>> {
  if (!query || query.trim().length < 2) return [];

  const localMatches = Object.entries(METRO_CITIES)
    .filter(([name]) => name.toLowerCase().includes(query.toLowerCase()))
    .map(([, val]) => ({
      displayName: `${val.name}, ${val.state}`,
      city: val.name,
      state: val.state,
      lat: val.lat,
      lng: val.lng
    }));

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 3500);
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5&addressdetails=1`,
      {
        signal: controller.signal,
        headers: { Accept: 'application/json' }
      }
    );
    clearTimeout(timer);
    if (res.ok) {
      const data = await res.json();
      const remote = data.map((item: any) => {
        const addr = item.address || {};
        const city = addr.city || addr.town || addr.municipality || addr.village || item.name;
        const state = addr.state || '';
        return {
          displayName: item.display_name,
          city: city || item.name,
          state: state,
          lat: parseFloat(item.lat),
          lng: parseFloat(item.lon)
        };
      });
      return [
        ...remote,
        ...localMatches.filter((l) => !remote.some((r: any) => r.city.toLowerCase() === l.city.toLowerCase()))
      ];
    }
  } catch {
    // Offline fallback
  }

  return localMatches;
}

// Known city center coordinate fallbacks for profiles
export const PROFILE_LOCATION_COORDS: Record<string, { lat: number; lng: number; locality?: string }> = {
  usr_demo_1: { lat: 19.0596, lng: 72.8295, locality: 'Bandra West, Mumbai' }, // Ananya
  usr_demo_2: { lat: 19.1197, lng: 72.9056, locality: 'Powai, Mumbai' }, // Aarav
  usr_demo_3: { lat: 12.9784, lng: 77.6408, locality: 'Indiranagar, Bengaluru' }, // Riya
  usr_demo_4: { lat: 28.5494, lng: 77.2001, locality: 'Hauz Khas, Delhi' }, // Kabir
  usr_demo_5: { lat: 12.9352, lng: 77.6245, locality: 'Koramangala, Bengaluru' }, // Pooja
  usr_demo_6: { lat: 17.4435, lng: 78.3772, locality: 'Hitec City, Hyderabad' }, // Vikram
  usr_demo_7: { lat: 18.5362, lng: 73.8940, locality: 'Koregaon Park, Pune' }, // Tanvi
  usr_demo_8: { lat: 22.5510, lng: 88.3524, locality: 'Park Street, Kolkata' }, // Rohan
  usr_demo_9: { lat: 19.1075, lng: 72.8263, locality: 'Juhu Beach, Mumbai' }, // Sneha
  usr_demo_10: { lat: 28.6315, lng: 77.2167, locality: 'Connaught Place, Delhi' }, // Diya
  usr_demo_11: { lat: 51.5074, lng: -0.1278, locality: 'Covent Garden, London' }, // Elena
  usr_demo_12: { lat: 37.7749, lng: -122.4194, locality: 'Mission District, San Francisco' }, // Marcus
  usr_demo_13: { lat: 35.6580, lng: 139.7016, locality: 'Shibuya, Tokyo' }, // Kenji
  usr_demo_14: { lat: 48.8566, lng: 2.3522, locality: 'Le Marais, Paris' }, // Sophie
  usr_demo_15: { lat: -33.8688, lng: 151.2093, locality: 'Bondi Beach, Sydney' }, // Liam
  usr_demo_16: { lat: -23.5505, lng: -46.6333, locality: 'Paulista Avenue, São Paulo' }, // Isabella
  usr_demo_17: { lat: 52.5200, lng: 13.4050, locality: 'Mitte, Berlin' }, // Lucas
  usr_demo_18: { lat: 40.7128, lng: -74.0060, locality: 'SoHo, New York' }, // Chloe
  usr_demo_19: { lat: 1.3521, lng: 103.8198, locality: 'Marina Bay, Singapore' }, // Mia
  usr_demo_20: { lat: 25.2048, lng: 55.2708, locality: 'Downtown, Dubai' } // Zain
};

export interface LocationContextType {
  location: UserLocation;
  permissionStatus: 'prompt' | 'granted' | 'denied' | 'unsupported';
  isLocating: boolean;
  statusMessage: string;
  requestGpsLocation: (silent?: boolean) => Promise<boolean>;
  setManualCity: (cityName: string) => Promise<void>;
  setManualCoordinates: (lat: number, lng: number, label?: string) => Promise<void>;
  calculateDistanceFromUser: (lat?: number, lng?: number, fallbackCity?: string | null, userId?: string | null) => number;
  sortAndFilterNearby: (cards: DiscoveryCard[], maxRadiusKm?: number, cityFilter?: string) => DiscoveryCard[];
}

const DEFAULT_LOCATION: UserLocation = {
  latitude: 19.0760,
  longitude: 72.8777,
  city: 'Mumbai',
  state: 'Maharashtra',
  locality: 'Bandra / City Center',
  displayName: 'Mumbai, Maharashtra, India',
  isGps: false,
  lastUpdated: new Date().toISOString()
};

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const LocationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [location, setLocation] = useState<UserLocation>(() => {
    try {
      const saved = localStorage.getItem('pairup_user_location');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return DEFAULT_LOCATION;
  });

  const [permissionStatus, setPermissionStatus] = useState<'prompt' | 'granted' | 'denied' | 'unsupported'>('prompt');
  const [isLocating, setIsLocating] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string>('Ready');

  // Check browser permission status on mount
  useEffect(() => {
    if (!navigator.geolocation) {
      setPermissionStatus('unsupported');
      setStatusMessage('Geolocation is not supported by your browser.');
      return;
    }

    if (navigator.permissions && navigator.permissions.query) {
      navigator.permissions
        .query({ name: 'geolocation' as PermissionName })
        .then((res) => {
          if (res.state === 'granted') {
            setPermissionStatus('granted');
            // Silently refresh location if already permitted
            requestGpsLocation(true);
          } else if (res.state === 'denied') {
            setPermissionStatus('denied');
          } else {
            setPermissionStatus('prompt');
          }

          res.onchange = () => {
            if (res.state === 'granted') {
              setPermissionStatus('granted');
              requestGpsLocation(true);
            } else if (res.state === 'denied') {
              setPermissionStatus('denied');
            }
          };
        })
        .catch(() => {
          // Permissions API not fully supported
        });
    }
  }, []);

  // Request real GPS location via browser navigator.geolocation with real reverse geocoding
  const requestGpsLocation = useCallback(async (silent: boolean = false): Promise<boolean> => {
    if (!navigator.geolocation) {
      setPermissionStatus('unsupported');
      setStatusMessage('Geolocation is not supported by this browser.');
      return false;
    }

    if (!silent) {
      setIsLocating(true);
      setStatusMessage('Requesting GPS location access...');
    }

    return new Promise<boolean>((resolve) => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          const accuracy = position.coords.accuracy;

          // Attempt real OpenStreetMap reverse geocoding for actual locality/city
          const geo = await reverseGeocode(lat, lng);

          const newLoc: UserLocation = {
            latitude: lat,
            longitude: lng,
            city: geo.city,
            state: geo.state,
            locality: geo.locality,
            displayName: geo.displayName || `${geo.city}, ${geo.state}`,
            isGps: true,
            accuracyMeters: accuracy,
            lastUpdated: new Date().toISOString()
          };

          setLocation(newLoc);
          setPermissionStatus('granted');
          setStatusMessage(`📍 Location verified: ${geo.city} (${Math.round(accuracy)}m GPS accuracy)`);
          setIsLocating(false);

          try {
            localStorage.setItem('pairup_user_location', JSON.stringify(newLoc));
            // Send coordinate update to backend API
            await apiClient.updateLocation({
              latitude: lat,
              longitude: lng,
              city: geo.city,
              state: geo.state
            });
          } catch {
            // Local fallback handled gracefully
          }

          resolve(true);
        },
        (err) => {
          setIsLocating(false);
          if (err.code === err.PERMISSION_DENIED) {
            setPermissionStatus('denied');
            setStatusMessage('Location permission denied. You can select your city manually below.');
          } else if (err.code === err.POSITION_UNAVAILABLE) {
            setStatusMessage('Location information is temporarily unavailable.');
          } else if (err.code === err.TIMEOUT) {
            setStatusMessage('Location request timed out. Please try again.');
          } else {
            setStatusMessage('Unable to access location.');
          }
          resolve(false);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 60000
        }
      );
    });
  }, []);

  // Set city manually
  const setManualCity = useCallback(async (cityName: string) => {
    const meta = METRO_CITIES[cityName] || { lat: 19.0760, lng: 72.8777, state: 'Maharashtra', name: cityName };
    const newLoc: UserLocation = {
      latitude: meta.lat,
      longitude: meta.lng,
      city: cityName,
      state: meta.state,
      locality: cityName,
      displayName: `${cityName}, ${meta.state}`,
      isGps: false,
      lastUpdated: new Date().toISOString()
    };

    setLocation(newLoc);
    setStatusMessage(`📍 Selected location: ${cityName}`);

    try {
      localStorage.setItem('pairup_user_location', JSON.stringify(newLoc));
      await apiClient.updateLocation({
        latitude: meta.lat,
        longitude: meta.lng,
        city: cityName,
        state: meta.state
      });
    } catch {
      // Offline fallback
    }
  }, []);

  // Set custom coordinates manually (e.g. from map click or search)
  const setManualCoordinates = useCallback(async (lat: number, lng: number, label?: string) => {
    const geo = await reverseGeocode(lat, lng);
    const newLoc: UserLocation = {
      latitude: lat,
      longitude: lng,
      city: label || geo.city,
      state: geo.state,
      locality: geo.locality,
      displayName: geo.displayName || label || `${geo.city}, ${geo.state}`,
      isGps: false,
      lastUpdated: new Date().toISOString()
    };

    setLocation(newLoc);
    setStatusMessage(`📍 Map location updated: ${newLoc.city}`);

    try {
      localStorage.setItem('pairup_user_location', JSON.stringify(newLoc));
      await apiClient.updateLocation({
        latitude: lat,
        longitude: lng,
        city: newLoc.city,
        state: newLoc.state
      });
    } catch {
      // Offline fallback
    }
  }, []);

  // Calculate distance from current user to target coordinates or target profile
  const calculateDistanceFromUser = useCallback(
    (lat?: number, lng?: number, fallbackCity?: string | null, userId?: string | null): number => {
      let targetLat = lat;
      let targetLng = lng;

      if ((targetLat === undefined || targetLng === undefined) && userId && PROFILE_LOCATION_COORDS[userId]) {
        targetLat = PROFILE_LOCATION_COORDS[userId].lat;
        targetLng = PROFILE_LOCATION_COORDS[userId].lng;
      }

      if ((targetLat === undefined || targetLng === undefined) && fallbackCity) {
        const found = Object.values(METRO_CITIES).find(
          (m) => m.name.toLowerCase() === fallbackCity.toLowerCase()
        );
        if (found) {
          targetLat = found.lat;
          targetLng = found.lng;
        }
      }

      if (targetLat !== undefined && targetLng !== undefined) {
        return calculateHaversineDistanceKm(location.latitude, location.longitude, targetLat, targetLng);
      }

      return 4.5; // fallback average distance
    },
    [location.latitude, location.longitude]
  );

  // Filter and sort discovery cards by proximity relative to user's real location
  const sortAndFilterNearby = useCallback(
    (cards: DiscoveryCard[], maxRadiusKm: number = 50, cityFilter: string = 'All'): DiscoveryCard[] => {
      return cards
        .map((card) => {
          let cLat = card.latitude;
          let cLng = card.longitude;
          if ((cLat === undefined || cLng === undefined) && card.userId && PROFILE_LOCATION_COORDS[card.userId]) {
            cLat = PROFILE_LOCATION_COORDS[card.userId].lat;
            cLng = PROFILE_LOCATION_COORDS[card.userId].lng;
          }
          if ((cLat === undefined || cLng === undefined) && card.city) {
            const found = Object.values(METRO_CITIES).find(
              (m) => m.name.toLowerCase() === card.city?.toLowerCase()
            );
            if (found) {
              cLat = found.lat;
              cLng = found.lng;
            }
          }

          const dist = calculateDistanceFromUser(cLat, cLng, card.city, card.userId);
          return {
            ...card,
            latitude: cLat,
            longitude: cLng,
            approximateDistanceKm: dist
          };
        })
        .filter((card) => {
          if (cityFilter !== 'All') {
            if (!card.city?.toLowerCase().includes(cityFilter.toLowerCase())) {
              return false;
            }
          }
          if (card.approximateDistanceKm !== null && card.approximateDistanceKm !== undefined && card.approximateDistanceKm > maxRadiusKm) {
            return false;
          }
          return true;
        })
        .sort((a, b) => (a.approximateDistanceKm || 999) - (b.approximateDistanceKm || 999));
    },
    [calculateDistanceFromUser]
  );

  return (
    <LocationContext.Provider
      value={{
        location,
        permissionStatus,
        isLocating,
        statusMessage,
        requestGpsLocation,
        setManualCity,
        setManualCoordinates,
        calculateDistanceFromUser,
        sortAndFilterNearby
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = (): LocationContextType => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};
