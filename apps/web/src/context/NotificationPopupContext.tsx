import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCall } from './CallContext';

export interface MessagePopupItem {
  id: string;
  type: 'MESSAGE';
  senderId: string;
  senderName: string;
  senderAvatar: string;
  content: string;
  conversationId?: string;
  timestamp: string;
}

export interface NotificationPopupItem {
  id: string;
  type: 'NOTIFICATION';
  title: string;
  body: string;
  category: 'MATCH' | 'SURGE' | 'EVENT' | 'LIKE' | 'SAFETY' | 'ROOM';
  emoji: string;
  actionUrl?: string;
  timestamp: string;
}

export type PopupItem = MessagePopupItem | NotificationPopupItem;

interface NotificationPopupContextType {
  popups: PopupItem[];
  popMessage: (msg: Omit<MessagePopupItem, 'id' | 'type' | 'timestamp'>) => void;
  popNotification: (notif: Omit<NotificationPopupItem, 'id' | 'type' | 'timestamp'>) => void;
  dismissPopup: (id: string) => void;
  clearAllPopups: () => void;
  triggerDemo: (kind: 'message' | 'match' | 'surge' | 'call') => void;
  soundEnabled: boolean;
  toggleSound: () => void;
}

const NotificationPopupContext = createContext<NotificationPopupContextType | undefined>(undefined);

// Web Audio API harmonic sound generator (zero external mp3 dependencies)
const playChime = (kind: 'message' | 'notification' | 'ring') => {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    if (kind === 'message') {
      // Warm pleasant double ding (D5 -> A5)
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.35);
    } else if (kind === 'notification') {
      // Celebratory harp bell (E5 -> B5)
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(659.25, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(987.77, ctx.currentTime + 0.18);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.45);
    }
  } catch {
    // Audio context was blocked or not activated yet
  }
};

const SAMPLE_DEMO_MESSAGES = [
  {
    senderName: 'Ananya Verma',
    senderAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300',
    content: 'Are you free for filter coffee in Bandra this weekend? ☕✨'
  },
  {
    senderName: 'Diya Sen',
    senderAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300',
    content: 'Loved your music recommendation! Listening to that indie EP right now 🎸'
  },
  {
    senderName: 'Priya Patel',
    senderAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300',
    content: 'Hey! Saw you are nearby Indiranagar too. Let’s connect!'
  }
];

export const NotificationPopupProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [popups, setPopups] = useState<PopupItem[]>([]);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const { simulateIncomingCall } = useCall();

  const popMessage = (msg: Omit<MessagePopupItem, 'id' | 'type' | 'timestamp'>) => {
    const item: MessagePopupItem = {
      id: `pop_msg_${Date.now()}_${Math.random()}`,
      type: 'MESSAGE',
      ...msg,
      timestamp: 'Just now'
    };

    setPopups((prev) => [item, ...prev.slice(0, 3)]); // Keep max 4 visible at once

    if (soundEnabled) {
      playChime('message');
    }

    // Auto dismiss after 6 seconds
    setTimeout(() => {
      dismissPopup(item.id);
    }, 6000);
  };

  const popNotification = (notif: Omit<NotificationPopupItem, 'id' | 'type' | 'timestamp'>) => {
    const item: NotificationPopupItem = {
      id: `pop_notif_${Date.now()}_${Math.random()}`,
      type: 'NOTIFICATION',
      ...notif,
      timestamp: 'Just now'
    };

    setPopups((prev) => [item, ...prev.slice(0, 3)]);

    if (soundEnabled) {
      playChime('notification');
    }

    setTimeout(() => {
      dismissPopup(item.id);
    }, 6500);
  };

  const dismissPopup = (id: string) => {
    setPopups((prev) => prev.filter((p) => p.id !== id));
  };

  const clearAllPopups = () => {
    setPopups([]);
  };

  const toggleSound = () => {
    setSoundEnabled((prev) => !prev);
  };

  const triggerDemo = (kind: 'message' | 'match' | 'surge' | 'call') => {
    if (kind === 'message') {
      const sample = SAMPLE_DEMO_MESSAGES[Math.floor(Math.random() * SAMPLE_DEMO_MESSAGES.length)];
      popMessage({
        senderId: 'usr_demo',
        senderName: sample.senderName,
        senderAvatar: sample.senderAvatar,
        content: sample.content,
        conversationId: 'conv_demo'
      });
    } else if (kind === 'match') {
      popNotification({
        title: 'New Mutual Match! 💖',
        body: 'You and Rhea Kapoor matched! Tap to say hello before 24 hours expire.',
        category: 'MATCH',
        emoji: '💖',
        actionUrl: '/messages'
      });
    } else if (kind === 'surge') {
      popNotification({
        title: '⚡ Activity Surge in Bandra West!',
        body: '420+ active verified members nearby right now. Boost your radar profile!',
        category: 'SURGE',
        emoji: '⚡',
        actionUrl: '/nearby'
      });
    } else if (kind === 'call') {
      simulateIncomingCall('VIDEO', {
        name: 'Ananya Verma',
        avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600',
        city: 'Mumbai (Bandra West)'
      });
    }
  };

  // Initial welcome pop after 2 seconds to showcase notifications popping!
  useEffect(() => {
    const welcomeTimer = setTimeout(() => {
      popNotification({
        title: '✨ Welcome to PairUp!',
        body: 'Real-time popups & encrypted HD calling are now fully active.',
        category: 'EVENT',
        emoji: '✨',
        actionUrl: '/discover'
      });
    }, 1800);

    return () => clearTimeout(welcomeTimer);
  }, []);

  return (
    <NotificationPopupContext.Provider
      value={{
        popups,
        popMessage,
        popNotification,
        dismissPopup,
        clearAllPopups,
        triggerDemo,
        soundEnabled,
        toggleSound
      }}
    >
      {children}
    </NotificationPopupContext.Provider>
  );
};

export const useNotificationPopup = () => {
  const context = useContext(NotificationPopupContext);
  if (!context) {
    throw new Error('useNotificationPopup must be used within a NotificationPopupProvider');
  }
  return context;
};
