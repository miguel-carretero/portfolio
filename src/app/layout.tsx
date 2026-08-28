import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Miguel Carretero",
  description: "Portfolio Product Designer et Front-End de Miguel Carretero.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={geist.variable}>
      <body>
        <a className="skipLink" href="#main-content">
          Aller au contenu principal
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
