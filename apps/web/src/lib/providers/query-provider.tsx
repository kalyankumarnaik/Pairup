"use client";

import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const QueryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 3, // 3 minutes cache
            gcTime: 1000 * 60 * 10, // 10 minutes garbage collection
            refetchOnWindowFocus: false,
            retry: (failureCount, error: any) => {
              if (error?.statusCode === 401 || error?.statusCode === 403 || error?.statusCode === 404) {
                return false;
              }
              return failureCount < 2;
            },
          },
        },
      }),
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
