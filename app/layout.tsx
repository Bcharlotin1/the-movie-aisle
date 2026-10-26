import type { Metadata } from "next"
import { Anton, Oswald } from "next/font/google"
import "./globals.css"

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
})

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "The Movie Aisle",
  description:
    "Browse the most popular movies of 2002, sorted by rating, like a trip down the Blockbuster aisle.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
