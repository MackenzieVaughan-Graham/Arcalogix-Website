import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { ContactProvider } from "@/components/ContactProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arcalogix | Spatial Intelligence for Enterprise Real Estate",
  description:
    "Standardize your real estate portfolio with spatial models, test fits, design delivery, and the foundation for portfolio intelligence and digital twins.",
  applicationName: "Arcalogix",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Arcalogix | One portfolio. Better decisions.",
    description:
      "From floor plans to connected spatial intelligence. Standardize, test fit, design, and plan the future of your spaces.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ContactProvider>{children}</ContactProvider>
      </body>
    </html>
  );
}
