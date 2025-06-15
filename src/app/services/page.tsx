import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Wrench, Droplets, ArrowLeft, CheckCircle } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Plumbing Services - Pump Repair, Bathroom Plumbing | Plumb Fix Dublin',
  description: 'Comprehensive plumbing services including pump installation, bathroom remodeling, leak repairs, and water tank maintenance. Expert plumbers serving Dublin, Meath, Louth & Offaly.',
  keywords: 'plumbing services, pump repair, bathroom plumbing, leak detection, water tank services, outdoor plumbing, Dublin plumber',
}

export default function ServicesPage() {
  const services = [
    {
      icon: <Wrench size={40} />,
      title: "Water Pump Services",
      description: "Professional pump installation, repair, and replacement services to boost your water pressure.",
      features: [
        "Water pressure boost pumps",
        "Pump installation & replacement", 
        "Repair services for all pump types",
        "Hot water system pumps",
        "System pressure testing"
      ]
    },
    {
      icon: (
        <div className="w-10 h-10">
          <svg className="text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
          </svg>
        </div>
      ),
      title: "Bathroom Plumbing",
      description: "Complete bathroom services including installations, repairs, and full bathroom remodeling.",
      features: [
        "Shower installations & repairs",
        "Toilet installation & repairs",
        "Bathroom remodeling projects",
        "Basin & sink fitting",
        "Bathroom fixture replacements"
      ]
    },
    {
      icon: <Droplets size={40} />,
      title: "Leak Detection & Repair",
      description: "Fast and efficient leak detection and repair services to prevent water damage.",
      features: [
        "Emergency leak repairs",
        "Advanced leak detection",
        "Pipe leak repairs",
        "Tap & faucet repairs",
        "Waterproofing services"
      ]
    },
    {
      icon: (
        <div className="w-10 h-10">
          <svg className="text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 2v2H4v16h16V4h-4V2h-2v2H10V2H8zm2 4h4v2h-4V6zm-4 4h4v2H6v-2zm0 4h4v2H6v-2zm6-4h4v2h-4v-2zm0 4h4v2h-4v-2z"/>
          </svg>
        </div>
      ),
      title: "Water Tank Services",
      description: "Complete water tank services including installation, cleaning, and maintenance.",
      features: [
        "Attic water tank replacement",
        "Tank cleaning & disinfection",
        "Limescale removal",
        "Water filter installation",
        "Tank insulation services"
      ]
    },
    {
      icon: (
        <div className="w-10 h-10">
          <svg className="text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 2.01L6 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V4c0-1.11-.89-1.99-2-1.99zM18 20H6V4h12v16z"/>
            <circle cx="12" cy="6" r="1"/>
            <circle cx="12" cy="10" r="1"/>
            <circle cx="12" cy="14" r="1"/>
            <circle cx="12" cy="18" r="1"/>
          </svg>
        </div>
      ),
      title: "Kitchen Plumbing",
      description: "Kitchen plumbing solutions including tap installation, sink fitting, and appliance connections.",
      features: [
        "Kitchen tap installation",
        "Sink installation & repairs",
        "Dishwasher connections",
        "Waste disposal units",
        "Kitchen renovations"
      ]
    },
    {
      icon: (
        <div className="w-10 h-10">
          <svg className="text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <path d="M8.5 12l1.5 1.5L14.5 9"/>
          </svg>
        </div>
      ),
      title: "Outdoor Plumbing",
      description: "Outdoor plumbing installations including garden taps and external water systems.",
      features: [
        "Outdoor tap installation",
        "Garden house plumbing",
        "External water systems",
        "Hot & cold water supply",
        "Irrigation systems"
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/plumb-logo.jpg"
              alt="Plumb Fix Logo"
              width={45}
              height={45}
              className="rounded-full"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Plumb Fix</h1>
              <p className="text-sm text-gray-600">Professional Plumbing</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <Link 
              href="/"
              className="text-gray-600 hover:text-blue-600 font-medium hidden sm:block transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/emergency"
              className="text-red-600 hover:text-red-700 font-medium transition-colors"
            >
              Emergency
            </Link>
            <a
              href="tel:+353852829497"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <Phone size={16} />
              <span className="font-medium">085 282 9497</span>
            </a>
          </div>
        </div>
      </header>

      {/* Back to Home */}
      <section className="py-6 bg-gray-50">
        <div className="container mx-auto px-4">
          <Link 
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Plumbing Services
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Professional plumbing solutions across Dublin, Meath, Louth & Offaly with 25+ years of experience
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center space-x-2 text-gray-700">
              <CheckCircle size={20} className="text-blue-600" />
              <span>Expert Installation</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <CheckCircle size={20} className="text-blue-600" />
              <span>Quality Repairs</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <CheckCircle size={20} className="text-blue-600" />
              <span>Emergency Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today for a free quote on any of our plumbing services
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+353852829497"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/353852829497"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              WhatsApp
            </a>
            <Link
              href="/"
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image
                src="/plumb-logo.jpg"
                alt="Plumb Fix Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h3 className="text-lg font-bold">Plumb Fix</h3>
                <p className="text-sm text-gray-400">Professional Plumbing Services</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2024 Plumb Fix. All rights reserved.</p>
              <p className="text-sm text-gray-500">25+ years of expert plumbing services</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
} 