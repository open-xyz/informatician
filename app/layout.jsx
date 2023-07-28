'use client';
import React from 'react';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { ThemeProvider } from '@/components/theme/theme-provider';
import ScrollToTopButton from '@/components/ScrollButton/ScrollButton';
import { metadata } from './metadata'; // Import the metadata from the separate file

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const Preloader = React.lazy(() =>
    import('../components/Preloader/Preloader')
  );

  const [isLoading, setIsLoading] = React.useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-neutral-950`}>
        <React.Suspense fallback={<div>Loading...</div>}>
          {isLoading ? (
            <Preloader
              onLoadingComplete={handleLoadingComplete}
              className={'dark:bg-neutral-950'}
            />
          ) : null}
        </React.Suspense>
        {isLoading ? null : (
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            {children}
            <Footer />
            <ScrollToTopButton />
          </ThemeProvider>
        )}
      </body>
    </html>
  );
}
