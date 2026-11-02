import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  Filter,
  Heart,
  LocateFixed,
  MapPin,
  RotateCcw,
  Sparkles,
  Star,
  X,
  Zap
} from 'lucide-react';
import { SwipeCard } from '../components/SwipeCard';
import { MatchModal } from '../components/MatchModal';
import { useAuth } from '../context/AuthContext';
import { useLocation } from '../context/LocationContext';
import { useNotificationPopup } from '../context/NotificationPopupContext';
import { apiClient } from '../lib/api';
import { MOCK_DISCOVERY_CARDS } from '../lib/mockData';
import {
  ConnectionMode,
  DiscoveryCard,
  Gender,
  RelationshipIntention,
  SwipeAction,
  VerificationStatus
} from '@pairup/domain-types';

export const DiscoverPage: React.FC = () => {
  const { profile } = useAuth();
  const { popNotification } = useNotificationPopup();
  const {
    location,
    permissionStatus,
    isLocating,
    requestGpsLocation,
    calculateDistanceFromUser
  } = useLocation();

  const [cards, setCards] = useState<DiscoveryCard[]>(MOCK_DISCOVERY_CARDS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  // Filters
  const [modeFilter, setModeFilter] = useState<string>('BOTH');
  const [nearbyOnly, setNearbyOnly] = useState<boolean>(false);

  // Match celebration state
  const [matchedProfile, setMatchedProfile] = useState<DiscoveryCard | null>(null);
  const [matchId, setMatchId] = useState<string | null>(null);
  const [isMatchModalOpen, setIsMatchModalOpen] = useState(false);

  useEffect(() => {
    loadDeck();
  }, [modeFilter, nearbyOnly, location.latitude, location.longitude]);

  const loadDeck = async () => {
    setLoading(true);
    try {
      const res = await apiClient.getDiscoveryFeed({
        connectionMode: modeFilter as any,
        maxDistanceKm: nearbyOnly ? 25 : 100
      });

      let deckList = res.data && res.data.length > 0 ? res.data : MOCK_DISCOVERY_CARDS;

      // Filter by connection mode if using mock fallback
      if (modeFilter !== 'BOTH') {
        deckList = deckList.filter((c) => c.connectionMode === 'BOTH' || c.connectionMode === modeFilter);
      }

      // Calculate real distances based on user's current coordinates
      deckList = deckList.map((card) => {
        const dist = calculateDistanceFromUser(card.latitude, card.longitude, card.city, card.userId);
        return {
          ...card,
          approximateDistanceKm: dist
        };
      });

      if (nearbyOnly) {
        deckList = deckList.filter((c) => (c.approximateDistanceKm || 999) <= 25);
        deckList.sort((a, b) => (a.approximateDistanceKm || 999) - (b.approximateDistanceKm || 999));
      }

      setCards(deckList.length > 0 ? deckList : MOCK_DISCOVERY_CARDS);
      setCurrentIndex(0);
    } catch {
      let deckList = MOCK_DISCOVERY_CARDS.map((card) => ({
        ...card,
        approximateDistanceKm: calculateDistanceFromUser(card.latitude, card.longitude, card.city, card.userId)
      }));

      if (modeFilter !== 'BOTH') {
        deckList = deckList.filter((c) => c.connectionMode === 'BOTH' || c.connectionMode === modeFilter);
      }

      if (nearbyOnly) {
        deckList = deckList.filter((c) => (c.approximateDistanceKm || 999) <= 25);
        deckList.sort((a, b) => (a.approximateDistanceKm || 999) - (b.approximateDistanceKm || 999));
      }

      setCards(deckList);
      setCurrentIndex(0);
    } finally {
      setLoading(false);
    }
  };

  const handleRequestGps = async () => {
    await requestGpsLocation(false);
  };

  const handleSwipe = async (action: SwipeAction) => {
    if (currentIndex >= cards.length) return;

    const currentCard = cards[currentIndex];

    // Optimistically advance card index
    setCurrentIndex((prev) => prev + 1);

    try {
      const res = await apiClient.swipe(
        currentCard.userId,
        action,
        currentCard.connectionMode || 'DATING'
      );

      if (res.data?.isMatch) {
        setMatchedProfile(res.data.matchedProfile || currentCard);
        setMatchId(res.data.matchId || `match_${Date.now()}`);
        setIsMatchModalOpen(true);
        return;
      }
    } catch {
      // Offline fallback
    }

    // In demo / fallback mode, simulate instant match when swiping right (LIKE)
    if (action === SwipeAction.LIKE || action === SwipeAction.SUPER_LIKE) {
      setMatchedProfile(currentCard);
      setMatchId(`match_${Date.now()}`);
      setIsMatchModalOpen(true);

      // Pop real-time celebratory match toast
      popNotification({
        title: `It's a Match with ${currentCard.displayName}! 💖`,
        body: `You both swiped right! Start a conversation or start an encrypted HD call.`,
        category: 'MATCH',
        emoji: '💖',
        actionUrl: '/messages'
      });
    }
  };

  const handleRewind = async () => {
    try {
      await apiClient.rewind();
    } catch {
      // Offline fallback
    }
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const currentCard = cards[currentIndex];
  const nextCard = cards[currentIndex + 1];

  return (
    <div className="max-w-xl mx-auto flex flex-col items-center justify-between min-h-[calc(100vh-100px)] py-4 px-2 sm:px-4">
      {/* Top Discovery Mode & Location Proximity Bar */}
      <div className="w-full space-y-2.5 mb-3">
        <div className="w-full flex items-center justify-between gap-2 flex-wrap">
          {/* Mode Tabs */}
          <div className="flex items-center gap-1 p-1 rounded-2xl bg-white border border-borderSoft shadow-xs">
            <button
              onClick={() => setModeFilter('BOTH')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                modeFilter === 'BOTH'
                  ? 'bg-violet text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 font-bold'
              }`}
            >
              All ✨
            </button>
            <button
              onClick={() => setModeFilter('DATING')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                modeFilter === 'DATING'
                  ? 'bg-coral text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 font-bold'
              }`}
            >
              Dating 💖
            </button>
            <button
              onClick={() => setModeFilter('FRIENDSHIP')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                modeFilter === 'FRIENDSHIP'
                  ? 'bg-peach text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 font-bold'
              }`}
            >
              Friends 🫶
            </button>
          </div>

          {/* Location Sync & Nearby Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setNearbyOnly(!nearbyOnly)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 ${
                nearbyOnly
                  ? 'bg-coral text-white border-coral shadow-xs'
                  : 'bg-white text-slate-700 border-borderSoft hover:text-ink hover:border-coral/50'
              }`}
              title="Show profiles within 25 km sorted by closest proximity"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Nearby &lt;25km</span>
            </button>

            <button
              onClick={handleRequestGps}
              disabled={isLocating}
              className="px-3 py-1.5 rounded-xl bg-white border border-borderSoft text-xs font-bold text-ink hover:text-violet hover:border-violet transition-all shadow-xs flex items-center gap-1.5"
              title="Detect real-time GPS location"
            >
              <LocateFixed className={`w-3.5 h-3.5 text-coral ${isLocating ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">
                {location.isGps ? `📍 ${location.city}` : '📍 Sync GPS'}
              </span>
            </button>

            <button
              onClick={loadDeck}
              title="Reload Deck"
              className="p-2 rounded-xl bg-white border border-borderSoft text-slate-600 hover:text-slate-900 hover:border-violet transition-colors shadow-xs"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Small location indicator pill if nearby only is active */}
        {nearbyOnly && (
          <div className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-coral-light/60 border border-coral/20 text-[11px] font-semibold text-coral-dark">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>Showing nearest profiles within 25 km of {location.city}</span>
            </span>
            <Link to="/nearby" className="underline font-bold hover:text-coral">
              Open Radar Radar →
            </Link>
          </div>
        )}
      </div>

      {/* Main Card Deck Stack Area */}
      <div className="relative w-full h-[580px] sm:h-[620px] flex items-center justify-center">
        {loading ? (
          <div className="flex flex-col items-center gap-3 text-ink-muted">
            <div className="w-12 h-12 rounded-full border-4 border-violet/20 border-t-violet animate-spin" />
            <p className="text-sm font-semibold">Finding amazing people nearby...</p>
          </div>
        ) : currentIndex < cards.length ? (
          <>
            {/* Next Card underneath for depth */}
            {nextCard && (
              <SwipeCard
                key={nextCard.id}
                card={nextCard}
                isFront={false}
                onSwipe={handleSwipe}
              />
            )}

            {/* Top Interactive Draggable Card */}
            {currentCard && (
              <SwipeCard
                key={currentCard.id}
                card={currentCard}
                isFront={true}
                onSwipe={handleSwipe}
              />
            )}
          </>
        ) : (
          /* Empty Deck State */
          <div className="w-full h-full rounded-3xl bg-white border border-borderSoft flex flex-col items-center justify-center p-8 text-center shadow-sm">
            <div className="w-16 h-16 rounded-3xl bg-lavender flex items-center justify-center text-3xl mb-4">
              🎉
            </div>
            <h3 className="text-xl font-display font-bold text-ink mb-1">
              You've seen everyone in this radius!
            </h3>
            <p className="text-xs text-ink-muted max-w-xs mb-6">
              Check back soon for new arrivals or expand your nearby distance preferences.
            </p>
            <button
              onClick={() => {
                setCurrentIndex(0);
                loadDeck();
              }}
              className="px-6 py-2.5 rounded-xl bg-violet text-white text-xs font-bold hover:bg-violet-hover transition-colors shadow-md shadow-violet/20"
            >
              Reset & Explore Again
            </button>
          </div>
        )}
      </div>

      {/* Bottom Action Controls Floating Bar */}
      <div className="flex items-center justify-center gap-3 sm:gap-5 mt-4 w-full">
        {/* Rewind */}
        <button
          onClick={handleRewind}
          disabled={currentIndex === 0}
          title="Rewind"
          className="w-12 h-12 rounded-full bg-amber-50 hover:bg-amber-100 border-2 border-amber-400 text-amber-600 hover:scale-110 active:scale-95 transition-all shadow-md flex items-center justify-center disabled:opacity-40 disabled:hover:scale-100"
        >
          <RotateCcw className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Pass (Left) */}
        <button
          onClick={() => handleSwipe(SwipeAction.PASS)}
          disabled={currentIndex >= cards.length}
          title="Pass"
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-rose-50 hover:bg-rose-500 border-2 border-rose-400 text-rose-600 hover:text-white hover:scale-110 active:scale-95 transition-all shadow-lg shadow-rose-500/20 flex items-center justify-center disabled:opacity-40 group"
        >
          <X className="w-7 h-7 sm:w-8 sm:h-8 stroke-[3] group-hover:scale-110 transition-transform" />
        </button>

        {/* Super Like */}
        <button
          onClick={() => handleSwipe(SwipeAction.SUPER_LIKE)}
          disabled={currentIndex >= cards.length}
          title="Super Like"
          className="w-12 h-12 rounded-full bg-cyan-50 hover:bg-cyan-500 border-2 border-cyan-400 text-cyan-600 hover:text-white hover:scale-110 active:scale-95 transition-all shadow-md shadow-cyan-500/25 flex items-center justify-center disabled:opacity-40 group"
        >
          <Star className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
        </button>

        {/* Like (Right) */}
        <button
          onClick={() => handleSwipe(SwipeAction.LIKE)}
          disabled={currentIndex >= cards.length}
          title="Like"
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-coral via-rose-500 to-violet text-white hover:scale-110 active:scale-95 transition-all shadow-xl shadow-coral/40 hover:shadow-coralGlow flex items-center justify-center disabled:opacity-40 group ring-4 ring-coral/20"
        >
          <Heart className="w-7 h-7 sm:w-8 sm:h-8 fill-white group-hover:scale-115 group-hover:animate-pulse transition-transform" />
        </button>

        {/* Fast Boost */}
        <button
          onClick={() => {
            popNotification({
              title: '⚡ Profile Boost Activated!',
              body: 'Your profile has 2.4x higher visibility on local radars for 30 minutes!',
              category: 'SURGE',
              emoji: '⚡',
              actionUrl: '/nearby'
            });
          }}
          title="Boost"
          className="w-12 h-12 rounded-full bg-violet-50 hover:bg-violet-600 border-2 border-violet-400 text-violet-600 hover:text-white hover:scale-110 active:scale-95 transition-all shadow-md shadow-violet-500/20 flex items-center justify-center group"
        >
          <Zap className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
        </button>
      </div>

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
