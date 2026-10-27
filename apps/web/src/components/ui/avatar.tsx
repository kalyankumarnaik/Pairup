"use client";

import React, { useState } from "react";
import Image from "next/image";

export interface AvatarProps {
  src?: string | null;
  alt: string;
  size?: "sm" | "md" | "lg" | "xl";
  isOnline?: boolean;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = "md",
  isOnline,
  className = "",
}) => {
  const [hasError, setHasError] = useState(false);

  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-14 h-14 text-base",
    xl: "w-20 h-20 text-xl",
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <div className={`relative inline-block flex-shrink-0 ${sizeClasses[size]} ${className}`}>
      <div className="w-full h-full rounded-full overflow-hidden bg-slate-800 ring-2 ring-slate-700/50 flex items-center justify-center font-semibold text-slate-300">
        {src && !hasError ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="80px"
            className="object-cover"
            onError={() => setHasError(true)}
          />
        ) : (
          <span>{getInitials(alt || "PairUp")}</span>
        )}
      </div>
      {typeof isOnline === "boolean" && (
        <span
          className={`absolute bottom-0 right-0 block rounded-full ring-2 ring-slate-950 ${
            size === "sm" ? "w-2.5 h-2.5" : "w-3 h-3"
          } ${isOnline ? "bg-emerald-500" : "bg-slate-600"}`}
          title={isOnline ? "Online" : "Offline"}
        />
      )}
    </div>
  );
};
