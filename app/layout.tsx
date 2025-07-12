import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Philbeach BBQs",
  description: "RSVP for our summer cookouts - every other Sunday!",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Philbeach BBQs - RSVP Form",
    description: "RSVP for our summer cookouts - every other Sunday!",
    type: "website",
    url: "https://bbq.thefinalshot.co", 
    siteName: "Philbeach BBQs",
    images: [
      {
        url: "https://bbq.thefinalshot.co", 
        width: 1200,
        height: 630,
        alt: "Philbeach backyard garden where the BBQs are held",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Philbeach BBQs - RSVP Form",
    description: "RSVP for our summer cookouts - every other Sunday!",
    images: ["https://bbq.thefinalshot.co"], 
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
        <meta property="og:image:secure_url" content="https://your-netlify-url.netlify.app/backyard-social.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Philbeach backyard garden where the BBQs are held" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:image:alt" content="Philbeach backyard garden where the BBQs are held" />
      </head>
      <body>{children}</body>
    </html>
  )
}
