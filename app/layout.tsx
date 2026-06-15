import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

// Heading / display font — bold, geometric, unmistakably premium
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

// Body / UI font — ultra-legible, clean, modern
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agarwal Realtors | Property Dealer & Real Estate Consultant",
  description:
    "Agarwal Realtors — Your trusted property dealer and real estate consultant in Sohna Dhunela. Expert guidance for buying, selling & investing in real estate.",
  keywords:
    "Agarwal Realtors, Property Dealer, Real Estate Consultant, Sohna, Dhunela, Real Estate",
  openGraph: {
    title: "Agarwal Realtors | Property Dealer & Real Estate Consultant",
    description:
      "Expert real estate guidance in Sohna Dhunela. Agarwal Realtors — trusted, experienced, results-driven.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
