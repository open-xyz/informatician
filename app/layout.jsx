"use client"
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/components/theme/theme-provider";
import ScrollToTopButton from "@/components/ScrollButton/ScrollButton";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://www.informatician.in/'),
  title: {
    default: 'Informatician - Unleash an Open Source Book Platform where Literature Meets Community',
    template: '%s | Informatician',
  },
  description: 'Unleash an open source book platform where literature meets community, and knowledge knows no bounds. Explore a diverse collection of books and information in the domain of books and reading.',
  keywords: ["informatician", "books", "reading", "literature", "open source", "book platform", "community", "knowledge"],
  openGraph: {
    title: 'Informatician - Unleash an Open Source Book Platform where Literature Meets Community',
    description: 'Developer, writer, and creator.',
    url: 'https://www.informatician.in',
    title: 'https://github.com/rohansx/informatician/blob/333b073bd64329a1d1a9697faf116e8e0ee5fa7e/src/assets/logos/light_logo.png',
    siteName: 'Informatician',
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Informatician - Unleash an Open Source Book Platform where Literature Meets Community',
    description: 'Unleash an open source book platform where literature meets community, and knowledge knows no bounds. Explore a diverse collection of books and information in the domain of books and reading.',
    url: 'https://github.com/rohansx/informatician/blob/333b073bd64329a1d1a9697faf116e8e0ee5fa7e/src/assets/logos/light_logo.png',
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-neutral-950`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            {children}
            <Footer />
            <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
