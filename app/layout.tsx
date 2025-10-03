import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Philbeach BBQs",
  description: "The best cookouts in town (your words, not mine...)",
  generator: "v0.app",
  openGraph: {
    title: "Philbeach BBQs",
    description: "The best cookouts in town (your words, not mine...)",
    type: "website",
    url: "https://bbq.thefinalshot.co",
    siteName: "Philbeach BBQs",
    images: [
      {
        url: "https://bbq.thefinalshot.co/bbq-social-share.png",
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
    images: ["https://bbq.thefinalshot.co/bbq-social-share.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="https://bbq.thefinalshot.co/bbq-social-share.png" />
        <meta property="og:image:secure_url" content="https://bbq.thefinalshot.co/bbq-social-share.png" />
        <meta name="twitter:image" content="https://bbq.thefinalshot.co/bbq-social-share.png" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
