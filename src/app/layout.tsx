import "./globals.css";

import type { Metadata } from "next";
import { Waiting_for_the_Sunrise } from "next/font/google";

import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Best Seller",
  description: "The New York Times Best Seller list",
};
const waitingForTheSunrise = Waiting_for_the_Sunrise({ weight: "400", subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={waitingForTheSunrise.className}>
      <body className="flex  min-h-screen flex-col items-center p-28">
        <NavBar />
        <div>{children}</div>
      </body>
    </html>
  );
}
