"use client";

import React, { forwardRef } from "react";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive" | "gradient";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", isLoading = false, children, disabled, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer";

    const variantStyles = {
      primary: "bg-rose-500 text-white hover:bg-rose-600 active:scale-[0.98] shadow-sm shadow-rose-500/25",
      secondary: "bg-slate-800 text-slate-100 hover:bg-slate-700 active:scale-[0.98]",
      outline:
        "border border-slate-700 bg-transparent text-slate-200 hover:bg-slate-800/60 hover:text-white active:scale-[0.98]",
      ghost: "text-slate-300 hover:bg-slate-800/50 hover:text-white active:scale-[0.98]",
      destructive: "bg-red-600 text-white hover:bg-red-700 active:scale-[0.98]",
      gradient:
        "bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 text-white hover:opacity-95 shadow-lg shadow-rose-500/20 active:scale-[0.98]",
    };

    const sizeStyles = {
      sm: "h-8 px-3 text-xs rounded-lg gap-1.5",
      md: "h-10 px-4 text-sm rounded-xl gap-2",
      lg: "h-12 px-6 text-base rounded-xl gap-2.5",
      icon: "h-10 w-10 rounded-xl",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {isLoading && <Loader2 className="h-4 w-4 animate-spin text-current" />}
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
