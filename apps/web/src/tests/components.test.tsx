import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Modal } from "@/components/ui/modal";

describe("Reusable UI Components Suite", () => {
  it("renders Button correctly with text and responds to click", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Find Matches</Button>);

    const btn = screen.getByRole("button", { name: /find matches/i });
    expect(btn).toBeInTheDocument();

    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("disables Button and displays loader when isLoading is true", () => {
    render(<Button isLoading>Submitting</Button>);
    const btn = screen.getByRole("button", { name: /submitting/i });
    expect(btn).toBeDisabled();
  });

  it("renders Input with label, placeholder and error message", () => {
    render(
      <Input
        label="Email Address"
        placeholder="you@example.com"
        error="Invalid email format"
      />,
    );

    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText("you@example.com")).toBeInTheDocument();
    expect(screen.getByRole("alert")).toHaveTextContent("Invalid email format");
  });

  it("renders Badge variants properly", () => {
    render(<Badge variant="gradient">95% Compatibility</Badge>);
    expect(screen.getByText("95% Compatibility")).toBeInTheDocument();
  });

  it("renders Modal when isOpen is true and invokes onClose on dismiss", () => {
    const handleClose = vi.fn();
    render(
      <Modal isOpen={true} onClose={handleClose} title="Mutual Match Celebration">
        <p>You and Elena matched!</p>
      </Modal>,
    );

    expect(screen.getByText("Mutual Match Celebration")).toBeInTheDocument();
    expect(screen.getByText("You and Elena matched!")).toBeInTheDocument();

    const closeBtn = screen.getByRole("button", { name: /close dialog/i });
    fireEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
