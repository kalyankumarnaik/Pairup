/**
 * PairUp Platform - Centralized Typed API Client
 * Member 2 Lead Implementation
 */

import { FrontendStandardResponse, FrontendErrorResponse, FrontendAuthSession } from "@/types/api";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/v1";

export class ApiError extends Error {
  statusCode: number;
  errorCode: string;
  details?: unknown;
  path?: string;

  constructor(message: string, statusCode: number, errorCode: string, details?: unknown, path?: string) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.details = details;
    this.path = path;
  }
}

class ApiClient {
  private isRefreshing = false;
  private refreshSubscribers: Array<(token: string) => void> = [];

  private getAccessToken(): string | null {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("pairup_access_token");
  }

  private getRefreshToken(): string | null {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("pairup_refresh_token");
  }

  public setTokens(accessToken: string, refreshToken: string) {
    if (typeof window === "undefined") return;
    localStorage.setItem("pairup_access_token", accessToken);
    localStorage.setItem("pairup_refresh_token", refreshToken);
  }

  public clearTokens() {
    if (typeof window === "undefined") return;
    localStorage.removeItem("pairup_access_token");
    localStorage.removeItem("pairup_refresh_token");
    localStorage.removeItem("pairup_user");
  }

  private onTokenRefreshed(token: string) {
    this.refreshSubscribers.forEach((callback) => callback(token));
    this.refreshSubscribers = [];
  }

  private addRefreshSubscriber(callback: (token: string) => void) {
    this.refreshSubscribers.push(callback);
  }

  private async tryRefreshToken(): Promise<string | null> {
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) {
      this.clearTokens();
      return null;
    }

    try {
      const res = await fetch(`${BASE_URL}/auth/refresh`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refreshToken }),
      });

      if (!res.ok) {
        this.clearTokens();
        return null;
      }

      const envelope: FrontendStandardResponse<FrontendAuthSession> = await res.json();
      const newAccess = envelope.data.accessToken;
      const newRefresh = envelope.data.refreshToken;
      this.setTokens(newAccess, newRefresh);
      return newAccess;
    } catch {
      this.clearTokens();
      return null;
    }
  }

  public async request<T>(
    endpoint: string,
    options: RequestInit = {},
    requiresAuth = true,
  ): Promise<FrontendStandardResponse<T>> {
    const url = endpoint.startsWith("http") ? endpoint : `${BASE_URL}${endpoint}`;
    const headers = new Headers(options.headers || {});

    if (!headers.has("Content-Type") && !(options.body instanceof FormData)) {
      headers.set("Content-Type", "application/json");
    }

    if (requiresAuth) {
      const token = this.getAccessToken();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
    }

    let response: Response;
    try {
      response = await fetch(url, {
        ...options,
        headers,
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Network request failed";
      throw new ApiError(msg, 0, "NETWORK_ERROR");
    }

    // Handle 401 and Token Refresh
    if (response.status === 401 && requiresAuth) {
      if (!this.isRefreshing) {
        this.isRefreshing = true;
        const newToken = await this.tryRefreshToken();
        this.isRefreshing = false;

        if (newToken) {
          this.onTokenRefreshed(newToken);
          headers.set("Authorization", `Bearer ${newToken}`);
          response = await fetch(url, { ...options, headers });
        } else {
          // Token refresh failed, force logout
          if (typeof window !== "undefined" && !window.location.pathname.startsWith("/auth")) {
            window.location.href = "/auth/login?expired=true";
          }
        }
      } else {
        // Wait for current refresh to complete
        const retryToken = await new Promise<string>((resolve) => {
          this.addRefreshSubscriber(resolve);
        });
        headers.set("Authorization", `Bearer ${retryToken}`);
        response = await fetch(url, { ...options, headers });
      }
    }

    const json = await response.json().catch(() => null);

    if (!response.ok) {
      const errPayload = json as FrontendErrorResponse | null;
      const message = Array.isArray(errPayload?.message)
        ? errPayload?.message.join(", ")
        : errPayload?.message || response.statusText || "Request failed";

      throw new ApiError(
        message,
        response.status,
        errPayload?.error || "UNKNOWN_ERROR",
        errPayload?.message,
        errPayload?.path,
      );
    }

    return json as FrontendStandardResponse<T>;
  }

  // HTTP Helper methods
  public get<T>(endpoint: string, options?: RequestInit, requiresAuth = true) {
    return this.request<T>(endpoint, { ...options, method: "GET" }, requiresAuth);
  }

  public post<T>(endpoint: string, data?: unknown, options?: RequestInit, requiresAuth = true) {
    return this.request<T>(
      endpoint,
      {
        ...options,
        method: "POST",
        body: data instanceof FormData ? data : JSON.stringify(data),
      },
      requiresAuth,
    );
  }

  public patch<T>(endpoint: string, data?: unknown, options?: RequestInit, requiresAuth = true) {
    return this.request<T>(
      endpoint,
      {
        ...options,
        method: "PATCH",
        body: data instanceof FormData ? data : JSON.stringify(data),
      },
      requiresAuth,
    );
  }

  public put<T>(endpoint: string, data?: unknown, options?: RequestInit, requiresAuth = true) {
    return this.request<T>(
      endpoint,
      {
        ...options,
        method: "PUT",
        body: data instanceof FormData ? data : JSON.stringify(data),
      },
      requiresAuth,
    );
  }

  public delete<T>(endpoint: string, options?: RequestInit, requiresAuth = true) {
    return this.request<T>(endpoint, { ...options, method: "DELETE" }, requiresAuth);
  }
}

export const apiClient = new ApiClient();
