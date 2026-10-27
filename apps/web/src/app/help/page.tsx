"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/toast";
import { HelpCircle, Search, MessageSquare, CheckCircle2, ChevronDown } from "lucide-react";

export default function HelpCenterPage() {
  const { showToast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Ticket form
  const [ticketSubject, setTicketSubject] = useState("");
  const [ticketCategory, setTicketCategory] = useState("ACCOUNT");
  const [ticketDetails, setTicketDetails] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const faqs = [
    {
      q: "How does the PairUp AI compatibility score work?",
      a: "Our AI generates a deep vector embedding of your lifestyle preferences, relationship intents, prompt responses, and communication pacing. It calculates an affinity score (0-100%) against other verified profiles within your search radius.",
    },
    {
      q: "How do I verify my profile with a photo check?",
      a: "Go to Edit Profile > Verification. You will take a quick real-time selfie replicating a random hand gesture. Member 4's automated computer vision verifies you match your gallery photos within 30 seconds.",
    },
    {
      q: "What happens when I block another user?",
      a: "Blocking is immediate and permanent on the backend. The mutual match is terminated, conversation history is removed, and neither person can view the other in discovery.",
    },
    {
      q: "How do I cancel my PairUp Gold or Platinum subscription?",
      a: "Navigate to Settings > Account & Security > Subscription. Click 'Manage Subscription' and select 'Cancel Renewal'. You retain access until the end of your prepaid period.",
    },
  ];

  const filteredFaqs = searchQuery
    ? faqs.filter(
        (f) =>
          f.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          f.a.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : faqs;

  const handleSubmitTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketSubject.trim() || !ticketDetails.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      showToast(
        "success",
        "Ticket Submitted (#PU-8492)",
        "Our customer support team will reply to your email within 24 hours.",
      );
      setTicketSubject("");
      setTicketDetails("");
    }, 1000);
  };

  return (
    <div className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <Badge variant="default" size="sm">
          Support & FAQs
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          How can we help you?
        </h1>
        <p className="text-sm text-slate-400">
          Search frequently asked questions or submit a ticket directly to our support engineering team.
        </p>

        {/* Search Bar */}
        <div className="pt-2 max-w-md mx-auto relative flex items-center">
          <Search className="absolute left-3.5 h-4 w-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search questions (e.g. billing, safety, verification)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-2xl border border-slate-800 bg-slate-900 py-3 pl-10 pr-4 text-xs text-white placeholder:text-slate-500 focus:border-rose-500 focus:outline-none"
          />
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-4 text-left">
        <h2 className="text-lg font-bold text-white mb-2">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between text-left text-sm font-semibold text-slate-100"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`h-4 w-4 text-slate-400 transition-transform ${
                    openFaq === idx ? "rotate-180 text-rose-400" : ""
                  }`}
                />
              </button>
              {openFaq === idx && (
                <p className="mt-2 text-xs text-slate-400 leading-relaxed border-t border-slate-800 pt-2 animate-fade-in-up">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Submit Support Ticket Form */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 text-left max-w-2xl mx-auto">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-rose-500" />
            Submit a Support Request
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Can&apos;t find what you need? Fill out this form and our support desk will respond shortly.
          </p>
        </div>

        <form onSubmit={handleSubmitTicket} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
              Category
            </label>
            <select
              value={ticketCategory}
              onChange={(e) => setTicketCategory(e.target.value)}
              className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2.5 text-xs text-white"
            >
              <option value="ACCOUNT">Account Access & Login</option>
              <option value="BILLING">Billing & Subscriptions</option>
              <option value="SAFETY">Safety & Harassment Report</option>
              <option value="TECHNICAL">Bug Report / Technical Issue</option>
            </select>
          </div>

          <Input
            label="Subject"
            placeholder="Brief summary of your question or issue"
            value={ticketSubject}
            onChange={(e) => setTicketSubject(e.target.value)}
            required
          />

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
              Detailed Description
            </label>
            <textarea
              rows={4}
              placeholder="Please provide specifics so we can assist you quickly..."
              value={ticketDetails}
              onChange={(e) => setTicketDetails(e.target.value)}
              className="w-full rounded-xl border border-slate-800 bg-slate-900 p-3.5 text-xs text-white placeholder:text-slate-500 focus:border-rose-500 focus:outline-none"
              required
            />
          </div>

          <Button type="submit" variant="gradient" size="md" className="w-full" isLoading={isSubmitting}>
            Send Support Ticket
          </Button>
        </form>
      </div>
    </div>
  );
}
