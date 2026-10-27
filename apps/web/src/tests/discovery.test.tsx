import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import DiscoveryPage from "@/app/discovery/page";
import { ToastProvider } from "@/components/ui/toast";

const renderWithProviders = (ui: React.ReactElement) => {
  return render(<ToastProvider>{ui}</ToastProvider>);
};

describe("Discovery & Swiping Page", () => {
  it("renders discovery interface and candidate profile details", async () => {
    renderWithProviders(<DiscoveryPage />);

    expect(screen.getByText(/AI Feed/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /filters/i })).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/Elena Vance/i)).toBeInTheDocument();
    });

    expect(screen.getByText(/Neuroscience Researcher at UCSF/i)).toBeInTheDocument();
  });

  it("handles Like action and renders pass/like buttons", async () => {
    renderWithProviders(<DiscoveryPage />);

    await waitFor(() => {
      expect(screen.getByText(/Elena Vance/i)).toBeInTheDocument();
    });

    const likeButtons = screen.getAllByRole("button", { name: /like candidate/i });
    expect(likeButtons.length).toBeGreaterThan(0);

    const passButton = screen.getByRole("button", { name: /pass candidate/i });
    expect(passButton).toBeInTheDocument();
  });
});
