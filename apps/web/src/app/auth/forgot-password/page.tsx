"use client";

import React, { useState } from "react";
import Link from "next/link";
import { apiClient } from "@/lib/api/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/toast";
import { KeyRound, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ForgotPasswordPage() {
  const { showToast } = useToast();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await apiClient.post("/auth/forgot-password", { email }, {}, false);
      setIsSent(true);
      showToast("success", "Email Sent", "Check your inbox for password reset instructions.");
    } catch {
      // Allow fallback confirmation to prevent email enumeration
      setIsSent(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-6 glass-card rounded-3xl p-8 sm:p-10 shadow-2xl">
        <div className="text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800 text-rose-500 mb-3">
            <KeyRound className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white">Reset your password</h2>
          <p className="mt-1 text-sm text-slate-400">
            Enter your email and we&apos;ll send you a secure link to recover your account.
          </p>
        </div>

        {isSent ? (
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center space-y-3 animate-fade-in-up">
            <CheckCircle2 className="h-10 w-10 text-emerald-400 mx-auto" />
            <h3 className="text-base font-semibold text-white">Check your email</h3>
            <p className="text-xs text-slate-300">
              We have dispatched a password reset link to <strong className="text-white">{email}</strong> if an account exists.
            </p>
            <Link href="/auth/login" className="inline-block pt-2">
              <Button variant="outline" size="sm">
                Return to Login
              </Button>
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Button type="submit" variant="gradient" size="lg" className="w-full mt-2" isLoading={isLoading}>
              Send Reset Link
            </Button>
          </form>
        )}

        <div className="text-center pt-2">
          <Link
            href="/auth/login"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
}
