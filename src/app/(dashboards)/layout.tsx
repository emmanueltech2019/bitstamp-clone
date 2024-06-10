
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import "../font.css";
import NavBar from "./navbar/Navbar";
import MobileBottomNavBar from "./navbar/MobileNav";
import DesktopFooter from "./navbar/footer";
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
      <div className="pt-20 sm:pl-[16rem] pb-20 sm:pb-12"> 
        {children}
        <DesktopFooter/>
      </div>
      <MobileBottomNavBar/>
      {/* <Footer/> */}
        </body>
    </html>
  );
}
