import type { Metadata } from "next";
import { Suspense } from "react";
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
