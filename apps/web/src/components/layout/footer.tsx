import React from "react";
import Link from "next/link";
import { Flame, ShieldCheck, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-slate-800/80 bg-slate-950 py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-rose-500 to-amber-500 text-white">
                <Flame className="h-4 w-4 fill-current" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Pair<span className="text-rose-500">Up</span>
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              PairUp is the AI-powered dating and relationship platform built for authentic connections, intentional compatibility, and member safety.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-emerald-400">
              <ShieldCheck className="h-4 w-4" />
              <span>Verified & Moderated Community</span>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/discovery" className="hover:text-white transition-colors">
                  AI Discovery
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition-colors">
                  Singles Mixers & Events
                </Link>
              </li>
              <li>
                <Link href="/date-planner" className="hover:text-white transition-colors">
                  Date Concierge
                </Link>
              </li>
              <li>
                <Link href="/premium" className="hover:text-white transition-colors">
                  PairUp Gold & Platinum
                </Link>
              </li>
            </ul>
          </div>

          {/* Safety & Support */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">Safety & Trust</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/safety" className="hover:text-white transition-colors">
                  Safety Center
                </Link>
              </li>
              <li>
                <Link href="/guidelines" className="hover:text-white transition-colors">
                  Community Guidelines
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-white transition-colors">
                  Help Center & Support
                </Link>
              </li>
              <li>
                <Link href="/safety#reporting" className="hover:text-white transition-colors">
                  Report a Safety Concern
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">Legal & Policies</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy#cookies" className="hover:text-white transition-colors">
                  Cookie Preferences
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} PairUp Inc. All rights reserved. 18+ only.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Crafted with</span>
            <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" />
            <span>for genuine relationships</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
