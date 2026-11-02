import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Bell,
  Check,
  ChevronRight,
  Flame,
  Heart,
  MessageCircle,
  PhoneCall,
  Radio,
  Sparkles,
  Volume2,
  VolumeX,
  X,
  Zap
} from 'lucide-react';
import {
  MessagePopupItem,
  NotificationPopupItem,
  PopupItem,
  useNotificationPopup
} from '../context/NotificationPopupContext';

export const NotificationToastContainer: React.FC = () => {
  const {
    popups,
    dismissPopup,
    triggerDemo,
    soundEnabled,
    toggleSound
  } = useNotificationPopup();
  const navigate = useNavigate();
  const [showDemoToolbar, setShowDemoToolbar] = useState(false);

  const handlePopupClick = (item: PopupItem) => {
    dismissPopup(item.id);
    if (item.type === 'MESSAGE') {
      navigate('/messages');
    } else if (item.actionUrl) {
      navigate(item.actionUrl);
    }
  };

  return (
    <>
      {/* ============================================================== */}
      {/* 1. TOP-RIGHT FLOATING POPUPS STACK */}
      {/* ============================================================== */}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-3 w-full max-w-sm sm:max-w-md pointer-events-none px-2 sm:px-0">
        {popups.map((item) => {
          if (item.type === 'MESSAGE') {
            const msg = item as MessagePopupItem;
            return (
              <div
                key={msg.id}
                onClick={() => handlePopupClick(msg)}
                className="pointer-events-auto rounded-3xl bg-white/95 backdrop-blur-xl border-2 border-violet/30 p-4 shadow-2xl hover:shadow-violetGlow hover:scale-102 transition-all cursor-pointer relative overflow-hidden group animate-in slide-in-from-top-4 duration-300"
              >
                {/* Glow bar at top */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-coral via-violet to-peach" />

                <div className="flex items-start gap-3.5">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-violet flex-shrink-0">
                    <img src={msg.senderAvatar} alt={msg.senderName} className="w-full h-full object-cover" />
                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-white animate-pulse" />
                  </div>

                  <div className="flex-1 min-w-0 pr-4">
                    <div className="flex items-center justify-between gap-1">
                      <h4 className="font-display font-black text-sm text-ink truncate">
                        {msg.senderName}
                      </h4>
                      <span className="text-[10px] text-ink-muted font-semibold flex-shrink-0">
                        {msg.timestamp}
                      </span>
                    </div>

                    <p className="text-xs font-medium text-ink mt-1 bg-lavender-light/50 px-3 py-1.5 rounded-xl line-clamp-2 border border-violet/10">
                      "{msg.content}"
                    </p>

                    <div className="flex items-center justify-between mt-2.5">
                      <span className="text-[10px] text-violet font-bold flex items-center gap-1">
                        <MessageCircle className="w-3 h-3 text-coral" />
                        <span>Tap to open chat</span>
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate('/messages');
                          dismissPopup(msg.id);
                        }}
                        className="px-3 py-1 rounded-xl bg-violet text-white text-[11px] font-bold hover:bg-violet-hover transition-colors flex items-center gap-1 shadow-sm"
                      >
                        <span>Reply</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Dismiss Close button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      dismissPopup(msg.id);
                    }}
                    className="p-1 rounded-full text-ink-muted hover:text-ink hover:bg-cloud transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Progress drain bar */}
                <div className="absolute bottom-0 inset-x-0 h-0.5 bg-violet/20">
                  <div className="h-full bg-violet w-full animate-progress" />
                </div>
              </div>
            );
          }

          // NOTIFICATION POPUP
          const notif = item as NotificationPopupItem;
          return (
            <div
              key={notif.id}
              onClick={() => handlePopupClick(notif)}
              className="pointer-events-auto rounded-3xl bg-white/95 backdrop-blur-xl border-2 border-coral/30 p-4 shadow-2xl hover:shadow-coralGlow hover:scale-102 transition-all cursor-pointer relative overflow-hidden group animate-in slide-in-from-top-4 duration-300"
            >
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-coral via-rose to-amber" />

              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-coral to-violet text-white flex items-center justify-center text-xl shadow-md flex-shrink-0">
                  {notif.emoji}
                </div>

                <div className="flex-1 min-w-0 pr-4">
                  <div className="flex items-center justify-between gap-1">
                    <h4 className="font-display font-black text-xs sm:text-sm text-ink truncate">
                      {notif.title}
                    </h4>
                    <span className="text-[10px] text-ink-muted font-semibold flex-shrink-0">
                      {notif.timestamp}
                    </span>
                  </div>

                  <p className="text-xs text-ink-muted mt-1 leading-snug">
                    {notif.body}
                  </p>

                  <div className="flex items-center justify-end mt-2">
                    <span className="text-[11px] font-bold text-coral group-hover:underline flex items-center gap-0.5">
                      <span>View details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    dismissPopup(notif.id);
                  }}
                  className="p-1 rounded-full text-ink-muted hover:text-ink hover:bg-cloud transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* ============================================================== */}
      {/* 2. DEMO CONTROLLER PILL (BOTTOM-LEFT) */}
      {/* ============================================================== */}
      <div className="fixed bottom-5 left-5 z-40">
        <div className="relative">
          {showDemoToolbar && (
            <div className="absolute bottom-12 left-0 mb-2 w-72 rounded-3xl bg-white/95 backdrop-blur-xl border-2 border-violet/30 shadow-2xl p-4 space-y-3 animate-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between border-b border-borderSoft pb-2">
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-amber-500 fill-current" />
                  <span className="text-xs font-black uppercase text-ink">Test Popups & Calls</span>
                </div>
                <button
                  onClick={toggleSound}
                  className={`p-1.5 rounded-lg border text-xs font-semibold ${
                    soundEnabled ? 'bg-violet-light text-violet border-violet/30' : 'bg-cloud text-ink-muted border-borderSoft'
                  }`}
                  title={soundEnabled ? 'Chime sound is active' : 'Sound is muted'}
                >
                  {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                <button
                  onClick={() => triggerDemo('message')}
                  className="p-2.5 rounded-xl bg-violet-light hover:bg-violet text-violet hover:text-white border border-violet/30 transition-all flex items-center gap-1.5 justify-center shadow-2xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Pop Message</span>
                </button>

                <button
                  onClick={() => triggerDemo('match')}
                  className="p-2.5 rounded-xl bg-coral-light hover:bg-coral text-coral hover:text-white border border-coral/30 transition-all flex items-center gap-1.5 justify-center shadow-2xs"
                >
                  <Heart className="w-3.5 h-3.5" />
                  <span>Pop Match</span>
                </button>

                <button
                  onClick={() => triggerDemo('surge')}
                  className="p-2.5 rounded-xl bg-amber-50 hover:bg-amber-500 text-amber-600 hover:text-white border border-amber-300 transition-all flex items-center gap-1.5 justify-center shadow-2xs"
                >
                  <Flame className="w-3.5 h-3.5" />
                  <span>Pop Surge</span>
                </button>

                <button
                  onClick={() => triggerDemo('call')}
                  className="p-2.5 rounded-xl bg-gradient-to-r from-coral to-violet text-white hover:opacity-90 transition-all flex items-center gap-1.5 justify-center shadow-md col-span-2"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Simulate Incoming Video Call</span>
                </button>
              </div>
            </div>
          )}

          <button
            onClick={() => setShowDemoToolbar(!showDemoToolbar)}
            className="px-3.5 py-2 rounded-2xl bg-slate-900/90 hover:bg-slate-900 backdrop-blur-md text-white text-xs font-bold shadow-xl border border-white/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-coral animate-ping" />
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Interactive Popups</span>
          </button>
        </div>
      </div>
    </>
  );
};
