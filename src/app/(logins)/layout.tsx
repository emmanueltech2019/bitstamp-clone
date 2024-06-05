import "../globals.css";
import "../font.css";

export const metadata = {
  title: "Mirror Trading",
  description: "No 1 investment platform",
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
