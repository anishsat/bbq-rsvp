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
    images: [
      {
        url: "/backyard-social.jpg",
        width: 1200,
        height: 630,
        alt: "Philbeach backyard garden where the BBQs are held",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Philbeach BBQs",
    description: "RSVP for our summer cookouts - every other Sunday!",
    images: ["/backyard-social.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
