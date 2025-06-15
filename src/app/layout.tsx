import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Plumb Fix - Expert Plumbing Services in Dublin, Meath, Louth & Offaly',
  description: 'Professional plumbing services including pump repairs, bathroom maintenance, water pressure boost, and emergency plumbing. 25+ years experience. Contact: 0852829497',
  keywords: 'plumber, plumbing services, Dublin plumber, Meath plumber, water pump repair, bathroom plumbing, emergency plumber, water pressure boost, plumbing maintenance',
  authors: [{ name: 'Plumb Fix' }],
  creator: 'Plumb Fix',
  publisher: 'Plumb Fix',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://plumbfix.ie'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Plumb Fix - Expert Plumbing Services',
    description: 'Professional plumbing services with 25+ years experience. Serving Dublin, Meath, Louth & Offaly.',
    url: 'https://plumbfix.ie',
    siteName: 'Plumb Fix',
    images: [
      {
        url: '/plumb-logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Plumb Fix - Professional Plumbing Services',
      },
    ],
    locale: 'en_IE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plumb Fix - Expert Plumbing Services',
    description: 'Professional plumbing services with 25+ years experience. Serving Dublin, Meath, Louth & Offaly.',
    images: ['/plumb-logo.jpg'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/plumb-logo.jpg" />
        <link rel="canonical" href="https://plumbfix.ie" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PlumbingService",
              "name": "Plumb Fix",
              "description": "Professional plumbing services including pump repairs, bathroom maintenance, water pressure boost, and emergency plumbing.",
              "url": "https://plumbfix.ie",
              "logo": "https://plumbfix.ie/plumb-logo.jpg",
              "image": "https://plumbfix.ie/plumb-logo.jpg",
              "telephone": "+353852829497",
              "priceRange": "€€",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IE",
                "addressRegion": "Leinster"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Dublin"
                },
                {
                  "@type": "City", 
                  "name": "Meath"
                },
                {
                  "@type": "City",
                  "name": "Louth"
                },
                {
                  "@type": "City",
                  "name": "Offaly"
                }
              ],
              "serviceType": [
                "Plumbing Repair",
                "Pump Installation",
                "Bathroom Plumbing",
                "Water Pressure Boost",
                "Emergency Plumbing",
                "Pipe Repair",
                "Leak Detection"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Plumbing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Pump Repair & Installation"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Bathroom Plumbing"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Water Pressure Boost"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          {children}
        </div>
      </body>
    </html>
  )
}
