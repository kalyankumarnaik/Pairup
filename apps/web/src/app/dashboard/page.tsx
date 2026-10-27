"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/lib/auth/auth-context";
import { MOCK_MATCHES, MOCK_CONVERSATIONS, MOCK_CURRENT_USER, MOCK_DISCOVERY_PROFILES } from "@/lib/api/mock-service";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Compass,
  Sparkles,
  Heart,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Settings,
  Crown,
  Bell,
  ArrowRight,
} from "lucide-react";

export default function DashboardPage() {
  const { user } = useAuth();
  const [profile] = useState(MOCK_CURRENT_USER);
  const [matches] = useState(MOCK_MATCHES);
  const [conversations] = useState(MOCK_CONVERSATIONS);

  const notifications = [
    {
      id: "notif-1",
      title: "New Mutual Match!",
      desc: "You and Elena Vance liked each other.",
      time: "2 hours ago",
      icon: Heart,
      iconColor: "text-rose-500",
    },
    {
      id: "notif-2",
      title: "Singles Mixer this Saturday",
      desc: "RSVP confirmed for SF Rooftop Wine Tasting.",
      time: "1 day ago",
      icon: Calendar,
      iconColor: "text-amber-400",
    },
    {
      id: "notif-3",
      title: "Profile Boost Active",
      desc: "Your profile is getting 3x more visibility this evening.",
      time: "2 days ago",
      icon: Sparkles,
      iconColor: "text-violet-400",
    },
  ];

  return (
    <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Welcome Hero Banner */}
      <div className="relative rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900/90 to-rose-950/30 p-6 sm:p-8 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="flex items-center gap-5">
          <Avatar
            src={profile.photos[0]?.url}
            alt={profile.displayName}
            size="xl"
            isOnline={true}
            className="ring-4 ring-rose-500/20"
          />
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                Welcome back, {profile.displayName.split(" ")[0]}
              </h1>
              <Badge variant="success" size="sm">
                <ShieldCheck className="h-3 w-3 mr-1" />
                Verified
              </Badge>
            </div>
            <p className="text-sm text-slate-400">
              {profile.city} • {profile.occupation}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <Link href="/discovery" className="flex-1 md:flex-initial">
            <Button variant="gradient" size="md" className="w-full">
              <Compass className="h-4 w-4 mr-1.5" />
              <span>Explore Feed</span>
            </Button>
          </Link>
          <Link href="/profiles/me" className="flex-1 md:flex-initial">
            <Button variant="secondary" size="md" className="w-full">
              <Settings className="h-4 w-4 mr-1.5" />
              <span>Edit Profile</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2 Columns: Matches & Conversations */}
        <div className="lg:col-span-2 space-y-8">
          {/* New Mutual Matches Strip */}
          <div className="glass-card rounded-3xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-rose-500 fill-current" />
                <h2 className="text-lg font-bold text-white">Mutual Matches</h2>
                <Badge variant="default" size="sm">
                  {matches.length} New
                </Badge>
              </div>
              <Link
                href="/messages"
                className="text-xs font-semibold text-rose-400 hover:text-rose-300 transition-colors"
              >
                View all
              </Link>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none">
              {matches.map((m) => (
                <Link
                  key={m.id}
                  href={`/messages?matchId=${m.id}`}
                  className="flex-shrink-0 group flex flex-col items-center space-y-2"
                >
                  <div className="relative h-20 w-20 rounded-2xl overflow-hidden border-2 border-slate-700 group-hover:border-rose-500 transition-colors">
                    <Image
                      src={m.partner.photos[0]?.url || ""}
                      alt={m.partner.displayName}
                      fill
                      sizes="80px"
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                    {m.hasUnreadMessages && (
                      <span className="absolute top-1.5 right-1.5 h-3 w-3 rounded-full bg-rose-500 ring-2 ring-slate-900" />
                    )}
                  </div>
                  <span className="text-xs font-medium text-slate-200 group-hover:text-rose-400 transition-colors">
                    {m.partner.displayName.split(" ")[0]}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Recent Conversations */}
          <div className="glass-card rounded-3xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-amber-400" />
                <h2 className="text-lg font-bold text-white">Recent Chats</h2>
              </div>
              <Link
                href="/messages"
                className="text-xs font-semibold text-rose-400 hover:text-rose-300"
              >
                Open Inbox
              </Link>
            </div>

            <div className="space-y-2">
              {conversations.map((conv) => (
                <Link
                  key={conv.id}
                  href={`/messages?matchId=${conv.matchId}`}
                  className="flex items-center gap-4 rounded-2xl p-3 hover:bg-slate-800/60 transition-colors border border-transparent hover:border-slate-800"
                >
                  <Avatar
                    src={conv.partner.avatarUrl}
                    alt={conv.partner.displayName}
                    size="md"
                    isOnline={conv.partner.isOnline}
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-white">
                        {conv.partner.displayName}
                      </p>
                      <span className="text-[10px] text-slate-500">
                        {conv.partner.lastActive}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 truncate mt-0.5">
                      {conv.lastMessage?.content}
                    </p>
                  </div>

                  {conv.unreadCount > 0 && (
                    <span className="h-5 w-5 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center">
                      {conv.unreadCount}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Recommended Daily Profiles */}
          <div className="glass-card rounded-3xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-violet-400" />
                <h2 className="text-lg font-bold text-white">Curated Daily Picks</h2>
              </div>
              <Badge variant="gradient" size="sm">
                AI Match Score &gt; 90%
              </Badge>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {MOCK_DISCOVERY_PROFILES.slice(0, 2).map((candidate) => (
                <div
                  key={candidate.userId}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative h-14 w-14 rounded-xl overflow-hidden shrink-0">
                      <Image
                        src={candidate.photos[0]?.url || ""}
                        alt={candidate.displayName}
                        fill
                        sizes="60px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        {candidate.displayName}, {candidate.age}
                      </h4>
                      <p className="text-xs text-slate-400">{candidate.city}</p>
                      <p className="text-xs text-rose-400 font-medium">
                        {candidate.compatibilityScore}% Compatibility
                      </p>
                    </div>
                  </div>
                  <Link href="/discovery">
                    <Button variant="outline" size="sm" className="w-full mt-2">
                      <span>View in Discovery</span>
                      <ArrowRight className="h-3.5 w-3.5 ml-1" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Profile Health & Notifications */}
        <div className="space-y-8">
          {/* Profile Health Widget */}
          <div className="glass-card rounded-3xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Profile Health
              </h3>
              <span className="text-xs font-semibold text-emerald-400">
                {profile.completionPercentage}% Complete
              </span>
            </div>

            {/* Health Meter */}
            <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-rose-500 to-emerald-400"
                style={{ width: `${profile.completionPercentage}%` }}
              />
            </div>

            <ul className="space-y-2 text-xs text-slate-300 pt-2">
              <li className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>Primary and gallery photos active</span>
              </li>
              <li className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>Passions & interests configured</span>
              </li>
              <li className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>Conversation prompts verified</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <div className="h-4 w-4 rounded-full border border-slate-600 flex items-center justify-center shrink-0">
                  •
                </div>
                <span>Add 1 more audio prompt for +15% boost</span>
              </li>
            </ul>

            <Link href="/profiles/me">
              <Button variant="secondary" size="sm" className="w-full mt-2">
                Enhance Profile
              </Button>
            </Link>
          </div>

          {/* Activity Notifications */}
          <div className="glass-card rounded-3xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bell className="h-4 w-4 text-slate-400" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Activity
                </h3>
              </div>
            </div>

            <div className="space-y-3">
              {notifications.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className="flex items-start gap-3 rounded-2xl p-2.5 hover:bg-slate-800/40 transition-colors"
                  >
                    <div className="h-8 w-8 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                      <Icon className={`h-4 w-4 ${item.iconColor}`} />
                    </div>
                    <div className="text-xs">
                      <p className="font-semibold text-slate-100">{item.title}</p>
                      <p className="text-slate-400 mt-0.5">{item.desc}</p>
                      <span className="text-[10px] text-slate-500 mt-1 block">
                        {item.time}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* PairUp Premium Card */}
          <div className="rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-950/30 via-slate-900 to-slate-950 p-6 space-y-3">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Crown className="h-4 w-4" />
              <span>PairUp Gold</span>
            </div>
            <h4 className="text-base font-bold text-white">See Who Likes You</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Unlock the Likes grid, send unlimited Superlikes, and jump the discovery queue.
            </p>
            <Link href="/premium">
              <Button variant="gradient" size="sm" className="w-full mt-2">
                Upgrade Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
