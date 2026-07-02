import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://voxelcivitas.com"),
  title: {
    default: "VoxelCivitas",
    template: "%s | VoxelCivitas",
  },
  description:
    "VoxelCivitas is an early-stage web platform for designing, running, and analyzing multi-agent experiments in Minecraft-compatible worlds.",
  authors: [{ name: "Mark Jacinto Kropf" }],
  creator: "Mark Jacinto Kropf",
  openGraph: {
    title: "VoxelCivitas",
    description:
      "A virtual civilization lab for agent-based research in Minecraft-compatible worlds.",
    url: "https://voxelcivitas.com",
    siteName: "VoxelCivitas",
    images: [
      {
        url: "/images/voxelcivitas-hero.png",
        width: 1792,
        height: 1024,
        alt: "An instrumented voxel world with a settlement, agent markers, and research data overlays.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VoxelCivitas",
    description:
      "A virtual civilization lab for agent-based research in Minecraft-compatible worlds.",
    images: ["/images/voxelcivitas-hero.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#f5f7f1",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
