import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  Check,
  Compass,
  Heart,
  Image,
  MapPin,
  Plus,
  ShieldCheck,
  Sparkles,
  Tag,
  User,
  X
} from 'lucide-react';
import {
  ConnectionMode,
  Gender,
  RelationshipIntention
} from '@pairup/domain-types';
import { useAuth } from '../context/AuthContext';

const AVAILABLE_INTERESTS = [
  { id: 'int_coffee', name: 'Specialty Coffee', category: 'Lifestyle', icon: '☕' },
  { id: 'int_hiking', name: 'Trekking & Hiking', category: 'Active', icon: '🥾' },
  { id: 'int_indie', name: 'Indie & Live Music', category: 'Creative', icon: '🎸' },
  { id: 'int_tech', name: 'Startups & Tech', category: 'Career', icon: '💻' },
  { id: 'int_food', name: 'Street Food Crawls', category: 'Food', icon: '🍜' },
  { id: 'int_yoga', name: 'Yoga & Mindfulness', category: 'Wellness', icon: '🧘' },
  { id: 'int_art', name: 'Art Galleries & Design', category: 'Creative', icon: '🎨' },
  { id: 'int_games', name: 'Board Games', category: 'Social', icon: '🎲' },
  { id: 'int_books', name: 'Fiction & Book Clubs', category: 'Culture', icon: '📚' },
  { id: 'int_pets', name: 'Dog Lover', category: 'Lifestyle', icon: '🐶' },
  { id: 'int_travel', name: 'Solo Backpacking', category: 'Adventure', icon: '✈️' },
  { id: 'int_film', name: 'World Cinema', category: 'Culture', icon: '🎬' }
];

const SUGGESTED_PHOTOS = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80'
];

export const OnboardingPage: React.FC = () => {
  const { profile, updateProfile, addPhoto, refreshProfile } = useAuth();
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Step 1: Identity & Basics
  const [displayName, setDisplayName] = useState(profile?.displayName || '');
  const [city, setCity] = useState(profile?.city || 'Mumbai');
  const [bio, setBio] = useState(
    profile?.bio || 'Coffee aficionado, product builder, and weekend trekker.'
  );
  const [gender, setGender] = useState<Gender>(profile?.gender || Gender.WOMAN);
  const [connectionMode, setConnectionMode] = useState<ConnectionMode>(
    profile?.connectionMode || ConnectionMode.DATING
  );

  // Step 2: Photos
  const [photos, setPhotos] = useState<string[]>(
    profile?.photos?.map((p) => p.url) || [SUGGESTED_PHOTOS[0]]
  );
  const [newPhotoUrl, setNewPhotoUrl] = useState('');

  // Step 3: Interests (IDs)
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    'int_coffee',
    'int_hiking',
    'int_indie'
  ]);

  // Step 4: Intentions & Values
  const [relationshipIntention, setRelationshipIntention] = useState<RelationshipIntention>(
    profile?.relationshipIntention || RelationshipIntention.LONG_TERM
  );

  const toggleInterest = (id: string) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleAddPhoto = () => {
    if (!newPhotoUrl.trim()) return;
    if (photos.length >= 6) {
      setErrorMsg('Maximum 6 photos allowed.');
      return;
    }
    setPhotos([...photos, newPhotoUrl.trim()]);
    setNewPhotoUrl('');
    setErrorMsg('');
  };

  const handleRemovePhoto = (index: number) => {
    if (photos.length <= 1) {
      setErrorMsg('Keep at least one photo for your profile.');
      return;
    }
    setPhotos(photos.filter((_, i) => i !== index));
    setErrorMsg('');
  };

  const validateStep = (step: number): boolean => {
    setErrorMsg('');
    if (step === 1) {
      if (!displayName.trim()) {
        setErrorMsg('Please enter your display name.');
        return false;
      }
      if (!city.trim()) {
        setErrorMsg('Please enter your current city.');
        return false;
      }
    }
    if (step === 2) {
      if (photos.length === 0) {
        setErrorMsg('Please add at least one photo.');
        return false;
      }
    }
    if (step === 3) {
      if (selectedInterests.length < 3) {
        setErrorMsg('Please select at least 3 passions to help our discovery engine find matches.');
        return false;
      }
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setErrorMsg('');
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleCompleteOnboarding = async () => {
    if (!validateStep(4)) return;
    setSubmitting(true);
    try {
      const interestObjects = AVAILABLE_INTERESTS.filter((i) =>
        selectedInterests.includes(i.id)
      ).map((i) => ({
        id: i.id,
        name: i.name,
        category: i.category
      }));

      // Update profile
      await updateProfile({
        displayName,
        city,
        bio,
        gender,
        connectionMode,
        relationshipIntention,
        interests: interestObjects as any
      });

      // Ensure primary photo is registered
      if (photos.length > 0 && addPhoto) {
        for (const url of photos) {
          try {
            await addPhoto(url);
          } catch {
            // non-fatal
          }
        }
      }

      await refreshProfile();
      navigate('/discover');
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to save profile. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-6 sm:py-10 px-4">
      {/* Step Tracker Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-bold text-ink-muted mb-2">
          <span>Step {currentStep} of 4</span>
          <span>
            {currentStep === 1 && 'Basics & Identity'}
            {currentStep === 2 && 'Photos & Visuals'}
            {currentStep === 3 && 'Passions & Interests'}
            {currentStep === 4 && 'Dating Intentions'}
          </span>
          <span className="text-violet font-extrabold">{currentStep * 25}%</span>
        </div>
        <div className="w-full bg-cloud h-2.5 rounded-full overflow-hidden border border-borderSoft">
          <div
            className="bg-gradient-to-r from-violet to-coral h-full rounded-full transition-all duration-300"
            style={{ width: `${currentStep * 25}%` }}
          />
        </div>
      </div>

      {/* Main Form Container */}
      <div className="p-6 sm:p-10 rounded-3xl bg-white border border-borderSoft shadow-sm space-y-6">
        {errorMsg && (
          <div className="p-4 rounded-2xl bg-dangerRedLight text-dangerRed border border-dangerRed/20 text-xs font-bold animate-in fade-in flex items-center justify-between">
            <span>{errorMsg}</span>
            <button onClick={() => setErrorMsg('')} className="p-1 hover:opacity-75">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* STEP 1: BASICS & IDENTITY */}
        {currentStep === 1 && (
          <div className="space-y-5 animate-in fade-in">
            <div>
              <h2 className="text-xl sm:text-2xl font-display font-black text-ink">
                Let's build your PairUp profile ✨
              </h2>
              <p className="text-xs text-ink-muted mt-1">
                Share the basics so friends and matches can get to know who you are.
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold text-ink uppercase tracking-wider mb-1.5">
                Display Name
              </label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="e.g. Ananya, Aarav"
                className="w-full px-4 py-3 rounded-2xl bg-cloud border border-borderSoft text-xs font-semibold focus:outline-none focus:border-violet"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-ink uppercase tracking-wider mb-1.5">
                  Current City
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Mumbai, Bengaluru, Delhi"
                  className="w-full px-4 py-3 rounded-2xl bg-cloud border border-borderSoft text-xs font-semibold focus:outline-none focus:border-violet"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-ink uppercase tracking-wider mb-1.5">
                  Gender
                </label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value as Gender)}
                  className="w-full px-4 py-3 rounded-2xl bg-cloud border border-borderSoft text-xs font-semibold focus:outline-none focus:border-violet"
                >
                  <option value={Gender.WOMAN}>Woman</option>
                  <option value={Gender.MAN}>Man</option>
                  <option value={Gender.NON_BINARY}>Non-Binary</option>
                  <option value={Gender.PREFER_NOT_TO_SAY}>Prefer not to say</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-ink uppercase tracking-wider mb-1.5">
                Discovery Mode
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { mode: ConnectionMode.DATING, label: 'Dating 💖', desc: 'Find romance' },
                  { mode: ConnectionMode.FRIENDSHIP, label: 'BFF 👯', desc: 'Make friends' },
                  { mode: ConnectionMode.BOTH, label: 'Both ✨', desc: 'Open to both' }
                ].map((item) => (
                  <button
                    key={item.mode}
                    type="button"
                    onClick={() => setConnectionMode(item.mode)}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      connectionMode === item.mode
                        ? 'bg-violet/10 border-violet text-violet font-extrabold'
                        : 'bg-cloud border-borderSoft text-ink font-medium hover:bg-cloud/80'
                    }`}
                  >
                    <p className="text-xs font-bold">{item.label}</p>
                    <p className="text-[10px] text-ink-muted mt-0.5">{item.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-ink uppercase tracking-wider mb-1.5">
                About You (Bio)
              </label>
              <textarea
                rows={3}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Share a fun fact, your favorite weekend activity, or what makes you laugh..."
                className="w-full px-4 py-3 rounded-2xl bg-cloud border border-borderSoft text-xs font-medium focus:outline-none focus:border-violet resize-none"
              />
            </div>
          </div>
        )}

        {/* STEP 2: PHOTOS */}
        {currentStep === 2 && (
          <div className="space-y-5 animate-in fade-in">
            <div>
              <h2 className="text-xl sm:text-2xl font-display font-black text-ink">
                Add your profile photos 📸
              </h2>
              <p className="text-xs text-ink-muted mt-1">
                Profiles with at least 2 clear photos get 4x more mutual matches.
              </p>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {photos.map((url, idx) => (
                <div
                  key={idx}
                  className="relative aspect-3/4 rounded-2xl overflow-hidden border border-borderSoft shadow-xs group"
                >
                  <img src={url} alt={`Upload ${idx + 1}`} className="w-full h-full object-cover" />
                  {idx === 0 && (
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-violet text-white text-[10px] font-black uppercase tracking-wider shadow-xs">
                      Main Photo
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => handleRemovePhoto(idx)}
                    className="absolute top-2 right-2 w-7 h-7 rounded-full bg-midnightInk/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-dangerRed"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}

              {photos.length < 6 && (
                <div className="aspect-3/4 rounded-2xl border-2 border-dashed border-borderSoft flex flex-col items-center justify-center p-3 text-center bg-cloud/50 hover:bg-cloud transition-colors">
                  <Camera className="w-6 h-6 text-ink-muted mb-2" />
                  <p className="text-[11px] font-bold text-ink">Add Photo</p>
                  <p className="text-[9px] text-ink-muted mt-0.5">Paste URL below</p>
                </div>
              )}
            </div>

            {/* Add Photo Input */}
            <div className="p-4 rounded-2xl bg-cloud border border-borderSoft space-y-2">
              <label className="block text-[11px] font-bold text-ink uppercase tracking-wider">
                Paste Image URL or pick demo avatar
              </label>
              <div className="flex gap-2">
                <input
                  type="url"
                  value={newPhotoUrl}
                  onChange={(e) => setNewPhotoUrl(e.target.value)}
                  placeholder="https://images.unsplash.com/photo-..."
                  className="flex-1 px-3 py-2 rounded-xl bg-white border border-borderSoft text-xs focus:outline-none focus:border-violet"
                />
                <button
                  type="button"
                  onClick={handleAddPhoto}
                  className="px-4 py-2 rounded-xl bg-violet text-white text-xs font-bold hover:bg-violet-hover transition-colors flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add</span>
                </button>
              </div>

              {/* Quick Preset Buttons */}
              <div className="flex items-center gap-1.5 pt-1 overflow-x-auto">
                <span className="text-[10px] text-ink-muted shrink-0">Sample Photos:</span>
                {SUGGESTED_PHOTOS.map((preset, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      if (!photos.includes(preset)) {
                        setPhotos([...photos, preset]);
                      }
                    }}
                    className="w-7 h-7 rounded-lg overflow-hidden shrink-0 border border-borderSoft hover:scale-105 transition-transform"
                  >
                    <img src={preset} alt={`Preset ${i}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: PASSIONS & INTERESTS */}
        {currentStep === 3 && (
          <div className="space-y-5 animate-in fade-in">
            <div>
              <h2 className="text-xl sm:text-2xl font-display font-black text-ink">
                What are you passionate about? 🎨
              </h2>
              <p className="text-xs text-ink-muted mt-1">
                Select at least 3 interests to power your compatibility score with nearby discovery profiles.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {AVAILABLE_INTERESTS.map((interest) => {
                const isSelected = selectedInterests.includes(interest.id);
                return (
                  <button
                    key={interest.id}
                    type="button"
                    onClick={() => toggleInterest(interest.id)}
                    className={`px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 ${
                      isSelected
                        ? 'bg-violet text-white shadow-xs scale-105'
                        : 'bg-cloud hover:bg-lavender-light text-ink border border-borderSoft'
                    }`}
                  >
                    <span className="text-sm">{interest.icon}</span>
                    <span>{interest.name}</span>
                    {isSelected && <Check className="w-3.5 h-3.5" />}
                  </button>
                );
              })}
            </div>

            <div className="p-4 rounded-2xl bg-lavender-light border border-violet/20 flex items-center justify-between">
              <span className="text-xs font-semibold text-violet">
                {selectedInterests.length} of 3 required passions selected
              </span>
              {selectedInterests.length >= 3 && (
                <span className="text-xs font-bold text-emerald flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>Ready!</span>
                </span>
              )}
            </div>
          </div>
        )}

        {/* STEP 4: INTENTIONS & VALUES */}
        {currentStep === 4 && (
          <div className="space-y-5 animate-in fade-in">
            <div>
              <h2 className="text-xl sm:text-2xl font-display font-black text-ink">
                What brings you to PairUp? 💖
              </h2>
              <p className="text-xs text-ink-muted mt-1">
                Being clear about what you're looking for helps you match with people on the same wavelength.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  value: RelationshipIntention.LONG_TERM,
                  title: 'Long-term relationship 💍',
                  desc: 'Looking for a meaningful, committed partnership built to last.'
                },
                {
                  value: RelationshipIntention.CASUAL,
                  title: 'Casual dating & fun 💫',
                  desc: 'Excited to go on fun dates, meet new people, and see where things go.'
                },
                {
                  value: RelationshipIntention.NEW_FRIENDS,
                  title: 'New friends & community 👯',
                  desc: 'Expanding my social circle, finding weekend brunch or hiking buddies.'
                },
                {
                  value: RelationshipIntention.NOT_SURE_YET,
                  title: 'Still figuring it out 🌱',
                  desc: 'Open to possibilities and letting connections evolve naturally.'
                }
              ].map((item) => (
                <div
                  key={item.value}
                  onClick={() => setRelationshipIntention(item.value)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3.5 ${
                    relationshipIntention === item.value
                      ? 'bg-violet/10 border-violet text-ink shadow-xs'
                      : 'bg-cloud border-borderSoft hover:bg-cloud/80 text-ink'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                      relationshipIntention === item.value
                        ? 'border-violet bg-violet text-white'
                        : 'border-borderSoft bg-white'
                    }`}
                  >
                    {relationshipIntention === item.value && <Check className="w-3 h-3" />}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-ink">{item.title}</h4>
                    <p className="text-[11px] text-ink-muted mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Safety Commitment Banner */}
            <div className="p-4 rounded-2xl bg-cloud border border-borderSoft flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald shrink-0" />
              <p className="text-[11px] text-ink-muted leading-relaxed">
                By entering PairUp, you agree to treat everyone with dignity, respect personal boundaries, and abide by our verified community safety standards.
              </p>
            </div>
          </div>
        )}

        {/* Step Navigation Controls */}
        <div className="pt-4 border-t border-borderSoft flex items-center justify-between gap-3">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="px-4 py-2.5 rounded-xl bg-cloud hover:bg-lavender-light text-ink text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {currentStep < 4 ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-6 py-2.5 rounded-xl bg-violet hover:bg-violet-hover text-white text-xs font-bold shadow-md transition-all flex items-center gap-1.5 ml-auto"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleCompleteOnboarding}
              disabled={submitting}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-violet to-coral hover:opacity-95 text-white text-xs font-bold shadow-md transition-all flex items-center gap-1.5 ml-auto disabled:opacity-50"
            >
              <Sparkles className="w-4 h-4" />
              <span>{submitting ? 'Setting Up...' : 'Start Exploring Deck'}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
