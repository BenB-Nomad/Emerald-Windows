import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Emerald Windows - The Home of Good Craftsmanship',
  description: 'Irish windows, doors, sunrooms, and conservatories specialists since 1983. Quality craftsmanship, energy efficiency, and exceptional service across Kildare and Leinster.',
  keywords: 'windows, doors, sunrooms, conservatories, Ireland, Kildare, uPVC, composite, Guardian roof',
  authors: [{ name: 'Emerald Windows' }],
  openGraph: {
    title: 'Emerald Windows - The Home of Good Craftsmanship',
    description: 'Irish windows, doors, sunrooms, and conservatories specialists since 1983.',
    type: 'website',
    locale: 'en_IE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
          <Chatbot />
        </div>
      </body>
    </html>
  )
} 