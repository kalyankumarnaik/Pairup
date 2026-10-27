"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/auth/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/toast";
import { Flame, Sparkles } from "lucide-react";

export default function LoginPage() {
  const { login, isLoading, error, clearError } = useAuth();
  const { showToast } = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();

    try {
      await login(email, password);
      showToast("success", "Welcome back!", "Signed in successfully.");
    } catch {
      // Handled in auth context
    }
  };

  const handleQuickDemo = (demoEmail: string) => {
    setEmail(demoEmail);
    setPassword("PairUp2026!Secure");
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 glass-card rounded-3xl p-8 sm:p-10 shadow-2xl">
        {/* Header */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-500 text-white shadow-lg shadow-rose-500/20">
              <Flame className="h-6 w-6 fill-current" />
            </div>
          </Link>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-white">Welcome back</h2>
          <p className="mt-1 text-sm text-slate-400">Sign in to your PairUp account</p>
        </div>

        {/* Global Error Notice */}
        {error && (
          <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3.5 text-xs text-red-300 animate-fade-in-up">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email Address"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />

          <Input
            label="Password"
            type="password"
            placeholder="••••••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />

          <div className="flex items-center justify-between text-xs pt-1">
            <label className="flex items-center gap-2 cursor-pointer text-slate-300">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rounded border-slate-700 bg-slate-900 text-rose-500 focus:ring-rose-500/40"
              />
              <span>Remember me</span>
            </label>

            <Link href="/auth/forgot-password" className="text-rose-400 hover:text-rose-300 transition-colors">
              Forgot password?
            </Link>
          </div>

          <Button type="submit" variant="gradient" size="lg" className="w-full mt-4" isLoading={isLoading}>
            <span>Sign In</span>
          </Button>
        </form>

        {/* Fast Demo Accounts */}
        <div className="pt-2 border-t border-slate-800/80">
          <div className="flex items-center gap-1.5 text-xs text-amber-300/90 font-medium mb-2.5">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span>Fast Review Logins</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <button
              type="button"
              onClick={() => handleQuickDemo("alex.rivera@example.com")}
              className="rounded-xl border border-slate-800 bg-slate-900/80 p-2 text-left text-slate-300 hover:border-slate-700 hover:bg-slate-850 hover:text-white transition-all"
            >
              <p className="font-semibold text-slate-200">Alex (Member)</p>
              <p className="text-[10px] text-slate-500 truncate">alex.rivera@example.com</p>
            </button>
            <button
              type="button"
              onClick={() => handleQuickDemo("admin@pairup.internal")}
              className="rounded-xl border border-rose-500/20 bg-rose-950/20 p-2 text-left text-rose-200 hover:border-rose-500/40 hover:bg-rose-950/40 transition-all"
            >
              <p className="font-semibold text-rose-300">Admin / Mod</p>
              <p className="text-[10px] text-rose-400/80 truncate">admin@pairup.internal</p>
            </button>
          </div>
        </div>

        {/* Footer Link */}
        <div className="text-center text-xs text-slate-400">
          Don&apos;t have an account yet?{" "}
          <Link href="/auth/register" className="font-semibold text-rose-400 hover:text-rose-300 transition-colors">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
