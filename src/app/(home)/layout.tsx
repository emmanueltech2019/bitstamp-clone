import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import "../font.css";
import NavBar from "../nav/NavBar";
import Footer from "../footer/Footer"
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mirror Stamp",
  description: "Mirror Stamp is a group of financial and cryptocurrencies experts that mirror daily gain using shared experience of over 15 years",
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <NavBar/>
        {children}
      <Footer/>
        </body>
    </html>
  );
}
