"use client";

import React, { useState } from "react";
import { MOCK_PREMIUM_PLANS } from "@/lib/api/mock-service";
import { PremiumPlan } from "@/types/api";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Modal } from "@/components/ui/modal";
import { useToast } from "@/components/ui/toast";
import {
  Crown,
  Check,
  Sparkles,
  Zap,
  ShieldCheck,
  CreditCard,
  Lock,
  ArrowRight,
} from "lucide-react";

export default function PremiumPage() {
  const { showToast } = useToast();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");
  const [selectedPlan, setSelectedPlan] = useState<PremiumPlan | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleOpenCheckout = (plan: PremiumPlan) => {
    if (plan.id === "free") return;
    setSelectedPlan(plan);
    setIsCheckoutOpen(true);
  };

  const handleConfirmCheckout = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsCheckoutOpen(false);
      showToast(
        "success",
        "Subscription Activated!",
        `You have successfully upgraded to ${selectedPlan?.name}. Enjoy your perks!`,
      );
    }, 1500);
  };

  return (
    <div className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <Badge variant="gradient" size="sm">
          PairUp Membership Tiers
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Supercharge your connection journey
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          Unlock unlimited daily likes, see who admired your profile first, and get prioritized by our AI matching engine.
        </p>

        {/* Billing Interval Toggle */}
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 p-1.5 text-xs font-semibold">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`rounded-full px-4 py-1.5 transition-all ${
              billingCycle === "monthly" ? "bg-rose-500 text-white shadow-md" : "text-slate-400 hover:text-white"
            }`}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`rounded-full px-4 py-1.5 transition-all flex items-center gap-1.5 ${
              billingCycle === "yearly" ? "bg-rose-500 text-white shadow-md" : "text-slate-400 hover:text-white"
            }`}
          >
            <span>Annual (Save 35%)</span>
            <span className="rounded-full bg-amber-400/20 text-amber-300 px-1.5 py-0.2 text-[10px]">
              BEST VALUE
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {MOCK_PREMIUM_PLANS.map((plan) => {
          const isGold = plan.id === "gold";
          const isPlatinum = plan.id === "platinum";
          const price = billingCycle === "yearly" ? plan.yearlyPriceMonthly : plan.monthlyPrice;

          return (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                isGold
                  ? "border-2 border-rose-500 bg-gradient-to-b from-rose-950/30 via-slate-900 to-slate-950 shadow-2xl shadow-rose-500/15 scale-105 z-10"
                  : isPlatinum
                  ? "border border-amber-500/40 bg-gradient-to-b from-amber-950/20 via-slate-900 to-slate-950 shadow-xl"
                  : "border border-slate-800 bg-slate-900/40"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant={isGold ? "gradient" : "warning"} size="sm">
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="text-xs text-slate-400 mt-1">{plan.tagline}</p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">
                    ${price === 0 ? "0" : price.toFixed(2)}
                  </span>
                  <span className="text-xs text-slate-400">
                    {price === 0 ? "/ forever" : "/ month"}
                  </span>
                </div>

                <div className="border-t border-slate-800/80 pt-6 space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Included features:
                  </p>
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <Button
                  variant={isGold ? "gradient" : isPlatinum ? "secondary" : "outline"}
                  size="lg"
                  className="w-full"
                  onClick={() => handleOpenCheckout(plan)}
                  disabled={plan.id === "free"}
                >
                  {plan.id === "free" ? "Current Plan" : `Upgrade to ${plan.name.split(" ")[1]}`}
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Trust & Guarantee */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0" />
          <span>Cancel anytime with 1-click in account settings. No hidden renewal surprises.</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-300">
          <Lock className="h-4 w-4 text-rose-500" />
          <span>Bank-grade 256-bit TLS encrypted checkout</span>
        </div>
      </div>

      {/* Checkout Initiation Modal */}
      {selectedPlan && (
        <Modal
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
          title={`Confirm ${selectedPlan.name}`}
          description={`Initiating secure membership checkout (${billingCycle === "yearly" ? "Annual" : "Monthly"}).`}
          maxWidth="sm"
        >
          <div className="space-y-4 pt-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Subscription Tier</span>
                <span className="font-semibold text-white">{selectedPlan.name}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Billing Cycle</span>
                <span className="text-slate-200 capitalize">{billingCycle}</span>
              </div>
              <div className="border-t border-slate-800 pt-2 flex justify-between text-sm font-bold">
                <span className="text-white">Total Due Today</span>
                <span className="text-rose-400">
                  $
                  {billingCycle === "yearly"
                    ? (selectedPlan.yearlyPriceMonthly * 12).toFixed(2)
                    : selectedPlan.monthlyPrice.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <CreditCard className="h-4 w-4 text-slate-300" />
              <span>Simulated Payment Gateway (Stripe Test Token)</span>
            </div>

            <div className="flex gap-2 pt-2">
              <Button variant="ghost" size="md" className="flex-1" onClick={() => setIsCheckoutOpen(false)}>
                Cancel
              </Button>
              <Button
                variant="gradient"
                size="md"
                className="flex-1"
                onClick={handleConfirmCheckout}
                isLoading={isProcessing}
              >
                Confirm Upgrade
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
