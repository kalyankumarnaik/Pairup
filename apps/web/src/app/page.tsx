"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ShieldCheck,
  Heart,
  Compass,
  ArrowRight,
  Flame,
  CheckCircle2,
  Users,
  MessageSquare,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function LandingPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background ambient glowing gradients */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-rose-500/15 via-pink-500/10 to-amber-500/15 blur-3xl" />

      {/* Hero Section */}
      <section className="relative px-4 pt-16 pb-20 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/25 bg-rose-500/10 px-4 py-1.5 text-xs font-semibold text-rose-300 mb-8 animate-fade-in-up">
          <Sparkles className="h-4 w-4 text-rose-400" />
          <span>Next-Generation AI Compatibility Engine 2.0</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          Stop swiping blindly. <br />
          <span className="gradient-text">Connect with intelligence.</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          PairUp unites deep compatibility vectors, verified human profiles, and smart AI date concierges to spark relationships that actually last.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/auth/register">
            <Button size="lg" variant="gradient" className="w-full sm:w-auto text-base px-8 py-3.5 shadow-rose-500/25">
              <span>Find Your Match</span>
              <ArrowRight className="h-5 w-5 ml-1" />
            </Button>
          </Link>
          <Link href="/discovery">
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base px-8 py-3.5">
              <span>Explore Live Demo</span>
            </Button>
          </Link>
        </div>

        {/* Security badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>100% ID & Photo Verified Profiles</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Lock className="h-4 w-4 text-rose-400" />
            <span>Zero Spam & Bot Tolerance</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Heart className="h-4 w-4 text-pink-400" />
            <span>Intentional Dating First</span>
          </div>
        </div>

        {/* Hero Interactive Mockup Showcase */}
        <div className="mt-16 relative mx-auto max-w-4xl">
          <div className="relative rounded-3xl border border-slate-800 bg-slate-900/60 p-3 sm:p-4 shadow-2xl backdrop-blur-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {/* Left Column: Candidate Highlight */}
              <div className="md:col-span-2 relative h-[440px] rounded-2xl overflow-hidden group shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=900"
                  alt="Candidate Elena"
                  fill
                  sizes="600px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="gradient">94% Compatibility</Badge>
                    <Badge variant="success">Verified</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Elena Vance, 27</h3>
                  <p className="text-sm text-slate-300 mt-1 line-clamp-2">
                    Neuroscience researcher at UCSF. Passionate about trail running, jazz, and pub trivia.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <span className="rounded-md bg-white/10 px-2 py-0.5 text-xs text-white backdrop-blur-md">
                      Trail Running
                    </span>
                    <span className="rounded-md bg-white/10 px-2 py-0.5 text-xs text-white backdrop-blur-md">
                      Neuroscience
                    </span>
                    <span className="rounded-md bg-white/10 px-2 py-0.5 text-xs text-white backdrop-blur-md">
                      Pub Trivia
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: AI Analysis Card */}
              <div className="space-y-4 text-left p-2">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 space-y-3">
                  <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-wider">
                    <Sparkles className="h-4 w-4" />
                    <span>Why You Align</span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Shared intellectual curiosity and love for spontaneous weekend exploration.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Both seeking long-term intentional commitment.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Located within 4 km with mutual lifestyle paces.</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
                  <p className="text-xs text-slate-400 mb-1">Recommended Date Spot</p>
                  <p className="text-sm font-semibold text-white">Sightglass Coffee & Dolores Park</p>
                  <p className="text-xs text-slate-400 mt-1">Curated by PairUp Date Concierge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="border-y border-slate-800/80 bg-slate-900/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-white">250K+</p>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">Meaningful Matches</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-rose-500">91%</p>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">First-Message Reply Rate</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-white">100%</p>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">AI Safety Verified</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-amber-400">4.9 / 5</p>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">Dater Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Feature Pillar Deep Dive */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="default" className="mb-4">Designed for Depth</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            How PairUp transforms the dating experience
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Dating fatigue ends when you move beyond shallow card decks into genuine personality resonance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="glass-card glass-card-hover rounded-3xl p-8 space-y-4 text-left">
            <div className="h-12 w-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-500">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Vector-Based Compatibility</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Our AI engine analyzes behavioral intent, communication cadence, and life priorities — matching you with people who fit your lifestyle, not just your photo preferences.
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass-card glass-card-hover rounded-3xl p-8 space-y-4 text-left">
            <div className="h-12 w-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
              <MessageSquare className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Zero-Awkwardness Icebreakers</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Never stare at an empty message box again. PairUp generates contextual conversational openers derived from mutual interests and shared prompts.
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-card glass-card-hover rounded-3xl p-8 space-y-4 text-left">
            <div className="h-12 w-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
              <Compass className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white">AI Date Concierge</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Ready to meet in the real world? Our date planner recommends vetted cafes, rooftop bars, and activity spots halfway between you with 1-click reservations.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Commitment Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-3xl border border-rose-500/20 bg-gradient-to-r from-rose-950/40 via-slate-900 to-amber-950/30 p-8 sm:p-12 text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-400 uppercase tracking-wider">
              <ShieldCheck className="h-4 w-4" />
              <span>Safety First, Always</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              A dating space built with rigorous boundaries.
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Real-time message moderation, automated photo screening, instant blocking, and incognito browsing give you total sovereignty over who sees your profile.
            </p>
          </div>
          <Link href="/safety">
            <Button size="lg" variant="secondary" className="whitespace-nowrap">
              Visit Safety Center
            </Button>
          </Link>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="border-t border-slate-800/80 bg-slate-900/20 py-20 text-center px-4">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Ready to meet someone who actually gets you?
        </h2>
        <p className="mt-4 text-base text-slate-300 max-w-xl mx-auto">
          Join thousands of singles finding meaningful connections every day on PairUp.
        </p>
        <div className="mt-8 flex justify-center">
          <Link href="/auth/register">
            <Button size="lg" variant="gradient" className="text-base px-10 py-3.5 shadow-xl">
              Create Your Free Account
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
