import type { Metadata } from "next";
import Head from "next/head";

import { Lora } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Top from "./components/Top";

const inter = Lora({ subsets: ["latin"], weight: "700" });

export const metadata: Metadata = {
  title: "22Deal",
  description: "Where Dreams Meet Reality!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${inter.className} `}>
        <Header />
        {children}
        <Top />
      </body>
    </html>
  );
}
