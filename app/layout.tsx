import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { ContactProvider } from "@/components/ContactProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arcalogix | Spatial Intelligence for Enterprise Real Estate",
  description:
    "Connect people, place and policy across your real estate portfolio. Evaluate properties, reuse spatial information, apply consistent standards and extend models from planning to operations.",
  applicationName: "Arcalogix",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Arcalogix | Every Space. One Strategy.",
    description:
      "One spatial intelligence platform connecting the information, people and decisions across enterprise real estate portfolios.",
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
