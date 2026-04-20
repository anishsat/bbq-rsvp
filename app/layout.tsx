import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Colville BBQs",
  description: "We're back...",
  generator: "thefinalshot.co",
  openGraph: {
    title: "Colville BBQs",
    description: "The best cookouts in town (your words, not mine...)",
    type: "website",
    url: "https://bbq.thefinalshot.co",
    siteName: "Colville BBQs",
    images: [
      {
        url: "https://bbq.thefinalshot.co/og-image.png",
        width: 1080,
        height: 1080,
        alt: "Colville BBQs - New year, new flat: cookouts are back",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colville BBQs",
    description: "The best cookouts in town (your words, not mine...)",
    images: ["https://bbq.thefinalshot.co/og-image.png"],
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
        <meta property="og:image" content="https://bbq.thefinalshot.co/og-image.png" />
        <meta property="og:image:secure_url" content="https://bbq.thefinalshot.co/og-image.png" />
        <meta name="twitter:image" content="https://bbq.thefinalshot.co/og-image.png" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
