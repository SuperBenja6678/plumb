import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Clock, AlertTriangle, Droplets, Wrench, ArrowLeft, CheckCircle } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '24/7 Emergency Plumber Dublin, Meath, Louth & Offaly | Plumb Fix',
  description: '24/7 emergency plumbing services for burst pipes, leaks, pump failures & plumbing emergencies. Fast response across Dublin, Meath, Louth & Offaly. Call 085 282 9497',
  keywords: 'emergency plumber, 24/7 plumber, burst pipes, emergency plumbing Dublin, emergency plumber Meath, plumbing emergency',
}

export default function EmergencyPage() {
  const emergencyServices = [
    {
      icon: <Droplets size={32} />,
      title: "Burst Pipes",
      description: "Immediate response for burst pipes to minimize water damage and restore your water supply.",
      urgency: "Critical"
    },
    {
      icon: <AlertTriangle size={32} />,
      title: "Major Leaks",
      description: "Fast leak detection and repair to prevent property damage and water wastage.",
      urgency: "High"
    },
    {
      icon: <Wrench size={32} />,
      title: "Pump Failures",
      description: "Emergency pump repair and replacement to restore water pressure immediately.",
      urgency: "High"
    },
    {
      icon: <div className="w-8 h-8">
        <svg className="text-red-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          <path d="M11 7h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
      </div>,
      title: "No Hot Water",
      description: "Rapid diagnosis and repair of heating systems and hot water cylinders.",
      urgency: "Medium"
    },
    {
      icon: <div className="w-8 h-8">
        <svg className="text-red-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
          <path d="M7 10h10v2H7z"/>
        </svg>
      </div>,
      title: "Blocked Drains",
      description: "Emergency drain clearing and unblocking services for severe blockages.",
      urgency: "Medium"
    },
    {
      icon: <div className="w-8 h-8">
        <svg className="text-red-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          <path d="M8.5 12l1.5 1.5L14.5 9"/>
        </svg>
      </div>,
      title: "Toilet Problems",
      description: "Emergency toilet repairs and replacements when you can't wait.",
      urgency: "Medium"
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
              href="/services"
              className="text-gray-600 hover:text-blue-600 font-medium hidden sm:block transition-colors"
            >
              Services
            </Link>
            <a
              href="tel:+353852829497"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <Phone size={16} />
              <span className="font-medium">Emergency: 085 282 9497</span>
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

      {/* Emergency Hero */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="bg-red-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <AlertTriangle size={40} />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            24/7 Emergency Plumbing
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Fast response emergency plumbing services across Dublin, Meath, Louth & Offaly. Don&apos;t let plumbing emergencies cause extensive damage to your property.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center space-x-2 text-gray-700">
              <Clock size={20} className="text-red-600" />
              <span>24/7 Availability</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <CheckCircle size={20} className="text-red-600" />
              <span>Fast Response</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <CheckCircle size={20} className="text-red-600" />
              <span>Experienced Team</span>
            </div>
          </div>
          <div className="bg-red-600 text-white p-8 rounded-lg max-w-md mx-auto">
            <h3 className="text-2xl font-bold mb-4">Emergency Hotline</h3>
            <a
              href="tel:+353852829497"
              className="text-4xl font-bold hover:text-red-200 transition-colors block"
            >
              085 282 9497
            </a>
            <p className="text-red-100 mt-4">Available 24 hours a day, 7 days a week</p>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Emergency Services We Handle
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergencyServices.map((service, index) => (
              <div key={index} className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-red-600 mb-4">
                  {service.icon}
                </div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    service.urgency === 'Critical' ? 'bg-red-100 text-red-800' :
                    service.urgency === 'High' ? 'bg-orange-100 text-orange-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {service.urgency}
                  </span>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Do */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What to Do in a Plumbing Emergency
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Turn Off Water Supply</h3>
                  <p className="text-gray-600">Locate and turn off the main water supply to prevent further damage.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Call Us Immediately</h3>
                  <p className="text-gray-600">Contact our emergency hotline: <a href="tel:+353852829497" className="text-blue-600 font-medium">085 282 9497</a></p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Move Valuables</h3>
                  <p className="text-gray-600">Move furniture and valuables away from the affected area if safe to do so.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Document the Damage</h3>
                  <p className="text-gray-600">Take photos if possible for insurance purposes.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Wait for Our Arrival</h3>
                  <p className="text-gray-600">Stay safe and wait for our emergency team to arrive and assess the situation.</p>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">💡 Pro Tip</h4>
                <p className="text-gray-600 text-sm">Know where your main water shut-off valve is located before an emergency occurs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Don&apos;t Wait - Call Now!
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Every minute counts in a plumbing emergency. Our experienced team is ready to help 24/7.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="tel:+353852829497"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors flex items-center space-x-3"
            >
              <Phone size={24} />
              <span>Emergency: 085 282 9497</span>
            </a>
            <a
              href="https://wa.me/353852829497"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
            >
              WhatsApp Emergency
            </a>
          </div>
          <div className="text-center text-gray-600">
            <p className="mb-2">Serving emergency calls across:</p>
            <p className="font-medium">Dublin • Meath • Louth • Offaly</p>
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