"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/auth/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/toast";
import { Flame, ShieldCheck, Check, X } from "lucide-react";

export default function RegisterPage() {
  const { register, isLoading, error, clearError } = useAuth();
  const { showToast } = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isAgeVerified, setIsAgeVerified] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [formError, setFormError] = useState("");

  // Real-time password strength
  const hasMinLength = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    clearError();

    if (!isAgeVerified) {
      setFormError("You must be at least 18 years old to join PairUp.");
      return;
    }

    if (!acceptTerms) {
      setFormError("Please accept the Terms of Service & Privacy Policy.");
      return;
    }

    if (password !== confirmPassword) {
      setFormError("Passwords do not match.");
      return;
    }

    if (!hasMinLength || !hasNumber) {
      setFormError("Please choose a stronger password meeting the requirements.");
      return;
    }

    try {
      await register(email, password);
      showToast("success", "Account Created!", "Welcome to PairUp. Let's build your profile.");
    } catch {
      // Handled in auth context
    }
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
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-white">Create your account</h2>
          <p className="mt-1 text-sm text-slate-400">
            Join the community built for intentional connections
          </p>
        </div>

        {/* Global Error Notice */}
        {(formError || error) && (
          <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3.5 text-xs text-red-300 animate-fade-in-up">
            {formError || error}
          </div>
        )}

        {/* Registration Form */}
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
            autoComplete="new-password"
          />

          {/* Password Strength Checklist */}
          {password.length > 0 && (
            <div className="space-y-1.5 rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                {hasMinLength ? (
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                ) : (
                  <X className="h-3.5 w-3.5 text-slate-500" />
                )}
                <span className={hasMinLength ? "text-emerald-300" : ""}>At least 8 characters</span>
              </div>
              <div className="flex items-center gap-2">
                {hasNumber ? (
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                ) : (
                  <X className="h-3.5 w-3.5 text-slate-500" />
                )}
                <span className={hasNumber ? "text-emerald-300" : ""}>Contains at least 1 number</span>
              </div>
              <div className="flex items-center gap-2">
                {hasSpecialChar ? (
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                ) : (
                  <X className="h-3.5 w-3.5 text-slate-500" />
                )}
                <span className={hasSpecialChar ? "text-emerald-300" : ""}>
                  Contains 1 special character (recommended)
                </span>
              </div>
            </div>
          )}

          <Input
            label="Confirm Password"
            type="password"
            placeholder="••••••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            autoComplete="new-password"
          />

          {/* 18+ Verification & Terms Checkboxes */}
          <div className="space-y-3 pt-2 text-xs">
            <label className="flex items-start gap-2.5 cursor-pointer text-slate-300">
              <input
                type="checkbox"
                checked={isAgeVerified}
                onChange={(e) => setIsAgeVerified(e.target.checked)}
                className="mt-0.5 rounded border-slate-700 bg-slate-900 text-rose-500 focus:ring-rose-500/40"
              />
              <span>
                I confirm that I am at least <strong className="text-white">18 years of age</strong>.
              </span>
            </label>

            <label className="flex items-start gap-2.5 cursor-pointer text-slate-300">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="mt-0.5 rounded border-slate-700 bg-slate-900 text-rose-500 focus:ring-rose-500/40"
              />
              <span>
                I agree to the{" "}
                <Link href="/terms" className="text-rose-400 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-rose-400 hover:underline">
                  Privacy Policy
                </Link>
                .
              </span>
            </label>
          </div>

          <Button type="submit" variant="gradient" size="lg" className="w-full mt-4" isLoading={isLoading}>
            <span>Create Account</span>
          </Button>
        </form>

        {/* Footer Link */}
        <div className="text-center text-xs text-slate-400">
          Already have an account?{" "}
          <Link href="/auth/login" className="font-semibold text-rose-400 hover:text-rose-300 transition-colors">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
