/** @format */
"use client";

import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Preloader from "@/components/Preloader/Preloader"; // Import the Preloader component
const Navbar = dynamic(() => import("@/components/Navbar/Navbar"));
import dynamic from "next/dynamic";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/components/theme/theme-provider";
import ScrollToTopButton from "@/components/ScrollButton/ScrollButton";
import { Suspense } from "react";
import Provider from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";

// Import & exporting the metadata
import { metadata } from "./metadata";
export { metadata };

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3200);
  }, []);
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-neutral-950`}>
        <Provider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {/* Add the Preloader component here */}
            {loading ? (
              <Preloader />
            ) : (
              <>
                <Suspense fallback={<div>Loading...</div>}>
                  <Navbar />
                </Suspense>
                <Toaster />
                {children}
                <Footer />
                <ScrollToTopButton />
              </>
            )}
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
