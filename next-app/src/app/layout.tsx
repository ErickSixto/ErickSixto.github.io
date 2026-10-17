import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

// Archivo, not Inter. Inter is the web's default sans and reads as the
// training-data reflex; a detector scan put it at 77% of the text here. Archivo
// is a grotesque drawn for print and editorial setting, so its slightly sturdier,
// narrower forms carry the "considered document" register the brand asks for,
// and it holds the 200 extralight to 700 bold contrast the headlines are built on.
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

const DESCRIPTION =
  "Senior Salesforce specialist. 7 years fixing orgs that got harder to use every time someone tried to improve them.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ericksixto.com"),
  title: "Erick Sixto · Salesforce Specialist",
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "Erick Sixto",
    locale: "en_US",
    url: "/",
    title: "Erick Sixto · Salesforce Specialist",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Erick Sixto · Salesforce Specialist",
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-canvas text-ink">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
