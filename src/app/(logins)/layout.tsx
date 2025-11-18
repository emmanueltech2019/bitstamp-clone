import "../globals.css";
import "../font.css";
import Head from "next/head";

export const metadata = {
  title: "MirrorXTrade ",
  description: "MirrorXTrade is a group of financial and cryptocurrencies experts that mirror daily gain using shared experience of over 15 years",
  icons: {
    icon: 'https://res.cloudinary.com/wise-solution-inc/image/upload/v1718283601/favicon_dpojxt.ico', // Path to your favicon
    apple: 'https://res.cloudinary.com/wise-solution-inc/image/upload/v1718283601/favicon_dpojxt.ico', // Optional: Path to your apple touch icon
    shortcut: 'https://res.cloudinary.com/wise-solution-inc/image/upload/v1718283601/favicon_dpojxt.ico', // Optional: Path to your shortcut icon
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
            <Head>
        <title>MirrorXTrade 1</title>
        <meta name="description" content="MirrorXTrade is a group of financial and cryptocurrencies experts that mirror daily gain using shared experience of over 15 years" />
        <meta property="og:title" content="MirrorXTrade" />
        <meta property="og:description" content="MirrorXTrade is a group of financial and cryptocurrencies experts that mirror daily gain using shared experience of over 15 years" />
        <meta property="og:image" content="https://res.cloudinary.com/wise-solution-inc/image/upload/v1718283601/favicon_dpojxt.ico" />
        <meta property="og:url" content="https://www.MirrorXTrade.com" />
        <link rel="icon" href="https://res.cloudinary.com/wise-solution-inc/image/upload/v1718283601/favicon_dpojxt.ico" />
      </Head>
      <body>{children}</body>
    </html> 
  )
}
