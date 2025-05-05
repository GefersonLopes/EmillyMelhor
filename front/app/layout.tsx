import "./globals.css";

import type { Metadata } from "next";
import { Exo, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const exos = Exo({ subsets: ["latin"], variable: "--font-exo" });

export const metadata: Metadata = {
  title: "Emilly Melhor - Lasher",
  description: "Site para clientes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${exos.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
