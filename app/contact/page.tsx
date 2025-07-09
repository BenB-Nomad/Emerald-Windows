import React from 'react'
import ContactForm from '@/components/ContactForm'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export const metadata = {
  title: 'Contact Us - Emerald Windows',
  description: 'Get in touch with Emerald Windows for your free quote. Contact us for windows, doors, sunrooms, and conservatories across Kildare and Leinster.',
}

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+353 1 234 5678',
      subtitle: 'Mon-Fri 8am-6pm',
      href: 'tel:+35312345678'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@emeraldwindows.ie',
      subtitle: 'Get a free quote',
      href: 'mailto:info@emeraldwindows.ie'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'Kildare, Ireland',
      subtitle: 'Serving Leinster',
      href: '#'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Monday - Friday',
      subtitle: '8:00 AM - 6:00 PM',
      href: '#'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-[#1a4d2e]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2d5a3d] to-[#1a4d2e]" />
        <div className="relative z-10 container-custom text-center text-white">
          <div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-[#5a8a6f] max-w-3xl mx-auto">
              Ready to transform your home? Get in touch for your free, 
              no-obligation quote today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help with all your home improvement needs. 
              Contact us today to start your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div className="w-16 h-16 bg-[#1a4d2e] rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
                <a 
                  href={info.href}
                  className="text-[#1a4d2e] hover:text-[#2d5a3d] font-medium block mb-1"
                >
                  {info.value}
                </a>
                <p className="text-gray-600 text-sm">{info.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map */}
              <div className="bg-gray-100 rounded-xl p-4 h-80">
                <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-12 h-12 mx-auto mb-4" />
                    <p className="text-lg font-medium">Interactive Map</p>
                    <p className="text-sm">Google Maps integration would go here</p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  Service Areas
                </h3>
                <p className="text-gray-600 mb-4">
                  We proudly serve homeowners across Kildare and Leinster, including:
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    'Kildare', 'Dublin', 'Wicklow', 'Meath',
                    'Louth', 'Westmeath', 'Offaly', 'Laois'
                  ].map((area) => (
                    <div key={area} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-[#1a4d2e] rounded-full mr-2 flex-shrink-0" />
                      {area}
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  Why Choose Emerald Windows?
                </h3>
                <div className="space-y-3">
                  {[
                    '40+ years of experience',
                    'Free, no-obligation quotes',
                    'Local family business',
                    'Quality guaranteed',
                    'Professional installation',
                    'Comprehensive warranties'
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-[#1a4d2e] rounded-full mr-3 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our services and process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'How long does installation take?',
                answer: 'Installation times vary by project size. Windows typically take 1-2 days, doors 1 day, and conservatories 1-2 weeks. We\'ll provide a detailed timeline during consultation.'
              },
              {
                question: 'Do you offer financing options?',
                answer: 'Yes, we offer flexible financing options to help make your home improvements affordable. Contact us to discuss available payment plans.'
              },
              {
                question: 'What warranty do you provide?',
                answer: 'We provide comprehensive warranties on all our products and installations. Windows and doors come with 10-year guarantees, and conservatories with 5-year structural warranties.'
              },
              {
                question: 'Do you handle planning permission?',
                answer: 'Yes, we handle all planning permission applications for conservatories and extensions. Our team will guide you through the entire process.'
              }
            ].map((faq, index) => (
              <div
                key={faq.question}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-emerald-500">
        <div className="container-custom text-center text-white">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to Transform Your Home?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Join thousands of satisfied customers who have transformed their homes with Emerald Windows. 
              Contact us today for your free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+35312345678"
                className="btn-primary text-lg px-8 py-4 bg-white text-emerald-500 hover:bg-gray-100"
              >
                Call Us Now
              </a>
              <a 
                href="mailto:info@emeraldwindows.ie"
                className="btn-secondary text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-emerald-500"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 