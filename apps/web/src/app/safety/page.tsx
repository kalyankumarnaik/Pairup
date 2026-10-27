"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, AlertTriangle, EyeOff, PhoneCall, Flag, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function SafetyCenterPage() {
  return (
    <div className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <Badge variant="default" size="sm">
          <ShieldCheck className="h-4 w-4 mr-1 text-emerald-400" />
          Trust & Safety Center
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Your physical and emotional safety is our non-negotiable priority
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          PairUp integrates automated AI moderation, strict photo authenticity checks, and immediate reporting tools to build a safe, respectful dating environment.
        </p>
      </div>

      {/* 4 Golden Rules of Dating Safely */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card rounded-3xl p-6 space-y-3 text-left">
          <div className="h-10 w-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold">
            1
          </div>
          <h3 className="text-lg font-bold text-white">Never Send Money or Financial Info</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Never send money, crypto, wire transfers, or disclose bank credentials to anyone you meet online, regardless of the emergency they claim.
          </p>
        </div>

        <div className="glass-card rounded-3xl p-6 space-y-3 text-left">
          <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold">
            2
          </div>
          <h3 className="text-lg font-bold text-white">Meet in Public & Arrange Your Own Transport</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            For initial dates, choose well-lit, populated public spots (cafes, restaurants, galleries). Arrange your own transit to and from the venue.
          </p>
        </div>

        <div className="glass-card rounded-3xl p-6 space-y-3 text-left">
          <div className="h-10 w-10 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center font-bold">
            3
          </div>
          <h3 className="text-lg font-bold text-white">Tell a Friend About Your Plans</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Share who you are meeting, where you are going, and what time you expect to be home with a trusted friend or family member.
          </p>
        </div>

        <div className="glass-card rounded-3xl p-6 space-y-3 text-left">
          <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
            4
          </div>
          <h3 className="text-lg font-bold text-white">Stay in the PairUp Chat Until You Feel Safe</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Keep initial messaging on PairUp. Bad actors often rush to move conversations off-platform to avoid our AI toxicity filters.
          </p>
        </div>
      </div>

      {/* Emergency Resources */}
      <div className="rounded-3xl border border-rose-500/30 bg-gradient-to-r from-rose-950/20 via-slate-900 to-slate-950 p-8 space-y-4 text-left">
        <div className="flex items-center gap-2 text-rose-400 font-bold text-sm uppercase tracking-wider">
          <PhoneCall className="h-4 w-4" />
          <span>Immediate Crisis & Support Resources</span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          If you are in immediate physical danger, call <strong>911 (US)</strong> or your local emergency services right away.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-3 space-y-1">
            <p className="font-semibold text-white">National Domestic Violence Hotline</p>
            <p className="text-slate-400">1-800-799-SAFE (7233) • Free, confidential, 24/7</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-3 space-y-1">
            <p className="font-semibold text-white">RAINN National Sexual Assault Hotline</p>
            <p className="text-slate-400">1-800-656-4673 • Free, confidential, 24/7</p>
          </div>
        </div>
      </div>

      {/* Community Guidelines Link */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 glass-card rounded-2xl text-xs text-slate-300">
        <span>Review our detailed conduct code to learn what behavior is prohibited.</span>
        <Link href="/guidelines">
          <Button variant="secondary" size="sm">
            Read Community Guidelines
          </Button>
        </Link>
      </div>
    </div>
  );
}
