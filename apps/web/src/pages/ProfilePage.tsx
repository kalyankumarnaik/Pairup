/**
 * ProfilePage Component
 * Displays user dating profile, photo gallery, intentions, and "Changes Were Saved" popup modal.
 */
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  BadgeCheck,
  Briefcase,
  Camera,
  Check,
  CheckCircle2,
  Heart,
  Image as ImageIcon,
  MapPin,
  Plus,
  Save,
  Sparkles,
  Star,
  Trash2,
  Upload,
  UserCheck,
  X
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { ConnectionMode, Gender, RelationshipIntention } from '@pairup/domain-types';

const SAMPLE_AVATARS = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800',
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800'
];

const AVAILABLE_INTERESTS = [
  { id: 'int_1', name: 'Coffee & Cafes', category: 'Food & Dining', emoji: '☕' },
  { id: 'int_2', name: 'Contemporary Art', category: 'Creative', emoji: '🎨' },
  { id: 'int_3', name: 'Street Photography', category: 'Creative', emoji: '📷' },
  { id: 'int_4', name: 'Hiking & Trekking', category: 'Outdoors', emoji: '🏔️' },
  { id: 'int_5', name: 'Live Music', category: 'Entertainment', emoji: '🎸' },
  { id: 'int_6', name: 'Badminton', category: 'Sports', emoji: '🏸' },
  { id: 'int_7', name: 'Indie Films', category: 'Entertainment', emoji: '🎬' },
  { id: 'int_8', name: 'Cooking & Baking', category: 'Food & Dining', emoji: '🍳' },
  { id: 'int_9', name: 'Yoga & Mindfulness', category: 'Wellness', emoji: '🧘' },
  { id: 'int_10', name: 'Tech & Coding', category: 'Interests', emoji: '💻' },
  { id: 'int_11', name: 'Reading & Books', category: 'Interests', emoji: '📚' },
  { id: 'int_12', name: 'Dogs & Pets', category: 'Lifestyle', emoji: '🐶' }
];

const MODE_LABELS: Record<string, string> = {
  [ConnectionMode.DATING]: 'Dating Only 💖',
  [ConnectionMode.FRIENDSHIP]: 'Friendship Only 🫶',
  [ConnectionMode.BOTH]: 'Both Dating & Friends ✨'
};

const INTENTION_LABELS: Record<string, string> = {
  [RelationshipIntention.DATING_TO_MARRY]: 'Dating to Marry 💍',
  [RelationshipIntention.LONG_TERM]: 'Long-Term Relationship 💘',
  [RelationshipIntention.CASUAL]: 'Casual Dating ☕',
  [RelationshipIntention.NEW_FRIENDS]: 'New Friends in City 🌈',
  [RelationshipIntention.NOT_SURE_YET]: 'Still Figuring It Out 💫'
};

export const ProfilePage: React.FC = () => {
  const { profile, updateProfile, addPhoto, deletePhoto, setPrimaryPhoto } = useAuth();

  // Helper to read cached profile from localStorage
  const getCachedProfile = () => {
    try {
      const raw = localStorage.getItem('pairup_profile_saved') || localStorage.getItem('pairup_profile');
      if (raw) return JSON.parse(raw);
    } catch {
      // ignore
    }
    return null;
  };

  const cached = getCachedProfile();
  const initial = profile || cached;

  const [displayName, setDisplayName] = useState(initial?.displayName || '');
  const [bio, setBio] = useState(initial?.bio || '');
  const [gender, setGender] = useState<Gender>(initial?.gender || Gender.PREFER_NOT_TO_SAY);
  const [pronouns, setPronouns] = useState(initial?.pronouns || '');
  const [intention, setIntention] = useState<RelationshipIntention>(
    initial?.relationshipIntention || RelationshipIntention.LONG_TERM
  );
  const [mode, setMode] = useState<ConnectionMode>(initial?.connectionMode || ConnectionMode.BOTH);
  const [city, setCity] = useState(initial?.city || 'Mumbai');
  const [occupation, setOccupation] = useState(initial?.occupation || '');
  const [education, setEducation] = useState(initial?.education || '');
  const [selectedInterests, setSelectedInterests] = useState<string[]>(
    initial?.interests?.map((i: any) => i.name) || ['Coffee & Cafes', 'Contemporary Art']
  );
  const [promptAnswer, setPromptAnswer] = useState(
    initial?.prompts?.[0]?.answer || 'Brewing pour-over coffee, listening to indie vinyl, and tending to balcony plants.'
  );

  // Photo upload modal state
  const [showAddPhoto, setShowAddPhoto] = useState(false);
  const [customPhotoUrl, setCustomPhotoUrl] = useState('');
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);
  const [savedMessage, setSavedMessage] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  // Changes saved popup details modal state
  const [showSavedModal, setShowSavedModal] = useState(false);
  const [savedSummary, setSavedSummary] = useState<{
    displayName: string;
    bio: string;
    pronouns: string;
    city: string;
    mode: ConnectionMode;
    intention: RelationshipIntention;
    occupation: string;
    education: string;
    interests: string[];
    promptAnswer: string;
    completenessScore: number;
    savedAt: string;
  } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync form whenever profile updates or finishes loading
  useEffect(() => {
    const effective = profile || getCachedProfile();
    if (effective) {
      if (effective.displayName) setDisplayName(effective.displayName);
      if (effective.bio !== undefined) setBio(effective.bio);
      if (effective.gender) setGender(effective.gender);
      if (effective.pronouns !== undefined) setPronouns(effective.pronouns);
      if (effective.relationshipIntention) setIntention(effective.relationshipIntention);
      if (effective.connectionMode) setMode(effective.connectionMode);
      if (effective.city) setCity(effective.city);
      if (effective.occupation !== undefined) setOccupation(effective.occupation);
      if (effective.education !== undefined) setEducation(effective.education);
      if (effective.interests && effective.interests.length > 0) {
        setSelectedInterests(effective.interests.map((i: any) => i.name));
      }
      if (effective.prompts && effective.prompts.length > 0) {
        setPromptAnswer(effective.prompts[0].answer);
      }
    }
  }, [profile?.id, profile?.updatedAt]);

  const toggleInterest = (interestName: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interestName)
        ? prev.filter((name) => name !== interestName)
        : prev.length < 6
        ? [...prev, interestName]
        : prev
    );
  };

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSavedMessage('');

    const mappedInterests = AVAILABLE_INTERESTS.filter((item) =>
      selectedInterests.includes(item.name)
    );

    const updatedPrompts = [
      {
        id: profile?.prompts?.[0]?.id || 'prm_1',
        question: 'A perfect Sunday looks like',
        answer: promptAnswer.trim()
      }
    ];

    const profileData = {
      displayName: displayName.trim(),
      bio: bio.trim(),
      gender,
      pronouns: pronouns.trim(),
      relationshipIntention: intention,
      connectionMode: mode,
      city,
      occupation: occupation.trim(),
      education: education.trim(),
      interests: mappedInterests,
      prompts: updatedPrompts,
      completenessScore: Math.min(100, 60 + (profile?.photos?.length || 1) * 5 + mappedInterests.length * 3),
      updatedAt: new Date().toISOString()
    };

    // Immediately persist locally so changes remain even after instant refresh
    try {
      const existing = getCachedProfile() || {};
      const merged = { ...existing, ...(profile || {}), ...profileData };
      localStorage.setItem('pairup_profile_saved', JSON.stringify(merged));
      localStorage.setItem('pairup_profile', JSON.stringify(merged));
    } catch {
      // Local storage full or unavailable
    }

    const summaryData = {
      displayName: displayName.trim(),
      bio: bio.trim(),
      pronouns: pronouns.trim(),
      city,
      mode,
      intention,
      occupation: occupation.trim(),
      education: education.trim(),
      interests: [...selectedInterests],
      promptAnswer: promptAnswer.trim(),
      completenessScore: profileData.completenessScore,
      savedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    try {
      await updateProfile(profileData);
      setSavedSummary(summaryData);
      setShowSavedModal(true);
      setSavedMessage('Profile saved! Details persist across page refreshes ✨');
      setTimeout(() => setSavedMessage(''), 4000);
      try {
        confetti({
          particleCount: 55,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#FF4F81', '#7C3AED', '#FF8A5B', '#10B981']
        });
      } catch {
        // Confetti fallback
      }
    } catch {
      setSavedSummary(summaryData);
      setShowSavedModal(true);
      setSavedMessage('Profile saved locally! Details persist across page refreshes ✨');
      setTimeout(() => setSavedMessage(''), 4000);
      try {
        confetti({
          particleCount: 55,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#FF4F81', '#7C3AED', '#FF8A5B', '#10B981']
        });
      } catch {
        // Confetti fallback
      }
    } finally {
      setIsSaving(false);
    }
  };

  // Upload photo from device
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async () => {
      if (typeof reader.result === 'string') {
        await addPhoto(reader.result);
        setShowAddPhoto(false);
        setCustomPhotoUrl('');
        setSelectedPreset(null);
        setSavedMessage('Photo uploaded successfully! 📸');
        setTimeout(() => setSavedMessage(''), 4000);
      }
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  // Add photo via URL or preset
  const handleAddPhotoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const finalUrl = selectedPreset || customPhotoUrl.trim();
    if (!finalUrl) return;

    await addPhoto(finalUrl);
    setShowAddPhoto(false);
    setCustomPhotoUrl('');
    setSelectedPreset(null);
    setSavedMessage('Photo added successfully! 📸');
    setTimeout(() => setSavedMessage(''), 4000);
  };

  const handleRemovePhoto = async (photoId: string) => {
    await deletePhoto(photoId);
    setSavedMessage('Photo removed.');
    setTimeout(() => setSavedMessage(''), 3000);
  };

  const handleSetPrimary = async (photoId: string) => {
    await setPrimaryPhoto(photoId);
    setSavedMessage('Primary profile photo updated! ⭐');
    setTimeout(() => setSavedMessage(''), 3000);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-12">
      {/* Hidden file input for native device upload */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept="image/*"
        className="hidden"
      />

      {/* Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-borderSoft shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-extrabold text-ink flex items-center gap-2">
            <span>My Profile & Photos</span>
            {profile?.verificationStatus === 'VERIFIED' && (
              <BadgeCheck className="w-5 h-5 text-sky-500 fill-sky-500/20" />
            )}
          </h1>
          <p className="text-sm text-slate-600 font-medium mt-0.5">
            Manage your dating photos, bio, intentions, and discovery preferences
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Persisted to Device • Retained across page refreshes</span>
            </span>
          </div>
        </div>

        <div className="text-right">
          <span className="text-xs font-bold text-violet">
            {profile?.completenessScore || 90}% Complete
          </span>
          <div className="w-28 h-2 rounded-full bg-cloud overflow-hidden mt-1.5 border border-borderSoft">
            <div
              className="h-full bg-gradient-to-r from-coral to-violet transition-all duration-500 rounded-full"
              style={{ width: `${profile?.completenessScore || 90}%` }}
            />
          </div>
        </div>
      </div>

      {savedMessage && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3.5 rounded-2xl bg-successGreenLight border border-successGreen/30 text-successGreen text-xs font-bold flex items-center gap-2"
        >
          <span>✓</span>
          <span>{savedMessage}</span>
        </motion.div>
      )}

      {/* Photo Gallery Grid */}
      <div className="p-6 rounded-3xl bg-white border border-borderSoft shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-sm font-display font-bold text-ink uppercase tracking-wider">
              Profile Photos ({profile?.photos?.length || 0} / 9)
            </h2>
            <p className="text-xs text-slate-600 font-medium">
              Hover to remove any photo (including primary) or set as primary profile picture.
            </p>
          </div>
          <button
            onClick={() => setShowAddPhoto(true)}
            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-coral to-violet text-white text-xs font-bold shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
          >
            <Camera className="w-4 h-4" />
            <span>Upload Photo</span>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5">
          <AnimatePresence>
            {profile?.photos?.map((photo) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className={`relative aspect-square rounded-2xl overflow-hidden bg-cloud border-2 transition-all group ${
                  photo.isPrimary ? 'border-coral shadow-md shadow-coral/20' : 'border-borderSoft hover:border-violet/40'
                }`}
              >
                <img src={photo.url} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

                {/* Primary Photo Badge */}
                {photo.isPrimary ? (
                  <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-lg bg-coral text-white text-[10px] font-extrabold shadow-md flex items-center gap-1 z-10">
                    <Star className="w-3 h-3 fill-white" />
                    <span>PRIMARY</span>
                  </span>
                ) : (
                  <button
                    onClick={() => handleSetPrimary(photo.id)}
                    className="absolute top-2 left-2 px-2 py-0.5 rounded-lg bg-slate-900/80 hover:bg-violet text-white text-[10px] font-bold backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    title="Set as main profile photo"
                  >
                    Set Primary
                  </button>
                )}

                {/* Photo Actions Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-2.5">
                  {!photo.isPrimary && (
                    <button
                      onClick={() => handleSetPrimary(photo.id)}
                      className="text-xs font-bold text-white flex items-center gap-1"
                    >
                      <Star className="w-3.5 h-3.5" />
                      <span>Make Primary</span>
                    </button>
                  )}

                  {/* Remove Button (works for any photo including primary!) */}
                  <button
                    onClick={() => handleRemovePhoto(photo.id)}
                    className="p-1.5 rounded-lg bg-rose/90 hover:bg-rose text-white shadow-md hover:scale-110 active:scale-95 transition-all ml-auto"
                    title="Remove Photo"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {(!profile?.photos || profile.photos.length < 9) && (
            <button
              onClick={() => setShowAddPhoto(true)}
              className="aspect-square rounded-2xl border-2 border-dashed border-borderSoft hover:border-violet hover:bg-violet-light/30 flex flex-col items-center justify-center text-slate-500 hover:text-violet transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-cloud group-hover:bg-violet-light flex items-center justify-center mb-1 transition-colors">
                <Plus className="w-5 h-5 text-slate-500 group-hover:text-violet" />
              </div>
              <span className="text-xs font-bold">Add Photo</span>
            </button>
          )}
        </div>
      </div>

      {/* Edit Profile Form */}
      <form onSubmit={handleSaveProfile} className="p-6 sm:p-8 rounded-3xl bg-white border border-borderSoft shadow-sm space-y-6">
        <h2 className="text-sm font-display font-bold text-ink uppercase tracking-wider mb-2">
          Profile Details & Intentions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
              Display Name
            </label>
            <input
              type="text"
              required
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-cloud border border-borderSoft text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:border-violet focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
              Pronouns
            </label>
            <input
              type="text"
              value={pronouns}
              onChange={(e) => setPronouns(e.target.value)}
              placeholder="e.g. she/her, he/him, they/them"
              className="w-full px-4 py-2.5 rounded-xl bg-cloud border border-borderSoft text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:border-violet focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
            Bio & About Me
          </label>
          <textarea
            rows={3}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Tell potential matches about your passions, favorite weekend plans, and what brings you joy..."
            className="w-full px-4 py-2.5 rounded-xl bg-cloud border border-borderSoft text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:border-violet focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
              Connection Mode
            </label>
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value as ConnectionMode)}
              className="w-full px-3 py-2.5 rounded-xl bg-cloud border border-borderSoft text-xs font-semibold text-slate-900 focus:border-violet focus:outline-none"
            >
              <option value={ConnectionMode.DATING}>Dating Only 💖</option>
              <option value={ConnectionMode.FRIENDSHIP}>Friendship Only 🫶</option>
              <option value={ConnectionMode.BOTH}>Both Dating & Friends ✨</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
              Relationship Intention
            </label>
            <select
              value={intention}
              onChange={(e) => setIntention(e.target.value as RelationshipIntention)}
              className="w-full px-3 py-2.5 rounded-xl bg-cloud border border-borderSoft text-xs font-semibold text-slate-900 focus:border-violet focus:outline-none"
            >
              <option value={RelationshipIntention.DATING_TO_MARRY}>Dating to Marry 💍</option>
              <option value={RelationshipIntention.LONG_TERM}>Long-Term Relationship 💘</option>
              <option value={RelationshipIntention.CASUAL}>Casual Dating ☕</option>
              <option value={RelationshipIntention.NEW_FRIENDS}>New Friends in City 🌈</option>
              <option value={RelationshipIntention.NOT_SURE_YET}>Still Figuring It Out 💫</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
              City
            </label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-cloud border border-borderSoft text-xs font-semibold text-slate-900 focus:border-violet focus:outline-none"
            >
              <option value="Mumbai">Mumbai</option>
              <option value="Bengaluru">Bengaluru</option>
              <option value="New Delhi">New Delhi</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Pune">Pune</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Chennai">Chennai</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
              Occupation / Profession
            </label>
            <input
              type="text"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              placeholder="e.g. Lead Urban Architect"
              className="w-full px-4 py-2.5 rounded-xl bg-cloud border border-borderSoft text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:border-violet focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
              Education / Alma Mater
            </label>
            <input
              type="text"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              placeholder="e.g. CEPT University, Ahmedabad"
              className="w-full px-4 py-2.5 rounded-xl bg-cloud border border-borderSoft text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:border-violet focus:outline-none"
            />
          </div>
        </div>

        {/* Interests Selector */}
        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
            Interests & Passions ({selectedInterests.length} / 6 selected)
          </label>
          <div className="flex flex-wrap gap-2">
            {AVAILABLE_INTERESTS.map((int) => {
              const isSelected = selectedInterests.includes(int.name);
              return (
                <button
                  key={int.id}
                  type="button"
                  onClick={() => toggleInterest(int.name)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-violet text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-lavender-light'
                  }`}
                >
                  <span>{int.emoji}</span>
                  <span>{int.name}</span>
                  {isSelected && <Check className="w-3 h-3 ml-0.5" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Icebreaker Prompt */}
        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
            Profile Prompt: "A perfect Sunday looks like..."
          </label>
          <input
            type="text"
            value={promptAnswer}
            onChange={(e) => setPromptAnswer(e.target.value)}
            placeholder="Share what your dream Sunday looks like..."
            className="w-full px-4 py-2.5 rounded-xl bg-cloud border border-borderSoft text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:border-violet focus:outline-none"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSaving}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-coral via-rose to-violet text-white text-xs font-bold shadow-md hover:opacity-95 hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <Save className="w-4 h-4" />
            <span>{isSaving ? 'Saving Changes...' : 'Save Profile Details'}</span>
          </button>
        </div>
      </form>

      {/* Add Photo Modal */}
      {showAddPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-lg bg-white rounded-3xl p-6 shadow-2xl border border-borderSoft"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-display font-bold text-ink flex items-center gap-2">
                  <Camera className="w-5 h-5 text-coral" />
                  <span>Add Profile Photo</span>
                </h3>
                <p className="text-xs text-slate-600 font-medium">
                  Choose a photo from your device or pick a curated sample avatar.
                </p>
              </div>
              <button
                onClick={() => setShowAddPhoto(false)}
                className="p-1 rounded-full hover:bg-cloud text-slate-500 hover:text-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-5">
              {/* Native device file upload button */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  1. Upload from Device (Camera / Gallery)
                </label>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full py-4 rounded-2xl border-2 border-dashed border-violet/40 hover:border-violet bg-lavender-light/40 flex flex-col items-center justify-center gap-1.5 group transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-violet text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                    <Upload className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-ink">Select Photo from Computer or Phone</span>
                  <span className="text-xs text-slate-500 font-medium">JPG, PNG, WebP supported</span>
                </button>
              </div>

              {/* Sample avatar presets */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  2. Or Pick a Sample Avatar
                </label>
                <div className="grid grid-cols-6 gap-2">
                  {SAMPLE_AVATARS.map((url, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setSelectedPreset(url);
                        setCustomPhotoUrl('');
                      }}
                      className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                        selectedPreset === url ? 'border-coral ring-2 ring-coral/40 scale-105' : 'border-borderSoft hover:border-violet'
                      }`}
                    >
                      <img src={url} alt="" className="w-full h-full object-cover" />
                      {selectedPreset === url && (
                        <div className="absolute inset-0 bg-coral/30 flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Image URL */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  3. Or Enter Direct Image URL
                </label>
                <input
                  type="url"
                  value={customPhotoUrl}
                  onChange={(e) => {
                    setCustomPhotoUrl(e.target.value);
                    setSelectedPreset(null);
                  }}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full px-4 py-2.5 rounded-xl bg-cloud border border-borderSoft text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:border-violet focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddPhoto(false)}
                  className="flex-1 py-2.5 rounded-xl bg-cloud text-ink text-xs font-bold hover:bg-muted transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleAddPhotoSubmit}
                  disabled={!selectedPreset && !customPhotoUrl.trim()}
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-coral to-violet text-white text-xs font-bold shadow-md hover:opacity-95 disabled:opacity-40 transition-all"
                >
                  Save Photo
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Changes Saved Details Popup Modal */}
      <AnimatePresence>
        {showSavedModal && savedSummary && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-midnightInk/70 backdrop-blur-md"
            onClick={() => setShowSavedModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 16 }}
              transition={{ type: 'spring', damping: 25, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-borderSoft max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setShowSavedModal(false)}
                className="absolute top-5 right-5 p-2 rounded-full text-ink-muted hover:text-ink hover:bg-cloud transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header with success badge */}
              <div className="flex items-start gap-4 mb-5 pr-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20 shrink-0">
                  <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold uppercase tracking-wider mb-1 border border-emerald-200">
                    <Sparkles className="w-3 h-3 text-emerald-600" />
                    <span>Saved at {savedSummary.savedAt}</span>
                  </div>
                  <h3 className="text-xl font-display font-extrabold text-ink">
                    Changes Were Saved!
                  </h3>
                  <p className="text-xs text-ink-muted">
                    Your profile details & intentions have been successfully updated.
                  </p>
                </div>
              </div>

              {/* Summary Details Card */}
              <div className="rounded-2xl bg-cloud/70 border border-borderSoft p-4 sm:p-5 space-y-4 text-xs">
                {/* Name & Pronouns */}
                <div className="flex items-center justify-between border-b border-borderSoft/60 pb-3">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-ink-muted tracking-wider block mb-0.5">
                      Display Name
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-ink">
                        {savedSummary.displayName || 'No Name'}
                      </span>
                      {savedSummary.pronouns && (
                        <span className="px-2 py-0.5 rounded-md bg-white border border-borderSoft text-ink-muted font-medium text-[11px]">
                          {savedSummary.pronouns}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-ink-muted tracking-wider block mb-0.5">
                      Profile Completeness
                    </span>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-violet-light text-violet font-bold text-xs">
                      {savedSummary.completenessScore}% Complete
                    </span>
                  </div>
                </div>

                {/* Bio */}
                {savedSummary.bio ? (
                  <div className="border-b border-borderSoft/60 pb-3">
                    <span className="text-[10px] uppercase font-bold text-ink-muted tracking-wider block mb-1">
                      Bio & About Me
                    </span>
                    <p className="text-ink bg-white/90 rounded-xl p-3 border border-borderSoft/60 text-xs leading-relaxed italic">
                      "{savedSummary.bio}"
                    </p>
                  </div>
                ) : null}

                {/* Grid Attributes */}
                <div className="grid grid-cols-2 gap-3 border-b border-borderSoft/60 pb-3">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-ink-muted tracking-wider block mb-0.5">
                      Connection Mode
                    </span>
                    <span className="font-semibold text-ink">
                      {MODE_LABELS[savedSummary.mode] || savedSummary.mode}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-bold text-ink-muted tracking-wider block mb-0.5">
                      Relationship Intention
                    </span>
                    <span className="font-semibold text-ink">
                      {INTENTION_LABELS[savedSummary.intention] || savedSummary.intention}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-bold text-ink-muted tracking-wider block mb-0.5 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-coral" /> City
                    </span>
                    <span className="font-semibold text-ink">{savedSummary.city}</span>
                  </div>

                  {(savedSummary.occupation || savedSummary.education) ? (
                    <div>
                      <span className="text-[10px] uppercase font-bold text-ink-muted tracking-wider block mb-0.5 flex items-center gap-1">
                        <Briefcase className="w-3 h-3 text-violet" /> Work & Education
                      </span>
                      <span className="font-semibold text-ink line-clamp-1">
                        {[savedSummary.occupation, savedSummary.education].filter(Boolean).join(' • ')}
                      </span>
                    </div>
                  ) : null}
                </div>

                {/* Interests & Passions */}
                {savedSummary.interests.length > 0 && (
                  <div className="border-b border-borderSoft/60 pb-3">
                    <span className="text-[10px] uppercase font-bold text-ink-muted tracking-wider block mb-1.5">
                      Interests & Passions ({savedSummary.interests.length} selected)
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {savedSummary.interests.map((interest) => {
                        const item = AVAILABLE_INTERESTS.find((i) => i.name === interest);
                        return (
                          <span
                            key={interest}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-borderSoft text-[11px] font-semibold text-ink shadow-2xs"
                          >
                            <span>{item?.emoji || '✨'}</span>
                            <span>{interest}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Profile Prompt */}
                {savedSummary.promptAnswer ? (
                  <div>
                    <span className="text-[10px] uppercase font-bold text-ink-muted tracking-wider block mb-1">
                      Profile Prompt: "A perfect Sunday looks like..."
                    </span>
                    <p className="text-ink font-medium bg-white/90 rounded-xl p-3 border border-borderSoft/60 text-xs">
                      {savedSummary.promptAnswer}
                    </p>
                  </div>
                ) : null}
              </div>

              {/* Action Buttons */}
              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => setShowSavedModal(false)}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-coral via-rose to-violet text-white text-xs font-bold shadow-md hover:opacity-95 hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4 stroke-[2.5]" />
                  <span>Done / Dismiss</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
