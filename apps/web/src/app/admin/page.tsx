"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/lib/auth/auth-context";
import { PlatformUserRole, PlatformAccountStatus } from "@/types/api";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Modal } from "@/components/ui/modal";
import { useToast } from "@/components/ui/toast";
import {
  ShieldAlert,
  Users,
  CheckCircle2,
  AlertTriangle,
  Ban,
  Search,
  Eye,
  Activity,
  DollarSign,
  TrendingUp,
  Lock,
  ArrowRight,
} from "lucide-react";

interface ModerationItem {
  id: string;
  authorUserId: string;
  authorName: string;
  contentType: "PROFILE_TEXT" | "PHOTO" | "CHAT_MESSAGE";
  contentSnippet: string;
  mediaUrl?: string;
  severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  categories: string[];
  recommendedAction: "ALLOW" | "FLAG_FOR_REVIEW" | "AUTO_BLUR" | "SUSPEND_ACCOUNT";
  reportedAt: string;
}

interface AdminUserRecord {
  id: string;
  email: string;
  displayName: string;
  role: PlatformUserRole;
  status: PlatformAccountStatus;
  joinedAt: string;
  reportsCount: number;
}

export default function AdminDashboardPage() {
  const { user } = useAuth();
  const { showToast } = useToast();

  const [activeTab, setActiveTab] = useState<"moderation" | "users" | "analytics">("moderation");
  const [searchUser, setSearchUser] = useState("");

  // Role Gate check
  const isAuthorized =
    user?.role === PlatformUserRole.ADMIN ||
    user?.role === PlatformUserRole.MODERATOR ||
    user?.email?.includes("admin");

  // Moderation Items Mock data
  const [moderationQueue, setModerationQueue] = useState<ModerationItem[]>([
    {
      id: "mod-101",
      authorUserId: "usr-bad-99",
      authorName: "Suspicious User #99",
      contentType: "CHAT_MESSAGE",
      contentSnippet: "Hey send me your WhatsApp or send $50 to my crypto wallet for private pics",
      severity: "CRITICAL",
      categories: ["SCAM", "COMMERCIAL_SOLICITATION"],
      recommendedAction: "SUSPEND_ACCOUNT",
      reportedAt: "10 mins ago",
    },
    {
      id: "mod-102",
      authorUserId: "usr-bad-82",
      authorName: "John Doe",
      contentType: "PHOTO",
      contentSnippet: "Profile photo flagged for automated nudity screening",
      mediaUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      severity: "MEDIUM",
      categories: ["NUDITY_DETECTION"],
      recommendedAction: "AUTO_BLUR",
      reportedAt: "45 mins ago",
    },
    {
      id: "mod-103",
      authorUserId: "usr-bad-77",
      authorName: "Troll Account",
      contentType: "PROFILE_TEXT",
      contentSnippet: "Offensive bio violating community guidelines regarding harassment",
      severity: "HIGH",
      categories: ["HARASSMENT"],
      recommendedAction: "FLAG_FOR_REVIEW",
      reportedAt: "2 hours ago",
    },
  ]);

  // User Management Records
  const [usersList, setUsersList] = useState<AdminUserRecord[]>([
    {
      id: "u-1",
      email: "elena.vance@ucsf.edu",
      displayName: "Elena Vance",
      role: PlatformUserRole.USER,
      status: PlatformAccountStatus.ACTIVE,
      joinedAt: "Oct 12, 2026",
      reportsCount: 0,
    },
    {
      id: "u-2",
      email: "julian.thorne@films.org",
      displayName: "Julian Thorne",
      role: PlatformUserRole.USER,
      status: PlatformAccountStatus.ACTIVE,
      joinedAt: "Oct 15, 2026",
      reportsCount: 0,
    },
    {
      id: "u-3",
      email: "spammer.bot@tempmail.com",
      displayName: "Promo Deals",
      role: PlatformUserRole.USER,
      status: PlatformAccountStatus.SUSPENDED,
      joinedAt: "Oct 26, 2026",
      reportsCount: 8,
    },
  ]);

  const handleModerateAction = (itemId: string, action: "DISMISS" | "SUSPEND" | "WARN") => {
    setModerationQueue((prev) => prev.filter((item) => item.id !== itemId));
    showToast(
      "success",
      `Action Applied: ${action}`,
      `Item ${itemId} has been resolved in moderation pipeline.`,
    );
  };

  const handleToggleUserStatus = (userId: string) => {
    setUsersList((prev) =>
      prev.map((u) => {
        if (u.id !== userId) return u;
        const newStatus =
          u.status === PlatformAccountStatus.ACTIVE
            ? PlatformAccountStatus.SUSPENDED
            : PlatformAccountStatus.ACTIVE;
        showToast(
          "info",
          "Account Status Changed",
          `User ${u.displayName} status changed to ${newStatus}.`,
        );
        return { ...u, status: newStatus };
      }),
    );
  };

  if (!isAuthorized) {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="glass-card rounded-3xl p-8 max-w-md text-center space-y-4">
          <Lock className="h-12 w-12 text-rose-500 mx-auto" />
          <h2 className="text-2xl font-bold text-white">Access Denied</h2>
          <p className="text-xs text-slate-400">
            Administrative access requires an authorized administrator or moderator role.
          </p>
          <div className="pt-2">
            <Link href="/auth/login">
              <Button variant="primary" size="sm">
                Log in as Administrator
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              Administration & Moderation
            </h1>
            <Badge variant="destructive" size="sm">
              Role: Admin
            </Badge>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Pluggable AI moderation inspection (Member 4) & core user management (Member 1).
          </p>
        </div>

        {/* Tab triggers */}
        <div className="flex gap-2 bg-slate-900 border border-slate-800 p-1 rounded-2xl">
          <button
            onClick={() => setActiveTab("moderation")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === "moderation"
                ? "bg-rose-500 text-white shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Moderation Queue ({moderationQueue.length})
          </button>
          <button
            onClick={() => setActiveTab("users")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === "users"
                ? "bg-rose-500 text-white shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            User Management
          </button>
          <button
            onClick={() => setActiveTab("analytics")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === "analytics"
                ? "bg-rose-500 text-white shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Platform Metrics
          </button>
        </div>
      </div>

      {/* METRICS ROW */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass-card rounded-2xl p-5 space-y-1">
          <p className="text-xs text-slate-400 uppercase font-semibold">Active Members</p>
          <p className="text-2xl font-extrabold text-white">24,819</p>
          <span className="text-[11px] text-emerald-400 flex items-center gap-1">
            <TrendingUp className="h-3 w-3" /> +14% this week
          </span>
        </div>

        <div className="glass-card rounded-2xl p-5 space-y-1">
          <p className="text-xs text-slate-400 uppercase font-semibold">Flagged Content</p>
          <p className="text-2xl font-extrabold text-rose-500">{moderationQueue.length}</p>
          <span className="text-[11px] text-amber-400">Needs review</span>
        </div>

        <div className="glass-card rounded-2xl p-5 space-y-1">
          <p className="text-xs text-slate-400 uppercase font-semibold">Matches Today</p>
          <p className="text-2xl font-extrabold text-white">1,842</p>
          <span className="text-[11px] text-emerald-400">92% reply rate</span>
        </div>

        <div className="glass-card rounded-2xl p-5 space-y-1">
          <p className="text-xs text-slate-400 uppercase font-semibold">Monthly Revenue</p>
          <p className="text-2xl font-extrabold text-amber-400">$42,850</p>
          <span className="text-[11px] text-slate-400">MRR (Gold & Plat)</span>
        </div>
      </div>

      {/* TAB 1: Moderation Queue */}
      {activeTab === "moderation" && (
        <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 animate-fade-in-up">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <ShieldAlert className="h-5 w-5 text-rose-500" />
              <span>AI Content Moderation Queue</span>
            </h2>
            <Badge variant="warning">{moderationQueue.length} Pending Actions</Badge>
          </div>

          {moderationQueue.length > 0 ? (
            <div className="space-y-4">
              {moderationQueue.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">{item.authorName}</span>
                      <span className="text-xs text-slate-500">({item.authorUserId})</span>
                      <Badge
                        variant={
                          item.severity === "CRITICAL"
                            ? "destructive"
                            : item.severity === "HIGH"
                            ? "warning"
                            : "secondary"
                        }
                        size="sm"
                      >
                        {item.severity} Severity
                      </Badge>
                    </div>
                    <span className="text-xs text-slate-500">{item.reportedAt}</span>
                  </div>

                  <div className="rounded-xl bg-slate-900 p-3.5 text-xs text-slate-200 border border-slate-800">
                    <p className="font-semibold text-rose-400 mb-1">
                      Reported Type: {item.contentType}
                    </p>
                    <p>{item.contentSnippet}</p>
                    {item.mediaUrl && (
                      <div className="mt-2 relative h-28 w-28 rounded-lg overflow-hidden border border-slate-700">
                        <Image src={item.mediaUrl} alt="Flagged" fill className="object-cover" />
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <span>AI Recommendation:</span>
                      <strong className="text-amber-400">{item.recommendedAction}</strong>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleModerateAction(item.id, "DISMISS")}
                      >
                        Dismiss Flag
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleModerateAction(item.id, "WARN")}
                      >
                        Warn User
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleModerateAction(item.id, "SUSPEND")}
                      >
                        Suspend Account
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-slate-500 space-y-2">
              <CheckCircle2 className="h-10 w-10 text-emerald-400 mx-auto" />
              <p className="text-sm font-semibold text-white">All clear!</p>
              <p className="text-xs">No pending moderation reports in the queue.</p>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: User Management */}
      {activeTab === "users" && (
        <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 animate-fade-in-up">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h2 className="text-lg font-bold text-white">Registered Users Directory</h2>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search by email or name..."
                value={searchUser}
                onChange={(e) => setSearchUser(e.target.value)}
                className="w-full rounded-xl border border-slate-800 bg-slate-900 py-2 pl-9 pr-3 text-xs text-white"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-slate-800 text-slate-400 uppercase font-semibold">
                <tr>
                  <th className="pb-3">User</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Role</th>
                  <th className="pb-3">Joined</th>
                  <th className="pb-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {usersList
                  .filter(
                    (u) =>
                      u.displayName.toLowerCase().includes(searchUser.toLowerCase()) ||
                      u.email.toLowerCase().includes(searchUser.toLowerCase()),
                  )
                  .map((u) => (
                    <tr key={u.id} className="hover:bg-slate-900/40">
                      <td className="py-3">
                        <p className="font-semibold text-white">{u.displayName}</p>
                        <p className="text-[11px] text-slate-400">{u.email}</p>
                      </td>
                      <td className="py-3">
                        <Badge
                          variant={
                            u.status === PlatformAccountStatus.ACTIVE ? "success" : "destructive"
                          }
                          size="sm"
                        >
                          {u.status}
                        </Badge>
                      </td>
                      <td className="py-3 text-slate-300">{u.role}</td>
                      <td className="py-3 text-slate-400">{u.joinedAt}</td>
                      <td className="py-3 text-right">
                        <Button
                          variant={
                            u.status === PlatformAccountStatus.ACTIVE ? "destructive" : "secondary"
                          }
                          size="sm"
                          onClick={() => handleToggleUserStatus(u.id)}
                        >
                          {u.status === PlatformAccountStatus.ACTIVE ? "Suspend" : "Reinstate"}
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: Platform Metrics */}
      {activeTab === "analytics" && (
        <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 animate-fade-in-up">
          <h2 className="text-lg font-bold text-white">Platform Growth & Algorithm Telemetry</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Daily Swiping Concurrency
              </h3>
              <p className="text-sm text-slate-200">
                Like/Pass transaction throughput running at <strong>140 req/sec</strong> peak. Zero
                race condition anomalies recorded.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                AI Recommendation Alignment
              </h3>
              <p className="text-sm text-slate-200">
                Mutual match conversion rate on high-compatibility candidates (&gt;90% affinity) is{" "}
                <strong>4.2x higher</strong> than baseline random candidates.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
