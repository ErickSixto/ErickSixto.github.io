import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Erick Sixto — Salesforce Specialist",
  description:
    "Senior Salesforce Specialist. Seven years fixing orgs that got harder to use every time someone tried to improve them.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-[#F1F1EF] text-[#2F2E2E]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
