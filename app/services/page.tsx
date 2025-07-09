import React from 'react'
import Link from 'next/link'
import { ArrowRight, Shield, Zap, Home, Star } from 'lucide-react'

export const metadata = {
  title: 'Our Services - Emerald Windows',
  description: 'Comprehensive range of windows, doors, sunrooms, and conservatories. Quality craftsmanship and energy efficiency across Kildare and Leinster.',
}

export default function ServicesPage() {
  const services = [
    {
      title: 'Windows',
      description: 'Energy-efficient uPVC, casement, and sash windows with advanced glazing options.',
      image: '/images/pexels-michaelgaultphotos-6303114.jpg',
      href: '/services/windows',
      features: ['uPVC & Composite', 'Double/Triple Glazing', 'Energy Efficient', 'Secure Locking'],
      benefits: ['Reduced energy bills', 'Enhanced security', 'Improved comfort', 'Increased home value']
    },
    {
      title: 'Doors',
      description: 'Premium composite and uPVC doors with advanced security features and Palladio designs.',
      image: '/images/tenweb_media_rnk23d8za.webp',
      href: '/services/doors',
      features: ['Composite & uPVC', 'Espag Locks', 'Monocoque Core', 'Palladio Design'],
      benefits: ['Maximum security', 'Superior insulation', 'Beautiful aesthetics', 'Long-lasting durability']
    },
    {
      title: 'Sunrooms',
      description: 'Guardian roof systems creating beautiful "Room Outside" spaces for year-round enjoyment.',
      image: '/images/tenweb_media_rpsjpec2h.webp',
      href: '/services/sunrooms',
      features: ['Guardian Roof', 'Year-round Use', 'Custom Design', 'Professional Installation'],
      benefits: ['Extra living space', 'Natural light', 'Year-round comfort', 'Increased property value']
    },
    {
      title: 'Conservatories',
      description: 'Traditional Victorian, Edwardian, and modern conservatory designs with planning guidance.',
      image: '/images/tenweb_media_szlb9h70e.webp',
      href: '/services/conservatories',
      features: ['Victorian/Edwardian', 'Planning Permission', 'Custom Sizes', 'Quality Materials'],
      benefits: ['Classic design', 'Additional space', 'Natural light', 'Garden connection']
    }
  ]

  const whyChooseUs = [
    {
      icon: Shield,
      title: '40+ Years Experience',
      description: 'Four decades of expertise in home improvements across Ireland.'
    },
    {
      icon: Zap,
      title: 'Energy Efficient',
      description: 'All our products meet the highest energy efficiency standards.'
    },
    {
      icon: Home,
      title: 'Local Service',
      description: 'Serving Kildare and Leinster with local knowledge and support.'
    },
    {
      icon: Star,
      title: 'Quality Guarantee',
      description: 'Comprehensive warranties and guarantees on all installations.'
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#1a4d2e]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2d5a3d] to-[#1a4d2e]" />
        <div className="relative z-10 container-custom text-center text-white">
          <div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-[#5a8a6f] max-w-3xl mx-auto">
              Comprehensive solutions for every aspect of your home improvement needs. 
              From energy-efficient windows to stunning conservatories.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                {/* Image */}
                <div className="relative w-full h-64">
                  <div 
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-[#1a4d2e] rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-[#1a4d2e] rounded-full mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Link 
                    href={service.href}
                    className="inline-flex items-center text-[#1a4d2e] font-semibold hover:text-[#2d5a3d] transition-colors"
                  >
                    Learn More About {service.title}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Why Choose Emerald Windows?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four decades of excellence, thousands of satisfied customers, and a commitment 
              to quality that never waivers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.title}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#1a4d2e] rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to final installation, we make the process 
              simple, transparent, and stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Free Consultation',
                description: 'We visit your home to discuss your requirements and provide a detailed quote.'
              },
              {
                step: '02',
                title: 'Design & Planning',
                description: 'Our team creates a custom design and handles all necessary planning permissions.'
              },
              {
                step: '03',
                title: 'Professional Installation',
                description: 'Our experienced installers complete the work to the highest standards.'
              },
              {
                step: '04',
                title: 'Quality Assurance',
                description: 'We ensure everything meets our quality standards and your satisfaction.'
              }
            ].map((item, index) => (
              <div
                key={item.step}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#1a4d2e] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#1a4d2e]">
        <div className="container-custom text-center text-white">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-[#5a8a6f] mb-8 max-w-3xl mx-auto">
              Contact us today for your free, no-obligation consultation and quote. 
              Let's transform your home together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="btn-primary text-lg px-8 py-4 bg-white text-[#1a4d2e] hover:bg-gray-100"
              >
                Get Your Free Quote
              </Link>
              <Link 
                href="/projects"
                className="btn-secondary text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-[#1a4d2e]"
              >
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 