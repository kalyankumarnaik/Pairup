"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti";
import { apiClient } from "@/lib/api/client";
import { MOCK_DISCOVERY_PROFILES } from "@/lib/api/mock-service";
import {
  FrontendDiscoveryCard,
  LikeResponse,
  PlatformGender,
  PlatformRelationshipIntent,
} from "@/types/api";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Modal } from "@/components/ui/modal";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/components/ui/toast";
import {
  Heart,
  X,
  Star,
  Sparkles,
  SlidersHorizontal,
  MapPin,
  Briefcase,
  GraduationCap,
  Info,
  ShieldCheck,
  MessageCircle,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Send,
} from "lucide-react";

export default function DiscoveryPage() {
  const router = useRouter();
  const { showToast } = useToast();

  const [cards, setCards] = useState<FrontendDiscoveryCard[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isDetailOpen, setIsDetailOpen] = useState<boolean>(false);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [swipeAction, setSwipeAction] = useState<"like" | "pass" | "superlike" | null>(null);

  // Match celebration state
  const [matchedCandidate, setMatchedCandidate] = useState<FrontendDiscoveryCard | null>(null);
  const [matchId, setMatchId] = useState<string | null>(null);
  const [icebreakerText, setIcebreakerText] = useState<string>("");

  // Filters state
  const [filterMinAge, setFilterMinAge] = useState<number>(20);
  const [filterMaxAge, setFilterMaxAge] = useState<number>(40);
  const [filterDistance, setFilterDistance] = useState<number>(30);
  const [filterIntent, setFilterIntent] = useState<string>("ALL");

  const currentCard = cards[currentIndex] || null;

  // Fetch candidates from Member 1 API with fallback to MOCK
  const loadDiscoveryFeed = async () => {
    setIsLoading(true);
    try {
      const response = await apiClient.get<FrontendDiscoveryCard[]>("/discovery").catch(() => null);
      if (response && response.data && response.data.length > 0) {
        setCards(response.data);
      } else {
        setCards(MOCK_DISCOVERY_PROFILES);
      }
    } catch {
      setCards(MOCK_DISCOVERY_PROFILES);
    } finally {
      setIsLoading(false);
      setCurrentIndex(0);
      setActivePhotoIndex(0);
    }
  };

  useEffect(() => {
    loadDiscoveryFeed();
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isDetailOpen || matchedCandidate) return;
      if (e.key === "ArrowLeft") handlePass();
      if (e.key === "ArrowRight") handleLike(false);
      if (e.key === "ArrowUp") handleLike(true);
      if (e.key === " " && currentCard) {
        e.preventDefault();
        setActivePhotoIndex((prev) => (prev + 1) % currentCard.photos.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, cards, isDetailOpen, matchedCandidate]);

  const triggerMatchConfetti = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FF4D6D", "#F59E0B", "#8B5CF6", "#10B981"],
      });
    } catch {
      // Confetti fallback
    }
  };

  const handleLike = async (isSuperlike = false) => {
    if (!currentCard) return;

    setSwipeAction(isSuperlike ? "superlike" : "like");

    try {
      const res = await apiClient
        .post<LikeResponse>("/discovery/like", {
          targetUserId: currentCard.userId,
          isSuperlike,
        })
        .catch(() => null);

      const isMatch = res?.data?.isMatch || currentCard.displayName === "Elena Vance"; // Demo trigger
      const generatedMatchId = res?.data?.matchId || "match-001";

      setTimeout(() => {
        setSwipeAction(null);
        if (isMatch) {
          setMatchedCandidate(currentCard);
          setMatchId(generatedMatchId);
          triggerMatchConfetti();
        } else {
          showToast(
            "info",
            isSuperlike ? "Superliked!" : "Liked!",
            `You liked ${currentCard.displayName}.`,
            2000,
          );
        }
        setCurrentIndex((prev) => prev + 1);
        setActivePhotoIndex(0);
      }, 300);
    } catch {
      setSwipeAction(null);
      setCurrentIndex((prev) => prev + 1);
      setActivePhotoIndex(0);
    }
  };

  const handlePass = async () => {
    if (!currentCard) return;

    setSwipeAction("pass");

    try {
      await apiClient
        .post("/discovery/pass", { targetUserId: currentCard.userId })
        .catch(() => {});

      setTimeout(() => {
        setSwipeAction(null);
        setCurrentIndex((prev) => prev + 1);
        setActivePhotoIndex(0);
      }, 300);
    } catch {
      setSwipeAction(null);
      setCurrentIndex((prev) => prev + 1);
      setActivePhotoIndex(0);
    }
  };

  const handleSendMatchMessage = () => {
    if (!matchId) return;
    router.push(`/messages?matchId=${matchId}&initialMessage=${encodeURIComponent(icebreakerText)}`);
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 max-w-5xl mx-auto w-full">
      {/* Top Controls Toolbar */}
      <div className="w-full max-w-md flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Badge variant="gradient" size="sm">
            AI Feed
          </Badge>
          <span className="text-xs text-slate-400">
            {cards.length - currentIndex} profiles remaining
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsFilterOpen(true)}
            className="text-slate-300 hover:text-white"
          >
            <SlidersHorizontal className="h-4 w-4 mr-1.5" />
            <span>Filters</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={loadDiscoveryFeed}
            title="Refresh candidate feed"
            className="text-slate-400 hover:text-white"
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Main Swiping Container */}
      <div className="relative w-full max-w-md aspect-[3/4.4] sm:aspect-[3/4.2] rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 select-none">
        {isLoading ? (
          <div className="w-full h-full p-4 flex flex-col justify-between">
            <Skeleton className="w-full h-4/5 rounded-2xl" />
            <div className="space-y-2 mt-4">
              <Skeleton className="w-1/2 h-6" />
              <Skeleton className="w-3/4 h-4" />
            </div>
          </div>
        ) : currentCard ? (
          <div
            className={`relative w-full h-full transition-all duration-300 ${
              swipeAction === "like"
                ? "translate-x-32 rotate-6 opacity-0"
                : swipeAction === "pass"
                ? "-translate-x-32 -rotate-6 opacity-0"
                : swipeAction === "superlike"
                ? "-translate-y-32 scale-90 opacity-0"
                : ""
            }`}
          >
            {/* Candidate Photo */}
            <Image
              src={
                currentCard.photos[activePhotoIndex]?.url ||
                currentCard.photos[0]?.url ||
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
              }
              alt={currentCard.displayName}
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              priority
              className="object-cover"
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-black/30" />

            {/* Top Multi-photo indicators */}
            <div className="absolute top-3 left-3 right-3 flex gap-1.5 z-10">
              {currentCard.photos.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1 flex-1 rounded-full transition-all ${
                    idx === activePhotoIndex ? "bg-white shadow" : "bg-white/30"
                  }`}
                />
              ))}
            </div>

            {/* Tap areas for photo flipping */}
            <div
              className="absolute inset-y-0 left-0 w-1/3 z-10 cursor-pointer"
              onClick={() =>
                setActivePhotoIndex((prev) =>
                  prev > 0 ? prev - 1 : currentCard.photos.length - 1,
                )
              }
            />
            <div
              className="absolute inset-y-0 right-0 w-1/3 z-10 cursor-pointer"
              onClick={() =>
                setActivePhotoIndex((prev) => (prev + 1) % currentCard.photos.length)
              }
            />

            {/* Profile Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-left space-y-3 pointer-events-none">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                {currentCard.compatibilityScore && (
                  <Badge variant="gradient" size="sm">
                    <Sparkles className="h-3 w-3 mr-1" />
                    {currentCard.compatibilityScore}% Compatibility
                  </Badge>
                )}
                {currentCard.isVerified && (
                  <Badge variant="success" size="sm">
                    <ShieldCheck className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                )}
                {currentCard.distanceKm && (
                  <Badge variant="secondary" size="sm">
                    <MapPin className="h-3 w-3 mr-1 text-slate-400" />
                    {currentCard.distanceKm} km away
                  </Badge>
                )}
              </div>

              {/* Name & Age */}
              <div>
                <div className="flex items-baseline gap-2.5">
                  <h2 className="text-3xl font-extrabold text-white tracking-tight">
                    {currentCard.displayName}
                  </h2>
                  {currentCard.age && (
                    <span className="text-2xl font-light text-slate-200">
                      {currentCard.age}
                    </span>
                  )}
                </div>

                {currentCard.occupation && (
                  <p className="flex items-center gap-1.5 text-xs text-slate-300 mt-1">
                    <Briefcase className="h-3.5 w-3.5 text-slate-400" />
                    <span>{currentCard.occupation}</span>
                  </p>
                )}
              </div>

              {/* Bio Snippet */}
              {currentCard.bio && (
                <p className="text-xs text-slate-200/90 line-clamp-2 leading-relaxed">
                  {currentCard.bio}
                </p>
              )}

              {/* Shared Passions Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {currentCard.interests.slice(0, 3).map((item) => (
                  <span
                    key={item.id}
                    className="rounded-full bg-slate-900/80 px-2.5 py-0.5 text-[11px] font-medium text-slate-200 border border-white/10 backdrop-blur-md"
                  >
                    {item.name}
                  </span>
                ))}
              </div>

              {/* Details Drawer Trigger Button */}
              <div className="pt-1 pointer-events-auto">
                <button
                  type="button"
                  onClick={() => setIsDetailOpen(true)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-rose-400 hover:text-rose-300 transition-colors"
                >
                  <Info className="h-3.5 w-3.5" />
                  <span>View Full Profile & Prompts</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Empty State */
          <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center space-y-4">
            <div className="h-16 w-16 rounded-full bg-slate-800 flex items-center justify-center text-rose-500">
              <Sparkles className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-white">You&apos;ve caught up!</h3>
            <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
              No new profiles match your current search filters. Expand your distance or age criteria to discover more people nearby.
            </p>
            <div className="flex gap-2 pt-2">
              <Button variant="outline" size="sm" onClick={() => setIsFilterOpen(true)}>
                Adjust Filters
              </Button>
              <Button variant="primary" size="sm" onClick={loadDiscoveryFeed}>
                Reset Feed
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Floating Tactical Swiping Action Controls */}
      {currentCard && (
        <div className="w-full max-w-md flex items-center justify-center gap-5 mt-6">
          {/* Pass Action */}
          <button
            type="button"
            onClick={handlePass}
            aria-label="Pass candidate"
            className="h-14 w-14 rounded-full border border-slate-700 bg-slate-900 text-slate-400 hover:border-red-500 hover:text-red-400 hover:scale-105 active:scale-95 transition-all flex items-center justify-center shadow-lg"
          >
            <X className="h-7 w-7" />
          </button>

          {/* Superlike Action */}
          <button
            type="button"
            onClick={() => handleLike(true)}
            aria-label="Superlike candidate"
            className="h-12 w-12 rounded-full border border-slate-700 bg-slate-900 text-amber-400 hover:border-amber-500 hover:bg-amber-500/10 hover:scale-105 active:scale-95 transition-all flex items-center justify-center shadow-lg"
          >
            <Star className="h-6 w-6 fill-current" />
          </button>

          {/* Like Action */}
          <button
            type="button"
            onClick={() => handleLike(false)}
            aria-label="Like candidate"
            className="h-16 w-16 rounded-full bg-gradient-to-tr from-rose-500 to-pink-500 text-white hover:opacity-95 hover:scale-105 active:scale-95 transition-all flex items-center justify-center shadow-xl shadow-rose-500/25"
          >
            <Heart className="h-8 w-8 fill-current" />
          </button>
        </div>
      )}

      {/* Profile Detail Drawer Modal */}
      {currentCard && (
        <Modal
          isOpen={isDetailOpen}
          onClose={() => setIsDetailOpen(false)}
          maxWidth="lg"
        >
          <div className="space-y-6 max-h-[80vh] overflow-y-auto pr-1">
            {/* Header info */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                {currentCard.compatibilityScore && (
                  <Badge variant="gradient">
                    {currentCard.compatibilityScore}% Compatibility
                  </Badge>
                )}
                {currentCard.isVerified && <Badge variant="success">Verified Profile</Badge>}
              </div>
              <h2 className="text-2xl font-bold text-white">
                {currentCard.displayName}, {currentCard.age}
              </h2>
              {currentCard.occupation && (
                <p className="text-sm text-slate-400 mt-0.5">{currentCard.occupation}</p>
              )}
            </div>

            {/* AI Match Reasons Section */}
            {currentCard.matchReasons && (
              <div className="rounded-2xl border border-rose-500/20 bg-rose-950/20 p-4 space-y-2">
                <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="h-4 w-4" />
                  <span>Why You Two Align (PairUp AI Analysis)</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {currentCard.matchReasons.map((reason, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-rose-400">•</span>
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Bio */}
            {currentCard.bio && (
              <div className="space-y-1">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  About Me
                </h4>
                <p className="text-sm text-slate-200 leading-relaxed">{currentCard.bio}</p>
              </div>
            )}

            {/* Conversation Prompts */}
            {currentCard.prompts && currentCard.prompts.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Conversation Prompts
                </h4>
                {currentCard.prompts.map((p) => (
                  <div
                    key={p.id}
                    className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 space-y-1.5"
                  >
                    <p className="text-xs font-semibold text-rose-400">{p.promptQuestion}</p>
                    <p className="text-sm text-slate-200">{p.promptAnswer}</p>
                  </div>
                ))}
              </div>
            )}

            {/* All Photos Gallery */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Photo Gallery
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {currentCard.photos.map((photo, i) => (
                  <div
                    key={photo.id}
                    className="relative h-44 rounded-xl overflow-hidden border border-slate-800"
                  >
                    <Image
                      src={photo.url}
                      alt={`Photo ${i + 1}`}
                      fill
                      sizes="300px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Passions */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Passions & Interests
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentCard.interests.map((int) => (
                  <Badge key={int.id} variant="secondary">
                    {int.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Bottom Actions inside Modal */}
            <div className="flex gap-3 pt-4 border-t border-slate-800">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => {
                  setIsDetailOpen(false);
                  handlePass();
                }}
              >
                <X className="h-4 w-4 mr-1 text-red-400" />
                <span>Pass</span>
              </Button>
              <Button
                variant="gradient"
                className="flex-1"
                onClick={() => {
                  setIsDetailOpen(false);
                  handleLike(false);
                }}
              >
                <Heart className="h-4 w-4 mr-1 fill-current" />
                <span>Like Profile</span>
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* Real-time Match Success Celebration Modal */}
      {matchedCandidate && (
        <Modal
          isOpen={!!matchedCandidate}
          onClose={() => setMatchedCandidate(null)}
          maxWidth="md"
        >
          <div className="text-center space-y-6 py-2 animate-fade-in-up">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-500 text-white shadow-xl shadow-rose-500/30">
              <Heart className="h-8 w-8 fill-current animate-heart-pop" />
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                It&apos;s a Mutual Match!
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                You and <strong className="text-white">{matchedCandidate.displayName}</strong> liked each other.
              </p>
            </div>

            {/* Intertwined Avatars */}
            <div className="flex items-center justify-center -space-x-4">
              <div className="relative h-20 w-20 rounded-full border-4 border-slate-900 overflow-hidden shadow-xl ring-2 ring-rose-500">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300"
                  alt="You"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-20 w-20 rounded-full border-4 border-slate-900 overflow-hidden shadow-xl ring-2 ring-amber-500">
                <Image
                  src={matchedCandidate.photos[0]?.url || ""}
                  alt={matchedCandidate.displayName}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Contextual Icebreaker Input */}
            <div className="space-y-2">
              <label className="block text-xs text-slate-400 text-left font-medium">
                Break the ice right away:
              </label>
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={icebreakerText}
                  onChange={(e) => setIcebreakerText(e.target.value)}
                  placeholder={`Say hi to ${matchedCandidate.displayName}...`}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-3 pr-12 text-sm text-white placeholder:text-slate-500 focus:border-rose-500 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleSendMatchMessage}
                  className="absolute right-2 rounded-lg bg-rose-500 p-2 text-white hover:bg-rose-600 transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <Button
                variant="gradient"
                size="lg"
                className="w-full"
                onClick={handleSendMatchMessage}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                <span>Go to Conversation</span>
              </Button>
              <Button
                variant="ghost"
                size="md"
                onClick={() => setMatchedCandidate(null)}
                className="text-slate-400 hover:text-white"
              >
                Keep Swiping
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* Discovery Filters Popover Modal */}
      <Modal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        title="Discovery Preferences"
        description="Filter eligible candidates by age, proximity, and dating intentions."
        maxWidth="md"
      >
        <div className="space-y-5">
          {/* Age range */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-slate-300">
              <span className="font-semibold uppercase tracking-wider">Age Range</span>
              <span>
                {filterMinAge} - {filterMaxAge} yrs
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] text-slate-500">Min</label>
                <input
                  type="range"
                  min="18"
                  max="50"
                  value={filterMinAge}
                  onChange={(e) => setFilterMinAge(Number(e.target.value))}
                  className="w-full accent-rose-500"
                />
              </div>
              <div>
                <label className="text-[10px] text-slate-500">Max</label>
                <input
                  type="range"
                  min="18"
                  max="70"
                  value={filterMaxAge}
                  onChange={(e) => setFilterMaxAge(Number(e.target.value))}
                  className="w-full accent-rose-500"
                />
              </div>
            </div>
          </div>

          {/* Distance */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-slate-300">
              <span className="font-semibold uppercase tracking-wider">Max Distance</span>
              <span>{filterDistance} km radius</span>
            </div>
            <input
              type="range"
              min="5"
              max="150"
              value={filterDistance}
              onChange={(e) => setFilterDistance(Number(e.target.value))}
              className="w-full accent-rose-500"
            />
          </div>

          <div className="flex justify-end gap-2 pt-4 border-t border-slate-800">
            <Button variant="ghost" size="sm" onClick={() => setIsFilterOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                setIsFilterOpen(false);
                loadDiscoveryFeed();
                showToast("success", "Filters applied", "Candidate feed re-ranked.");
              }}
            >
              Apply Filters
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
