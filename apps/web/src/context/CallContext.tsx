import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

export type CallType = 'AUDIO' | 'VIDEO';
export type CallStatus = 'idle' | 'incoming' | 'calling' | 'connected';
export type VirtualBackground = 'none' | 'blur' | 'sunset' | 'cafe' | 'neon';

export interface CallParticipant {
  id: string;
  name: string;
  avatarUrl: string;
  city?: string;
}

export interface InCallMessage {
  id: string;
  sender: string;
  text: string;
  time: string;
  isMe: boolean;
}

export interface InCallReaction {
  id: string;
  emoji: string;
  x: number;
}

export interface CallSessionState {
  active: boolean;
  type: CallType;
  status: CallStatus;
  duration: number;
  isMuted: boolean;
  isVideoMuted: boolean;
  isSpeakerOn: boolean;
  isScreenSharing: boolean;
  isMinimized: boolean;
  isFrontCamera: boolean;
  virtualBg: VirtualBackground;
  beautyFilter: boolean;
  showInCallChat: boolean;
  participant: CallParticipant;
  messages: InCallMessage[];
  reactions: InCallReaction[];
}

interface CallContextType {
  session: CallSessionState | null;
  startCall: (type: CallType, participant: CallParticipant) => void;
  simulateIncomingCall: (type: CallType, caller?: Partial<CallParticipant>) => void;
  acceptCall: () => void;
  declineCall: () => void;
  endCall: () => void;
  toggleMute: () => void;
  toggleVideo: () => void;
  toggleSpeaker: () => void;
  toggleScreenShare: () => void;
  toggleMinimize: () => void;
  toggleCameraFlip: () => void;
  setVirtualBg: (bg: VirtualBackground) => void;
  toggleBeautyFilter: () => void;
  toggleInCallChat: () => void;
  sendInCallMessage: (text: string) => void;
  sendInCallReaction: (emoji: string) => void;
}

const CallContext = createContext<CallContextType | undefined>(undefined);

const DEFAULT_PARTICIPANT: CallParticipant = {
  id: 'usr_ananya',
  name: 'Ananya Verma',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600',
  city: 'Mumbai (Bandra)'
};

export const CallProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<CallSessionState | null>(null);
  const timerRef = useRef<any>(null);

  // Duration timer when connected
  useEffect(() => {
    if (session && session.status === 'connected') {
      timerRef.current = setInterval(() => {
        setSession((prev) => (prev ? { ...prev, duration: prev.duration + 1 } : null));
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [session?.status]);

  const startCall = (type: CallType, participant: CallParticipant) => {
    setSession({
      active: true,
      type,
      status: 'calling',
      duration: 0,
      isMuted: false,
      isVideoMuted: false,
      isSpeakerOn: true,
      isScreenSharing: false,
      isMinimized: false,
      isFrontCamera: true,
      virtualBg: 'none',
      beautyFilter: false,
      showInCallChat: false,
      participant,
      messages: [],
      reactions: []
    });

    // Simulate answer after 2.5s
    setTimeout(() => {
      setSession((prev) => {
        if (!prev || prev.status !== 'calling') return prev;
        return {
          ...prev,
          status: 'connected',
          messages: [
            {
              id: 'm1',
              sender: prev.participant.name,
              text: 'Hey there! Can you hear me clearly? ✨',
              time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
              isMe: false
            }
          ]
        };
      });
    }, 2400);
  };

  const simulateIncomingCall = (type: CallType, caller?: Partial<CallParticipant>) => {
    const finalCaller: CallParticipant = {
      ...DEFAULT_PARTICIPANT,
      ...caller
    };

    setSession({
      active: true,
      type,
      status: 'incoming',
      duration: 0,
      isMuted: false,
      isVideoMuted: false,
      isSpeakerOn: true,
      isScreenSharing: false,
      isMinimized: false,
      isFrontCamera: true,
      virtualBg: 'none',
      beautyFilter: false,
      showInCallChat: false,
      participant: finalCaller,
      messages: [],
      reactions: []
    });
  };

  const acceptCall = () => {
    setSession((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        status: 'connected',
        messages: [
          {
            id: 'm1',
            sender: prev.participant.name,
            text: `Hi! Thanks for picking up my ${prev.type === 'VIDEO' ? 'video' : 'voice'} call 💖`,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isMe: false
          }
        ]
      };
    });
  };

  const declineCall = () => {
    setSession(null);
  };

  const endCall = () => {
    setSession(null);
  };

  const toggleMute = () => {
    setSession((prev) => (prev ? { ...prev, isMuted: !prev.isMuted } : null));
  };

  const toggleVideo = () => {
    setSession((prev) => (prev ? { ...prev, isVideoMuted: !prev.isVideoMuted } : null));
  };

  const toggleSpeaker = () => {
    setSession((prev) => (prev ? { ...prev, isSpeakerOn: !prev.isSpeakerOn } : null));
  };

  const toggleScreenShare = () => {
    setSession((prev) => (prev ? { ...prev, isScreenSharing: !prev.isScreenSharing } : null));
  };

  const toggleMinimize = () => {
    setSession((prev) => (prev ? { ...prev, isMinimized: !prev.isMinimized } : null));
  };

  const toggleCameraFlip = () => {
    setSession((prev) => (prev ? { ...prev, isFrontCamera: !prev.isFrontCamera } : null));
  };

  const setVirtualBg = (bg: VirtualBackground) => {
    setSession((prev) => (prev ? { ...prev, virtualBg: bg } : null));
  };

  const toggleBeautyFilter = () => {
    setSession((prev) => (prev ? { ...prev, beautyFilter: !prev.beautyFilter } : null));
  };

  const toggleInCallChat = () => {
    setSession((prev) => (prev ? { ...prev, showInCallChat: !prev.showInCallChat } : null));
  };

  const sendInCallMessage = (text: string) => {
    if (!text.trim()) return;
    const newMsg: InCallMessage = {
      id: `call_msg_${Date.now()}`,
      sender: 'You',
      text: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true
    };
    setSession((prev) => (prev ? { ...prev, messages: [...prev.messages, newMsg] } : null));

    // Simulate reply
    setTimeout(() => {
      setSession((prev) => {
        if (!prev || prev.status !== 'connected') return prev;
        const replyMsg: InCallMessage = {
          id: `call_msg_reply_${Date.now()}`,
          sender: prev.participant.name,
          text: 'Haha totally agree with that! ☕',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isMe: false
        };
        return { ...prev, messages: [...prev.messages, replyMsg] };
      });
    }, 1800);
  };

  const sendInCallReaction = (emoji: string) => {
    const newReaction: InCallReaction = {
      id: `react_${Date.now()}_${Math.random()}`,
      emoji,
      x: 20 + Math.random() * 60
    };
    setSession((prev) => (prev ? { ...prev, reactions: [...prev.reactions, newReaction] } : null));

    // Clear reaction after 2.5s
    setTimeout(() => {
      setSession((prev) => {
        if (!prev) return null;
        return {
          ...prev,
          reactions: prev.reactions.filter((r) => r.id !== newReaction.id)
        };
      });
    }, 2500);
  };

  return (
    <CallContext.Provider
      value={{
        session,
        startCall,
        simulateIncomingCall,
        acceptCall,
        declineCall,
        endCall,
        toggleMute,
        toggleVideo,
        toggleSpeaker,
        toggleScreenShare,
        toggleMinimize,
        toggleCameraFlip,
        setVirtualBg,
        toggleBeautyFilter,
        toggleInCallChat,
        sendInCallMessage,
        sendInCallReaction
      }}
    >
      {children}
    </CallContext.Provider>
  );
};

export const useCall = () => {
  const context = useContext(CallContext);
  if (!context) {
    throw new Error('useCall must be used within a CallProvider');
  }
  return context;
};
