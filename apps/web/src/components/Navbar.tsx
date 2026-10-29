import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Bell,
  Heart,
  MessageCircle,
  Shield,
  Sparkles
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { NotificationDrawer } from './NotificationDrawer';

export const Navbar: React.FC = () => {
  const { user, profile, logout } = useAuth();
  const navigate = useNavigate();

  const [showNotificationCenter, setShowNotificationCenter] = useState(false);
  const [unreadCount, setUnreadCount] = useState(2);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-borderSoft px-4 lg:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link to={user ? '/home' : '/'} className="flex items-center gap-2.5 group">
          <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-coral via-violet to-peach flex items-center justify-center text-white shadow-md shadow-coral/25 group-hover:scale-110 active:scale-95 transition-all">
            <Heart className="w-5 h-5 fill-white animate-pulse" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-peach opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-coral"></span>
            </span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-2xl font-display font-extrabold tracking-tight bg-gradient-to-r from-coral via-violet to-peach bg-clip-text text-transparent">
                PairUp
              </span>
              <span className="text-base select-none animate-bounce">✨</span>
            </div>
            <p className="text-[10px] text-ink-muted -mt-0.5 tracking-wide font-semibold hidden sm:block">
              Discover • Connect • Belong
            </p>
          </div>
        </Link>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <Link
                to="/discover"
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold bg-violet-light text-violet hover:bg-violet hover:text-white transition-all shadow-sm"
              >
                <Sparkles className="w-4 h-4" />
                <span>Swipe Deck</span>
              </Link>

              {/* Notification Center Bell Icon */}
              <div className="relative">
                <button
                  onClick={() => setShowNotificationCenter(true)}
                  className="p-2.5 rounded-xl hover:bg-cloud text-ink-muted hover:text-ink transition-colors relative"
                  title="Notifications & Activity"
                >
                  <Bell className="w-5 h-5" />
                  {unreadCount > 0 && (
                    <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-coral text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white animate-pulse">
                      {unreadCount}
                    </span>
                  )}
                </button>

                <NotificationDrawer
                  isOpen={showNotificationCenter}
                  onClose={() => setShowNotificationCenter(false)}
                  onUnreadCountChange={setUnreadCount}
                />
              </div>

              {/* Messages Link */}
              <Link
                to="/messages"
                className="p-2.5 rounded-xl hover:bg-muted text-ink-muted hover:text-ink transition-colors relative"
                title="Messages"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-coral ring-2 ring-white"></span>
              </Link>

              <div className="flex items-center gap-3 pl-2 border-l border-borderSoft">
                <Link to="/profile" className="flex items-center gap-2 group">
                  <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-violet/20 group-hover:ring-violet transition-all">
                    {profile?.photos?.[0]?.url ? (
                      <img
                        src={profile.photos[0].url}
                        alt={profile.displayName}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-lavender flex items-center justify-center text-violet font-bold text-sm">
                        {profile?.displayName?.[0] || 'U'}
                      </div>
                    )}
                  </div>
                  <span className="text-sm font-semibold text-ink hidden md:inline group-hover:text-violet transition-colors">
                    {profile?.displayName || 'Profile'}
                  </span>
                </Link>

                <button
                  onClick={logout}
                  className="text-xs font-medium text-ink-muted hover:text-danger-red px-2 py-1 rounded-lg hover:bg-dangerRedLight/30 transition-colors"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                to="/safety"
                className="hidden sm:flex items-center gap-1 text-sm font-medium text-ink-muted hover:text-ink transition-colors mr-2"
              >
                <Shield className="w-4 h-4 text-emerald" />
                <span>Safety First</span>
              </Link>
              <Link
                to="/auth"
                className="px-4 py-2 rounded-xl text-sm font-semibold text-ink hover:text-violet transition-colors"
              >
                Log In
              </Link>
              <Link
                to="/auth?mode=signup"
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-coral to-violet shadow-md shadow-coral/25 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Join PairUp
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
