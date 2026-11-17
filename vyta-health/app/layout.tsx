
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VYTA | Your Health. Your Future.",
  description:
    "Your intelligent health companion. Track nutrition, discover personalized fitness and transform your health journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
