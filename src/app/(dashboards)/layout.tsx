
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import "../font.css";
import NavBar from "./navbar/Navbar";
import MobileBottomNavBar from "./navbar/MobileNav";
import DesktopFooter from "./navbar/footer";
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mirror Trading",
  description: "No 1 investment platform",
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
