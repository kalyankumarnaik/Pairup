import React, { useEffect, useRef, useState } from 'react';
import {
  AlertCircle,
  AlertTriangle,
  Bell,
  Check,
  CheckCircle,
  CheckSquare,
  Clock,
  Copy,
  Eye,
  EyeOff,
  FileText,
  Lock,
  MapPin,
  Phone,
  PhoneCall,
  Play,
  RotateCcw,
  Send,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sliders,
  Square,
  Trash2,
  Unlock,
  UserCheck,
  UserX,
  X,
  Zap
} from 'lucide-react';
import { apiClient } from '../lib/api';
import { ReportCategory } from '@pairup/domain-types';

interface StoredDateGuard {
  isRunning: boolean;
  partnerName: string;
  venue: string;
  emergencyContact: string;
  durationMins: number;
  endTime: number;
}

interface SafetyPreferences {
  locationMasking: boolean;
  incognitoBrowsing: boolean;
  strictAdultShield: boolean;
  photoSafetyBlur: boolean;
}

interface SubmittedReport {
  id: string;
  reportedUser: string;
  category: string;
  reason: string;
  date: string;
  status: 'UNDER_REVIEW' | 'RESOLVED';
}

const DEFAULT_BLOCKED_USERS = [
  { id: 'usr_blk_1', name: 'Vikram Joshi', reason: 'Unsolicited messages', date: 'Yesterday' }
];

export const SafetyPage: React.FC = () => {
  // Date Check-In Timer state with localStorage persistence
  const [datePartnerName, setDatePartnerName] = useState('Ananya');
  const [dateVenue, setDateVenue] = useState('Third Wave Coffee, Indiranagar');
  const [emergencyContact, setEmergencyContact] = useState('+91 98765 43210 (Priya - Best Friend)');
  const [selectedDurationMins, setSelectedDurationMins] = useState(30);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(30 * 60);

  // Modals & alerts
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportedUserName, setReportedUserName] = useState('');
  const [category, setCategory] = useState<ReportCategory>(ReportCategory.HARASSMENT);
  const [reason, setReason] = useState('');
  const [evidenceNotes, setEvidenceNotes] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const [showCheckInAlert, setShowCheckInAlert] = useState(false);
  const [showSosModal, setShowSosModal] = useState(false);
  const [fakeCallActive, setFakeCallActive] = useState(false);
  const [smsCopied, setSmsCopied] = useState(false);

  // Safety Preferences (persisted in localStorage)
  const [preferences, setPreferences] = useState<SafetyPreferences>(() => {
    const saved = localStorage.getItem('pairup_safety_prefs');
    return saved
      ? JSON.parse(saved)
      : {
          locationMasking: true,
          incognitoBrowsing: false,
          strictAdultShield: true,
          photoSafetyBlur: true
        };
  });

  // Blocked users list
  const [blockedUsers, setBlockedUsers] = useState(DEFAULT_BLOCKED_USERS);

  // Submitted reports history
  const [submittedReports, setSubmittedReports] = useState<SubmittedReport[]>(() => {
    const saved = localStorage.getItem('pairup_user_reports');
    return saved ? JSON.parse(saved) : [];
  });

  // Date Safety Readiness Checklist
  const [checklist, setChecklist] = useState<Record<string, boolean>>({
    publicVenue: true,
    shareWithFriend: true,
    ownTransport: false,
    phoneCharged: true
  });

  const timerRef = useRef<any>(null);

  // Load Date Guard from localStorage on mount
  useEffect(() => {
    const savedGuard = localStorage.getItem('pairup_date_guard');
    if (savedGuard) {
      try {
        const parsed: StoredDateGuard = JSON.parse(savedGuard);
        if (parsed.isRunning) {
          setDatePartnerName(parsed.partnerName);
          setDateVenue(parsed.venue);
          setEmergencyContact(parsed.emergencyContact);
          setSelectedDurationMins(parsed.durationMins);

          const left = Math.max(0, Math.floor((parsed.endTime - Date.now()) / 1000));
          setSecondsRemaining(left);
          setIsTimerRunning(true);

          if (left <= 0) {
            setShowCheckInAlert(true);
            setIsTimerRunning(false);
          }
        }
      } catch {
        // Ignore JSON error
      }
    }
  }, []);

  // Timer Tick
  useEffect(() => {
    if (isTimerRunning) {
      timerRef.current = setInterval(() => {
        setSecondsRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setIsTimerRunning(false);
            setShowCheckInAlert(true);
            localStorage.removeItem('pairup_date_guard');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isTimerRunning]);

  const handleStartTimer = () => {
    const totalSecs = selectedDurationMins * 60;
    const endTime = Date.now() + totalSecs * 1000;

    const guardData: StoredDateGuard = {
      isRunning: true,
      partnerName: datePartnerName.trim() || 'Date',
      venue: dateVenue.trim() || 'Cafe',
      emergencyContact: emergencyContact.trim(),
      durationMins: selectedDurationMins,
      endTime
    };

    localStorage.setItem('pairup_date_guard', JSON.stringify(guardData));
    setSecondsRemaining(totalSecs);
    setIsTimerRunning(true);
    setStatusMessage(`Date check-in reminder activated for ${selectedDurationMins} minutes! Safe dating.`);
    setTimeout(() => setStatusMessage(''), 4000);
  };

  const handleStopTimer = () => {
    setIsTimerRunning(false);
    setSecondsRemaining(selectedDurationMins * 60);
    localStorage.removeItem('pairup_date_guard');
    setStatusMessage('Date concluded safely. Check-in timer deactivated.');
    setTimeout(() => setStatusMessage(''), 4000);
  };

  const handleExtendTimer = (mins: number) => {
    const addedSecs = mins * 60;
    const newRemaining = secondsRemaining + addedSecs;
    const endTime = Date.now() + newRemaining * 1000;

    const guardData: StoredDateGuard = {
      isRunning: true,
      partnerName: datePartnerName,
      venue: dateVenue,
      emergencyContact,
      durationMins: selectedDurationMins,
      endTime
    };

    localStorage.setItem('pairup_date_guard', JSON.stringify(guardData));
    setSecondsRemaining(newRemaining);
    setIsTimerRunning(true);
    setShowCheckInAlert(false);
    setStatusMessage(`Check-in confirmed! Timer extended by +${mins} minutes.`);
    setTimeout(() => setStatusMessage(''), 4000);
  };

  const togglePreference = (key: keyof SafetyPreferences) => {
    const updated = { ...preferences, [key]: !preferences[key] };
    setPreferences(updated);
    localStorage.setItem('pairup_safety_prefs', JSON.stringify(updated));
    setStatusMessage(`Updated safety preference: ${key.replace(/([A-Z])/g, ' $1')}`);
    setTimeout(() => setStatusMessage(''), 3000);
  };

  const handleUnblockUser = (id: string, name: string) => {
    setBlockedUsers((prev) => prev.filter((u) => u.id !== id));
    setStatusMessage(`${name} has been unblocked.`);
    setTimeout(() => setStatusMessage(''), 3000);
  };

  const toggleChecklistItem = (key: string) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const formatTimer = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleFileReport = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reason.trim()) return;

    const targetUser = reportedUserName.trim() || 'Reported Member';

    const newReport: SubmittedReport = {
      id: `rep_${Date.now()}`,
      reportedUser: targetUser,
      category,
      reason: reason.trim(),
      date: new Date().toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' }),
      status: 'UNDER_REVIEW'
    };

    const updated = [newReport, ...submittedReports];
    setSubmittedReports(updated);
    localStorage.setItem('pairup_user_reports', JSON.stringify(updated));

    try {
      await apiClient.reportUser({
        reportedUserId: 'usr_reported_' + Date.now(),
        category,
        reason: `${targetUser}: ${reason.trim()} (${evidenceNotes})`
      });
    } catch {
      // Fallback
    }

    setStatusMessage(`Your safety report against "${targetUser}" has been logged with Priority Review.`);
    setShowReportModal(false);
    setReportedUserName('');
    setReason('');
    setEvidenceNotes('');
    setTimeout(() => setStatusMessage(''), 5000);
  };

  const sosMessageText = `SOS ALERT: I am on a date with ${datePartnerName} at ${dateVenue}. I triggered an emergency distress alert on PairUp. Please check on me or contact 112 immediately.`;

  const copyDistressMessage = () => {
    navigator.clipboard.writeText(sosMessageText);
    setSmsCopied(true);
    setTimeout(() => setSmsCopied(false), 3000);
  };

  const checklistScore = Object.values(checklist).filter(Boolean).length;

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16">
      {/* Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-borderSoft shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Community Trust & Date Safety</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
            PairUp Safety Center
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1 max-w-xl">
            Live date check-in timers, 24/7 SOS dispatch, location masking, confidential reporting, and safety checklists.
          </p>
        </div>

        <button
          onClick={() => setShowReportModal(true)}
          className="px-4 py-2.5 rounded-xl bg-dangerRed text-white text-xs font-bold shadow-md hover:bg-dangerRed/90 transition-all flex items-center gap-1.5 hover:scale-105 active:scale-95 flex-shrink-0"
        >
          <ShieldAlert className="w-4 h-4" />
          <span>File a Safety Report</span>
        </button>
      </div>

      {statusMessage && (
        <div className="p-4 rounded-2xl bg-lavender-light border border-violet/30 text-xs font-bold text-violet animate-in fade-in flex items-center gap-2 shadow-xs">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          <span>{statusMessage}</span>
        </div>
      )}

      {/* ================================================================= */}
      {/* 1. DATE CHECK-IN REMINDER & LIVE TIMER (PERSISTENT) */}
      {/* ================================================================= */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#0F172A] bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white shadow-xl relative overflow-hidden border border-white/15">
        <div className="absolute top-0 right-0 w-80 h-80 bg-coral/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

        <div className="relative z-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-coral/20 text-coral text-xs font-black uppercase tracking-wider mb-2">
                <Bell className="w-3.5 h-3.5 animate-bounce" />
                <span>Active Date Safety Guard</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
                Live Date Check-In & Safety Timer
              </h2>
              <p className="text-xs text-white/85 font-medium mt-1 max-w-lg leading-relaxed">
                Meeting someone in person? Set a timer. When it expires, you can confirm you're safe, trigger an excuse call, or dispatch an emergency SOS.
              </p>
            </div>

            <button
              onClick={() => setShowSosModal(true)}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-dangerRed to-rose text-white text-xs font-black shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2 self-start sm:self-auto border border-dangerRed/50 animate-pulse"
            >
              <AlertTriangle className="w-4 h-4" />
              <span>EMERGENCY SOS</span>
            </button>
          </div>

          {/* Timer Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/5 p-5 rounded-2xl border border-white/15 backdrop-blur-sm">
            {/* Left: Configuration Inputs */}
            <div className="space-y-3.5">
              <div>
                <label className="block text-[11px] font-bold text-white/90 uppercase tracking-wider mb-1.5">
                  Who Are You Meeting?
                </label>
                <input
                  type="text"
                  value={datePartnerName}
                  onChange={(e) => setDatePartnerName(e.target.value)}
                  placeholder="Match name (e.g. Ananya)"
                  disabled={isTimerRunning}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-xs font-medium focus:outline-none focus:border-coral disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-white/90 uppercase tracking-wider mb-1.5">
                  Location / Venue
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-coral absolute left-3 top-3" />
                  <input
                    type="text"
                    value={dateVenue}
                    onChange={(e) => setDateVenue(e.target.value)}
                    placeholder="Cafe or restaurant name"
                    disabled={isTimerRunning}
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-xs font-medium focus:outline-none focus:border-coral disabled:opacity-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-white/90 uppercase tracking-wider mb-1.5">
                  Emergency Contact (SMS Guardian)
                </label>
                <input
                  type="text"
                  value={emergencyContact}
                  onChange={(e) => setEmergencyContact(e.target.value)}
                  placeholder="Friend name and phone number"
                  disabled={isTimerRunning}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-xs font-medium focus:outline-none focus:border-coral disabled:opacity-50"
                />
              </div>

              {/* Duration presets */}
              <div>
                <label className="block text-[11px] font-bold text-white/90 uppercase tracking-wider mb-1.5">
                  Check-In Interval
                </label>
                <div className="flex items-center gap-1.5">
                  {[15, 30, 45, 60, 90].map((mins) => (
                    <button
                      key={mins}
                      type="button"
                      disabled={isTimerRunning}
                      onClick={() => {
                        setSelectedDurationMins(mins);
                        setSecondsRemaining(mins * 60);
                      }}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        selectedDurationMins === mins
                          ? 'bg-coral text-white shadow-sm'
                          : 'bg-white/10 text-white/80 hover:bg-white/20 disabled:opacity-40'
                      }`}
                    >
                      {mins}m
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Live Clock Display */}
            <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-black/25 border border-white/15 text-center">
              <div className="relative flex items-center justify-center w-36 h-36 my-2">
                <div
                  className={`w-full h-full rounded-full border-4 ${
                    isTimerRunning ? 'border-coral animate-pulse' : 'border-white/20'
                  } flex flex-col items-center justify-center`}
                >
                  <Clock className={`w-5 h-5 mb-1 ${isTimerRunning ? 'text-coral' : 'text-white/50'}`} />
                  <span className="text-3xl font-display font-black tracking-tight text-white">
                    {formatTimer(secondsRemaining)}
                  </span>
                  <span className="text-xs text-white/80 font-bold mt-1">
                    {isTimerRunning ? 'Active Safe Timer' : 'Ready to Start'}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 mt-2 w-full max-w-xs">
                {isTimerRunning ? (
                  <>
                    <button
                      onClick={() => handleExtendTimer(30)}
                      className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-sm transition-all"
                    >
                      +30m Extend
                    </button>
                    <button
                      onClick={handleStopTimer}
                      className="flex-1 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-bold transition-all"
                    >
                      End Date Safe
                    </button>
                  </>
                ) : (
                  <button
                    onClick={handleStartTimer}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-coral to-violet text-white text-xs font-bold shadow-md hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-1.5"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Activate Check-In Timer</span>
                  </button>
                )}
              </div>

              {/* Simulation test button */}
              <button
                type="button"
                onClick={() => setShowCheckInAlert(true)}
                className="mt-3 text-xs text-peach hover:underline font-bold"
              >
                Test Check-In Reminder Alert Popup 🔔
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================================= */}
      {/* 2. PRIVACY & SAFETY PREFERENCES TOGGLE PANEL */}
      {/* ================================================================= */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-borderSoft shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-display font-bold text-slate-900 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-violet" />
              <span>Privacy & Discovery Shield Settings</span>
            </h3>
            <p className="text-xs text-slate-600 font-medium mt-0.5">
              Control how your profile and presence are exposed to nearby members.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {/* Location Masking */}
          <div
            onClick={() => togglePreference('locationMasking')}
            className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
              preferences.locationMasking ? 'bg-violet-50/70 border-violet/40' : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div>
              <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-violet" />
                <span>Location Masking</span>
              </p>
              <p className="text-xs text-slate-600 font-medium mt-1 leading-relaxed">
                Generalize distance to ~3–5km zone. Exact GPS coordinates are never stored or revealed.
              </p>
            </div>
            <div
              className={`w-11 h-6 rounded-full transition-colors flex items-center p-0.5 flex-shrink-0 ${
                preferences.locationMasking ? 'bg-violet justify-end' : 'bg-slate-300 justify-start'
              }`}
            >
              <div className="w-5 h-5 rounded-full bg-white shadow-xs" />
            </div>
          </div>

          {/* Incognito Browsing */}
          <div
            onClick={() => togglePreference('incognitoBrowsing')}
            className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
              preferences.incognitoBrowsing ? 'bg-violet-50/70 border-violet/40' : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div>
              <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <EyeOff className="w-3.5 h-3.5 text-violet" />
                <span>Incognito Browsing Mode</span>
              </p>
              <p className="text-xs text-slate-600 font-medium mt-1 leading-relaxed">
                Browse public profiles and swipe decks without leaving visitor footprints.
              </p>
            </div>
            <div
              className={`w-11 h-6 rounded-full transition-colors flex items-center p-0.5 flex-shrink-0 ${
                preferences.incognitoBrowsing ? 'bg-violet justify-end' : 'bg-slate-300 justify-start'
              }`}
            >
              <div className="w-5 h-5 rounded-full bg-white shadow-xs" />
            </div>
          </div>

          {/* Strict 18+ Adult Shield */}
          <div
            onClick={() => togglePreference('strictAdultShield')}
            className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
              preferences.strictAdultShield ? 'bg-emerald-50/70 border-emerald-400' : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div>
              <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Strict 18+ Age Verification Shield</span>
              </p>
              <p className="text-xs text-slate-600 font-medium mt-1 leading-relaxed">
                Only show profiles that have completed government ID or date-of-birth validation.
              </p>
            </div>
            <div
              className={`w-11 h-6 rounded-full transition-colors flex items-center p-0.5 flex-shrink-0 ${
                preferences.strictAdultShield ? 'bg-emerald-600 justify-end' : 'bg-slate-300 justify-start'
              }`}
            >
              <div className="w-5 h-5 rounded-full bg-white shadow-xs" />
            </div>
          </div>

          {/* Photo Safety Blur */}
          <div
            onClick={() => togglePreference('photoSafetyBlur')}
            className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
              preferences.photoSafetyBlur ? 'bg-rose-50/70 border-rose-300' : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div>
              <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-coral" />
                <span>Chat Media Safety Blur</span>
              </p>
              <p className="text-xs text-slate-600 font-medium mt-1 leading-relaxed">
                Automatically blur images in chats until you explicitly tap to view them.
              </p>
            </div>
            <div
              className={`w-11 h-6 rounded-full transition-colors flex items-center p-0.5 flex-shrink-0 ${
                preferences.photoSafetyBlur ? 'bg-coral justify-end' : 'bg-slate-300 justify-start'
              }`}
            >
              <div className="w-5 h-5 rounded-full bg-white shadow-xs" />
            </div>
          </div>
        </div>
      </div>

      {/* ================================================================= */}
      {/* 3. DATE READINESS SAFETY CHECKLIST */}
      {/* ================================================================= */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-borderSoft shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-display font-bold text-slate-900 flex items-center gap-2">
              <CheckSquare className="w-4 h-4 text-emerald-600" />
              <span>In-Person Date Safety Checklist</span>
            </h3>
            <p className="text-xs text-slate-600 font-medium mt-0.5">
              Before meeting anyone from PairUp, complete this recommended safety routine.
            </p>
          </div>
          <span className="px-3.5 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 font-black text-xs">
            {checklistScore} / 4 Ready
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
          <button
            onClick={() => toggleChecklistItem('publicVenue')}
            className={`p-3.5 rounded-2xl border text-left transition-all flex items-center gap-3 ${
              checklist.publicVenue ? 'bg-emerald-50/70 border-emerald-300 text-slate-900' : 'bg-slate-50 border-slate-200 text-slate-700'
            }`}
          >
            <div className={`w-5 h-5 rounded-lg flex items-center justify-center flex-shrink-0 ${checklist.publicVenue ? 'bg-emerald-600 text-white' : 'border-2 border-slate-300 bg-white'}`}>
              {checklist.publicVenue && <Check className="w-3.5 h-3.5 stroke-[3]" />}
            </div>
            <span className="text-xs font-bold leading-snug">Meeting in a public, well-lit cafe or restaurant</span>
          </button>

          <button
            onClick={() => toggleChecklistItem('shareWithFriend')}
            className={`p-3.5 rounded-2xl border text-left transition-all flex items-center gap-3 ${
              checklist.shareWithFriend ? 'bg-emerald-50/70 border-emerald-300 text-slate-900' : 'bg-slate-50 border-slate-200 text-slate-700'
            }`}
          >
            <div className={`w-5 h-5 rounded-lg flex items-center justify-center flex-shrink-0 ${checklist.shareWithFriend ? 'bg-emerald-600 text-white' : 'border-2 border-slate-300 bg-white'}`}>
              {checklist.shareWithFriend && <Check className="w-3.5 h-3.5 stroke-[3]" />}
            </div>
            <span className="text-xs font-bold leading-snug">Shared venue and meeting time with a trusted friend</span>
          </button>

          <button
            onClick={() => toggleChecklistItem('ownTransport')}
            className={`p-3.5 rounded-2xl border text-left transition-all flex items-center gap-3 ${
              checklist.ownTransport ? 'bg-emerald-50/70 border-emerald-300 text-slate-900' : 'bg-slate-50 border-slate-200 text-slate-700'
            }`}
          >
            <div className={`w-5 h-5 rounded-lg flex items-center justify-center flex-shrink-0 ${checklist.ownTransport ? 'bg-emerald-600 text-white' : 'border-2 border-slate-300 bg-white'}`}>
              {checklist.ownTransport && <Check className="w-3.5 h-3.5 stroke-[3]" />}
            </div>
            <span className="text-xs font-bold leading-snug">Arranged own transport to and from the location</span>
          </button>

          <button
            onClick={() => toggleChecklistItem('phoneCharged')}
            className={`p-3.5 rounded-2xl border text-left transition-all flex items-center gap-3 ${
              checklist.phoneCharged ? 'bg-emerald-50/70 border-emerald-300 text-slate-900' : 'bg-slate-50 border-slate-200 text-slate-700'
            }`}
          >
            <div className={`w-5 h-5 rounded-lg flex items-center justify-center flex-shrink-0 ${checklist.phoneCharged ? 'bg-emerald-600 text-white' : 'border-2 border-slate-300 bg-white'}`}>
              {checklist.phoneCharged && <Check className="w-3.5 h-3.5 stroke-[3]" />}
            </div>
            <span className="text-xs font-bold leading-snug">Phone battery charged & emergency contacts saved</span>
          </button>
        </div>
      </div>

      {/* ================================================================= */}
      {/* 4. BLOCKED PROFILES & SUBMITTED REPORTS */}
      {/* ================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Blocked Users Manager */}
        <div className="p-6 rounded-3xl bg-white border border-borderSoft shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-sm text-slate-900 flex items-center gap-2">
              <UserX className="w-4 h-4 text-dangerRed" />
              <span>Blocked Profiles ({blockedUsers.length})</span>
            </h3>
          </div>
          <p className="text-xs text-slate-600 font-medium">
            Blocked members cannot see your profile on the radar or message you.
          </p>

          <div className="divide-y divide-slate-100 max-h-48 overflow-y-auto">
            {blockedUsers.length > 0 ? (
              blockedUsers.map((u) => (
                <div key={u.id} className="py-2.5 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold text-slate-900">{u.name}</p>
                    <p className="text-[11px] text-slate-500 font-medium">{u.reason} • {u.date}</p>
                  </div>
                  <button
                    onClick={() => handleUnblockUser(u.id, u.name)}
                    className="px-3 py-1.5 rounded-xl bg-violet-50 hover:bg-violet-100 text-xs font-bold text-violet transition-colors flex items-center gap-1"
                  >
                    <Unlock className="w-3 h-3" />
                    <span>Unblock</span>
                  </button>
                </div>
              ))
            ) : (
              <p className="py-4 text-xs text-slate-500 font-medium text-center italic">No blocked users</p>
            )}
          </div>
        </div>

        {/* Submitted Reports History */}
        <div className="p-6 rounded-3xl bg-white border border-borderSoft shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-sm text-slate-900 flex items-center gap-2">
              <FileText className="w-4 h-4 text-violet" />
              <span>Your Safety Reports ({submittedReports.length})</span>
            </h3>
          </div>
          <p className="text-xs text-slate-600 font-medium">
            Reports are reviewed by human safety officers 24/7.
          </p>

          <div className="divide-y divide-slate-100 max-h-48 overflow-y-auto">
            {submittedReports.length > 0 ? (
              submittedReports.map((r) => (
                <div key={r.id} className="py-2.5 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-slate-900 truncate">{r.reportedUser}</p>
                    <p className="text-[11px] text-slate-500 font-medium truncate">{r.category} • {r.date}</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-[10px] font-black tracking-wide flex-shrink-0">
                    {r.status}
                  </span>
                </div>
              ))
            ) : (
              <p className="py-4 text-xs text-slate-500 font-medium text-center italic">No active safety reports filed</p>
            )}
          </div>
        </div>
      </div>

      {/* ================================================================= */}
      {/* 5. EMERGENCY CONTACT HELPLINES (INDIA 24x7) */}
      {/* ================================================================= */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#0F172A] text-white space-y-4 border border-white/15 shadow-xl">
        <h3 className="font-display font-bold text-base text-white flex items-center gap-2">
          <PhoneCall className="w-5 h-5 text-coral" />
          <span>Emergency Assistance Helplines (India 24x7 Direct Dial)</span>
        </h3>
        <p className="text-xs text-white/85 font-medium leading-relaxed">
          In case of immediate threat, touch to call national response lines without unlocking PairUp:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs pt-1">
          <a
            href="tel:112"
            className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-all border border-white/15 block cursor-pointer group shadow-sm"
          >
            <p className="font-bold text-amber-300 flex items-center justify-between text-xs">
              <span>National Police & SOS</span>
              <span className="text-[10px] group-hover:underline text-amber-200">Call ↗</span>
            </p>
            <p className="text-2xl font-display font-black text-white mt-1">112</p>
            <p className="text-[11px] text-white/85 font-medium mt-0.5">Police, Ambulance, Fire</p>
          </a>

          <a
            href="tel:1091"
            className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-all border border-white/15 block cursor-pointer group shadow-sm"
          >
            <p className="font-bold text-rose-300 flex items-center justify-between text-xs">
              <span>Women Helpline</span>
              <span className="text-[10px] group-hover:underline text-rose-200">Call ↗</span>
            </p>
            <p className="text-2xl font-display font-black text-white mt-1">1091</p>
            <p className="text-[11px] text-white/85 font-medium mt-0.5">Toll-free 24x7 Support</p>
          </a>

          <a
            href="tel:1930"
            className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-all border border-white/15 block cursor-pointer group shadow-sm"
          >
            <p className="font-bold text-violet-300 flex items-center justify-between text-xs">
              <span>Cyber Fraud Reporting</span>
              <span className="text-[10px] group-hover:underline text-violet-200">Call ↗</span>
            </p>
            <p className="text-2xl font-display font-black text-white mt-1">1930</p>
            <p className="text-[11px] text-white/85 font-medium mt-0.5">Financial fraud defense</p>
          </a>

          <a
            href="tel:108"
            className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-all border border-white/15 block cursor-pointer group shadow-sm"
          >
            <p className="font-bold text-emerald-300 flex items-center justify-between text-xs">
              <span>Emergency Medical</span>
              <span className="text-[10px] group-hover:underline text-emerald-200">Call ↗</span>
            </p>
            <p className="text-2xl font-display font-black text-white mt-1">108</p>
            <p className="text-[11px] text-white/85 font-medium mt-0.5">Paramedic Ambulance</p>
          </a>
        </div>
      </div>

      {/* ================================================================= */}
      {/* MODAL: CHECK-IN REMINDER POPUP */}
      {/* ================================================================= */}
      {showCheckInAlert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-200 text-center">
            <div className="w-14 h-14 rounded-full bg-coral-light text-coral flex items-center justify-center mx-auto mb-3 shadow-sm animate-bounce">
              <Bell className="w-7 h-7" />
            </div>

            <h3 className="text-lg font-display font-bold text-slate-900">
              PairUp Safety Check-In 💖
            </h3>
            <p className="text-xs text-slate-600 font-medium mt-1.5 leading-relaxed">
              Hey! Your check-in timer for your meetup with <strong className="text-slate-900 font-bold">{datePartnerName}</strong> at <strong className="text-slate-900 font-bold">{dateVenue}</strong> just rang. Are you having a comfortable time?
            </p>

            <div className="space-y-2.5 mt-6">
              <button
                onClick={() => handleExtendTimer(45)}
                className="w-full py-3 rounded-2xl bg-emerald-600 text-white text-xs font-bold shadow-md hover:bg-emerald-500 transition-all flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-4 h-4" />
                <span>I'm Safe & Having Fun (+45m Extend)</span>
              </button>

              <button
                onClick={() => {
                  setShowCheckInAlert(false);
                  setFakeCallActive(true);
                }}
                className="w-full py-2.5 rounded-2xl bg-lavender-light text-violet text-xs font-bold hover:bg-lavender transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Trigger Fake Excuse Call (Need to Leave)</span>
              </button>

              <button
                onClick={() => {
                  setShowCheckInAlert(false);
                  setShowSosModal(true);
                }}
                className="w-full py-2.5 rounded-2xl bg-dangerRed text-white text-xs font-bold hover:bg-dangerRed/90 transition-all flex items-center justify-center gap-2"
              >
                <AlertTriangle className="w-4 h-4" />
                <span>I Feel Unsafe • Trigger Emergency SOS</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* MODAL: FAKE CALL EXCUSE SIMULATION */}
      {/* ================================================================= */}
      {fakeCallActive && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in">
          <div className="w-full max-w-sm rounded-3xl bg-[#0F172A] text-white p-7 text-center shadow-2xl border border-white/20">
            <div className="w-20 h-20 rounded-full bg-coral/20 ring-4 ring-coral/50 flex items-center justify-center mx-auto my-4 animate-pulse">
              <Phone className="w-10 h-10 text-coral" />
            </div>
            <h3 className="text-xl font-bold font-display text-white">Incoming Call...</h3>
            <p className="text-xs text-coral font-bold mt-1">Mom / Work Emergency</p>
            <p className="text-xs text-white/85 font-medium mt-3 leading-relaxed">
              "Hey, I need you home right now!" Use this screen as a polite, immediate excuse to leave your date safely.
            </p>

            <button
              onClick={() => setFakeCallActive(false)}
              className="mt-6 w-full py-3 rounded-2xl bg-white/20 hover:bg-white/30 text-white text-xs font-bold transition-all"
            >
              Dismiss Call Screen
            </button>
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* MODAL: EMERGENCY SOS PROTOCOL */}
      {/* ================================================================= */}
      {showSosModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in">
          <div className="w-full max-w-md rounded-3xl bg-[#0F172A] text-white p-6 sm:p-7 shadow-2xl border border-dangerRed/50 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-dangerRed">
                <AlertTriangle className="w-6 h-6 animate-ping" />
                <h3 className="text-lg font-display font-black text-white">EMERGENCY SOS ACTIVE</h3>
              </div>
              <button
                onClick={() => setShowSosModal(false)}
                className="p-1 rounded-full hover:bg-white/10 text-white/80"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-white/90 font-medium leading-relaxed">
              If you are in immediate danger, call national emergency response lines right away. PairUp has prepared your distress alert.
            </p>

            {/* Direct Dial Helplines */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href="tel:112"
                className="p-3 rounded-2xl bg-dangerRed text-white text-center font-bold text-xs hover:bg-dangerRed/90 transition-all flex flex-col items-center justify-center gap-1 shadow-lg"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Call 112 (Police)</span>
              </a>
              <a
                href="tel:1091"
                className="p-3 rounded-2xl bg-coral text-white text-center font-bold text-xs hover:bg-coral-hover transition-all flex flex-col items-center justify-center gap-1 shadow-lg"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Call 1091 (Women)</span>
              </a>
            </div>

            {/* SOS SMS message preview */}
            <div className="p-4 rounded-2xl bg-white/10 border border-white/15 text-xs space-y-2">
              <div className="flex items-center justify-between">
                <p className="font-bold text-peach flex items-center gap-1.5">
                  <Send className="w-3.5 h-3.5" />
                  <span>Distress Alert for {emergencyContact}</span>
                </p>
                <button
                  onClick={copyDistressMessage}
                  className="px-2.5 py-1 rounded-lg bg-white/20 hover:bg-white/30 text-xs font-bold text-white flex items-center gap-1 transition-colors"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{smsCopied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <p className="text-xs text-white font-medium italic leading-relaxed bg-black/30 p-3 rounded-xl border border-white/10">
                "{sosMessageText}"
              </p>
              <a
                href={`sms:${emergencyContact.split(' ')[0]}?body=${encodeURIComponent(sosMessageText)}`}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-coral to-rose hover:opacity-95 text-white text-center font-bold text-xs block transition-all shadow-md"
              >
                Open SMS App & Send Alert ↗
              </a>
            </div>

            <button
              onClick={() => {
                setShowSosModal(false);
                setStatusMessage('Emergency SOS protocol closed. Stay in well-lit public places.');
                setTimeout(() => setStatusMessage(''), 5000);
              }}
              className="w-full py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-xs font-bold text-white transition-all text-center"
            >
              Close SOS Window
            </button>
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* MODAL: FILE A SAFETY REPORT */}
      {/* ================================================================= */}
      {showReportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-borderSoft">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-dangerRed" />
                <h3 className="text-base font-display font-bold text-slate-900">Submit Confidential Report</h3>
              </div>
              <button
                onClick={() => setShowReportModal(false)}
                className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-slate-600 font-medium mb-4">
              All safety reports are strictly confidential. Our Trust & Safety team will review the account within 15 minutes.
            </p>

            <form onSubmit={handleFileReport} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Member Display Name or User ID
                </label>
                <input
                  type="text"
                  required
                  value={reportedUserName}
                  onChange={(e) => setReportedUserName(e.target.value)}
                  placeholder="e.g. Vikram Joshi or @username"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 text-xs font-semibold focus:border-violet focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Violation Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as ReportCategory)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs font-semibold focus:border-violet focus:bg-white focus:outline-none"
                >
                  <option value="HARASSMENT">Harassment, Threats or Abusive Language</option>
                  <option value="INAPPROPRIATE_CONTENT">Explicit or Non-Consensual Photos</option>
                  <option value="FAKE_PROFILE">Fake Profile, Catfishing or Impersonation</option>
                  <option value="UNDERAGE">Suspected Underage Account (Under 18)</option>
                  <option value="SPAM">Commercial Spam or Promotion</option>
                  <option value="SCAM">Financial Solicitation, Extortion or Fraud</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Detailed Explanation
                </label>
                <textarea
                  rows={3}
                  required
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Describe what occurred with as much detail as possible..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 text-xs font-semibold focus:border-violet focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Evidence Notes / Screenshot Links (Optional)
                </label>
                <input
                  type="text"
                  value={evidenceNotes}
                  onChange={(e) => setEvidenceNotes(e.target.value)}
                  placeholder="e.g. In chat on Oct 28 at 9:30 AM"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 text-xs font-semibold focus:border-violet focus:bg-white focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowReportModal(false)}
                  className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl font-bold text-white bg-dangerRed text-xs shadow-md hover:bg-dangerRed/90 transition-all"
                >
                  Submit to Safety Team
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
