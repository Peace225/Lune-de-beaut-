import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Lune de Beauté | L'éclat à l'état pur",
  description:
    "Lune de Beauté — soins, beauté et rituels pour révéler votre éclat naturel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="bg-[#faf7f5] text-[#30231e] antialiased">
        <Navbar />

        <main>{children}</main>

        <Footer />

        <WhatsAppButton />
      </body>
    </html>
  );
}