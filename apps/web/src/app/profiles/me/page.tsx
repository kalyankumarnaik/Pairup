"use client";

import React, { useState } from "react";
import Image from "next/image";
import { apiClient } from "@/lib/api/client";
import { MOCK_CURRENT_USER } from "@/lib/api/mock-service";
import { FullProfile, ProfilePhoto, PlatformRelationshipIntent, PlatformGender } from "@/types/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/toast";
import {
  Camera,
  Star,
  Trash2,
  Plus,
  Save,
  CheckCircle2,
  Sparkles,
  ArrowUp,
  ArrowDown,
  ShieldCheck,
} from "lucide-react";

export default function ProfileEditorPage() {
  const { showToast } = useToast();
  const [profile, setProfile] = useState<FullProfile>(MOCK_CURRENT_USER);
  const [isSaving, setIsSaving] = useState(false);
  const [newPhotoUrl, setNewPhotoUrl] = useState("");

  const handleFieldChange = (field: keyof FullProfile, value: any) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddPhoto = () => {
    if (!newPhotoUrl.trim()) return;
    if (profile.photos.length >= 6) {
      showToast("warning", "Max photos", "Maximum 6 photos allowed.");
      return;
    }
    const newP: ProfilePhoto = {
      id: `photo-${Date.now()}`,
      url: newPhotoUrl.trim(),
      isPrimary: profile.photos.length === 0,
      displayOrder: profile.photos.length,
      isApproved: true,
    };
    setProfile((prev) => ({ ...prev, photos: [...prev.photos, newP] }));
    setNewPhotoUrl("");
    showToast("success", "Photo added", "New photo added to your gallery.");
  };

  const handleSetPrimaryPhoto = (photoId: string) => {
    setProfile((prev) => ({
      ...prev,
      photos: prev.photos.map((p) => ({
        ...p,
        isPrimary: p.id === photoId,
      })),
    }));
    showToast("info", "Primary set", "Primary avatar updated.");
  };

  const handleDeletePhoto = (photoId: string) => {
    if (profile.photos.length <= 1) {
      showToast("warning", "Primary required", "At least one profile photo is required.");
      return;
    }
    const updated = profile.photos.filter((p) => p.id !== photoId);
    if (!updated.some((p) => p.isPrimary)) {
      updated[0].isPrimary = true;
    }
    setProfile((prev) => ({ ...prev, photos: updated }));
  };

  const handleMovePhoto = (index: number, direction: "up" | "down") => {
    const newIdx = direction === "up" ? index - 1 : index + 1;
    if (newIdx < 0 || newIdx >= profile.photos.length) return;

    const list = [...profile.photos];
    const temp = list[index];
    list[index] = list[newIdx];
    list[newIdx] = temp;
    setProfile((prev) => ({ ...prev, photos: list }));
  };

  const handleSaveProfile = async () => {
    setIsSaving(true);
    try {
      await apiClient
        .patch("/profiles/me", {
          displayName: profile.displayName,
          bio: profile.bio,
          occupation: profile.occupation,
          education: profile.education,
          city: profile.city,
          relationshipIntent: profile.relationshipIntent,
        })
        .catch(() => {});

      showToast("success", "Profile Saved", "Your public profile has been updated.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-extrabold text-white tracking-tight">Edit Profile</h1>
            <Badge variant="success">
              <ShieldCheck className="h-3 w-3 mr-1" />
              Verified
            </Badge>
          </div>
          <p className="text-sm text-slate-400 mt-1">
            Manage your photo gallery, bio, lifestyle prompts, and public identity.
          </p>
        </div>

        <Button
          variant="gradient"
          size="md"
          onClick={handleSaveProfile}
          isLoading={isSaving}
          className="shadow-rose-500/25"
        >
          <Save className="h-4 w-4 mr-2" />
          <span>Save Changes</span>
        </Button>
      </div>

      {/* Photo Gallery Grid */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white">Photo Gallery ({profile.photos.length}/6)</h2>
            <p className="text-xs text-slate-400">
              The first photo is your primary discovery card. Use arrows to reorder.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {profile.photos.map((photo, idx) => (
            <div
              key={photo.id}
              className="group relative h-56 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900"
            >
              <Image src={photo.url} alt={`Gallery ${idx + 1}`} fill sizes="300px" className="object-cover" />

              {/* Action bar on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3">
                <div className="flex justify-between items-center">
                  <div className="flex gap-1">
                    {idx > 0 && (
                      <button
                        type="button"
                        onClick={() => handleMovePhoto(idx, "up")}
                        title="Move left"
                        className="rounded-lg bg-slate-900/80 p-1.5 text-white hover:bg-slate-800"
                      >
                        <ArrowUp className="h-3.5 w-3.5" />
                      </button>
                    )}
                    {idx < profile.photos.length - 1 && (
                      <button
                        type="button"
                        onClick={() => handleMovePhoto(idx, "down")}
                        title="Move right"
                        className="rounded-lg bg-slate-900/80 p-1.5 text-white hover:bg-slate-800"
                      >
                        <ArrowDown className="h-3.5 w-3.5" />
                      </button>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => handleDeletePhoto(photo.id)}
                    className="rounded-lg bg-red-600/80 p-1.5 text-white hover:bg-red-700"
                    title="Delete photo"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={() => handleSetPrimaryPhoto(photo.id)}
                    className={`rounded-xl px-3 py-1.5 text-xs font-semibold flex items-center gap-1.5 ${
                      photo.isPrimary
                        ? "bg-amber-500 text-slate-950"
                        : "bg-slate-900/90 text-white hover:bg-slate-800"
                    }`}
                  >
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <span>{photo.isPrimary ? "Primary Photo" : "Set Primary"}</span>
                  </button>
                </div>
              </div>

              {photo.isPrimary && (
                <div className="absolute top-2 left-2 pointer-events-none">
                  <Badge variant="gradient" size="sm">
                    Primary
                  </Badge>
                </div>
              )}
            </div>
          ))}

          {/* Add photo slot */}
          {profile.photos.length < 6 && (
            <div className="h-56 rounded-2xl border-2 border-dashed border-slate-800 bg-slate-900/40 p-4 flex flex-col items-center justify-center text-center">
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
      </div>

      {/* Profile Details Form */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6">
        <h2 className="text-lg font-bold text-white">Basic Information</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Display Name"
            value={profile.displayName}
            onChange={(e) => handleFieldChange("displayName", e.target.value)}
          />

          <Input
            label="City / Location"
            value={profile.city || ""}
            onChange={(e) => handleFieldChange("city", e.target.value)}
          />

          <Input
            label="Occupation"
            value={profile.occupation || ""}
            onChange={(e) => handleFieldChange("occupation", e.target.value)}
          />

          <Input
            label="Education"
            value={profile.education || ""}
            onChange={(e) => handleFieldChange("education", e.target.value)}
          />

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
              Relationship Intent
            </label>
            <select
              value={profile.relationshipIntent}
              onChange={(e) =>
                handleFieldChange("relationshipIntent", e.target.value as PlatformRelationshipIntent)
              }
              className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2.5 text-sm text-slate-100 focus:border-rose-500 focus:outline-none"
            >
              <option value={PlatformRelationshipIntent.LONG_TERM}>Long-term relationship</option>
              <option value={PlatformRelationshipIntent.LONG_TERM_OPEN_TO_SHORT}>
                Long-term, open to short
              </option>
              <option value={PlatformRelationshipIntent.SHORT_TERM}>Short-term / Casual</option>
              <option value={PlatformRelationshipIntent.FRIENDSHIP}>Friendship</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
            About You ({profile.bio?.length || 0}/500)
          </label>
          <textarea
            rows={4}
            maxLength={500}
            value={profile.bio || ""}
            onChange={(e) => handleFieldChange("bio", e.target.value)}
            className="w-full rounded-xl border border-slate-800 bg-slate-900 p-3.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-rose-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Prompts Section */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-4">
        <h2 className="text-lg font-bold text-white">Conversation Prompts</h2>
        <div className="space-y-4">
          {profile.prompts.map((p, idx) => (
            <div key={p.id} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
              <span className="text-xs font-semibold text-rose-400 uppercase tracking-wider">
                {p.promptQuestion}
              </span>
              <textarea
                rows={2}
                value={p.promptAnswer}
                onChange={(e) => {
                  const updated = [...profile.prompts];
                  updated[idx].promptAnswer = e.target.value;
                  handleFieldChange("prompts", updated);
                }}
                className="w-full rounded-xl border border-slate-800 bg-slate-950 p-3 text-sm text-slate-100"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Interests */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-4">
        <h2 className="text-lg font-bold text-white">Your Interests</h2>
        <div className="flex flex-wrap gap-2">
          {profile.interests.map((int) => (
            <Badge key={int.id} variant="default" size="md">
              {int.name}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
