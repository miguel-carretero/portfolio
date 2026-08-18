import type { Metadata } from "next";
import { Geist } from "next/font/google";
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
      <body>{children}</body>
    </html>
  );
}
