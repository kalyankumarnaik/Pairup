"use client";

import React, { forwardRef } from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", type = "text", label, error, helperText, startIcon, endIcon, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="w-full space-y-1.5 text-left">
        {label && (
          <label htmlFor={inputId} className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {startIcon && (
            <div className="pointer-events-none absolute left-3 flex items-center text-slate-400">{startIcon}</div>
          )}
          <input
            id={inputId}
            type={type}
            ref={ref}
            className={`w-full rounded-xl border bg-slate-900/80 px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500/50 ${
              startIcon ? "pl-10" : ""
            } ${endIcon ? "pr-10" : ""} ${
              error ? "border-red-500/80 focus:border-red-500 focus:ring-red-500/30" : "border-slate-800 focus:border-rose-500"
            } ${className}`}
            {...props}
          />
          {endIcon && <div className="absolute right-3 flex items-center text-slate-400">{endIcon}</div>}
        </div>
        {error ? (
          <p className="text-xs text-red-400 animate-fade-in-up" role="alert">
            {error}
          </p>
        ) : helperText ? (
          <p className="text-xs text-slate-500">{helperText}</p>
        ) : null}
      </div>
    );
  },
);

Input.displayName = "Input";
