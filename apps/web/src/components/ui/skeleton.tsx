import React from "react";

export const Skeleton: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className = "",
  ...props
}) => {
  return (
    <div
      className={`animate-pulse rounded-xl bg-slate-800/80 ${className}`}
      {...props}
    />
  );
};
