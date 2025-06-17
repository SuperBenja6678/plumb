'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, MapPin, Clock, Wrench, Droplets, CheckCircle, Mail, User } from 'lucide-react'

export default function HomePage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const form = e.currentTarget
    const formData = new FormData(form)
    
    const webhookData = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      service: formData.get('service'),
      message: formData.get('message'),
      timestamp: new Date().toISOString(),
      source: 'John Doe Plumbing Website'
    }

    try {
      const response = await fetch('https://hook.eu2.make.com/r4q7bkwfcpb5zxpql3n3pjt699gqptkw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        form.reset()
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Webhook error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/plumb-logo.jpg"
              alt="John Doe Plumbing Logo"
              width={45}
              height={45}
              className="rounded-full"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">John Doe Plumbing</h1>
              <p className="text-sm text-gray-600">Professional Plumbing</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <Link 
              href="/services"
              className="text-gray-600 hover:text-blue-600 font-medium hidden sm:block transition-colors"
            >
              Services
            </Link>
            <Link 
              href="/emergency"
              className="text-red-600 hover:text-red-700 font-medium transition-colors"
            >
              Emergency
            </Link>
            <a
              href="tel:+353899790634"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <Phone size={16} />
              <span className="font-medium">089 979 0634</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Expert Plumbing Services
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Professional plumbing solutions with 25+ years of experience across Dublin, Meath, Louth & Offaly
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center space-x-2 text-gray-700">
              <CheckCircle size={20} className="text-blue-600" />
              <span>25+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <CheckCircle size={20} className="text-blue-600" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <CheckCircle size={20} className="text-blue-600" />
              <span>24/7 Emergency Service</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+353899790634"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/353899790634"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <Wrench className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pump Services</h3>
              <p className="text-gray-600 mb-4">
                Water pressure boost pumps, installations, repairs, and replacements.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Pressure boost systems</li>
                <li>• Pump installations</li>
                <li>• Repair services</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-8 h-8 mb-4">
                <svg className="text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bathroom Plumbing</h3>
              <p className="text-gray-600 mb-4">
                Complete bathroom services including showers, toilets, and remodeling.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Shower installations</li>
                <li>• Toilet repairs</li>
                <li>• Bathroom remodeling</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <Droplets className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Leak Repairs</h3>
              <p className="text-gray-600 mb-4">
                Fast leak detection and repair services for pipes, taps, and fixtures.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Emergency leak repairs</li>
                <li>• Pipe leak detection</li>
                <li>• Tap repairs</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-8 h-8 mb-4">
                <svg className="text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 2v2H4v16h16V4h-4V2h-2v2H10V2H8zm2 4h4v2h-4V6zm-4 4h4v2H6v-2zm0 4h4v2H6v-2zm6-4h4v2h-4v-2zm0 4h4v2h-4v-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Water Tanks</h3>
              <p className="text-gray-600 mb-4">
                Tank installation, cleaning, and maintenance for safe water supply.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Tank replacements</li>
                <li>• Cleaning & disinfection</li>
                <li>• Filter installations</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-8 h-8 mb-4">
                <svg className="text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2.01L6 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V4c0-1.11-.89-1.99-2-1.99zM18 20H6V4h12v16z"/>
                  <circle cx="12" cy="6" r="1"/>
                  <circle cx="12" cy="10" r="1"/>
                  <circle cx="12" cy="14" r="1"/>
                  <circle cx="12" cy="18" r="1"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Kitchen Plumbing</h3>
              <p className="text-gray-600 mb-4">
                Kitchen tap installations, sink fitting, and appliance connections.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Kitchen tap installation</li>
                <li>• Sink installations</li>
                <li>• Appliance connections</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-8 h-8 mb-4">
                <svg className="text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  <path d="M8.5 12l1.5 1.5L14.5 9"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Outdoor Plumbing</h3>
              <p className="text-gray-600 mb-4">
                Outdoor tap installations and external water system services.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Outdoor tap installation</li>
                <li>• Garden plumbing</li>
                <li>• External water systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Service Areas
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-4">
              <MapPin className="text-blue-600 mx-auto mb-3" size={24} />
              <h3 className="font-semibold text-gray-900">Dublin</h3>
            </div>
            <div className="p-4">
              <MapPin className="text-blue-600 mx-auto mb-3" size={24} />
              <h3 className="font-semibold text-gray-900">Meath</h3>
            </div>
            <div className="p-4">
              <MapPin className="text-blue-600 mx-auto mb-3" size={24} />
              <h3 className="font-semibold text-gray-900">Louth</h3>
            </div>
            <div className="p-4">
              <MapPin className="text-blue-600 mx-auto mb-3" size={24} />
              <h3 className="font-semibold text-gray-900">Offaly</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+353899790634" className="text-blue-600 hover:text-blue-700">
                      089 979 0634
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-green-600 mt-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                    <a 
                      href="https://wa.me/353899790634" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700"
                    >
                      089 979 0634
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Service Areas</h3>
                    <p className="text-gray-600">Dublin, Meath, Louth & Offaly</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Emergency Service</h3>
                    <p className="text-gray-600">Available 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get A Quote</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-gray-400" size={18} />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
                      placeholder="Your email address"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  >
                    <option value="">Select a service</option>
                    <option value="pump-services">Pump Services</option>
                    <option value="bathroom-plumbing">Bathroom Plumbing</option>
                    <option value="leak-repairs">Leak Repairs</option>
                    <option value="water-tanks">Water Tanks</option>
                    <option value="kitchen-plumbing">Kitchen Plumbing</option>
                    <option value="outdoor-plumbing">Outdoor Plumbing</option>
                    <option value="emergency">Emergency Service</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
                    placeholder="Describe your plumbing needs..."
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    Sorry, there was an error sending your message. Please try again or call us directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  {isSubmitting ? 'Sending...' : 'Get Free Quote'}
                </button>
              </form>
            </div>
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
                alt="John Doe Plumbing Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h3 className="text-lg font-bold">John Doe Plumbing</h3>
                <p className="text-sm text-gray-400">Professional Plumbing Services</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2024 John Doe Plumbing. All rights reserved.</p>
              <p className="text-sm text-gray-500">25+ years of expert plumbing services</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
