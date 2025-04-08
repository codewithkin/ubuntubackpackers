import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/reusable/Navbar";
import MobileNavbarSheet from "@/components/reusable/MobileNavbarSheet";
import Footer from "@/components/reusable/Footer";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title:
    "Ubuntu Backpackers | Cultural Unity & Unforgettable Experiences in Mutare",
  description:
    "Ubuntu Backpackers in Mutare offers cozy rooms, homemade meals, and unforgettable tours. Immerse yourself in nature, explore the vibrant culture of the Shona People, and experience the heart of Zimbabwe's Eastern Highlands.",
  keywords:
    "Ubuntu Backpackers, Mutare, Zimbabwe, backpackers, cultural unity, Eastern Highlands, Shona People, African art, nature tours, adventure, local festivals, Great Zimbabwe, Vumba Mountains, Chimanimani, hiking, nature, homemade meals, cultural tours",
  openGraph: {
    title:
      "Ubuntu Backpackers | Cultural Unity & Unforgettable Experiences in Mutare",
    description:
      "Join us at Ubuntu Backpackers in Mutare for cozy rooms, homemade meals, nature tours, and an immersive cultural experience in Zimbabwe’s Eastern Highlands.",
    url: "https://ubuntubackpacker.com",
    siteName: "Ubuntu Backpackers",
    images: [
      {
        url: "https://ubuntubackpacker.com/images/hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ubuntu Backpackers logo or image of the property",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ubuntu Backpackers | Cultural Unity & Unforgettable Experiences in Mutare",
    description:
      "Stay at Ubuntu Backpackers in Mutare for a cozy, cultural experience with handmade interiors, nature tours, and homemade meals. Discover the best of Zimbabwe's Eastern Highlands.",
    images: "https://ubuntubackpacker.com/images/hero-image.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <MobileNavbarSheet />
        <Navbar />
        {children}
        <Toaster richColors expand />
        <Footer />
      </body>
    </html>
  );
}
