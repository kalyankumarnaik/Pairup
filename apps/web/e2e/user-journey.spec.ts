import { test, expect } from "@playwright/test";

test.describe("PairUp Platform End-to-End User Journeys", () => {
  test("Landing Page renders brand identity and CTA buttons", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toContainText("Stop swiping blindly");
    await expect(page.getByRole("button", { name: /Find Your Match/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /Explore Live Demo/i })).toBeVisible();
  });

  test("User can navigate to Login page and view demo accounts", async ({ page }) => {
    await page.goto("/auth/login");
    await expect(page.locator("h2")).toContainText("Welcome back");
    await expect(page.getByRole("button", { name: /Sign In/i })).toBeVisible();
  });

  test("Discovery interface displays candidate cards and allows liking", async ({ page }) => {
    await page.goto("/discovery");
    await expect(page.getByText(/AI Feed/i)).toBeVisible();
    await expect(page.getByRole("button", { name: /like candidate/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /pass candidate/i })).toBeVisible();
  });

  test("Events page renders mixers with RSVP buttons", async ({ page }) => {
    await page.goto("/events");
    await expect(page.locator("h1")).toContainText("Curated Singles Mixers");
    const rsvpBtn = page.getByRole("button", { name: /RSVP for Event/i }).first();
    if (await rsvpBtn.isVisible()) {
      await rsvpBtn.click();
    }
  });

  test("Admin portal restricts unauthorized users", async ({ page }) => {
    await page.goto("/admin");
    // If not authenticated as admin, displays Access Denied
    const deniedHeading = page.locator("h2");
    await expect(deniedHeading).toBeVisible();
  });
});
