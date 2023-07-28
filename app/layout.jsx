import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/components/theme/theme-provider";
import ScrollToTopButton from "@/components/ScrollButton/ScrollButton";

// Import & exporting the metadata
import { metadata } from './metadata';
export {metadata};

const inter = Inter({ subsets: ['latin'] })

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
