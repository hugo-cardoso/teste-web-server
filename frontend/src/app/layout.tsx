import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SaaS Digital - Sua Solução Digital",
  description: "Soluções inteligentes para automatizar e escalar seu negócio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-gradient-to-br from-dark to-black text-white min-h-screen`}>
        <header className="container mx-auto px-4 py-6">
          <Navigation />
        </header>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
