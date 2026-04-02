import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Million Miles | Luxury Car Listings",
  description: "Premium car listings from ENCAR, inspired by Million Miles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
