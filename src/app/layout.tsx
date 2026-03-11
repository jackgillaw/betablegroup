import type { Metadata } from "next";
import { Questrial, Montserrat } from "next/font/google";
import "./globals.css";

const questrial = Questrial({
  variable: "--font-questrial",
  subsets: ["latin"],
  weight: "400",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Betable Group – iGaming Infrastructure Group",
  description:
    "Four specialist businesses. One connected infrastructure ecosystem for the modern iGaming operator.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${questrial.variable} ${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
