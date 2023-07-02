
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Informatician',
  description: 'Unleash an open source book platform where literature meets community, and knowledge knows no bounds. Explore a diverse collection of books and information in the domain of books and reading.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
