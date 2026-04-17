import type { Metadata } from "next";
import { Suspense } from "react";
import Script from "next/script";
import { Toaster } from "sonner";
import { playfairDisplay, montserrat } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "EQT Focus | New Jersey Luxury Real Estate",
  description:
    "Discover luxury homes in Essex, Union, and Bergen County, New Jersey. EQT Focus offers personalized real estate services for discerning buyers and sellers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${montserrat.variable}`}
    >
      <head>
        <Script id="ihf-kestrel-config" strategy="beforeInteractive">
          {`
            window.ihfKestrel = window.ihfKestrel || {};
            ihfKestrel.config = {
              platform: "custom",
              activationToken: "7F6C5403-97E0-84B2-FD511CFC76A2E6CB",
            };
          `}
        </Script>
        <Script
          src="https://kestrel.idxhome.com/ihf-kestrel.js"
          strategy="afterInteractive"
        />
      </head>
      <body className="font-body text-brand-dark-gray bg-brand-white antialiased">
        <Suspense>
          <Header />
        </Suspense>
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
