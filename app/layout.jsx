import "@/styles/globals.css";
import { Inter } from "next/font/google";


const  Navbar = dynamic(() => import('@/components/Navbar/Navbar')); 
import dynamic from 'next/dynamic';
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/components/theme/theme-provider";
import ScrollToTopButton from "@/components/ScrollButton/ScrollButton";
import { Suspense } from 'react';
import { metadata } from './metadata'; // Import the metadata from the separate file


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-neutral-950`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
            </Suspense>
            {children}
            <Footer />
            <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
