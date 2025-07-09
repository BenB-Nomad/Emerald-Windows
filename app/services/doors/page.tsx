import React from 'react'
import { Shield, Zap, Star, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Doors - Emerald Windows',
  description: 'Premium composite and uPVC doors with advanced security features and Palladio designs. Professional installation across Kildare and Leinster.',
}

export default function DoorsPage() {
  const doorTypes = [
    {
      title: 'Composite Doors',
      description: 'Premium composite doors offering maximum security, durability, and energy efficiency.',
      features: ['Multi-layer construction', 'Advanced security', 'Energy efficient', 'Low maintenance'],
      image: '/images/tenweb_media_rnk23d8za.webp'
    },
    {
      title: 'uPVC Doors',
      description: 'Cost-effective uPVC doors with excellent thermal performance and security features.',
      features: ['Affordable option', 'Good insulation', 'Secure locking', 'Easy maintenance'],
      image: '/images/tenweb_media_sdwe65xkz.webp'
    },
    {
      title: 'Palladio Doors',
      description: 'Luxury Palladio doors with authentic wood grain finish and premium hardware.',
      features: ['Wood grain finish', 'Premium hardware', 'Custom designs', 'Luxury option'],
      image: '/images/tenweb_media_rwjslpurf.webp'
    },
    {
      title: 'French Doors',
      description: 'Elegant French doors creating seamless indoor-outdoor living spaces.',
      features: ['Wide opening', 'Natural light', 'Garden access', 'Elegant design'],
      image: '/images/tenweb_media_RUBGZ33XM.webp'
    }
  ]

  const benefits = [
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Multi-point locking systems and reinforced frames provide maximum protection'
    },
    {
      icon: Zap,
      title: 'Energy Efficiency',
      description: 'A-rated doors can reduce your heating bills by up to 15%'
    },
    {
      icon: Star,
      title: 'Durability',
      description: 'Built to last with weather-resistant materials and quality construction'
    },
    {
      icon: CheckCircle,
      title: 'Low Maintenance',
      description: 'Modern materials require minimal upkeep and cleaning'
    }
  ]

  const securityFeatures = [
    {
      feature: 'Multi-Point Locking',
      description: 'Advanced locking systems with multiple engagement points for maximum security'
    },
    {
      feature: 'Reinforced Frames',
      description: 'Heavy-duty frames designed to withstand forced entry attempts'
    },
    {
      feature: 'Security Hinges',
      description: 'Anti-lift and anti-drill hinges for additional protection'
    },
    {
      feature: 'Glazing Options',
      description: 'Laminated or toughened glass options for enhanced security'
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
              Doors
            </h1>
            <p className="text-xl md:text-2xl text-[#5a8a6f] max-w-3xl mx-auto">
              Premium composite and uPVC doors with advanced security features and Palladio designs. 
              Transform your home's entrance with quality craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Why Choose Our Doors?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quality doors that enhance your home's security, energy efficiency, and curb appeal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#1a4d2e] rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Door Types */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Door Styles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of door styles to suit your home's architecture and security needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {doorTypes.map((door, index) => (
              <div
                key={door.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${door.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                    {door.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {door.description}
                  </p>
                  <ul className="space-y-2">
                    {door.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-[#1a4d2e] mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="section-padding bg-[#1a4d2e]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Security Features
            </h2>
            <p className="text-xl text-[#5a8a6f] max-w-3xl mx-auto">
              Advanced security features to keep your home and family safe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <div
                key={feature.feature}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.feature}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Our Installation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional installation from start to finish, ensuring minimal disruption to your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Free Survey',
                description: 'Our expert surveyor visits your home to measure and assess your requirements.'
              },
              {
                step: '02',
                title: 'Custom Quote',
                description: 'We provide a detailed quote with all options and specifications clearly outlined.'
              },
              {
                step: '03',
                title: 'Professional Installation',
                description: 'Our experienced team installs your doors with minimal disruption.'
              },
              {
                step: '04',
                title: 'Quality Check',
                description: 'We ensure everything meets our high standards and your complete satisfaction.'
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
              Ready for New Doors?
            </h2>
            <p className="text-xl text-[#5a8a6f] mb-8 max-w-3xl mx-auto">
              Transform your home's entrance with quality doors. Get your free quote today 
              and enhance your home's security and curb appeal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="btn-primary text-lg px-8 py-4 bg-white text-[#1a4d2e] hover:bg-gray-100"
              >
                Get Your Free Quote
              </a>
              <a 
                href="/projects"
                className="btn-secondary text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-[#1a4d2e]"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 