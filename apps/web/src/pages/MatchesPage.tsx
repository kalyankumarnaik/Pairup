import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Phone, Sparkles, UserCheck, Video } from 'lucide-react';
import { useCall } from '../context/CallContext';
import { apiClient } from '../lib/api';
import { MatchSummary } from '@pairup/domain-types';
import { MOCK_MATCHES } from '../lib/mockData';

export const MatchesPage: React.FC = () => {
  const { startCall } = useCall();
  const [matches, setMatches] = useState<MatchSummary[]>(MOCK_MATCHES);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadMatches();
  }, []);

  const loadMatches = async () => {
    try {
      const res = await apiClient.getMatches();
      if (res.data && res.data.length > 0) {
        setMatches(res.data);
      }
    } catch {
      // Keep MOCK_MATCHES
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 pb-12">
      <div className="p-6 rounded-3xl bg-white border border-borderSoft shadow-sm flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-extrabold text-ink flex items-center gap-2">
            <Heart className="w-6 h-6 text-coral fill-coral" />
            <span>Mutual Matches</span>
          </h1>
          <p className="text-sm text-slate-600 font-medium mt-1">
            People who liked you back! Start a conversation or pick up where you left off.
          </p>
        </div>

        <Link
          to="/discover"
          className="px-4 py-2 rounded-xl bg-violet text-white text-xs font-bold hover:bg-violet-hover transition-colors shadow-sm flex items-center gap-1.5"
        >
          <Sparkles className="w-4 h-4" />
          <span>Keep Swiping</span>
        </Link>
      </div>

      {loading ? (
        <div className="py-20 text-center text-sm font-semibold text-ink-muted">
          Loading your matches...
        </div>
      ) : matches.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {matches.map((m) => (
            <Link
              key={m.id}
              to="/messages"
              className="p-4 rounded-3xl bg-white border border-borderSoft hover:border-violet/40 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group"
            >
              <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-coral/30 group-hover:ring-coral transition-all flex-shrink-0">
                <img
                  src={m.matchedProfile.primaryPhotoUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200'}
                  alt={m.matchedProfile.displayName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <span className="absolute bottom-0.5 right-0.5 w-3 h-3 rounded-full bg-success ring-2 ring-white"></span>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display font-bold text-sm text-ink truncate group-hover:text-violet transition-colors">
                    {m.matchedProfile.displayName}, {m.matchedProfile.age}
                  </h3>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-lavender text-violet-dark">
                    {m.connectionMode}
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-medium truncate mt-1">
                  {m.lastMessageSnippet || 'New match! Say hello ✨'}
                </p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  {m.matchedProfile.city || 'Nearby'}
                </p>
              </div>

              <div className="flex items-center gap-1.5 flex-shrink-0">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    startCall('AUDIO', {
                      id: (m as any).matchedUserId || m.id,
                      name: m.matchedProfile.displayName,
                      avatarUrl: m.matchedProfile.primaryPhotoUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200',
                      city: m.matchedProfile.city || undefined
                    });
                  }}
                  className="p-2 rounded-xl bg-violet-light text-violet hover:bg-violet hover:text-white border border-violet/20 transition-all shadow-2xs hover:scale-105 active:scale-95"
                  title="Start Voice Call"
                >
                  <Phone className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    startCall('VIDEO', {
                      id: (m as any).matchedUserId || m.id,
                      name: m.matchedProfile.displayName,
                      avatarUrl: m.matchedProfile.primaryPhotoUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200',
                      city: m.matchedProfile.city || undefined
                    });
                  }}
                  className="p-2 rounded-xl bg-coral-light text-coral hover:bg-coral hover:text-white border border-coral/20 transition-all shadow-2xs hover:scale-105 active:scale-95"
                  title="Start Video Call"
                >
                  <Video className="w-4 h-4" />
                </button>
                <div className="p-2 rounded-xl bg-white border border-borderSoft group-hover:bg-violet group-hover:text-white text-slate-500 shadow-2xs transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="p-12 text-center bg-white rounded-3xl border border-borderSoft">
          <p className="text-4xl mb-3">💌</p>
          <h3 className="text-base font-bold text-ink">No matches yet</h3>
          <p className="text-xs text-slate-600 font-medium max-w-sm mx-auto mt-1 mb-6">
            Swipe right on profiles you like. When they like you back, they will appear here!
          </p>
          <Link
            to="/discover"
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-coral to-violet text-white text-xs font-bold shadow-md hover:scale-105 active:scale-95 transition-all"
          >
            Start Swiping
          </Link>
        </div>
      )}
    </div>
  );
};
