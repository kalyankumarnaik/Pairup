import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "success" | "warning" | "destructive" | "gradient" | "outline";
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  className = "",
  variant = "default",
  size = "md",
  children,
  ...props
}) => {
  const baseStyles = "inline-flex items-center font-medium transition-colors select-none";

  const variantStyles = {
    default: "bg-rose-500/15 text-rose-400 border border-rose-500/20",
    secondary: "bg-slate-800 text-slate-300 border border-slate-700/60",
    success: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25",
    warning: "bg-amber-500/15 text-amber-300 border border-amber-500/25",
    destructive: "bg-red-500/15 text-red-400 border border-red-500/25",
    gradient: "bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-sm",
    outline: "border border-slate-700 text-slate-300",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs rounded-md gap-1",
    md: "px-2.5 py-1 text-xs rounded-full gap-1.5",
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`} {...props}>
      {children}
    </span>
  );
};
