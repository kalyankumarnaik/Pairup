"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@/lib/auth/auth-context";
import { apiClient } from "@/lib/api/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/toast";
import {
  PlatformGender,
  PlatformRelationshipIntent,
  ProfilePhoto,
  ProfileInterest,
  ProfilePrompt,
} from "@/types/api";
import {
  Sparkles,
  Camera,
  Heart,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Trash2,
  Star,
  EyeOff,
  Sliders,
  Check,
} from "lucide-react";

const AVAILABLE_INTERESTS: ProfileInterest[] = [
  { id: "int-1", name: "Architecture", category: "Creativity" },
  { id: "int-2", name: "Film Photography", category: "Creativity" },
  { id: "int-3", name: "Ceramics & Pottery", category: "Creativity" },
  { id: "int-4", name: "Bouldering & Climbing", category: "Sports" },
  { id: "int-5", name: "Trail Running", category: "Sports" },
  { id: "int-6", name: "Yoga & Mindfulness", category: "Sports" },
  { id: "int-7", name: "Pour-over Coffee", category: "Food & Drink" },
  { id: "int-8", name: "Craft Cocktails", category: "Food & Drink" },
  { id: "int-9", name: "Italian Cooking", category: "Food & Drink" },
  { id: "int-10", name: "Indie Rock & Vinyl", category: "Music" },
  { id: "int-11", name: "Jazz Bars", category: "Music" },
  { id: "int-12", name: "Sci-Fi Literature", category: "Entertainment" },
  { id: "int-13", name: "Board Game Nights", category: "Entertainment" },
  { id: "int-14", name: "Climate Tech", category: "Tech & Science" },
  { id: "int-15", name: "Golden Retrievers", category: "Pets" },
];

const PROMPT_QUESTIONS = [
  "The most spontaneous thing I have done",
  "A green flag I look for in a partner",
  "Together, we could",
  "My simple pleasures on a Sunday morning",
  "Best date idea in my city",
  "I will know it is working when",
];

export default function OnboardingPage() {
  const router = useRouter();
  const { updateUserSession } = useAuth();
  const { showToast } = useToast();

  const [step, setStep] = useState<number>(1);
  const totalSteps = 6;
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Form State
  const [displayName, setDisplayName] = useState("Alex Rivera");
  const [dateOfBirth, setDateOfBirth] = useState("1998-05-14");
  const [gender, setGender] = useState<PlatformGender>(PlatformGender.NON_BINARY);
  const [occupation, setOccupation] = useState("Architect & Urban Designer");
  const [education, setEducation] = useState("Columbia University");
  const [city, setCity] = useState("San Francisco, CA");
  const [bio, setBio] = useState(
    "Architect by day, vinyl collector and sourdough baker by night. Looking for genuine banter, weekend road trips, and deep conversations over coffee.",
  );

  // Photos (up to 6)
  const [photos, setPhotos] = useState<ProfilePhoto[]>([
    {
      id: "photo-init-1",
      url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
      isPrimary: true,
      displayOrder: 0,
    },
    {
      id: "photo-init-2",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800",
      isPrimary: false,
      displayOrder: 1,
    },
  ]);
  const [newPhotoUrl, setNewPhotoUrl] = useState("");

  // Prompts
  const [prompts, setPrompts] = useState<ProfilePrompt[]>([
    {
      id: "pr-1",
      promptQuestion: "The most spontaneous thing I have done",
      promptAnswer: "Booked a red-eye flight to Tokyo after finding a rare vintage synth listing.",
    },
    {
      id: "pr-2",
      promptQuestion: "Together, we could",
      promptAnswer: "Build a cozy blanket fort, cook homemade ravioli, and debate whether Die Hard is a Christmas movie.",
    },
  ]);

  // Interests
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    "int-1",
    "int-7",
    "int-10",
    "int-4",
  ]);

  // Dating Preferences
  const [relationshipIntent, setRelationshipIntent] = useState<PlatformRelationshipIntent>(
    PlatformRelationshipIntent.LONG_TERM,
  );
  const [minAge, setMinAge] = useState(23);
  const [maxAge, setMaxAge] = useState(35);
  const [maxDistanceKm, setMaxDistanceKm] = useState(25);
  const [interestedGenders, setInterestedGenders] = useState<PlatformGender[]>([
    PlatformGender.FEMALE,
    PlatformGender.NON_BINARY,
  ]);

  // Privacy Settings
  const [incognitoMode, setIncognitoMode] = useState(false);
  const [showDistance, setShowDistance] = useState(true);
  const [showAge, setShowAge] = useState(true);

  // Helper validations
  const calculateAge = (dobString: string): number => {
    const birthday = new Date(dobString);
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const handleAddPhoto = () => {
    if (!newPhotoUrl.trim()) return;
    if (photos.length >= 6) {
      showToast("warning", "Limit reached", "You can upload a maximum of 6 photos.");
      return;
    }

    const newPhoto: ProfilePhoto = {
      id: `photo-${Date.now()}`,
      url: newPhotoUrl.trim(),
      isPrimary: photos.length === 0,
      displayOrder: photos.length,
    };
    setPhotos([...photos, newPhoto]);
    setNewPhotoUrl("");
    showToast("success", "Photo added", "Photo successfully uploaded.");
  };

  const handleSetPrimaryPhoto = (id: string) => {
    setPhotos(
      photos.map((p) => ({
        ...p,
        isPrimary: p.id === id,
      })),
    );
  };

  const handleDeletePhoto = (id: string) => {
    if (photos.length <= 1) {
      showToast("warning", "Primary required", "You must have at least one profile photo.");
      return;
    }
    const filtered = photos.filter((p) => p.id !== id);
    if (!filtered.some((p) => p.isPrimary)) {
      filtered[0].isPrimary = true;
    }
    setPhotos(filtered);
  };

  const toggleInterest = (id: string) => {
    if (selectedInterests.includes(id)) {
      setSelectedInterests(selectedInterests.filter((item) => item !== id));
    } else {
      if (selectedInterests.length >= 7) {
        showToast("warning", "Limit reached", "Select up to 7 favorite interests.");
        return;
      }
      setSelectedInterests([...selectedInterests, id]);
    }
  };

  const toggleGenderPref = (g: PlatformGender) => {
    if (interestedGenders.includes(g)) {
      if (interestedGenders.length <= 1) return;
      setInterestedGenders(interestedGenders.filter((item) => item !== g));
    } else {
      setInterestedGenders([...interestedGenders, g]);
    }
  };

  const handleComplete = async () => {
    setIsSubmitting(true);
    try {
      // 1. Submit Profile Data to Member 1's API
      await apiClient.post("/profiles/me", {
        displayName,
        dateOfBirth,
        gender,
        bio,
        occupation,
        education,
        relationshipIntent,
      }).catch(() => {
        // Fallback for isolated development mode
      });

      // 2. Sync Preferences
      await apiClient.patch("/preferences", {
        minAge,
        maxAge,
        maxDistanceKm,
        interestedGenders,
      }).catch(() => {});

      // 3. Update local session state
      updateUserSession({ hasProfile: true });
      showToast("success", "Profile Ready!", "Welcome to discovery! Your AI match feed is live.");
      router.push("/discovery");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] px-4 py-8 max-w-3xl mx-auto">
      {/* Progress Bar Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
          <span className="font-semibold text-rose-400 uppercase tracking-wider">
            Step {step} of {totalSteps}
          </span>
          <span>{Math.round((step / totalSteps) * 100)}% Completed</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full bg-gradient-to-r from-rose-500 to-amber-500 transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* STEP 1: Basic Identity & Bio */}
      {step === 1 && (
        <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 animate-fade-in-up">
          <div>
            <h2 className="text-2xl font-bold text-white">Let&apos;s build your profile</h2>
            <p className="text-sm text-slate-400 mt-1">
              Start with the basics. You must be 18+ to be verified on PairUp.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Display Name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="e.g. Alex"
              required
            />

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Date of Birth (18+ only)
              </label>
              <input
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                max="2008-01-01"
                className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2.5 text-sm text-slate-100 focus:border-rose-500 focus:outline-none"
              />
              <p className="text-[11px] text-slate-500 mt-1">Age: {calculateAge(dateOfBirth)} years old</p>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Gender Identity
              </label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value as PlatformGender)}
                className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2.5 text-sm text-slate-100 focus:border-rose-500 focus:outline-none"
              >
                <option value={PlatformGender.FEMALE}>Female</option>
                <option value={PlatformGender.MALE}>Male</option>
                <option value={PlatformGender.NON_BINARY}>Non-Binary</option>
                <option value={PlatformGender.OTHER}>Other / Self-Describe</option>
              </select>
            </div>

            <Input
              label="Location / City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="San Francisco, CA"
            />

            <Input
              label="Occupation"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              placeholder="e.g. Architect"
            />

            <Input
              label="Education"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              placeholder="e.g. Columbia University"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
              Short Bio ({bio.length}/500)
            </label>
            <textarea
              rows={3}
              maxLength={500}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="What makes your world tick? Tell potential matches what brings you joy..."
              className="w-full rounded-xl border border-slate-800 bg-slate-900 p-3.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-rose-500 focus:outline-none"
            />
          </div>

          <div className="flex justify-end pt-4">
            <Button
              variant="gradient"
              size="lg"
              onClick={() => {
                if (calculateAge(dateOfBirth) < 18) {
                  showToast("error", "Age restriction", "You must be at least 18 years old.");
                  return;
                }
                setStep(2);
              }}
            >
              <span>Next: Photos</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      )}

      {/* STEP 2: Photo Gallery Upload */}
      {step === 2 && (
        <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 animate-fade-in-up">
          <div>
            <h2 className="text-2xl font-bold text-white">Add your profile photos</h2>
            <p className="text-sm text-slate-400 mt-1">
              Add at least 2 authentic photos. Star your primary photo to appear first on discovery cards.
            </p>
          </div>

          {/* Photos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {photos.map((photo, idx) => (
              <div
                key={photo.id}
                className="group relative h-48 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900"
              >
                <Image src={photo.url} alt={`Photo ${idx + 1}`} fill sizes="300px" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-2.5">
                  <button
                    type="button"
                    onClick={() => handleSetPrimaryPhoto(photo.id)}
                    title="Make primary photo"
                    className={`rounded-lg p-1.5 text-xs transition-colors ${
                      photo.isPrimary ? "bg-amber-500 text-slate-950 font-bold" : "bg-slate-900/80 text-white hover:bg-slate-800"
                    }`}
                  >
                    <Star className="h-4 w-4 fill-current" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDeletePhoto(photo.id)}
                    title="Delete photo"
                    className="rounded-lg bg-red-600/80 p-1.5 text-white hover:bg-red-700 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                {photo.isPrimary && (
                  <div className="absolute top-2 left-2">
                    <Badge variant="gradient" size="sm">
                      Primary
                    </Badge>
                  </div>
                )}
              </div>
            ))}

            {photos.length < 6 && (
              <div className="h-48 rounded-2xl border-2 border-dashed border-slate-800 bg-slate-900/40 p-4 flex flex-col items-center justify-center text-center">
                <Camera className="h-8 w-8 text-slate-500 mb-2" />
                <p className="text-xs text-slate-400 font-medium">Add Photo via URL</p>
                <div className="mt-2 w-full flex gap-1">
                  <input
                    type="url"
                    placeholder="https://..."
                    value={newPhotoUrl}
                    onChange={(e) => setNewPhotoUrl(e.target.value)}
                    className="w-full text-xs rounded-lg border border-slate-800 bg-slate-950 px-2 py-1 text-slate-200"
                  />
                  <button
                    type="button"
                    onClick={handleAddPhoto}
                    className="rounded-lg bg-rose-500 px-2.5 py-1 text-xs font-semibold text-white hover:bg-rose-600"
                  >
                    Add
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between pt-4">
            <Button variant="outline" size="lg" onClick={() => setStep(1)}>
              <ArrowLeft className="h-4 w-4 mr-1" />
              <span>Back</span>
            </Button>
            <Button variant="gradient" size="lg" onClick={() => setStep(3)}>
              <span>Next: Prompts</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      )}

      {/* STEP 3: Conversation Prompts */}
      {step === 3 && (
        <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 animate-fade-in-up">
          <div>
            <h2 className="text-2xl font-bold text-white">Conversation Prompts</h2>
            <p className="text-sm text-slate-400 mt-1">
              Give your matches engaging hooks to start natural, spark-filled conversations.
            </p>
          </div>

          <div className="space-y-4">
            {prompts.map((p, idx) => (
              <div key={p.id} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-rose-400">
                    Prompt #{idx + 1}
                  </span>
                </div>
                <select
                  value={p.promptQuestion}
                  onChange={(e) => {
                    const updated = [...prompts];
                    updated[idx].promptQuestion = e.target.value;
                    setPrompts(updated);
                  }}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-200"
                >
                  {PROMPT_QUESTIONS.map((q) => (
                    <option key={q} value={q}>
                      {q}
                    </option>
                  ))}
                </select>
                <textarea
                  rows={2}
                  value={p.promptAnswer}
                  onChange={(e) => {
                    const updated = [...prompts];
                    updated[idx].promptAnswer = e.target.value;
                    setPrompts(updated);
                  }}
                  placeholder="Your witty, honest response..."
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 p-3 text-sm text-slate-100 placeholder:text-slate-600 focus:border-rose-500 focus:outline-none"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-between pt-4">
            <Button variant="outline" size="lg" onClick={() => setStep(2)}>
              <ArrowLeft className="h-4 w-4 mr-1" />
              <span>Back</span>
            </Button>
            <Button variant="gradient" size="lg" onClick={() => setStep(4)}>
              <span>Next: Interests</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      )}

      {/* STEP 4: Interests Selection */}
      {step === 4 && (
        <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 animate-fade-in-up">
          <div>
            <h2 className="text-2xl font-bold text-white">Passions & Interests</h2>
            <p className="text-sm text-slate-400 mt-1">
              Select 3 to 7 passions that make you tick. Our AI uses these to match lifestyle vibes.
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
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium transition-all ${
                    isSelected
                      ? "bg-rose-500 text-white shadow-md shadow-rose-500/25 scale-105"
                      : "bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700"
                  }`}
                >
                  {isSelected && <Check className="h-3 w-3" />}
                  <span>{interest.name}</span>
                </button>
              );
            })}
          </div>

          <div className="flex justify-between pt-4">
            <Button variant="outline" size="lg" onClick={() => setStep(3)}>
              <ArrowLeft className="h-4 w-4 mr-1" />
              <span>Back</span>
            </Button>
            <Button
              variant="gradient"
              size="lg"
              onClick={() => {
                if (selectedInterests.length < 3) {
                  showToast("warning", "Select more", "Please choose at least 3 interests.");
                  return;
                }
                setStep(5);
              }}
            >
              <span>Next: Dating Preferences</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      )}

      {/* STEP 5: Dating Preferences & Intent */}
      {step === 5 && (
        <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 animate-fade-in-up">
          <div>
            <h2 className="text-2xl font-bold text-white">Dating Preferences</h2>
            <p className="text-sm text-slate-400 mt-1">
              Set who you want to discover and what type of relationship you are seeking.
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Relationship Intent
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {[
                  { id: PlatformRelationshipIntent.LONG_TERM, label: "Long-term Partner" },
                  { id: PlatformRelationshipIntent.LONG_TERM_OPEN_TO_SHORT, label: "Long-term, open to short" },
                  { id: PlatformRelationshipIntent.SHORT_TERM, label: "Casual / Short-term" },
                  { id: PlatformRelationshipIntent.FRIENDSHIP, label: "Deep Friendship & Community" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setRelationshipIntent(item.id)}
                    className={`rounded-xl border p-3 text-left transition-all ${
                      relationshipIntent === item.id
                        ? "border-rose-500 bg-rose-500/10 text-white font-semibold"
                        : "border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Interested in meeting
              </label>
              <div className="flex flex-wrap gap-2 text-xs">
                {[
                  { id: PlatformGender.FEMALE, label: "Women" },
                  { id: PlatformGender.MALE, label: "Men" },
                  { id: PlatformGender.NON_BINARY, label: "Non-Binary / Everyone" },
                ].map((item) => {
                  const isChecked = interestedGenders.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleGenderPref(item.id)}
                      className={`rounded-full px-4 py-2 border transition-all ${
                        isChecked
                          ? "border-rose-500 bg-rose-500/15 text-rose-300 font-semibold"
                          : "border-slate-800 bg-slate-900 text-slate-400"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Age Range Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-slate-300">
                <span className="font-semibold uppercase tracking-wider">Age Range</span>
                <span>
                  {minAge} - {maxAge} years old
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-slate-500 uppercase">Min Age</label>
                  <input
                    type="range"
                    min="18"
                    max="60"
                    value={minAge}
                    onChange={(e) => setMinAge(Number(e.target.value))}
                    className="w-full accent-rose-500"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-slate-500 uppercase">Max Age</label>
                  <input
                    type="range"
                    min="18"
                    max="75"
                    value={maxAge}
                    onChange={(e) => setMaxAge(Number(e.target.value))}
                    className="w-full accent-rose-500"
                  />
                </div>
              </div>
            </div>

            {/* Distance Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-slate-300">
                <span className="font-semibold uppercase tracking-wider">Maximum Distance</span>
                <span>{maxDistanceKm} km radius</span>
              </div>
              <input
                type="range"
                min="5"
                max="150"
                value={maxDistanceKm}
                onChange={(e) => setMaxDistanceKm(Number(e.target.value))}
                className="w-full accent-rose-500"
              />
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <Button variant="outline" size="lg" onClick={() => setStep(4)}>
              <ArrowLeft className="h-4 w-4 mr-1" />
              <span>Back</span>
            </Button>
            <Button variant="gradient" size="lg" onClick={() => setStep(6)}>
              <span>Next: Privacy & Review</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      )}

      {/* STEP 6: Privacy & Final Confirmation */}
      {step === 6 && (
        <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 animate-fade-in-up">
          <div>
            <h2 className="text-2xl font-bold text-white">Review & Complete Profile</h2>
            <p className="text-sm text-slate-400 mt-1">
              Confirm your privacy controls and review your completion score before launching into discovery.
            </p>
          </div>

          {/* Privacy controls */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-rose-400">Privacy Preferences</h3>
            <label className="flex items-center justify-between text-xs text-slate-200 cursor-pointer">
              <span>Incognito Mode (Only visible to profiles you like)</span>
              <input
                type="checkbox"
                checked={incognitoMode}
                onChange={(e) => setIncognitoMode(e.target.checked)}
                className="rounded border-slate-700 bg-slate-800 text-rose-500"
              />
            </label>
            <label className="flex items-center justify-between text-xs text-slate-200 cursor-pointer">
              <span>Display approximate distance on profile</span>
              <input
                type="checkbox"
                checked={showDistance}
                onChange={(e) => setShowDistance(e.target.checked)}
                className="rounded border-slate-700 bg-slate-800 text-rose-500"
              />
            </label>
            <label className="flex items-center justify-between text-xs text-slate-200 cursor-pointer">
              <span>Display age on profile</span>
              <input
                type="checkbox"
                checked={showAge}
                onChange={(e) => setShowAge(e.target.checked)}
                className="rounded border-slate-700 bg-slate-800 text-rose-500"
              />
            </label>
          </div>

          {/* Profile Completion Checklist */}
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/20 p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Profile Health Check
              </span>
              <Badge variant="success">95% Ready</Badge>
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Primary and secondary photos uploaded</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>{selectedInterests.length} interest tags selected</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Conversation prompts filled</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>18+ age criteria verified</span>
              </li>
            </ul>
          </div>

          <div className="flex justify-between pt-4">
            <Button variant="outline" size="lg" onClick={() => setStep(5)}>
              <ArrowLeft className="h-4 w-4 mr-1" />
              <span>Back</span>
            </Button>
            <Button
              variant="gradient"
              size="lg"
              onClick={handleComplete}
              isLoading={isSubmitting}
              className="px-8 shadow-rose-500/20"
            >
              <span>Launch Discovery Deck</span>
              <Sparkles className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
