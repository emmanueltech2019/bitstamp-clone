import "../globals.css";
import "../font.css";

export const metadata = {
  title: "Mirror Stamp",
  description: "Mirror Stamp is a group of financial and cryptocurrencies experts that mirror daily gain using shared experience of over 15 years",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html> 
  )
}
