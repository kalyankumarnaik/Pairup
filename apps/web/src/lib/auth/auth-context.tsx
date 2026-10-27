"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { apiClient, ApiError } from "@/lib/api/client";
import { FrontendAuthSession, PlatformAccountStatus, PlatformUserRole } from "@/types/api";

interface AuthUser {
  id: string;
  email: string;
  role: PlatformUserRole;
  status: PlatformAccountStatus;
  isEmailVerified: boolean;
  hasProfile: boolean;
}

interface AuthContextType {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  updateUserSession: (updater: Partial<AuthUser>) => void;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Restore session from localStorage on initial load
  useEffect(() => {
    const initAuth = () => {
      try {
        const storedUser = localStorage.getItem("pairup_user");
        const token = localStorage.getItem("pairup_access_token");

        if (storedUser && token) {
          setUser(JSON.parse(storedUser));
        }
      } catch (err) {
        console.error("Failed to restore session", err);
        apiClient.clearTokens();
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = useCallback(
    async (email: string, password: string) => {
      setIsLoading(true);
      setError(null);
      try {
        // Attempt live API login
        const response = await apiClient.post<FrontendAuthSession>(
          "/auth/login",
          { email, password },
          {},
          false,
        );

        const { accessToken, refreshToken, user: authUser } = response.data;
        apiClient.setTokens(accessToken, refreshToken);
        localStorage.setItem("pairup_user", JSON.stringify(authUser));
        setUser(authUser);

        if (!authUser.hasProfile) {
          router.push("/onboarding");
        } else {
          router.push("/discovery");
        }
      } catch (err: unknown) {
        // Fallback for development if backend isn't up
        if (
          process.env.NEXT_PUBLIC_ENABLE_MOCK_FALLBACK === "true" &&
          (err instanceof ApiError && (err.errorCode === "NETWORK_ERROR" || err.statusCode === 0))
        ) {
          const mockUser: AuthUser = {
            id: "user-cur-001",
            email,
            role: email.includes("admin") ? PlatformUserRole.ADMIN : PlatformUserRole.USER,
            status: PlatformAccountStatus.ACTIVE,
            isEmailVerified: true,
            hasProfile: true,
          };
          apiClient.setTokens("mock_jwt_access_token", "mock_jwt_refresh_token");
          localStorage.setItem("pairup_user", JSON.stringify(mockUser));
          setUser(mockUser);
          router.push("/discovery");
          return;
        }

        const msg = err instanceof ApiError ? err.message : "Invalid credentials";
        setError(msg);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [router],
  );

  const register = useCallback(
    async (email: string, password: string) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await apiClient.post<FrontendAuthSession>(
          "/auth/register",
          { email, password },
          {},
          false,
        );

        const { accessToken, refreshToken, user: authUser } = response.data;
        apiClient.setTokens(accessToken, refreshToken);
        localStorage.setItem("pairup_user", JSON.stringify(authUser));
        setUser(authUser);
        router.push("/onboarding");
      } catch (err: unknown) {
        if (
          process.env.NEXT_PUBLIC_ENABLE_MOCK_FALLBACK === "true" &&
          (err instanceof ApiError && (err.errorCode === "NETWORK_ERROR" || err.statusCode === 0))
        ) {
          const mockUser: AuthUser = {
            id: `usr-${Date.now()}`,
            email,
            role: PlatformUserRole.USER,
            status: PlatformAccountStatus.PENDING_VERIFICATION,
            isEmailVerified: false,
            hasProfile: false,
          };
          apiClient.setTokens("mock_jwt_access_token", "mock_jwt_refresh_token");
          localStorage.setItem("pairup_user", JSON.stringify(mockUser));
          setUser(mockUser);
          router.push("/onboarding");
          return;
        }

        const msg = err instanceof ApiError ? err.message : "Registration failed";
        setError(msg);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [router],
  );

  const logout = useCallback(async () => {
    try {
      await apiClient.post("/auth/logout", {}).catch(() => {});
    } finally {
      apiClient.clearTokens();
      setUser(null);
      router.push("/auth/login");
    }
  }, [router]);

  const updateUserSession = useCallback((updater: Partial<AuthUser>) => {
    setUser((prev) => {
      if (!prev) return null;
      const updated = { ...prev, ...updater };
      localStorage.setItem("pairup_user", JSON.stringify(updated));
      return updated;
    });
  }, []);

  const clearError = useCallback(() => setError(null), []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        error,
        login,
        register,
        logout,
        updateUserSession,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
