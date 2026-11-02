import React, { useEffect, useRef, useState } from 'react';
import {
  Camera,
  Check,
  ChevronDown,
  Expand,
  Image,
  Maximize2,
  Mic,
  MicOff,
  Minimize2,
  Monitor,
  MoreVertical,
  Phone,
  PhoneCall,
  PhoneIncoming,
  PhoneOff,
  RefreshCw,
  Send,
  Shield,
  Smile,
  Sparkles,
  Volume2,
  VolumeX,
  Video,
  VideoOff,
  X,
  Zap
} from 'lucide-react';
import { useCall, VirtualBackground } from '../context/CallContext';

export const CallModal: React.FC = () => {
  const {
    session,
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
  } = useCall();

  const [chatInput, setChatInput] = useState('');
  const [showBgMenu, setShowBgMenu] = useState(false);
  const [audioMeter, setAudioMeter] = useState(45);
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const localStreamRef = useRef<MediaStream | null>(null);

  // Format seconds to mm:ss
  const formatDuration = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const remaining = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${remaining.toString().padStart(2, '0')}`;
  };

  // Simulate audio input meter fluctuations
  useEffect(() => {
    if (session?.status === 'connected' && !session.isMuted) {
      const interval = setInterval(() => {
        setAudioMeter(30 + Math.floor(Math.random() * 55));
      }, 200);
      return () => clearInterval(interval);
    }
  }, [session?.status, session?.isMuted]);

  // Request actual camera if video call is active, with graceful fallback
  useEffect(() => {
    if (session?.active && session.type === 'VIDEO' && !session.isVideoMuted && !session.isMinimized) {
      navigator.mediaDevices?.getUserMedia?.({ video: true, audio: false })
        .then((stream) => {
          localStreamRef.current = stream;
          if (localVideoRef.current) {
            localVideoRef.current.srcObject = stream;
          }
        })
        .catch(() => {
          // Camera permission denied or not found - gracefully fallback to animated simulation
          localStreamRef.current = null;
        });
    } else {
      if (localStreamRef.current) {
        localStreamRef.current.getTracks().forEach((t) => t.stop());
        localStreamRef.current = null;
      }
    }

    return () => {
      if (localStreamRef.current) {
        localStreamRef.current.getTracks().forEach((t) => t.stop());
      }
    };
  }, [session?.active, session?.type, session?.isVideoMuted, session?.isMinimized]);

  if (!session || !session.active) return null;

  // 1. INCOMING CALL POPUP BANNER / OVERLAY
  if (session.status === 'incoming') {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
        <div className="w-full max-w-sm rounded-3xl bg-slate-900 border border-white/15 p-7 text-center shadow-2xl relative overflow-hidden text-white">
          {/* Ambient glowing wave rings */}
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-coral/30 to-transparent pointer-events-none" />

          {/* Ringing Avatar with concentric ping rings */}
          <div className="relative my-6 mx-auto w-28 h-28 flex items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-coral/30 ringing-pulse" />
            <span className="absolute -inset-4 rounded-full bg-violet/20 animate-ping" />
            <div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-coral shadow-2xl z-10">
              <img
                src={session.participant.avatarUrl}
                alt={session.participant.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 z-20 w-8 h-8 rounded-full bg-coral flex items-center justify-center text-white ring-2 ring-slate-900">
              {session.type === 'VIDEO' ? <Video className="w-4 h-4" /> : <Phone className="w-4 h-4" />}
            </div>
          </div>

          <h3 className="text-xl font-display font-extrabold text-white">
            {session.participant.name}
          </h3>
          <p className="text-xs text-coral-light font-bold mt-1 flex items-center justify-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-coral animate-ping" />
            <span>Incoming {session.type === 'VIDEO' ? 'HD Video Call...' : 'Voice Call...'}</span>
          </p>
          <p className="text-[11px] text-slate-400 mt-1">
            {session.participant.city || 'Verified Match on PairUp'}
          </p>

          {/* Action Accept / Decline Buttons */}
          <div className="flex items-center justify-center gap-6 mt-8">
            {/* Decline Button */}
            <div className="flex flex-col items-center gap-1.5">
              <button
                onClick={declineCall}
                className="w-14 h-14 rounded-full bg-rose-600 hover:bg-rose-700 text-white flex items-center justify-center shadow-lg shadow-rose-600/40 hover:scale-110 active:scale-95 transition-all"
                title="Decline Call"
              >
                <PhoneOff className="w-6 h-6" />
              </button>
              <span className="text-[11px] font-semibold text-slate-300">Decline</span>
            </div>

            {/* Accept Button */}
            <div className="flex flex-col items-center gap-1.5">
              <button
                onClick={acceptCall}
                className="w-16 h-16 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl shadow-emerald-500/50 hover:scale-110 active:scale-95 transition-all ringing-pulse"
                title="Accept Call"
              >
                {session.type === 'VIDEO' ? <Video className="w-7 h-7" /> : <PhoneCall className="w-7 h-7" />}
              </button>
              <span className="text-xs font-bold text-emerald-400">Accept {session.type === 'VIDEO' ? 'Video' : 'Voice'}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. MINIMIZED FLOATING PiP WIDGET
  if (session.isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5">
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-white/20 shadow-2xl text-white">
          <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-coral flex-shrink-0">
            <img src={session.participant.avatarUrl} alt="" className="w-full h-full object-cover" />
            <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-slate-900" />
          </div>

          <div className="min-w-0 pr-2">
            <p className="text-xs font-bold truncate">{session.participant.name}</p>
            <p className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{formatDuration(session.duration)}</span>
              {session.isMuted && <span className="text-rose-400 ml-1 font-bold">(Muted)</span>}
            </p>
          </div>

          <div className="flex items-center gap-1.5 pl-2 border-l border-white/10">
            <button
              onClick={toggleMinimize}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Expand to Fullscreen"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
            <button
              onClick={endCall}
              className="p-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white transition-colors"
              title="End Call"
            >
              <PhoneOff className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 3. FULL IMMERSIVE CALL STAGE (VOICE OR VIDEO)
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/90 backdrop-blur-xl animate-in fade-in">
      <div className="w-full max-w-4xl h-[92vh] max-h-[820px] rounded-3xl bg-slate-900 border border-white/15 shadow-2xl flex flex-col relative overflow-hidden text-white">
        
        {/* Floating In-Call Emoji Reaction Bursts */}
        <div className="absolute inset-0 pointer-events-none z-40 overflow-hidden">
          {session.reactions.map((r) => (
            <div
              key={r.id}
              style={{ left: `${r.x}%` }}
              className="absolute bottom-24 text-3xl sm:text-4xl animate-in fade-in slide-in-from-bottom duration-1000 select-none"
            >
              {r.emoji}
            </div>
          ))}
        </div>

        {/* TOP BAR HEADER */}
        <div className="px-5 py-3.5 border-b border-white/10 flex items-center justify-between z-30 bg-slate-900/60 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-coral/50">
              <img src={session.participant.avatarUrl} alt="" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold leading-tight">{session.participant.name}</h3>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-extrabold flex items-center gap-1">
                  <Shield className="w-2.5 h-2.5" />
                  <span>E2EE HD</span>
                </span>
              </div>
              <p className="text-[11px] text-slate-300 flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>
                  {session.status === 'calling'
                    ? 'Calling partner...'
                    : `Connected • ${formatDuration(session.duration)}`}
                </span>
                <span className="text-slate-400">• 24ms ping</span>
              </p>
            </div>
          </div>

          {/* Top Right Utilities */}
          <div className="flex items-center gap-2">
            {/* Virtual Background selector (video mode) */}
            {session.type === 'VIDEO' && (
              <div className="relative">
                <button
                  onClick={() => setShowBgMenu(!showBgMenu)}
                  className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    session.virtualBg !== 'none'
                      ? 'bg-violet-600 border-violet-400 text-white'
                      : 'bg-white/10 hover:bg-white/20 border-white/10 text-slate-200'
                  }`}
                  title="Virtual Backdrop"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span className="hidden sm:inline">Background</span>
                </button>

                {showBgMenu && (
                  <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-slate-900 border border-white/20 shadow-2xl p-2 z-50">
                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 px-2 py-1">
                      Virtual Backdrop
                    </p>
                    {(['none', 'blur', 'sunset', 'cafe', 'neon'] as VirtualBackground[]).map((bg) => (
                      <button
                        key={bg}
                        onClick={() => {
                          setVirtualBg(bg);
                          setShowBgMenu(false);
                        }}
                        className={`w-full px-3 py-1.5 rounded-xl text-left text-xs font-semibold flex items-center justify-between capitalize transition-colors ${
                          session.virtualBg === bg ? 'bg-violet-600 text-white' : 'text-slate-300 hover:bg-white/10'
                        }`}
                      >
                        <span>{bg === 'none' ? 'Natural (None)' : bg === 'blur' ? 'Studio Bokeh Blur' : bg === 'sunset' ? 'Sunset Cafe' : bg === 'cafe' ? 'Bandra Lounge' : 'Cyberpunk Glow'}</span>
                        {session.virtualBg === bg && <Check className="w-3.5 h-3.5" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Beauty Filter Toggle */}
            {session.type === 'VIDEO' && (
              <button
                onClick={toggleBeautyFilter}
                className={`p-2 rounded-xl border text-xs font-semibold transition-all ${
                  session.beautyFilter
                    ? 'bg-rose-500/30 border-rose-400 text-rose-300'
                    : 'bg-white/10 hover:bg-white/20 border-white/10 text-slate-300'
                }`}
                title="Studio Glow Filter"
              >
                <Smile className="w-4 h-4" />
              </button>
            )}

            {/* Minimize to PiP */}
            <button
              onClick={toggleMinimize}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-slate-300 hover:text-white transition-colors"
              title="Minimize to Floating PiP"
            >
              <Minimize2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* MAIN STAGE BODY */}
        <div className="flex-1 relative flex min-h-0 bg-slate-950">
          
          {/* VIDEO OR AUDIO CANVAS */}
          <div className="flex-1 relative flex items-center justify-center overflow-hidden">
            
            {session.type === 'VIDEO' ? (
              /* ================== VIDEO CALL FEED ================== */
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                {/* Simulated Remote Partner Video */}
                <div
                  className={`w-full h-full relative transition-all duration-300 ${
                    session.virtualBg === 'blur'
                      ? 'backdrop-blur-xl'
                      : session.virtualBg === 'sunset'
                      ? 'bg-gradient-to-tr from-amber-900/60 via-rose-900/40 to-slate-950'
                      : session.virtualBg === 'cafe'
                      ? 'bg-gradient-to-tr from-emerald-950/60 via-slate-900 to-slate-950'
                      : session.virtualBg === 'neon'
                      ? 'bg-gradient-to-tr from-violet-950/70 via-fuchsia-950/40 to-cyan-950/50'
                      : 'bg-slate-950'
                  } ${session.beautyFilter ? 'brightness-105 contrast-95 saturate-110' : ''}`}
                >
                  <img
                    src={session.participant.avatarUrl}
                    alt={session.participant.name}
                    className="w-full h-full object-cover opacity-90 scale-102"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30" />

                  {/* Remote Participant Live Badge */}
                  <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/15">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-white">{session.participant.name}</span>
                    <span className="text-[10px] text-slate-300 px-1.5 py-0.5 rounded bg-white/10 font-mono">
                      1080p 60fps
                    </span>
                  </div>

                  {/* Local Self-View PiP (Draggable corner) */}
                  <div className="absolute top-4 right-4 z-20 w-36 sm:w-44 h-48 sm:h-56 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-slate-900 flex flex-col group">
                    {session.isVideoMuted ? (
                      <div className="flex-1 flex flex-col items-center justify-center p-3 text-center bg-slate-900 text-slate-400">
                        <VideoOff className="w-6 h-6 text-rose-400 mb-1" />
                        <span className="text-[10px] font-semibold">Your Camera is Off</span>
                      </div>
                    ) : (
                      <div className="relative w-full h-full bg-slate-800">
                        {/* Real video if stream exists, else simulated self camera preview */}
                        <video
                          ref={localVideoRef}
                          autoPlay
                          playsInline
                          muted
                          className="w-full h-full object-cover transform -scale-x-100"
                        />
                        {!localStreamRef.current && (
                          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-800">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-coral to-violet p-0.5 shadow-lg">
                              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-sm font-bold text-white">
                                You 📸
                              </div>
                            </div>
                            <span className="text-[10px] text-slate-300 mt-2 font-medium">Self View</span>
                          </div>
                        )}
                        <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-slate-950/70 text-[9px] font-bold text-white backdrop-blur-sm">
                          You {session.isFrontCamera ? '(Front)' : '(Back)'}
                        </div>
                        <button
                          onClick={toggleCameraFlip}
                          className="absolute top-2 right-2 p-1.5 rounded-lg bg-slate-950/60 hover:bg-slate-950 text-white backdrop-blur-sm transition-colors opacity-0 group-hover:opacity-100"
                          title="Flip Camera"
                        >
                          <RefreshCw className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              /* ================== AUDIO CALL STAGE ================== */
              <div className="flex flex-col items-center justify-center p-6 text-center z-10 w-full max-w-md">
                {/* Acoustic Radar Rings & Avatar */}
                <div className="relative my-8">
                  <span className="absolute -inset-6 rounded-full bg-violet-600/20 animate-ping" />
                  <span className="absolute -inset-12 rounded-full bg-coral/15 animate-pulse" />
                  <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-coral/70 shadow-2xl z-10">
                    <img src={session.participant.avatarUrl} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-2 right-1/2 translate-x-1/2 px-3 py-1 rounded-full bg-slate-900 border border-white/20 text-[10px] font-black text-emerald-400 flex items-center gap-1 shadow-md z-20">
                    <Mic className="w-3 h-3 text-emerald-400" />
                    <span>HD Voice</span>
                  </div>
                </div>

                <h3 className="text-2xl font-display font-black text-white">{session.participant.name}</h3>
                <p className="text-xs text-slate-300 mt-1">{session.participant.city || 'PairUp Verified Member'}</p>

                {/* Animated Spectrum Equalizer */}
                <div className="flex items-center gap-1.5 h-12 my-6">
                  {[20, 45, 75, 35, 90, 60, 40, 85, 95, 50, 70, 30, 80, 65, 45, 90].map((h, i) => (
                    <div
                      key={i}
                      className="w-1.5 bg-gradient-to-t from-violet-500 to-coral rounded-full transition-all duration-150"
                      style={{
                        height: session.status === 'connected' && !session.isMuted
                          ? `${Math.max(12, Math.sin((audioMeter + i * 20) * 0.1) * 100)}%`
                          : '8px'
                      }}
                    />
                  ))}
                </div>

                <p className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full">
                  {session.status === 'calling' ? 'Ringing...' : `Active Call • ${formatDuration(session.duration)}`}
                </p>
              </div>
            )}
          </div>

          {/* SLIDE-OVER IN-CALL MINI CHAT */}
          {session.showInCallChat && (
            <div className="w-80 border-l border-white/10 bg-slate-900/95 backdrop-blur-xl flex flex-col z-30 animate-in slide-in-from-right duration-200">
              <div className="p-3 border-b border-white/10 flex items-center justify-between">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Smile className="w-4 h-4 text-coral" />
                  <span>In-Call Live Chat</span>
                </span>
                <button
                  onClick={toggleInCallChat}
                  className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Messages List */}
              <div className="flex-1 p-3 overflow-y-auto space-y-2.5 text-xs">
                {session.messages.map((m) => (
                  <div key={m.id} className={`flex flex-col ${m.isMe ? 'items-end' : 'items-start'}`}>
                    <div
                      className={`max-w-[85%] px-3 py-2 rounded-2xl ${
                        m.isMe ? 'bg-violet-600 text-white' : 'bg-slate-800 text-slate-100 border border-white/10'
                      }`}
                    >
                      <p>{m.text}</p>
                    </div>
                    <span className="text-[9px] text-slate-400 mt-0.5 px-1">{m.time}</span>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendInCallMessage(chatInput);
                  setChatInput('');
                }}
                className="p-2.5 border-t border-white/10 flex items-center gap-1.5"
              >
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Type in-call message..."
                  className="flex-1 px-3 py-2 rounded-xl bg-white/10 border border-white/15 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-violet-500"
                />
                <button
                  type="submit"
                  disabled={!chatInput.trim()}
                  className="p-2 rounded-xl bg-violet-600 hover:bg-violet-700 disabled:opacity-40 text-white transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          )}
        </div>

        {/* BOTTOM CALL CONTROLS FLOATING TOOLBAR */}
        <div className="px-4 py-4 border-t border-white/10 bg-slate-900/90 backdrop-blur-md flex items-center justify-between z-30 flex-wrap gap-2">
          
          {/* Reaction Quick Burst Buttons */}
          <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2 py-1.5 rounded-2xl">
            {['💖', '👏', '🔥', '🎉', '☕'].map((emoji) => (
              <button
                key={emoji}
                onClick={() => sendInCallReaction(emoji)}
                className="text-base sm:text-lg hover:scale-130 active:scale-95 transition-transform px-1"
                title={`Send ${emoji}`}
              >
                {emoji}
              </button>
            ))}
          </div>

          {/* Primary In-Call Hardware Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Mic Button */}
            <button
              onClick={toggleMute}
              className={`p-3.5 rounded-full transition-all shadow-md ${
                session.isMuted
                  ? 'bg-rose-600 hover:bg-rose-700 text-white'
                  : 'bg-white/15 hover:bg-white/25 text-white'
              }`}
              title={session.isMuted ? 'Unmute Microphone' : 'Mute Microphone'}
            >
              {session.isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </button>

            {/* Video Camera Toggle (Video Call Only) */}
            {session.type === 'VIDEO' && (
              <button
                onClick={toggleVideo}
                className={`p-3.5 rounded-full transition-all shadow-md ${
                  session.isVideoMuted
                    ? 'bg-rose-600 hover:bg-rose-700 text-white'
                    : 'bg-white/15 hover:bg-white/25 text-white'
                }`}
                title={session.isVideoMuted ? 'Start Camera' : 'Stop Camera'}
              >
                {session.isVideoMuted ? <VideoOff className="w-5 h-5" /> : <Video className="w-5 h-5" />}
              </button>
            )}

            {/* Screen Share (Video Call Only) */}
            {session.type === 'VIDEO' && (
              <button
                onClick={toggleScreenShare}
                className={`p-3.5 rounded-full transition-all shadow-md ${
                  session.isScreenSharing
                    ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
                    : 'bg-white/15 hover:bg-white/25 text-white'
                }`}
                title={session.isScreenSharing ? 'Stop Screen Sharing' : 'Share Screen'}
              >
                <Monitor className="w-5 h-5" />
              </button>
            )}

            {/* Speaker Toggle */}
            <button
              onClick={toggleSpeaker}
              className={`p-3.5 rounded-full transition-all shadow-md ${
                session.isSpeakerOn ? 'bg-white/15 hover:bg-white/25 text-white' : 'bg-slate-800 text-slate-400'
              }`}
              title={session.isSpeakerOn ? 'Speaker On' : 'Speaker Off'}
            >
              {session.isSpeakerOn ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
            </button>

            {/* In-Call Chat Button */}
            <button
              onClick={toggleInCallChat}
              className={`p-3.5 rounded-full transition-all shadow-md ${
                session.showInCallChat
                  ? 'bg-violet-600 text-white'
                  : 'bg-white/15 hover:bg-white/25 text-white'
              }`}
              title="Toggle In-Call Chat"
            >
              <Smile className="w-5 h-5" />
            </button>

            {/* End Call Button */}
            <button
              onClick={endCall}
              className="px-6 py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white shadow-xl shadow-rose-600/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 font-bold text-xs"
              title="End Call"
            >
              <PhoneOff className="w-5 h-5" />
              <span className="hidden sm:inline">End Call</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
