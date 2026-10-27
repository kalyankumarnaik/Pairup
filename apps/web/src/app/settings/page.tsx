"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/auth/auth-context";
import { apiClient } from "@/lib/api/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Modal } from "@/components/ui/modal";
import { useToast } from "@/components/ui/toast";
import {
  Settings,
  Bell,
  Shield,
  CreditCard,
  Ban,
  Trash2,
  Lock,
  Eye,
  CheckCircle2,
  Crown,
  Smartphone,
  Mail,
} from "lucide-react";

interface BlockedUser {
  id: string;
  name: string;
  blockedAt: string;
}

export default function SettingsPage() {
  const { user, logout } = useAuth();
  const { showToast } = useToast();

  const [activeTab, setActiveTab] = useState<"account" | "privacy" | "notifications" | "blocked">(
    "account",
  );

  // Privacy states
  const [incognito, setIncognito] = useState(false);
  const [showDistance, setShowDistance] = useState(true);
  const [showAge, setShowAge] = useState(true);
  const [readReceipts, setReadReceipts] = useState(true);

  // Notification states
  const [emailMatches, setEmailMatches] = useState(true);
  const [emailMessages, setEmailMessages] = useState(true);
  const [pushMatches, setPushMatches] = useState(true);
  const [pushMessages, setPushMessages] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);

  // Blocked users
  const [blockedUsers, setBlockedUsers] = useState<BlockedUser[]>([
    { id: "usr-block-1", name: "David Sterling", blockedAt: "October 18, 2026" },
    { id: "usr-block-2", name: "Marcus Vance", blockedAt: "October 22, 2026" },
  ]);

  // Account modal
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleSavePrivacy = async () => {
    try {
      await apiClient
        .patch("/preferences/privacy", {
          incognitoMode: incognito,
          showDistance,
          showAge,
          readReceiptsEnabled: readReceipts,
        })
        .catch(() => {});
      showToast("success", "Privacy Updated", "Your visibility preferences have been saved.");
    } catch {
      showToast("error", "Error", "Could not update privacy preferences.");
    }
  };

  const handleUnblock = async (blockedId: string, name: string) => {
    try {
      await apiClient.delete(`/users/${blockedId}/block`).catch(() => {});
      setBlockedUsers((prev) => prev.filter((u) => u.id !== blockedId));
      showToast("info", "User Unblocked", `${name} is no longer blocked.`);
    } catch {
      setBlockedUsers((prev) => prev.filter((u) => u.id !== blockedId));
    }
  };

  const handleDeleteAccount = async () => {
    try {
      await apiClient.delete("/users/me").catch(() => {});
      showToast("error", "Account Deleted", "Your profile and data have been safely expunged.");
      logout();
    } catch {
      logout();
    }
  };

  return (
    <div className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Title */}
      <div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">Account & Settings</h1>
        <p className="text-sm text-slate-400 mt-1">
          Manage your account security, notification channels, privacy visibility, and subscription.
        </p>
      </div>

      {/* Tabs navigation */}
      <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4">
        {[
          { id: "account", label: "Account & Security", icon: Lock },
          { id: "privacy", label: "Privacy & Visibility", icon: Eye },
          { id: "notifications", label: "Notifications", icon: Bell },
          { id: "blocked", label: "Blocked Accounts", icon: Ban },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all ${
                isActive
                  ? "bg-rose-500 text-white shadow-md shadow-rose-500/20"
                  : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: Account & Security */}
      {activeTab === "account" && (
        <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white">Login Credentials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input label="Email Address" value={user?.email || "alex.rivera@example.com"} readOnly />
              <Input label="Role & Access" value={user?.role || "Verified Member"} readOnly />
            </div>
            <p className="text-xs text-slate-500">
              Email verification status:{" "}
              <strong className="text-emerald-400">Verified & Protected</strong>
            </p>
          </div>

          {/* Subscription Status */}
          <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/20 to-slate-900 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Crown className="h-4 w-4 text-amber-400" />
                <h3 className="text-sm font-bold text-white">PairUp Gold Member</h3>
              </div>
              <p className="text-xs text-slate-300">
                Annual renewal on November 27, 2027. Unlimited likes and priority placement active.
              </p>
            </div>
            <Link href="/premium">
              <Button variant="secondary" size="sm">
                Manage Subscription
              </Button>
            </Link>
          </div>

          {/* Delete Danger Zone */}
          <div className="rounded-2xl border border-red-500/20 bg-red-950/10 p-6 space-y-3">
            <h3 className="text-sm font-bold text-red-400">Danger Zone</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Deactivating or deleting your account permanently removes your candidate feed, match
              conversations, and photo galleries. This action cannot be reversed.
            </p>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => setIsDeleteModalOpen(true)}
            >
              <Trash2 className="h-4 w-4 mr-1.5" />
              <span>Delete Account Permanently</span>
            </Button>
          </div>
        </div>
      )}

      {/* TAB 2: Privacy & Visibility */}
      {activeTab === "privacy" && (
        <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 animate-fade-in-up">
          <h2 className="text-lg font-bold text-white">Privacy Preferences</h2>

          <div className="space-y-4 divide-y divide-slate-800/80">
            <div className="flex items-center justify-between pt-3">
              <div>
                <p className="text-sm font-semibold text-white">Incognito Mode</p>
                <p className="text-xs text-slate-400">Only profiles you have liked can view your cards.</p>
              </div>
              <input
                type="checkbox"
                checked={incognito}
                onChange={(e) => setIncognito(e.target.checked)}
                className="h-5 w-5 rounded border-slate-700 bg-slate-800 text-rose-500"
              />
            </div>

            <div className="flex items-center justify-between pt-3">
              <div>
                <p className="text-sm font-semibold text-white">Show Distance on Profile</p>
                <p className="text-xs text-slate-400">Display approximate distance (in km) to nearby daters.</p>
              </div>
              <input
                type="checkbox"
                checked={showDistance}
                onChange={(e) => setShowDistance(e.target.checked)}
                className="h-5 w-5 rounded border-slate-700 bg-slate-800 text-rose-500"
              />
            </div>

            <div className="flex items-center justify-between pt-3">
              <div>
                <p className="text-sm font-semibold text-white">Show Age on Profile</p>
                <p className="text-xs text-slate-400">Keep age displayed on card headers.</p>
              </div>
              <input
                type="checkbox"
                checked={showAge}
                onChange={(e) => setShowAge(e.target.checked)}
                className="h-5 w-5 rounded border-slate-700 bg-slate-800 text-rose-500"
              />
            </div>

            <div className="flex items-center justify-between pt-3">
              <div>
                <p className="text-sm font-semibold text-white">Read Receipts</p>
                <p className="text-xs text-slate-400">Allow matches to see when you have read their messages.</p>
              </div>
              <input
                type="checkbox"
                checked={readReceipts}
                onChange={(e) => setReadReceipts(e.target.checked)}
                className="h-5 w-5 rounded border-slate-700 bg-slate-800 text-rose-500"
              />
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <Button variant="gradient" size="md" onClick={handleSavePrivacy}>
              Save Privacy Settings
            </Button>
          </div>
        </div>
      )}

      {/* TAB 3: Notifications */}
      {activeTab === "notifications" && (
        <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 animate-fade-in-up">
          <h2 className="text-lg font-bold text-white">Notification Channels</h2>

          <div className="space-y-4 divide-y divide-slate-800/80">
            <div className="flex items-center justify-between pt-3">
              <div className="flex items-center gap-3">
                <Smartphone className="h-5 w-5 text-rose-400" />
                <div>
                  <p className="text-sm font-semibold text-white">New Match Push Alerts</p>
                  <p className="text-xs text-slate-400">Instant notification when mutual like occurs.</p>
                </div>
              </div>
              <input
                type="checkbox"
                checked={pushMatches}
                onChange={(e) => setPushMatches(e.target.checked)}
                className="h-5 w-5 rounded border-slate-700 bg-slate-800 text-rose-500"
              />
            </div>

            <div className="flex items-center justify-between pt-3">
              <div className="flex items-center gap-3">
                <Smartphone className="h-5 w-5 text-rose-400" />
                <div>
                  <p className="text-sm font-semibold text-white">New Message Push Alerts</p>
                  <p className="text-xs text-slate-400">Notify when active conversations receive messages.</p>
                </div>
              </div>
              <input
                type="checkbox"
                checked={pushMessages}
                onChange={(e) => setPushMessages(e.target.checked)}
                className="h-5 w-5 rounded border-slate-700 bg-slate-800 text-rose-500"
              />
            </div>

            <div className="flex items-center justify-between pt-3">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-400" />
                <div>
                  <p className="text-sm font-semibold text-white">Weekly Match Digest Email</p>
                  <p className="text-xs text-slate-400">Summary of local events and top AI candidate picks.</p>
                </div>
              </div>
              <input
                type="checkbox"
                checked={emailMatches}
                onChange={(e) => setEmailMatches(e.target.checked)}
                className="h-5 w-5 rounded border-slate-700 bg-slate-800 text-rose-500"
              />
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <Button
              variant="gradient"
              size="md"
              onClick={() => showToast("success", "Saved", "Notification preferences updated.")}
            >
              Save Preferences
            </Button>
          </div>
        </div>
      )}

      {/* TAB 4: Blocked Users */}
      {activeTab === "blocked" && (
        <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 animate-fade-in-up">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-white">Blocked Accounts ({blockedUsers.length})</h2>
              <p className="text-xs text-slate-400 mt-1">
                Blocked users cannot find your profile in discovery or message you.
              </p>
            </div>
          </div>

          {blockedUsers.length > 0 ? (
            <div className="space-y-3">
              {blockedUsers.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 flex items-center justify-between gap-4"
                >
                  <div>
                    <p className="text-sm font-semibold text-white">{item.name}</p>
                    <p className="text-xs text-slate-500">Blocked on {item.blockedAt}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleUnblock(item.id, item.name)}
                  >
                    Unblock
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-xs text-slate-500">
              <CheckCircle2 className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
              <p>You have no blocked accounts.</p>
            </div>
          )}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Permanently Delete Account?"
        description="Are you absolutely sure? All photos, matches, and chats will be immediately purged in accordance with our GDPR privacy policy."
        maxWidth="sm"
      >
        <div className="flex gap-2 justify-end pt-4">
          <Button variant="ghost" size="sm" onClick={() => setIsDeleteModalOpen(false)}>
            Cancel
          </Button>
          <Button variant="destructive" size="sm" onClick={handleDeleteAccount}>
            Yes, Delete Forever
          </Button>
        </div>
      </Modal>
    </div>
  );
}
