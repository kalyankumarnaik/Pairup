import React from "react";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle } from "lucide-react";

export default function GuidelinesPage() {
  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-12 space-y-8">
      <div className="text-center space-y-3">
        <Badge variant="default">Community Standards</Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">PairUp Community Guidelines</h1>
        <p className="text-sm text-slate-400">
          PairUp exists to nurture authentic, healthy, and kind connections. These standards apply to all profiles, messages, and events.
        </p>
      </div>

      <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 text-left text-sm leading-relaxed text-slate-300">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-emerald-400" />
            What We Champion
          </h2>
          <ul className="space-y-2 list-disc list-inside text-xs text-slate-300">
            <li><strong>Authenticity:</strong> Represent yourself honestly with current photos and genuine life details.</li>
            <li><strong>Consent & Respect:</strong> Boundaries are respected unconditionally in messaging and in person.</li>
            <li><strong>Intentionality:</strong> Clarity on what kind of relationship you seek.</li>
          </ul>
        </section>

        <section className="space-y-3 pt-4 border-t border-slate-800">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <XCircle className="h-5 w-5 text-rose-500" />
            Zero-Tolerance Prohibitions
          </h2>
          <ul className="space-y-2 list-disc list-inside text-xs text-slate-300">
            <li><strong>Harassment & Hate Speech:</strong> Racist, sexist, homophobic, transphobic, or abusive behavior causes immediate permanent bans.</li>
            <li><strong>Underage Accounts:</strong> PairUp is strictly 18+. Any underage accounts are immediately terminated and reported.</li>
            <li><strong>Commercial Solicitation & Scams:</strong> Promoting goods, adult services, crypto schemes, or external links is strictly forbidden.</li>
            <li><strong>Non-Consensual Explicit Media:</strong> Sending unsolicited explicit content results in instant account suspension via Member 4&apos;s AI screening.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
