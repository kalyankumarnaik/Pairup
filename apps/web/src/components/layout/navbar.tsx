"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/lib/auth/auth-context";
import { Avatar } from "@/components/ui/avatar";
import {
  Flame,
  MessageCircle,
  Compass,
  Calendar,
  Sparkles,
  Shield,
  Settings,
  LogOut,
  Menu,
  X,
  Crown,
  LayoutDashboard,
  ShieldAlert,
} from "lucide-react";
import { PlatformUserRole } from "@/types/api";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { user, isAuthenticated, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  // If on landing or auth pages without being logged in
  const isAuthPage = pathname.startsWith("/auth");

  const navLinks = [
    { href: "/discovery", label: "Discover", icon: Compass },
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/messages", label: "Messages", icon: MessageCircle },
    { href: "/events", label: "Events", icon: Calendar },
    { href: "/date-planner", label: "AI Concierge", icon: Sparkles },
    { href: "/safety", label: "Safety", icon: Shield },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href={isAuthenticated ? "/discovery" : "/"} className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-rose-500 to-amber-500 text-white shadow-md shadow-rose-500/20 group-hover:scale-105 transition-transform">
            <Flame className="h-5 w-5 fill-current" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Pair<span className="text-rose-500">Up</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        {isAuthenticated && (
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-rose-500/10 text-rose-400 font-semibold"
                      : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? "text-rose-500" : "text-slate-400"}`} />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        )}

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <>
              {/* Premium Upgrade Badge */}
              <Link
                href="/premium"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300 hover:bg-amber-500/20 transition-colors"
              >
                <Crown className="h-3.5 w-3.5 text-amber-400" />
                <span>PairUp Gold</span>
              </Link>

              {/* User Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center gap-2 rounded-full p-0.5 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  aria-expanded={profileDropdownOpen}
                >
                  <Avatar alt={user?.email || "User"} size="sm" isOnline={true} />
                </button>

                {profileDropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 w-56 rounded-2xl border border-slate-800 bg-slate-900 p-2 shadow-2xl backdrop-blur-xl animate-fade-in-up"
                    onClick={() => setProfileDropdownOpen(false)}
                  >
                    <div className="px-3 py-2 border-b border-slate-800/80 mb-1">
                      <p className="text-xs text-slate-400">Signed in as</p>
                      <p className="text-sm font-medium text-white truncate">{user?.email}</p>
                    </div>

                    <Link
                      href="/profiles/me"
                      className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm text-slate-200 hover:bg-slate-800 hover:text-white transition-colors"
                    >
                      <Settings className="h-4 w-4 text-slate-400" />
                      Edit Profile
                    </Link>

                    <Link
                      href="/settings"
                      className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm text-slate-200 hover:bg-slate-800 hover:text-white transition-colors"
                    >
                      <Settings className="h-4 w-4 text-slate-400" />
                      Settings & Privacy
                    </Link>

                    <Link
                      href="/premium"
                      className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm text-amber-300 hover:bg-slate-800 transition-colors"
                    >
                      <Crown className="h-4 w-4 text-amber-400" />
                      Subscription Plans
                    </Link>

                    {/* Admin Portal Link if user has permission */}
                    {(user?.role === PlatformUserRole.ADMIN || user?.role === PlatformUserRole.MODERATOR) && (
                      <Link
                        href="/admin"
                        className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm text-rose-400 hover:bg-rose-500/10 transition-colors"
                      >
                        <ShieldAlert className="h-4 w-4 text-rose-500" />
                        Admin & Moderation
                      </Link>
                    )}

                    <div className="border-t border-slate-800/80 my-1" />

                    <button
                      onClick={() => logout()}
                      className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-sm text-red-400 hover:bg-red-500/10 transition-colors text-left"
                    >
                      <LogOut className="h-4 w-4 text-red-400" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </>
          ) : (
            <div className="flex items-center gap-3">
              {!isAuthPage && (
                <>
                  <Link
                    href="/auth/login"
                    className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    Log In
                  </Link>
                  <Link
                    href="/auth/register"
                    className="rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-rose-500/20 hover:opacity-95 transition-all"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Drawer */}
      {isAuthenticated && mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/95 px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium ${
                  isActive ? "bg-rose-500/10 text-rose-400 font-semibold" : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/premium"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-base font-semibold text-amber-300 bg-amber-500/10 mt-2"
          >
            <Crown className="h-5 w-5 text-amber-400" />
            Upgrade to Gold
          </Link>
        </div>
      )}
    </header>
  );
};
