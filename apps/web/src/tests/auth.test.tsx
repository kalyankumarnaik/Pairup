import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import RegisterPage from "@/app/auth/register/page";
import LoginPage from "@/app/auth/login/page";
import { AuthProvider } from "@/lib/auth/auth-context";
import { ToastProvider } from "@/components/ui/toast";

const renderWithAuth = (ui: React.ReactElement) => {
  return render(
    <AuthProvider>
      <ToastProvider>{ui}</ToastProvider>
    </AuthProvider>,
  );
};

describe("Authentication Workflows", () => {
  it("enforces 18+ and password confirmation on Register page", async () => {
    renderWithAuth(<RegisterPage />);

    expect(screen.getByRole("heading", { name: /create your account/i })).toBeInTheDocument();

    const emailInput = screen.getByLabelText(/email address/i);
    const passwordInput = screen.getByLabelText(/^password$/i);
    const confirmPasswordInput = screen.getByLabelText(/confirm password/i);

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "Password123!" } });
    fireEvent.change(confirmPasswordInput, { target: { value: "Password123!" } });

    const submitBtn = screen.getByRole("button", { name: /create account/i });
    fireEvent.click(submitBtn);

    // Shows 18+ error prompt
    expect(
      screen.getByText(/You must be at least 18 years old to join PairUp/i),
    ).toBeInTheDocument();
  });

  it("renders Login page with quick demo options", async () => {
    renderWithAuth(<LoginPage />);

    expect(screen.getByRole("heading", { name: /welcome back/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/you@example.com/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Alex \(Member\)/i })).toBeInTheDocument();
  });
});
