"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MOCK_LOCAL_EVENTS } from "@/lib/api/mock-service";
import { LocalEvent } from "@/types/api";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/toast";
import {
  Calendar,
  MapPin,
  Users,
  CheckCircle2,
  Sparkles,
  Filter,
  Clock,
  Video,
} from "lucide-react";

export default function EventsPage() {
  const { showToast } = useToast();
  const [events, setEvents] = useState<LocalEvent[]>(MOCK_LOCAL_EVENTS);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const handleToggleRsvp = (eventId: string) => {
    setEvents((prev) =>
      prev.map((evt) => {
        if (evt.id !== eventId) return evt;
        const newRsvped = !evt.isRsvped;
        showToast(
          newRsvped ? "success" : "info",
          newRsvped ? "RSVP Confirmed!" : "RSVP Cancelled",
          newRsvped
            ? `You are now attending ${evt.title}. Calendar invite sent!`
            : `You have cancelled your attendance for ${evt.title}.`,
        );
        return {
          ...evt,
          isRsvped: newRsvped,
          attendeesCount: newRsvped ? evt.attendeesCount + 1 : evt.attendeesCount - 1,
        };
      }),
    );
  };

  const filteredEvents =
    selectedCategory === "ALL"
      ? events
      : events.filter((e) => e.category === selectedCategory);

  return (
    <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Hero Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <Badge variant="gradient" size="sm">
          PairUp Community Experiences
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Curated Singles Mixers & Meetups
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          Step out from behind the screen. Connect in low-pressure, expertly hosted environments designed for authentic sparks.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 pt-2">
          {[
            { id: "ALL", label: "All Events" },
            { id: "WINE_TASTING", label: "Mixers & Cocktails" },
            { id: "SPEED_DATING", label: "Speed Dating" },
            { id: "VIRTUAL_MIXER", label: "Virtual Rooms" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? "bg-rose-500 text-white shadow-md shadow-rose-500/20"
                  : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map((evt) => (
          <div
            key={evt.id}
            className="group glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col justify-between"
          >
            <div>
              {/* Event Image Banner */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={evt.imageUrl}
                  alt={evt.title}
                  fill
                  sizes="400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <Badge variant={evt.isVirtual ? "secondary" : "default"} size="sm">
                    {evt.isVirtual ? (
                      <>
                        <Video className="h-3 w-3 mr-1" />
                        Virtual Event
                      </>
                    ) : (
                      <>
                        <MapPin className="h-3 w-3 mr-1" />
                        In-Person
                      </>
                    )}
                  </Badge>
                </div>
              </div>

              {/* Event Body */}
              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{evt.date}</span>
                  </p>
                  <h3 className="text-xl font-bold text-white group-hover:text-rose-400 transition-colors">
                    {evt.title}
                  </h3>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                    <MapPin className="h-3.5 w-3.5 text-slate-500 shrink-0" />
                    <span className="truncate">{evt.location}</span>
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {evt.description}
                </p>

                {/* Capacity & Attendees Progress */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" />
                      <span>{evt.attendeesCount} Singles Attending</span>
                    </span>
                    <span>{evt.capacity - evt.attendeesCount} spots left</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-rose-500 to-amber-500"
                      style={{ width: `${(evt.attendeesCount / evt.capacity) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* RSVP CTA Button */}
            <div className="p-6 pt-0">
              <Button
                variant={evt.isRsvped ? "secondary" : "gradient"}
                size="md"
                className="w-full"
                onClick={() => handleToggleRsvp(evt.id)}
              >
                {evt.isRsvped ? (
                  <>
                    <CheckCircle2 className="h-4 w-4 mr-2 text-emerald-400" />
                    <span>RSVP Confirmed</span>
                  </>
                ) : (
                  <span>RSVP for Event</span>
                )}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
