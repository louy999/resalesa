import type { Metadata } from "next";
import Head from "next/head";
import Sidebar from "./components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <Sidebar />
    </div>
  );
}
