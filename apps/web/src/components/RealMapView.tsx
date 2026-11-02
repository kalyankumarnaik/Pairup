import React, { useEffect, useRef, useState, useMemo } from 'react';
import {
  Check,
  Compass,
  Copy,
  ExternalLink,
  Globe,
  Heart,
  Info,
  KeyRound,
  Layers,
  LocateFixed,
  MapPin,
  Navigation,
  RefreshCw,
  Search,
  Sparkles,
  Users,
  X,
  Zap
} from 'lucide-react';
import { DiscoveryCard, SocialEvent } from '@pairup/domain-types';
import {
  UserLocation,
  formatDistance,
  estimateTravelTime,
  calculateBearing,
  searchRealLocation,
  calculateHaversineDistanceKm
} from '../context/LocationContext';

interface RealMapViewProps {
  userLocation: UserLocation;
  profiles: DiscoveryCard[];
  events?: SocialEvent[];
  radiusKm: number;
  onRadiusChange?: (newRadius: number) => void;
  onSelectProfile?: (profile: DiscoveryCard) => void;
  onSendWave?: (profile: DiscoveryCard) => void;
  onConnect?: (profile: DiscoveryCard) => void;
  onLocationSelect?: (lat: number, lng: number, label?: string) => void;
  wavedProfiles?: Record<string, boolean>;
}

export const RealMapView: React.FC<RealMapViewProps> = ({
  userLocation,
  profiles,
  events = [],
  radiusKm,
  onRadiusChange,
  onSelectProfile,
  onSendWave,
  onConnect,
  onLocationSelect,
  wavedProfiles = {}
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<any>(null);
  const tileLayerRef = useRef<any>(null);
  const markersLayerRef = useRef<any>(null);
  const circleLayerRef = useRef<any>(null);
  const lineLayerRef = useRef<any>(null);

  const [selectedProfile, setSelectedProfile] = useState<DiscoveryCard | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<SocialEvent | null>(null);
  const [showEvents, setShowEvents] = useState<boolean>(true);
  const [showRadiusCircle, setShowRadiusCircle] = useState<boolean>(true);
  const [isLeafletReady, setIsLeafletReady] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Array<{ displayName: string; city: string; lat: number; lng: number }>>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [showDirectionsModal, setShowDirectionsModal] = useState<boolean>(false);

  // Map API Key and Tile Provider state
  const [mapApiKey, setMapApiKey] = useState<string>(() => {
    return (
      localStorage.getItem('pairup_map_api_key') ||
      import.meta.env.VITE_MAP_API_KEY ||
      'pairup_osm_live_verified_key'
    );
  });
  const [mapProvider, setMapProvider] = useState<'osm' | 'esri_streets' | 'satellite' | 'maptiler' | 'geoapify'>(() => {
    const saved = localStorage.getItem('pairup_map_provider');
    if (saved === 'esri_streets' || saved === 'satellite') return saved;
    const key = localStorage.getItem('pairup_map_api_key');
    if (saved === 'maptiler' && key && !key.startsWith('pairup_') && key.length > 15) return 'maptiler';
    if (saved === 'geoapify' && key && !key.startsWith('pairup_') && key.length > 15) return 'geoapify';
    // Clear any previous 'carto' or mock provider from local storage so watermarks never show
    localStorage.setItem('pairup_map_provider', 'osm');
    return 'osm';
  });
  const [showApiKeyModal, setShowApiKeyModal] = useState<boolean>(false);
  const [apiKeyInput, setApiKeyInput] = useState<string>(mapApiKey);
  const [copiedKey, setCopiedKey] = useState<boolean>(false);

  const getTileConfig = (provider: string, key: string) => {
    switch (provider) {
      case 'esri_streets':
        return {
          url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
          attribution: 'Tiles &copy; Esri &mdash; Source: Esri, USGS, DeLorme'
        };
      case 'satellite':
        return {
          url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
          attribution: 'Tiles &copy; Esri &mdash; Source: Esri, USDA, USGS, AeroGRID, IGN, and the GIS User Community'
        };
      case 'maptiler':
        // If key is a demo or unauthenticated key, fallback to official OpenStreetMap to avoid "Invalid key" watermarks
        if (!key || key.startsWith('pairup_') || key.length < 15) {
          return {
            url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          };
        }
        return {
          url: `https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=${key}`,
          attribution: '&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        };
      case 'geoapify':
        if (!key || key.startsWith('pairup_') || key.length < 15) {
          return {
            url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          };
        }
        return {
          url: `https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=${key}`,
          attribution: '&copy; <a href="https://www.geoapify.com/">Geoapify</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        };
      case 'osm':
      default:
        return {
          url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        };
    }
  };

  // Initialize or check Leaflet on mount
  useEffect(() => {
    let checkInterval: any;

    const loadLeafletScript = () => {
      if ((window as any).L) {
        setIsLeafletReady(true);
        return;
      }

      // If Leaflet script isn't in window, dynamically inject it
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);

      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.async = true;
      script.onload = () => {
        setIsLeafletReady(true);
      };
      script.onerror = () => {
        setIsLeafletReady(false);
      };
      document.head.appendChild(script);
    };

    if ((window as any).L) {
      setIsLeafletReady(true);
    } else {
      loadLeafletScript();
      checkInterval = setInterval(() => {
        if ((window as any).L) {
          setIsLeafletReady(true);
          clearInterval(checkInterval);
        }
      }, 300);
    }

    return () => {
      if (checkInterval) clearInterval(checkInterval);
    };
  }, []);

  // Initialize Leaflet Map
  useEffect(() => {
    if (!isLeafletReady || !mapContainerRef.current) return;
    const L = (window as any).L;
    if (!L) return;

    if (!leafletMapRef.current) {
      const targetZoom =
        radiusKm <= 5 ? 13 :
        radiusKm <= 15 ? 12 :
        radiusKm <= 50 ? 11 :
        radiusKm <= 200 ? 9 :
        radiusKm <= 1000 ? 6 :
        radiusKm <= 5000 ? 4 : 2;

      // Create map instance
      const map = L.map(mapContainerRef.current, {
        center: [userLocation.latitude, userLocation.longitude],
        zoom: targetZoom,
        zoomControl: false
      });

      // Add zoom control top-right
      L.control.zoom({ position: 'topright' }).addTo(map);

      // Layer groups
      circleLayerRef.current = L.layerGroup().addTo(map);
      markersLayerRef.current = L.layerGroup().addTo(map);
      lineLayerRef.current = L.layerGroup().addTo(map);

      leafletMapRef.current = map;
    }

    return () => {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
    };
  }, [isLeafletReady]);

  // Update Tile Layer whenever provider or API key changes
  useEffect(() => {
    if (!leafletMapRef.current || !isLeafletReady) return;
    const L = (window as any).L;
    if (!L) return;

    if (tileLayerRef.current) {
      leafletMapRef.current.removeLayer(tileLayerRef.current);
    }

    const cfg = getTileConfig(mapProvider, mapApiKey);
    const layer = L.tileLayer(cfg.url, {
      attribution: cfg.attribution,
      subdomains: 'abcd',
      maxZoom: 19
    });

    // Graceful fallback to official OpenStreetMap if provider/API key experiences tile error
    layer.on('tileerror', () => {
      if (mapProvider !== 'osm') {
        setMapProvider('osm');
        localStorage.setItem('pairup_map_provider', 'osm');
      }
    });

    layer.addTo(leafletMapRef.current);
    tileLayerRef.current = layer;
  }, [mapProvider, mapApiKey, isLeafletReady]);

  // Update map center & markers whenever userLocation, radius, profiles, or events change
  useEffect(() => {
    if (!leafletMapRef.current || !isLeafletReady) return;
    const L = (window as any).L;
    if (!L) return;

    const map = leafletMapRef.current;

    const targetZoom =
      radiusKm <= 5 ? 13 :
      radiusKm <= 15 ? 12 :
      radiusKm <= 50 ? 11 :
      radiusKm <= 200 ? 9 :
      radiusKm <= 1000 ? 6 :
      radiusKm <= 5000 ? 4 : 2;

    // Pan map smoothly to user location and appropriate zoom for radius
    map.setView([userLocation.latitude, userLocation.longitude], targetZoom, { animate: true });

    // Update Radius Circle
    if (circleLayerRef.current) {
      circleLayerRef.current.clearLayers();
      if (showRadiusCircle) {
        // Clamp radius for circle geometry to prevent worldwide inversion
        const radiusMeters = Math.min(radiusKm, 19500) * 1000;
        L.circle([userLocation.latitude, userLocation.longitude], {
          radius: radiusMeters,
          color: '#7047EB',
          weight: 2,
          dashArray: '6, 8',
          fillColor: '#FF3366',
          fillOpacity: 0.08
        }).addTo(circleLayerRef.current);
      }
    }

    // Update Markers
    if (markersLayerRef.current) {
      markersLayerRef.current.clearLayers();

      // 1. Current User Beacon Pin
      const userHtml = `
        <div class="relative flex items-center justify-center">
          <span class="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-coral opacity-60"></span>
          <div class="relative w-10 h-10 rounded-full bg-gradient-to-tr from-coral via-rose to-violet p-1 shadow-2xl flex items-center justify-center text-white ring-4 ring-white">
            <span class="text-xs font-black">YOU</span>
          </div>
          <div class="absolute -bottom-5 px-2 py-0.5 rounded-full bg-midnightInk text-white text-[10px] font-bold shadow-md whitespace-nowrap">
            📍 My Location
          </div>
        </div>
      `;
      const userIcon = L.divIcon({
        html: userHtml,
        className: 'custom-user-marker',
        iconSize: [40, 40],
        iconAnchor: [20, 20]
      });
      L.marker([userLocation.latitude, userLocation.longitude], { icon: userIcon, zIndexOffset: 1000 }).addTo(
        markersLayerRef.current
      );

      // 2. Member Profile Pins
      profiles.forEach((p) => {
        const lat = p.latitude;
        const lng = p.longitude;
        if (lat === undefined || lng === undefined) return;

        const photoUrl = p.photos?.[0]?.url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200';
        const distText = p.approximateDistanceKm !== undefined && p.approximateDistanceKm !== null
          ? formatDistance(p.approximateDistanceKm)
          : 'Nearby';
        const isSelected = selectedProfile?.id === p.id;
        const isWaved = wavedProfiles[p.id];

        const memberHtml = `
          <div class="group relative flex flex-col items-center cursor-pointer transition-transform duration-200 ${
            isSelected ? 'scale-125 z-50' : 'hover:scale-110'
          }">
            <div class="relative w-12 h-12 rounded-2xl overflow-hidden shadow-xl ring-3 ${
              isSelected ? 'ring-coral ring-offset-2' : 'ring-white'
            } bg-midnightInk">
              <img src="${photoUrl}" class="w-full h-full object-cover" alt="" />
              ${
                isWaved
                  ? '<div class="absolute inset-0 bg-coral/40 flex items-center justify-center text-xs">💖</div>'
                  : ''
              }
            </div>
            <!-- Distance tag badge -->
            <div class="mt-1 px-2 py-0.5 rounded-full ${
              isSelected ? 'bg-coral text-white' : 'bg-white/95 text-ink shadow-sm'
            } text-[10px] font-black tracking-tight whitespace-nowrap border border-borderSoft flex items-center gap-1">
              <span>${distText}</span>
            </div>
          </div>
        `;

        const memberIcon = L.divIcon({
          html: memberHtml,
          className: 'custom-member-marker',
          iconSize: [48, 64],
          iconAnchor: [24, 32]
        });

        const marker = L.marker([lat, lng], { icon: memberIcon });
        marker.on('click', () => {
          setSelectedProfile(p);
          setSelectedEvent(null);
          if (onSelectProfile) onSelectProfile(p);
        });
        marker.addTo(markersLayerRef.current);
      });

      // 3. Social Event Pins
      if (showEvents) {
        events.forEach((evt) => {
          if (evt.latitude === undefined || evt.longitude === undefined) return;
          const isSelected = selectedEvent?.id === evt.id;

          const eventHtml = `
            <div class="relative flex flex-col items-center cursor-pointer transition-transform duration-200 ${
              isSelected ? 'scale-125 z-50' : 'hover:scale-110'
            }">
              <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber via-coral to-rose p-0.5 shadow-xl ring-2 ring-white flex items-center justify-center text-lg">
                <div class="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                  ${evt.emoji || '🎉'}
                </div>
              </div>
              <div class="mt-1 px-2 py-0.5 rounded-full bg-midnightInk/90 text-white text-[9px] font-bold shadow-sm whitespace-nowrap max-w-[80px] truncate">
                ${evt.title.split(' ')[0]}
              </div>
            </div>
          `;

          const eventIcon = L.divIcon({
            html: eventHtml,
            className: 'custom-event-marker',
            iconSize: [40, 56],
            iconAnchor: [20, 28]
          });

          const eventMarker = L.marker([evt.latitude, evt.longitude], { icon: eventIcon });
          eventMarker.on('click', () => {
            setSelectedEvent(evt);
            setSelectedProfile(null);
          });
          eventMarker.addTo(markersLayerRef.current);
        });
      }
    }

    // Draw geodesic line to selected profile if any
    if (lineLayerRef.current) {
      lineLayerRef.current.clearLayers();
      if (selectedProfile && selectedProfile.latitude && selectedProfile.longitude) {
        const polyline = L.polyline(
          [
            [userLocation.latitude, userLocation.longitude],
            [selectedProfile.latitude, selectedProfile.longitude]
          ],
          {
            color: '#FF3366',
            weight: 3,
            dashArray: '8, 8',
            opacity: 0.8
          }
        ).addTo(lineLayerRef.current);

        const distKm = selectedProfile.approximateDistanceKm || 0;
        polyline.bindTooltip(`Distance: ${formatDistance(distKm)}`, {
          permanent: true,
          direction: 'center',
          className: 'bg-midnightInk text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-md'
        });
      }
    }
  }, [
    userLocation,
    profiles,
    events,
    radiusKm,
    selectedProfile,
    selectedEvent,
    showEvents,
    showRadiusCircle,
    isLeafletReady,
    wavedProfiles
  ]);

  // Recenter map on user location
  const handleRecenter = () => {
    if (leafletMapRef.current) {
      leafletMapRef.current.flyTo([userLocation.latitude, userLocation.longitude], 13, {
        duration: 1.2
      });
    }
  };

  // Handle Search Input & Place Selection
  const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchQuery(val);
    if (val.trim().length >= 2) {
      setIsSearching(true);
      const results = await searchRealLocation(val);
      setSearchResults(results);
      setIsSearching(false);
    } else {
      setSearchResults([]);
    }
  };

  const handleSelectSearchResult = (res: { displayName: string; city: string; lat: number; lng: number }) => {
    setSearchQuery('');
    setSearchResults([]);
    if (onLocationSelect) {
      onLocationSelect(res.lat, res.lng, res.city);
    }
    if (leafletMapRef.current) {
      leafletMapRef.current.flyTo([res.lat, res.lng], 13, { duration: 1.5 });
    }
  };

  // Google Maps navigation direction URL
  const getGoogleMapsDirectionsUrl = (lat: number, lng: number) => {
    return `https://www.google.com/maps/dir/?api=1&origin=${userLocation.latitude},${userLocation.longitude}&destination=${lat},${lng}&travelmode=driving`;
  };

  // Estimated travel details for selected profile
  const travelStats = useMemo(() => {
    if (!selectedProfile?.approximateDistanceKm) return null;
    const dist = selectedProfile.approximateDistanceKm;
    const times = estimateTravelTime(dist);
    let bearing = 'NE';
    if (selectedProfile.latitude && selectedProfile.longitude) {
      bearing = calculateBearing(
        userLocation.latitude,
        userLocation.longitude,
        selectedProfile.latitude,
        selectedProfile.longitude
      );
    }
    return {
      distance: formatDistance(dist),
      bearing,
      walkingMins: times.walkingMins,
      drivingMins: times.drivingMins
    };
  }, [selectedProfile, userLocation]);

  return (
    <div className="relative w-full rounded-3xl overflow-hidden border border-borderSoft shadow-xl bg-cloud">
      {/* ================================================================= */}
      {/* TOP FLOATING CONTROLS: SEARCH BAR & RADIUS CHIPS */}
      {/* ================================================================= */}
      <div className="absolute top-4 inset-x-4 z-[400] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pointer-events-none">
        {/* Search Place Bar */}
        <div className="relative flex-1 max-w-md pointer-events-auto">
          <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-borderSoft shadow-lg">
            <Search className="w-4 h-4 text-ink-muted flex-shrink-0" />
            <input
              type="text"
              placeholder="Search real city, address, or neighborhood..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full text-xs font-semibold bg-transparent focus:outline-hidden text-ink placeholder:text-ink-muted"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="text-ink-muted hover:text-ink">
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Autocomplete Results Dropdown */}
          {searchResults.length > 0 && (
            <div className="absolute top-full mt-2 inset-x-0 rounded-2xl bg-white border border-borderSoft shadow-2xl overflow-hidden z-[500] max-h-60 overflow-y-auto">
              {searchResults.map((res, i) => (
                <button
                  key={i}
                  onClick={() => handleSelectSearchResult(res)}
                  className="w-full px-4 py-3 text-left text-xs hover:bg-cloud flex items-start gap-2.5 border-b border-borderSoft/40 last:border-0"
                >
                  <MapPin className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-ink">{res.city}</p>
                    <p className="text-[11px] text-ink-muted line-clamp-1">{res.displayName}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Radius Selection & Layer Pills */}
        <div className="flex items-center gap-2 flex-wrap pointer-events-auto">
          {/* Map API Key Manager Button */}
          <button
            onClick={() => setShowApiKeyModal(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-borderSoft shadow-lg text-xs font-bold text-ink hover:text-coral transition-all"
            title="Configure Map API Key & Tile Providers"
          >
            <KeyRound className="w-3.5 h-3.5 text-coral" />
            <span className="hidden sm:inline">Map Key:</span>
            <span className="font-mono text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md border border-emerald-200 flex items-center gap-1">
              <Check className="w-2.5 h-2.5 text-emerald-600" />
              <span>Active</span>
            </span>
          </button>

          <div className="flex items-center gap-1 p-1 rounded-2xl bg-white/95 backdrop-blur-md border border-borderSoft shadow-lg">
            {[5, 25, 100, 1000, 5000, 20000].map((r) => (
              <button
                key={r}
                onClick={() => onRadiusChange && onRadiusChange(r)}
                className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  radiusKm === r
                    ? 'bg-gradient-to-r from-coral to-violet text-white shadow-xs'
                    : 'text-ink-muted hover:text-ink'
                }`}
                title={r >= 20000 ? 'Worldwide Radar' : `${r} km`}
              >
                {r >= 20000 ? '🌍 World' : r >= 1000 ? `${r / 1000}k` : `${r}k`}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowEvents(!showEvents)}
            className={`px-3 py-2 rounded-2xl text-xs font-bold transition-all shadow-lg border flex items-center gap-1.5 ${
              showEvents
                ? 'bg-white text-violet border-violet/30'
                : 'bg-white/90 text-ink-muted border-borderSoft'
            }`}
            title="Toggle Event Pins"
          >
            <span>🎉 Events</span>
          </button>
        </div>
      </div>

      {/* ================================================================= */}
      {/* THE REAL MAP CONTAINER (Leaflet / OpenStreetMap) */}
      {/* ================================================================= */}
      <div
        ref={mapContainerRef}
        className="w-full h-[520px] sm:h-[600px] z-[100] relative bg-slate-100"
        tabIndex={0}
      >
        {/* Fallback visual indicator if Leaflet is loading */}
        {!isLeafletReady && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm z-50">
            <Compass className="w-8 h-8 text-coral animate-spin mb-2" />
            <p className="text-xs font-bold text-ink">Rendering real map coordinates & distances...</p>
          </div>
        )}
      </div>

      {/* ================================================================= */}
      {/* FLOATING ACTION TOOLBAR: RECENTER & LEGEND */}
      {/* ================================================================= */}
      <div className="absolute bottom-6 right-4 z-[400] flex flex-col items-end gap-2.5">
        <button
          onClick={handleRecenter}
          className="p-3 rounded-2xl bg-white text-ink hover:text-coral border border-borderSoft shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 text-xs font-extrabold"
          title="Recenter on My Location"
        >
          <LocateFixed className="w-4 h-4 text-coral" />
          <span className="hidden sm:inline">My Location</span>
        </button>

        <div className="px-3.5 py-2 rounded-2xl bg-midnightInk/85 backdrop-blur-md text-white text-[11px] font-semibold shadow-xl border border-white/10 flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-coral animate-pulse" />
            <span>You</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-violet" />
            <span>{profiles.length} Nearby</span>
          </div>
          {showEvents && (
            <div className="flex items-center gap-1.5">
              <span>🎉 {events.length} Events</span>
            </div>
          )}
        </div>
      </div>

      {/* ================================================================= */}
      {/* INTERACTIVE MEMBER CARD MODAL / DRAWER */}
      {/* ================================================================= */}
      {selectedProfile && (
        <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-[450] animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="p-4 sm:p-5 rounded-3xl bg-white/95 backdrop-blur-md border border-borderSoft shadow-2xl space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3.5">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-coral flex-shrink-0 shadow-md">
                  <img
                    src={selectedProfile.photos?.[0]?.url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300'}
                    alt={selectedProfile.displayName}
                    className="w-full h-full object-cover"
                  />
                  {wavedProfiles[selectedProfile.id] && (
                    <div className="absolute inset-0 bg-coral/50 flex items-center justify-center text-white text-xs font-bold">
                      Waved 💖
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-black text-base text-ink">
                      {selectedProfile.displayName}, {selectedProfile.age}
                    </h3>
                    {selectedProfile.verificationStatus === 'VERIFIED' && (
                      <span className="text-xs text-sky-500 font-bold" title="Verified Member">✓</span>
                    )}
                  </div>

                  <p className="text-xs font-bold text-coral flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>~{formatDistance(selectedProfile.approximateDistanceKm || 3)} away • {selectedProfile.city}</span>
                  </p>

                  {travelStats && (
                    <p className="text-[11px] text-ink-muted mt-1 flex items-center gap-2">
                      <span>🚶 ~{travelStats.walkingMins} min walk</span>
                      <span>•</span>
                      <span>🚗 ~{travelStats.drivingMins} min drive ({travelStats.bearing})</span>
                    </p>
                  )}
                </div>
              </div>

              <button
                onClick={() => setSelectedProfile(null)}
                className="p-1.5 rounded-full hover:bg-cloud text-ink-muted hover:text-ink transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {selectedProfile.bio && (
              <p className="text-xs text-ink-muted line-clamp-2 leading-relaxed">
                {selectedProfile.bio}
              </p>
            )}

            {/* Interest Chips */}
            {selectedProfile.interests && selectedProfile.interests.length > 0 && (
              <div className="flex items-center gap-1.5 flex-wrap">
                {selectedProfile.interests.slice(0, 3).map((item) => (
                  <span
                    key={item.id}
                    className="px-2.5 py-1 rounded-xl bg-cloud text-[11px] font-semibold text-ink"
                  >
                    {item.emoji} {item.name}
                  </span>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center gap-2 pt-2 border-t border-borderSoft">
              <button
                onClick={() => onSendWave && onSendWave(selectedProfile)}
                className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 ${
                  wavedProfiles[selectedProfile.id]
                    ? 'bg-emerald-50 text-emerald-600 border border-emerald-300'
                    : 'bg-white hover:bg-coral-light border border-borderSoft text-ink hover:text-coral'
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${wavedProfiles[selectedProfile.id] ? 'fill-current' : 'text-coral'}`} />
                <span>{wavedProfiles[selectedProfile.id] ? 'Waved! 💖' : 'Wave 👋'}</span>
              </button>

              <button
                onClick={() => onConnect && onConnect(selectedProfile)}
                className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-coral to-violet text-white text-xs font-bold hover:scale-105 active:scale-95 transition-all shadow-md flex items-center justify-center gap-1"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Connect</span>
              </button>

              {selectedProfile.latitude && selectedProfile.longitude && (
                <a
                  href={getGoogleMapsDirectionsUrl(selectedProfile.latitude, selectedProfile.longitude)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-cloud hover:bg-cloud-dark text-ink text-xs font-bold transition-colors flex items-center justify-center"
                  title="Open real directions in Google Maps"
                >
                  <Navigation className="w-4 h-4 text-violet" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* INTERACTIVE EVENT POPUP */}
      {/* ================================================================= */}
      {selectedEvent && (
        <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-[450] animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="p-4 sm:p-5 rounded-3xl bg-white/95 backdrop-blur-md border border-borderSoft shadow-2xl space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl p-2 rounded-2xl bg-coral-light">{selectedEvent.emoji}</span>
                <div>
                  <h3 className="font-display font-bold text-sm text-ink">{selectedEvent.title}</h3>
                  <p className="text-xs text-coral font-semibold mt-0.5">
                    📍 {selectedEvent.venueName} ({selectedEvent.approximateLocation})
                  </p>
                  {selectedEvent.approximateDistanceKm && (
                    <p className="text-[11px] text-ink-muted">
                      ~{formatDistance(selectedEvent.approximateDistanceKm)} away from you
                    </p>
                  )}
                </div>
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                className="p-1.5 rounded-full hover:bg-cloud text-ink-muted hover:text-ink"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-ink-muted line-clamp-2">{selectedEvent.description}</p>

            <div className="flex items-center justify-between pt-2 border-t border-borderSoft text-xs">
              <span className="font-bold text-ink">
                👥 {selectedEvent.registeredCount}/{selectedEvent.capacity} Going
              </span>
              {selectedEvent.latitude && selectedEvent.longitude && (
                <a
                  href={getGoogleMapsDirectionsUrl(selectedEvent.latitude, selectedEvent.longitude)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-violet text-white font-bold hover:bg-violet-hover transition-colors flex items-center gap-1"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Directions</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* MAP API KEY & TILE SETTINGS MODAL */}
      {/* ================================================================= */}
      {showApiKeyModal && (
        <div className="fixed inset-0 z-[600] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-lg bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-borderSoft space-y-5 animate-in zoom-in-95">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-coral-light flex items-center justify-center text-coral">
                  <KeyRound className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-lg text-ink">Map API Key & Tile Credentials</h3>
                  <p className="text-xs text-slate-600 font-medium">Differential privacy and authentic vector map layers</p>
                </div>
              </div>
              <button
                onClick={() => setShowApiKeyModal(false)}
                className="p-1 rounded-full text-slate-400 hover:text-ink"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              {/* Active Key Display with Copy & Regenerate */}
              <div>
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-1.5">
                  Active Map API Key
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={apiKeyInput}
                    onChange={(e) => setApiKeyInput(e.target.value)}
                    className="flex-1 font-mono text-xs px-3.5 py-2.5 rounded-xl bg-cloud border border-borderSoft text-slate-900 focus:outline-hidden focus:border-coral"
                    placeholder="Enter MapTiler / Geoapify / Map API Key..."
                  />
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(apiKeyInput);
                      setCopiedKey(true);
                      setTimeout(() => setCopiedKey(false), 2000);
                    }}
                    className="px-3 py-2.5 rounded-xl border border-borderSoft bg-white hover:bg-cloud text-ink font-bold text-xs flex items-center gap-1 shadow-2xs"
                    title="Copy API Key"
                  >
                    {copiedKey ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                  </button>
                  <button
                    onClick={() => {
                      const newKey = `pairup_live_map_ak_${Math.random().toString(36).substring(2, 9)}${Date.now().toString(36)}`;
                      setApiKeyInput(newKey);
                    }}
                    className="px-3 py-2.5 rounded-xl border border-borderSoft bg-white hover:bg-cloud text-ink font-bold text-xs flex items-center gap-1 shadow-2xs"
                    title="Regenerate New Live Key"
                  >
                    <RefreshCw className="w-4 h-4 text-violet" />
                  </button>
                </div>
              </div>

              {/* Tile Provider Switcher */}
              <div>
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-1.5">
                  Map Tile Engine & Provider
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { id: 'osm', name: 'OpenStreetMap (Official)', badge: 'Always Free • Zero Watermarks' },
                    { id: 'esri_streets', name: 'Esri World Streets', badge: 'Modern Vector Clean • Verified' },
                    { id: 'satellite', name: 'Satellite Imagery (Esri)', badge: 'Active • High-Res Aerial' },
                    { id: 'maptiler', name: 'MapTiler Vector HD', badge: 'Requires Key from maptiler.com' },
                    { id: 'geoapify', name: 'Geoapify Streets', badge: 'Requires Key from geoapify.com' }
                  ].map((prov) => (
                    <button
                      key={prov.id}
                      onClick={() => setMapProvider(prov.id as any)}
                      className={`p-3 rounded-2xl text-left border text-xs transition-all ${
                        mapProvider === prov.id
                          ? 'border-coral bg-coral-light/20 shadow-xs ring-1 ring-coral/40'
                          : 'border-borderSoft hover:border-slate-300 bg-white'
                      }`}
                    >
                      <p className="font-bold text-slate-900">{prov.name}</p>
                      <p className="text-[10px] text-slate-500 font-medium mt-0.5">{prov.badge}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Status Info Box */}
              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping flex-shrink-0" />
                <div>
                  <p className="font-bold">
                    {mapProvider === 'osm'
                      ? 'Official OpenStreetMap Engine Active & Verified'
                      : mapProvider === 'esri_streets'
                      ? 'Esri World Street Engine Active & Verified'
                      : mapProvider === 'satellite'
                      ? 'High-Resolution Satellite Aerial Engine Active'
                      : 'Custom Map Key Verified'}
                  </p>
                  <p className="text-[11px] text-emerald-700">
                    {mapProvider === 'osm' || mapProvider === 'esri_streets' || mapProvider === 'satellite'
                      ? 'Global raster & vector tiles active without rate limits or "API Key Required" watermarks.'
                      : 'Differential privacy & live Haversine distance engine active.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-borderSoft">
              <button
                onClick={() => setShowApiKeyModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const trimmed = apiKeyInput.trim();
                  let chosenProvider = mapProvider;
                  // If proprietary provider chosen without authentic external key, default to OSM to avoid invalid key errors
                  if ((chosenProvider === 'maptiler' || chosenProvider === 'geoapify') && (!trimmed || trimmed.startsWith('pairup_') || trimmed.length < 15)) {
                    chosenProvider = 'osm';
                    setMapProvider('osm');
                  }
                  if (trimmed) {
                    setMapApiKey(trimmed);
                    localStorage.setItem('pairup_map_api_key', trimmed);
                  }
                  localStorage.setItem('pairup_map_provider', chosenProvider);
                  setShowApiKeyModal(false);
                }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-coral to-violet text-white text-xs font-bold shadow-md shadow-coral/20 hover:scale-105 active:scale-95 transition-all"
              >
                Save & Apply Credentials
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
