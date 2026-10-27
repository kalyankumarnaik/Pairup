import type { Metadata } from "next";
import "@/styles/globals.css";
import { AuthProvider } from "@/lib/auth/auth-context";
import { QueryProvider } from "@/lib/providers/query-provider";
import { ToastProvider } from "@/components/ui/toast";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "PairUp | The Intelligence Behind Meaningful Connections",
  description:
    "AI-powered dating platform engineered for authentic human compatibility, verified profiles, and intentional relationships.",
  keywords: ["dating app", "AI matchmaking", "relationships", "verified profiles", "intentional dating"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
        <QueryProvider>
          <AuthProvider>
            <ToastProvider>
              <Navbar />
              <main className="flex-1 flex flex-col">{children}</main>
              <Footer />
            </ToastProvider>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
