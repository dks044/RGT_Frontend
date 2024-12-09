import type { Metadata } from "next";
import "./globals.css";
import { ToasterContext } from "@/context/ToastContext";
import Providers from "@/Providers";

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
        <Providers>
          <ToasterContext />
          {children}
        </Providers>
      </body>
    </html>
  );
}
