import React from "react";
import { Badge } from "@/components/ui/badge";

export default function TermsPage() {
  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-12 space-y-8">
      <div className="text-center space-y-3">
        <Badge variant="secondary">Legal Agreement</Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Terms of Service</h1>
        <p className="text-xs text-slate-400">Effective Date: October 27, 2026</p>
      </div>

      <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 text-left text-xs leading-relaxed text-slate-300">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">1. Eligibility</h2>
          <p>
            You must be at least 18 years of age to create an account on PairUp or use the platform. By creating an account, you represent and warrant that you are legally permitted to enter into this agreement.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">2. Account Security & Verification</h2>
          <p>
            You are responsible for maintaining the confidentiality of your login credentials. You agree not to share your account with any third party. PairUp reserves the right to enforce biometric or document verification to ensure community integrity.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">3. Subscriptions & Billing</h2>
          <p>
            Paid subscriptions (PairUp Gold, Platinum) are billed in advance on a recurring monthly or annual basis. You may cancel renewal at any time through Account Settings before the start of the next billing cycle.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">4. Termination & Moderation</h2>
          <p>
            PairUp reserves the right to suspend or terminate any account that violates our Community Guidelines, safety policies, or terms, without prior notice.
          </p>
        </section>
      </div>
    </div>
  );
}
