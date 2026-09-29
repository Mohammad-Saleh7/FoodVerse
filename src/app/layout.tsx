import type { Metadata } from "next";
import "./globals.css";

import Providers from "./providers";

export const metadata: Metadata = {
  title: "FoodVerse",
  description: "Discover delicious meals from around the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
