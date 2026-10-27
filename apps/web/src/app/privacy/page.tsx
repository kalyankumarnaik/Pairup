import React from "react";
import { Badge } from "@/components/ui/badge";

export default function PrivacyPage() {
  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-12 space-y-8">
      <div className="text-center space-y-3">
        <Badge variant="secondary">Data Sovereignty</Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Privacy Policy</h1>
        <p className="text-xs text-slate-400">Effective Date: October 27, 2026</p>
      </div>

      <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 text-left text-xs leading-relaxed text-slate-300">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">1. Information We Collect</h2>
          <p>
            We collect the profile information you provide during onboarding: display name, birthdate, gender identity, photos, prompts, and interest tags. Location data is stored as coarse coordinates (fuzzed within a random 500-meter radius) to prevent physical triangulation.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">2. How We Use AI Vectors</h2>
          <p>
            PairUp transforms interest and prompt text into neural embeddings to calculate compatibility scores with eligible candidates. Your private personal chat logs are never used to train generalized external language models.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">3. Your Data Rights (GDPR & CCPA)</h2>
          <p>
            You have the right to request a complete export of your personal data or exercise permanent erasure (&quot;Right to be Forgotten&quot;) via Account Settings at any time.
          </p>
        </section>
      </div>
    </div>
  );
}
