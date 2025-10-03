import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Philbeach BBQs",
  description: "The best cookouts in town (your words, not mine...)",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Philbeach BBQs",
    description: "The best cookouts in town (your words, not mine...)",
    type: "website",
    url: "https://bbq.thefinalshot.co",
    siteName: "Philbeach BBQs",
    images: [
      {
        url: "/bbq-social-share.png",
        width: 1080,
        height: 1080,
        alt: "Philbeach BBQs - The best cookouts in town",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Philbeach BBQs",
    description: "The best cookouts in town (your words, not mine...)",
    images: ["/bbq-social-share.png"],
  },
  metadataBase: new URL("https://bbq.thefinalshot.co"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags for better social sharing */}
        <meta property="og:image" content="https://bbq.thefinalshot.co/bbq-social-share.png" />
        <meta property="og:image:secure_url" content="https://bbq.thefinalshot.co/bbq-social-share.png" />
        <meta property="og:image:width" content="1080" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:image:alt" content="Philbeach BBQs - The best cookouts in town" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://bbq.thefinalshot.co/bbq-social-share.png" />
        <meta name="twitter:image:alt" content="Philbeach BBQs - The best cookouts in town" />
      </head>
      <body>{children}</body>
    </html>
  )
}
