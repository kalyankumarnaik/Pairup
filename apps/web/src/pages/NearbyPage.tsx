import React, { useEffect, useState, useMemo } from 'react';
import {
  Compass,
  Eye,
  Filter,
  Grid,
  Heart,
  Info,
  LocateFixed,
  Map as MapIcon,
  MapPin,
  MessageCircle,
  Navigation,
  Radio,
  RotateCcw,
  Shield,
  Sliders,
  Sparkles,
  Users,
  Zap
} from 'lucide-react';
import { apiClient } from '../lib/api';
import { DiscoveryCard, SocialEvent, SwipeAction } from '@pairup/domain-types';
import { Link, useNavigate } from 'react-router-dom';
import { MOCK_DISCOVERY_CARDS, MOCK_EVENTS } from '../lib/mockData';
import { useLocation, METRO_CITIES } from '../context/LocationContext';
import { useAuth } from '../context/AuthContext';
import { useNotificationPopup } from '../context/NotificationPopupContext';
import { MatchModal } from '../components/MatchModal';
import { RealMapView } from '../components/RealMapView';
import confetti from 'canvas-confetti';

const RADII_PRESETS = [5, 10, 25, 50];

export const NearbyPage: React.FC = () => {
  const { profile } = useAuth();
  const navigate = useNavigate();
  const { popNotification, popMessage } = useNotificationPopup();
  const {
    location,
    permissionStatus,
    isLocating,
    statusMessage,
    requestGpsLocation,
    setManualCity,
    setManualCoordinates,
    sortAndFilterNearby
  } = useLocation();

  const [rawProfiles, setRawProfiles] = useState<DiscoveryCard[]>(MOCK_DISCOVERY_CARDS);
  const [events, setEvents] = useState<SocialEvent[]>(MOCK_EVENTS);
  const [radiusKm, setRadiusKm] = useState<number>(25);
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [modeFilter, setModeFilter] = useState<'ALL' | 'DATING' | 'FRIENDSHIP'>('ALL');
  const [viewMode, setViewMode] = useState<'map' | 'radar' | 'grid'>('map');
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedRadarProfile, setSelectedRadarProfile] = useState<DiscoveryCard | null>(null);
  const [wavedProfiles, setWavedProfiles] = useState<Record<string, boolean>>({});

  // Match celebration state
  const [matchedProfile, setMatchedProfile] = useState<DiscoveryCard | null>(null);
  const [matchId, setMatchId] = useState<string | null>(null);
  const [isMatchModalOpen, setIsMatchModalOpen] = useState<boolean>(false);

  // Available city options for filter chips
  const cityOptions = useMemo(() => {
    return ['All', ...Object.keys(METRO_CITIES)];
  }, []);

  // Sync nearby profiles from API or fallback
  const fetchNearby = async () => {
    setLoading(true);
    try {
      const res = await apiClient.getNearbyProfiles(radiusKm, selectedCity !== 'All' ? selectedCity : undefined);
      if (res.data && res.data.length > 0) {
        setRawProfiles(res.data);
      } else {
        setRawProfiles(MOCK_DISCOVERY_CARDS);
      }
    } catch {
      setRawProfiles(MOCK_DISCOVERY_CARDS);
    } finally {
      setLoading(false);
    }
  };

  const fetchEvents = async () => {
    try {
      const res = await apiClient.getEvents();
      if (res.data && res.data.length > 0) {
        setEvents(res.data);
      } else {
        setEvents(MOCK_EVENTS);
      }
    } catch {
      setEvents(MOCK_EVENTS);
    }
  };

  useEffect(() => {
    fetchNearby();
    fetchEvents();
  }, [radiusKm, selectedCity, location.latitude, location.longitude]);

  // Process and sort nearby profiles dynamically by calculated distance
  const filteredProfiles = useMemo(() => {
    let list = sortAndFilterNearby(rawProfiles, radiusKm, selectedCity);
    if (modeFilter !== 'ALL') {
      list = list.filter((p) => {
        if (p.connectionMode === 'BOTH') return true;
        return p.connectionMode === modeFilter;
      });
    }
    return list;
  }, [rawProfiles, radiusKm, selectedCity, modeFilter, sortAndFilterNearby]);

  // Handle Requesting GPS Location
  const handleRequestGps = async () => {
    const success = await requestGpsLocation(false);
    if (success) {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.3 },
        colors: ['#FF3366', '#7047EB', '#10B981']
      });
    }
  };

  // Handle City Change
  const handleCitySelect = async (city: string) => {
    setSelectedCity(city);
    if (city !== 'All') {
      await setManualCity(city);
    }
  };

  // Handle Sending a Wave
  const handleSendWave = (p: DiscoveryCard) => {
    setWavedProfiles((prev) => ({ ...prev, [p.id]: true }));
    confetti({
      particleCount: 25,
      spread: 50,
      origin: { y: 0.7 },
      colors: ['#FF3366', '#FF7A45', '#7047EB']
    });

    popNotification({
      title: `Wave Sent to ${p.displayName}! 👋`,
      body: `${p.displayName} has received your wave and will see your profile highlighted on radar.`,
      category: 'SURGE',
      emoji: '👋',
      actionUrl: '/messages'
    });
  };

  // Handle Instant Connect / Like
  const handleConnect = async (p: DiscoveryCard) => {
    popNotification({
      title: `Mutual Connection with ${p.displayName}! 💖`,
      body: `You are connected! Start an encrypted voice call or exchange a message.`,
      category: 'MATCH',
      emoji: '💖',
      actionUrl: '/messages'
    });

    try {
      const res = await apiClient.swipe(p.userId, SwipeAction.LIKE, p.connectionMode || 'DATING');
      if (res.data?.isMatch) {
        setMatchedProfile(res.data.matchedProfile || p);
        setMatchId(res.data.matchId || `match_${Date.now()}`);
        setIsMatchModalOpen(true);
        return;
      }
    } catch {
      // Offline fallback
    }

    setMatchedProfile(p);
    setMatchId(`match_${Date.now()}`);
    setIsMatchModalOpen(true);
  };

  // Helper to map profiles radially onto radar (0-360 deg, distance 0-100%)
  const getRadarPosition = (index: number, total: number, distanceKm: number) => {
    const angle = (index * (360 / Math.max(1, total)) + 30) * (Math.PI / 180);
    // Clamp distance between 22% and 85% of radar radius
    const normalizedDist = 0.22 + (Math.min(distanceKm, radiusKm) / Math.max(1, radiusKm)) * 0.63;
    const x = 50 + Math.cos(angle) * normalizedDist * 45;
    const y = 50 + Math.sin(angle) * normalizedDist * 45;
    return { x, y };
  };

  return (
    <div className="space-y-6 pb-16">
      {/* ================================================================= */}
      {/* 1. LOCATION ACCESS & STATUS HERO BANNER */}
      {/* ================================================================= */}
      <div className="relative overflow-hidden p-6 rounded-3xl bg-white border border-borderSoft shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        <div className="flex items-start sm:items-center gap-4">
          <div className="relative flex items-center justify-center w-14 h-14 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral opacity-25"></span>
            <div className="relative inline-flex rounded-2xl h-13 w-13 bg-gradient-to-tr from-coral via-rose to-violet items-center justify-center text-white shadow-lg shadow-coral/30">
              <MapPin className="w-7 h-7 fill-white" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-2xl font-display font-extrabold text-ink">
                Nearby Discovery Radar
              </h1>
              {location.isGps ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  GPS Live Active
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-peach-light text-peach-dark font-bold text-xs">
                  <span>📍 City: {location.city}</span>
                </span>
              )}
            </div>
            <p className="text-xs text-ink-muted mt-1 max-w-xl leading-relaxed">
              Find verified members currently within your area. Coordinates are protected by differential privacy and approximate distance fuzzing.
            </p>
          </div>
        </div>

        {/* GPS Action Button */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
          <button
            onClick={handleRequestGps}
            disabled={isLocating}
            className="px-5 py-3 rounded-2xl bg-gradient-to-r from-coral via-rose to-violet text-white text-xs font-extrabold shadow-md shadow-coral/25 hover:shadow-coralGlow hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <LocateFixed className={`w-4 h-4 ${isLocating ? 'animate-spin' : ''}`} />
            <span>{isLocating ? 'Acquiring GPS...' : 'Use My Current Location'}</span>
          </button>
        </div>
      </div>

      {/* Permission / Status Alert Bar if not granted or if message available */}
      {permissionStatus !== 'granted' && (
        <div className="p-4 rounded-2xl bg-gradient-to-r from-coral/10 via-violet/10 to-transparent border border-coral/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <span className="text-lg">📍</span>
            <div>
              <p className="font-bold text-ink">
                Want to find matches in your immediate neighborhood?
              </p>
              <p className="text-ink-muted">
                Allow browser location access or select a city below to view members sorted by closest distance.
              </p>
            </div>
          </div>
          <button
            onClick={handleRequestGps}
            className="px-3.5 py-1.5 rounded-xl bg-coral text-white font-bold text-xs hover:bg-coral-hover transition-colors whitespace-nowrap self-end sm:self-auto"
          >
            Enable Location Access
          </button>
        </div>
      )}

      {statusMessage && statusMessage !== 'Ready' && (
        <div className="px-4 py-2.5 rounded-2xl bg-cloud border border-borderSoft text-xs font-semibold text-ink-muted flex items-center gap-2">
          <Info className="w-4 h-4 text-violet" />
          <span>{statusMessage}</span>
        </div>
      )}

      {/* ================================================================= */}
      {/* 2. ACTIVITY SURGE BANNER */}
      {/* ================================================================= */}
      <div className="relative overflow-hidden p-5 rounded-3xl bg-gradient-to-r from-amber/15 via-coral/10 to-violet/10 border border-coral/30 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="relative flex items-center justify-center w-11 h-11 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral opacity-40"></span>
            <span className="relative inline-flex rounded-2xl h-10 w-10 bg-gradient-to-tr from-amber via-coral to-rose items-center justify-center text-white shadow-md shadow-coral/30 text-lg font-bold">
              ⚡
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-coral text-white text-[10px] font-black uppercase tracking-wider animate-pulse">
                ACTIVITY SURGE ACTIVE
              </span>
              <span className="text-xs font-bold text-coral">Peak Discovery Window 🔥</span>
            </div>
            <p className="text-xs sm:text-sm font-bold text-ink mt-0.5">
              {filteredProfiles.length * 18}+ members active near {selectedCity === 'All' ? location.city : selectedCity}!
            </p>
            <p className="text-[11px] text-ink-muted">
              Connects made during surge hours receive 2.4x faster responses. Send a wave or say hi!
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white border border-borderSoft shadow-xs self-stretch sm:self-auto">
          <button
            onClick={() => setViewMode('map')}
            className={`flex-1 sm:flex-initial px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              viewMode === 'map'
                ? 'bg-gradient-to-r from-coral to-violet text-white shadow-xs'
                : 'text-ink-muted hover:text-ink'
            }`}
          >
            <MapIcon className="w-3.5 h-3.5" />
            <span>Live Map</span>
          </button>
          <button
            onClick={() => setViewMode('radar')}
            className={`flex-1 sm:flex-initial px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              viewMode === 'radar'
                ? 'bg-midnightInk text-white shadow-xs'
                : 'text-ink-muted hover:text-ink'
            }`}
          >
            <Radio className="w-3.5 h-3.5 text-coral" />
            <span>Radar Pulse</span>
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`flex-1 sm:flex-initial px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              viewMode === 'grid'
                ? 'bg-violet text-white shadow-xs'
                : 'text-ink-muted hover:text-ink'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>Grid Cards</span>
          </button>
        </div>
      </div>

      {/* ================================================================= */}
      {/* 3. FILTER ROW: RADIUS SLIDER, INTENTION & CITIES */}
      {/* ================================================================= */}
      <div className="space-y-4 p-5 sm:p-6 rounded-3xl bg-white border border-borderSoft shadow-sm">
        {/* Top row: Radius and Intention Mode */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          {/* Radius slider */}
          <div className="flex-1 max-w-lg space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-ink uppercase tracking-wider flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-violet" />
                <span>Search Radius:</span>
              </span>
              <span className="px-3 py-1 rounded-xl bg-coral-light text-coral font-black text-xs">
                {radiusKm} km
              </span>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min="1"
                max="50"
                value={radiusKm}
                onChange={(e) => setRadiusKm(Number(e.target.value))}
                className="w-full accent-coral cursor-pointer"
              />
              <div className="flex items-center gap-1 flex-shrink-0">
                {RADII_PRESETS.map((r) => (
                  <button
                    key={r}
                    onClick={() => setRadiusKm(r)}
                    className={`px-2.5 py-1 rounded-xl text-[11px] font-bold transition-all ${
                      radiusKm === r
                        ? 'bg-coral text-white shadow-xs'
                        : 'bg-white border border-borderSoft text-ink hover:text-coral hover:border-coral shadow-2xs'
                    }`}
                  >
                    {r}k
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Intention Mode Filter */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-ink-muted uppercase mr-1">Looking For:</span>
            {(['ALL', 'DATING', 'FRIENDSHIP'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setModeFilter(mode)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  modeFilter === mode
                    ? 'bg-violet text-white shadow-sm'
                    : 'bg-white border border-borderSoft text-ink hover:text-violet hover:border-violet shadow-2xs'
                }`}
              >
                {mode === 'ALL' ? '🌟 All Modes' : mode === 'DATING' ? '💖 Dating' : '🫶 Friends'}
              </button>
            ))}
          </div>
        </div>

        {/* City selection chips */}
        <div className="pt-3 border-t border-borderSoft/60">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-bold text-ink uppercase tracking-wider flex-shrink-0">
              Select City:
            </span>
            {cityOptions.map((c) => (
              <button
                key={c}
                onClick={() => handleCitySelect(c)}
                className={`px-3 py-1 rounded-xl text-xs whitespace-nowrap transition-all ${
                  selectedCity === c
                    ? 'bg-violet text-white font-bold shadow-xs'
                    : 'bg-white border border-borderSoft text-ink hover:text-violet hover:border-violet font-semibold shadow-2xs'
                }`}
              >
                {c === 'All' ? '🌐 All Metros' : `📍 ${c}`}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ================================================================= */}
      {/* 4. REAL MAP VIEW MODE (Interactive OpenStreetMap & Geolocation)   */}
      {/* ================================================================= */}
      {viewMode === 'map' && (
        <RealMapView
          userLocation={location}
          profiles={filteredProfiles}
          events={events}
          radiusKm={radiusKm}
          onRadiusChange={(r) => setRadiusKm(r)}
          onSelectProfile={(p) => setSelectedRadarProfile(p)}
          onSendWave={handleSendWave}
          onConnect={handleConnect}
          onLocationSelect={async (lat, lng, label) => {
            await setManualCoordinates(lat, lng, label);
          }}
          wavedProfiles={wavedProfiles}
        />
      )}

      {/* ================================================================= */}
      {/* 5. RADAR VIEW MODE (Interactive Concentric Sweeping Radar) */}
      {/* ================================================================= */}
      {viewMode === 'radar' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-midnightInk text-white shadow-2xl relative overflow-hidden border border-white/10 flex flex-col items-center">
          {/* Header */}
          <div className="w-full flex items-center justify-between mb-2 z-10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-black uppercase tracking-widest text-emerald-400">
                PROXIMITY SCAN • {radiusKm} KM RADIUS
              </span>
            </div>
            <span className="text-xs text-white/70 font-semibold">
              {filteredProfiles.length} Members Detected Around {selectedCity === 'All' ? location.city : selectedCity}
            </span>
          </div>

          {/* Circular Radar Container */}
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 my-6 flex items-center justify-center">
            {/* Concentric distance rings */}
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <div className="absolute inset-8 rounded-full border border-white/15" />
            <div className="absolute inset-20 rounded-full border border-white/20" />
            <div className="absolute inset-32 rounded-full border border-white/25" />

            {/* Crosshairs */}
            <div className="absolute inset-x-0 top-1/2 h-[1px] bg-white/10 pointer-events-none" />
            <div className="absolute inset-y-0 left-1/2 w-[1px] bg-white/10 pointer-events-none" />

            {/* Distance markers */}
            <span className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] text-white/50 font-mono">
              {radiusKm} km
            </span>
            <span className="absolute top-10 left-1/2 -translate-x-1/2 text-[10px] text-white/50 font-mono">
              {Math.round(radiusKm * 0.6)} km
            </span>
            <span className="absolute top-22 left-1/2 -translate-x-1/2 text-[10px] text-white/50 font-mono">
              {Math.round(radiusKm * 0.3)} km
            </span>

            {/* Rotating Radar Sweeper Beam */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none animate-spin"
              style={{
                animationDuration: '6s',
                background: 'conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(255, 51, 102, 0.4) 360deg)'
              }}
            />

            {/* Center Node (Current User) */}
            <div className="relative z-20 w-12 h-12 rounded-full bg-gradient-to-tr from-coral via-rose to-violet p-0.5 shadow-2xl flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-midnightInk flex items-center justify-center text-xs font-bold text-white">
                You 📍
              </div>
              <span className="absolute inset-0 rounded-full bg-coral animate-ping opacity-60 pointer-events-none" />
            </div>

            {/* Member Blips plotted on Radar */}
            {filteredProfiles.map((p, idx) => {
              const distance = p.approximateDistanceKm || 3;
              const pos = getRadarPosition(idx, filteredProfiles.length, distance);
              const isSelected = selectedRadarProfile?.id === p.id;
              const hasWaved = wavedProfiles[p.id];

              return (
                <div
                  key={p.id}
                  style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-30 group"
                >
                  <button
                    onClick={() => setSelectedRadarProfile(isSelected ? null : p)}
                    className={`relative rounded-full p-0.5 transition-all duration-200 ${
                      isSelected
                        ? 'ring-4 ring-coral scale-125'
                        : 'hover:scale-125 ring-2 ring-white/60'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-midnightInk">
                      <img
                        src={p.photos?.[0]?.url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200'}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Blip Ping Aura */}
                    <span className="absolute -inset-1 rounded-full bg-coral animate-pulse opacity-60 pointer-events-none" />
                    {hasWaved && (
                      <span className="absolute -top-1 -right-1 text-xs animate-bounce">💖</span>
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Interactive Profile Preview Popover */}
          {selectedRadarProfile ? (
            <div className="w-full max-w-lg bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/20 mt-2 animate-in fade-in zoom-in-95 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-2xl overflow-hidden ring-2 ring-coral flex-shrink-0">
                  <img
                    src={selectedRadarProfile.photos?.[0]?.url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200'}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-white">
                    {selectedRadarProfile.displayName}, {selectedRadarProfile.age}
                  </h4>
                  <p className="text-xs text-coral font-bold flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>~{selectedRadarProfile.approximateDistanceKm} km away in {selectedRadarProfile.city}</span>
                  </p>
                  <p className="text-[11px] text-white/80 line-clamp-1 mt-1">
                    {selectedRadarProfile.bio || 'Say hello and start chatting!'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-stretch sm:self-auto">
                <button
                  onClick={() => handleSendWave(selectedRadarProfile)}
                  className={`flex-1 sm:flex-initial px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5 ${
                    wavedProfiles[selectedRadarProfile.id]
                      ? 'bg-emerald-500 text-white'
                      : 'bg-white/20 hover:bg-white/30 text-white'
                  }`}
                >
                  <span>{wavedProfiles[selectedRadarProfile.id] ? 'Waved! 💖' : 'Wave 👋'}</span>
                </button>
                <button
                  onClick={() => handleConnect(selectedRadarProfile)}
                  className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-gradient-to-r from-coral to-violet text-white text-xs font-bold hover:scale-105 active:scale-95 transition-all shadow-md flex items-center justify-center gap-1"
                >
                  <Heart className="w-3.5 h-3.5 fill-white" />
                  <span>Connect</span>
                </button>
              </div>
            </div>
          ) : (
            <p className="text-xs text-white/60 text-center mt-2 flex items-center gap-1.5">
              <span>💡</span>
              <span>Tap any radar blip to see how close they are and send an instant wave!</span>
            </p>
          )}
        </div>
      )}

      {/* ================================================================= */}
      {/* 5. GRID VIEW MODE */}
      {/* ================================================================= */}
      {loading ? (
        <div className="py-20 text-center text-sm font-semibold text-ink-muted">
          Scanning nearby area for matches...
        </div>
      ) : filteredProfiles.length > 0 ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h3 className="font-display font-bold text-base text-ink flex items-center gap-2">
              <span>Nearby Matches</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-violet-light text-violet font-extrabold">
                {filteredProfiles.length} verified
              </span>
            </h3>
            <span className="text-xs text-ink-muted font-medium">Sorted by closest proximity</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProfiles.map((p) => {
              const hasWaved = wavedProfiles[p.id];

              return (
                <div
                  key={p.id}
                  className="group rounded-3xl overflow-hidden bg-white border border-borderSoft shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  {/* Photo Container */}
                  <div className="relative h-72 overflow-hidden bg-midnightInk">
                    <img
                      src={p.photos?.[0]?.url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600'}
                      alt={p.displayName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnightInk via-transparent to-transparent" />

                    {/* Proximity Distance Badge */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-midnightInk/80 backdrop-blur-md text-white text-xs font-bold flex items-center gap-1.5 shadow-md">
                      <MapPin className="w-3.5 h-3.5 text-peach" />
                      <span>~{p.approximateDistanceKm} km away</span>
                    </div>

                    {/* Wave Sent Pill */}
                    {hasWaved && (
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-emerald-500 text-white text-[10px] font-bold shadow-md animate-bounce">
                        Wave Sent 💖
                      </div>
                    )}

                    {/* Intention Pill */}
                    <div className="absolute bottom-12 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-extrabold uppercase">
                        {p.connectionMode === 'BOTH' ? 'Dating & Friends' : p.connectionMode}
                      </span>
                    </div>

                    {/* Name & City */}
                    <div className="absolute bottom-3 inset-x-3 text-white">
                      <h3 className="font-display font-extrabold text-lg leading-tight flex items-center gap-1.5">
                        <span>{p.displayName}, {p.age}</span>
                        {p.verificationStatus === 'VERIFIED' && (
                          <span className="text-xs text-sky-400" title="18+ Verified">✓</span>
                        )}
                      </h3>
                      <p className="text-xs text-white/80">{p.city}</p>
                    </div>
                  </div>

                  {/* Bio & Interests */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                    <p className="text-xs text-ink-muted line-clamp-2 leading-relaxed">
                      {p.bio || 'Say hello and start a conversation!'}
                    </p>

                    <div className="flex items-center gap-1.5 flex-wrap">
                      {p.interests.slice(0, 3).map((int) => (
                        <span
                          key={int.id}
                          className="px-2.5 py-1 rounded-xl bg-cloud text-[11px] font-semibold text-ink"
                        >
                          {int.emoji} {int.name}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 pt-2 border-t border-borderSoft">
                      <button
                        onClick={() => handleSendWave(p)}
                        className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 ${
                          hasWaved
                            ? 'bg-emerald-50 text-emerald-600 border-2 border-emerald-400 font-bold'
                            : 'bg-white hover:bg-coral-light border border-borderSoft text-ink hover:text-coral hover:border-coral/40 font-bold shadow-2xs'
                        }`}
                      >
                        <Heart className={`w-3.5 h-3.5 ${hasWaved ? 'fill-current text-emerald-600' : 'text-coral'}`} />
                        <span>{hasWaved ? 'Waved! 💖' : 'Wave 👋'}</span>
                      </button>

                      <button
                        onClick={() => handleConnect(p)}
                        className="flex-1 py-2.5 rounded-xl text-xs font-extrabold text-white bg-gradient-to-r from-coral to-violet shadow-md shadow-coral/25 hover:shadow-coralGlow hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-1"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Connect</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="p-12 text-center bg-white rounded-3xl border border-borderSoft shadow-sm space-y-3">
          <p className="text-4xl">📍</p>
          <h3 className="text-base font-bold text-ink">No members found within {radiusKm} km</h3>
          <p className="text-xs text-ink-muted max-w-sm mx-auto">
            Try expanding your search radius to 50 km or switching to another metro city like Mumbai, Bengaluru, or Delhi.
          </p>
          <button
            onClick={() => setRadiusKm(50)}
            className="px-4 py-2 rounded-xl bg-violet text-white text-xs font-bold hover:bg-violet-hover transition-colors"
          >
            Expand Radius to 50 km
          </button>
        </div>
      )}

      {/* Match Celebration Modal */}
      <MatchModal
        isOpen={isMatchModalOpen}
        onClose={() => setIsMatchModalOpen(false)}
        myProfile={profile}
        matchedProfile={matchedProfile}
        matchId={matchId}
      />
    </div>
  );
};
