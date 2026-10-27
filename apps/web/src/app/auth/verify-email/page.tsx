"use client";

import React, { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { apiClient } from "@/lib/api/client";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

function VerifyEmailContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [status, setStatus] = useState<"loading" | "success" | "error">(token ? "loading" : "error");
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    if (!token) {
      setErrorMessage("Missing or invalid verification token.");
      return;
    }

    const verify = async () => {
      try {
        await apiClient.post("/auth/verify-email", { token }, {}, false);
        setStatus("success");
      } catch (err: any) {
        setStatus("error");
        setErrorMessage(err?.message || "Verification link has expired or is invalid.");
      }
    };

    verify();
  }, [token]);

  return (
    <div className="w-full max-w-md glass-card rounded-3xl p-8 sm:p-10 shadow-2xl text-center space-y-6">
      {status === "loading" && (
        <div className="space-y-4">
          <Loader2 className="h-12 w-12 text-rose-500 animate-spin mx-auto" />
          <h2 className="text-xl font-bold text-white">Verifying your email...</h2>
          <p className="text-sm text-slate-400">Please wait while we confirm your account security.</p>
        </div>
      )}

      {status === "success" && (
        <div className="space-y-4 animate-fade-in-up">
          <CheckCircle2 className="h-14 w-14 text-emerald-400 mx-auto" />
          <h2 className="text-2xl font-bold text-white">Email Verified!</h2>
          <p className="text-sm text-slate-300">
            Your email has been confirmed. You now have full access to profile matching and real-time chat.
          </p>
          <div className="pt-4">
            <Link href="/onboarding">
              <Button variant="gradient" size="lg" className="w-full">
                Complete Onboarding
              </Button>
            </Link>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="space-y-4 animate-fade-in-up">
          <AlertCircle className="h-14 w-14 text-rose-500 mx-auto" />
          <h2 className="text-2xl font-bold text-white">Verification Failed</h2>
          <p className="text-sm text-slate-400">{errorMessage || "The link is expired or invalid."}</p>
          <div className="pt-4 flex flex-col gap-2">
            <Link href="/auth/login">
              <Button variant="primary" size="md" className="w-full">
                Go to Login
              </Button>
            </Link>
            <Link href="/help">
              <Button variant="ghost" size="md" className="w-full">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default function VerifyEmailPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
      <Suspense
        fallback={
          <div className="w-full max-w-md glass-card rounded-3xl p-8 text-center text-slate-400">
            <Loader2 className="h-8 w-8 text-rose-500 animate-spin mx-auto mb-2" />
            <p className="text-xs">Loading verification...</p>
          </div>
        }
      >
        <VerifyEmailContent />
      </Suspense>
    </div>
  );
}
