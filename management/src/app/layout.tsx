import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Güvenoğlu Çelik & Metal - Yönetim Paneli",
  description: "İçerik yönetim sistemi - Projeler, referanslar ve teklifler",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          <Sidebar />
          <main className="lg:pl-72">
            <div className="px-4 sm:px-6 lg:px-8 py-10">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
