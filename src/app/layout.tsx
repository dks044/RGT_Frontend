import type { Metadata } from "next";
import "./globals.css";
import { ToasterContext } from "@/context/ToastContext";

export const metadata: Metadata = {
  title: "RGT Book Store",
  description: "RGT Book Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ToasterContext />
        {children}
      </body>
    </html>
  );
}
