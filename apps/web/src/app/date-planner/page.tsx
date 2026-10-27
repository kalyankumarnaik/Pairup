"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/toast";
import {
  Sparkles,
  MapPin,
  Calendar,
  Utensils,
  Compass,
  DollarSign,
  Coffee,
  Wine,
  Share2,
  Clock,
  ArrowRight,
  Loader2,
} from "lucide-react";

interface DatePlanIdea {
  id: string;
  title: string;
  tagline: string;
  vibe: string;
  budget: "$" | "$$" | "$$$";
  venue: string;
  location: string;
  icebreakers: string[];
  schedule: Array<{ time: string; activity: string }>;
  imageUrl: string;
}

const PRESET_IDEAS: DatePlanIdea[] = [
  {
    id: "plan-1",
    title: "Twilight Vinyl & Pour-Over Ritual",
    tagline: "Low pressure, rich sensory connection & intimate conversations",
    vibe: "Artistic & Cozy",
    budget: "$$",
    venue: "Sightglass Roastery & Groove Merchant Records",
    location: "Mission District, San Francisco",
    icebreakers: [
      "What album completely changed how you view music?",
      "If you could teleport to any concert in history, where are you going?",
    ],
    schedule: [
      { time: "4:00 PM", activity: "Meet for slow-drip single-origin coffee" },
      { time: "5:15 PM", activity: "Browse vintage jazz & indie records together" },
      { time: "6:30 PM", activity: "Stroll over to Dolores Park for sunset golden hour" },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "plan-2",
    title: "Bouldering & Craft Gelato Challenge",
    tagline: "High playful energy, shared teamwork & sweet reward",
    vibe: "Active & Spontaneous",
    budget: "$$",
    venue: "Dogpatch Boulders & Salt & Straw",
    location: "Dogpatch, SF",
    icebreakers: [
      "Are you more of an adrenaline seeker or a cozy homebody?",
      "Rank the 3 most controversial ice cream flavors.",
    ],
    schedule: [
      { time: "3:00 PM", activity: "Warm up and solve fun bouldering climbing routes together" },
      { time: "5:00 PM", activity: "Walk through historic Dogpatch galleries" },
      { time: "5:45 PM", activity: "Try artisanal gelato flight tasting" },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "plan-3",
    title: "Rooftop Stargazing & Tapas",
    tagline: "Romantic skyline vistas, warm fire pits & shareable bites",
    vibe: "Romantic & Elevated",
    budget: "$$$",
    venue: "El Techo & Community Stargazing Terrace",
    location: "San Francisco",
    icebreakers: [
      "What is something you believed passionately as a child that turned out to be false?",
      "What is the most memorable travel meal you've ever had?",
    ],
    schedule: [
      { time: "7:00 PM", activity: "Cocktails and Argentine tapas under outdoor heaters" },
      { time: "8:30 PM", activity: "Night panoramic views of SF downtown skyline" },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800",
  },
];

export default function DatePlannerPage() {
  const { showToast } = useToast();
  const [selectedVibe, setSelectedVibe] = useState("Cozy Coffee & Culture");
  const [selectedBudget, setSelectedBudget] = useState("$$");
  const [isGenerating, setIsGenerating] = useState(false);
  const [activePlan, setActivePlan] = useState<DatePlanIdea>(PRESET_IDEAS[0]);

  const handleGeneratePlan = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      // Pick next or random plan
      const nextPlan = PRESET_IDEAS[Math.floor(Math.random() * PRESET_IDEAS.length)];
      setActivePlan(nextPlan);
      showToast("success", "Itinerary Generated!", "Curated AI date itinerary is ready.");
    }, 800);
  };

  const handleSharePlan = () => {
    navigator.clipboard?.writeText(window.location.href);
    showToast("info", "Link Copied", "Date plan itinerary copied to clipboard.");
  };

  return (
    <div className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <Badge variant="gradient" size="sm">
          <Sparkles className="h-3.5 w-3.5 mr-1" />
          AI Date Concierge
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Turn digital chemistry into real moments
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          Tell us your ideal vibe and budget. Our AI date concierge crafts a tailored 3-step date itinerary complete with curated venues and non-awkward icebreakers.
        </p>
      </div>

      {/* Generator Controls */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Vibe selection */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
              Select Desired Vibe
            </label>
            <div className="space-y-1.5">
              {[
                "Cozy Coffee & Culture",
                "Playful & Active",
                "Cocktails & Skyline",
                "Art Walk & Street Food",
              ].map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setSelectedVibe(v)}
                  className={`w-full text-left rounded-xl px-3.5 py-2.5 text-xs font-semibold transition-all ${
                    selectedVibe === v
                      ? "bg-rose-500 text-white shadow-md shadow-rose-500/20"
                      : "bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Budget & Location */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                Budget Level
              </label>
              <div className="grid grid-cols-3 gap-2">
                {["$", "$$", "$$$"].map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setSelectedBudget(b)}
                    className={`rounded-xl py-2.5 text-xs font-bold transition-all text-center ${
                      selectedBudget === b
                        ? "bg-amber-500 text-slate-950 shadow-md"
                        : "bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1.5 pt-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                City / Neighborhood
              </label>
              <div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-xs text-slate-200">
                <MapPin className="h-4 w-4 text-rose-500 shrink-0" />
                <span>San Francisco, Bay Area (Auto-detected)</span>
              </div>
            </div>
          </div>
        </div>

        <Button
          variant="gradient"
          size="lg"
          className="w-full"
          onClick={handleGeneratePlan}
          isLoading={isGenerating}
        >
          <Sparkles className="h-4 w-4 mr-2" />
          <span>Generate Tailored Date Itinerary</span>
        </Button>
      </div>

      {/* Generated Itinerary Card Showcase */}
      {activePlan && (
        <div className="glass-card rounded-3xl overflow-hidden border border-slate-800 max-w-4xl mx-auto shadow-2xl animate-fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Visual Cover */}
            <div className="relative h-64 md:h-auto min-h-[300px]">
              <Image
                src={activePlan.imageUrl}
                alt={activePlan.title}
                fill
                sizes="500px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute top-4 left-4 flex gap-2">
                <Badge variant="gradient">{activePlan.vibe}</Badge>
                <Badge variant="secondary">{activePlan.budget}</Badge>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-2xl font-bold">{activePlan.title}</h3>
                <p className="text-xs text-slate-300 mt-1">{activePlan.tagline}</p>
              </div>
            </div>

            {/* Itinerary Details */}
            <div className="p-6 sm:p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-5">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Venue & Location
                  </h4>
                  <p className="text-sm font-semibold text-white flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-rose-400" />
                    <span>{activePlan.venue}</span>
                  </p>
                  <p className="text-xs text-slate-400 ml-5">{activePlan.location}</p>
                </div>

                {/* Timeline */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Suggested Timeline
                  </h4>
                  <div className="space-y-2 text-xs">
                    {activePlan.schedule.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <span className="font-mono text-rose-400 font-bold shrink-0">{step.time}</span>
                        <span className="text-slate-200">{step.activity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Icebreakers */}
                <div className="rounded-2xl border border-amber-500/20 bg-amber-950/20 p-4 space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Suggested Icebreakers</span>
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {activePlan.icebreakers.map((ib, idx) => (
                      <li key={idx}>“{ib}”</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Share & Invite CTA */}
              <div className="pt-4 flex gap-3 border-t border-slate-800">
                <Button variant="secondary" size="md" className="flex-1" onClick={handleSharePlan}>
                  <Share2 className="h-4 w-4 mr-1.5" />
                  <span>Share Plan</span>
                </Button>
                <Button
                  variant="gradient"
                  size="md"
                  className="flex-1"
                  onClick={() =>
                    showToast("success", "Added to Chat", "Itinerary invitation inserted into chat.")
                  }
                >
                  <Calendar className="h-4 w-4 mr-1.5" />
                  <span>Send to Match</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
