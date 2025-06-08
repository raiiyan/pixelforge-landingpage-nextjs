import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Oswald Font Setup
const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PixelForge Studio – Modern UI/UX & Frontend",
  description:
    "PixelForge Studio crafts modern interfaces for startups and small businesses.",
  keywords: [
    "PixelForge",
    "frontend agency",
    "UI/UX design",
    "Next.js",
    "Tailwind CSS",
  ],
  authors: [{ name: "PixelForge Studio", url: "https://yourdomain.com" }],
  openGraph: {
    title: "PixelForge Studio",
    description: "We craft interfaces that convert.",
    type: "website",
    url: "https://yourdomain.com",
    images: [{ url: "/og-image.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={oswald.variable}>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
