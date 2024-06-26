import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import "../font.css";
import NavBar from "../nav/NavBar";
import Footer from "../footer/Footer"
import Head from "next/head";
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mirror Stamp",
  description: "Mirror Stamp is a group of financial and cryptocurrencies experts that mirror daily gain using shared experience of over 15 years",
  icons: {
    icon: 'https://res.cloudinary.com/wise-solution-inc/image/upload/v1718283601/favicon_dpojxt.ico', // Path to your favicon
    apple: 'https://res.cloudinary.com/wise-solution-inc/image/upload/v1718283601/favicon_dpojxt.ico', // Optional: Path to your apple touch icon
    shortcut: 'https://res.cloudinary.com/wise-solution-inc/image/upload/v1718283601/favicon_dpojxt.ico', // Optional: Path to your shortcut icon
  },
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Mirror Stamp</title>
        <meta name="description" content="Mirror Stamp is a group of financial and cryptocurrencies experts that mirror daily gain using shared experience of over 15 years" />
        <meta property="og:title" content="Mirror Stamp" />
        <meta property="og:description" content="Mirror Stamp is a group of financial and cryptocurrencies experts that mirror daily gain using shared experience of over 15 years" />
        <meta property="og:image" content="https://res.cloudinary.com/wise-solution-inc/image/upload/v1718283601/favicon_dpojxt.ico" />
        <meta property="og:url" content="https://www.mirrorstamptrading.com" />
        <link rel="icon" href="https://res.cloudinary.com/wise-solution-inc/image/upload/v1718283601/favicon_dpojxt.ico" />
      </Head>
      <body>
      <NavBar/>
        {children}
      <Footer/>
        </body>
    </html>
  );
}
