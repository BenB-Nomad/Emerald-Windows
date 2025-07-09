import React from 'react'
import { Shield, Zap, Star, CheckCircle, ArrowRight, Home } from 'lucide-react'

export const metadata = {
  title: 'Conservatories - Emerald Windows',
  description: 'Traditional Victorian, Edwardian, and modern conservatory designs with planning guidance. Professional installation across Kildare and Leinster.',
}

export default function ConservatoriesPage() {
  const conservatoryTypes = [
    {
      title: 'Victorian Conservatories',
      description: 'Classic Victorian-style conservatories with ornate detailing and traditional charm.',
      features: ['Ornate detailing', 'Traditional design', 'Planning guidance', 'Custom sizes'],
      image: '/images/tenweb_media_szlb9h70e.webp'
    },
    {
      title: 'Edwardian Conservatories',
      description: 'Elegant Edwardian conservatories with clean lines and period-appropriate styling.',
      features: ['Clean lines', 'Period styling', 'Heritage design', 'Quality materials'],
      image: '/images/tenweb_media_rnk23d8za.webp'
    },
    {
      title: 'Modern Conservatories',
      description: 'Contemporary conservatory designs with sleek lines and modern technology.',
      features: ['Modern design', 'Sleek lines', 'Advanced glazing', 'Energy efficient'],
      image: '/images/tenweb_media_sdwe65xkz.webp'
    },
    {
      title: 'Lean-to Conservatories',
      description: 'Practical lean-to conservatories perfect for smaller spaces and budgets.',
      features: ['Space efficient', 'Cost effective', 'Easy installation', 'Versatile use'],
      image: '/images/tenweb_media_rwjslpurf.webp'
    }
  ]

  const benefits = [
    {
      icon: Home,
      title: 'Extra Living Space',
      description: 'Create additional living space without major construction work'
    },
    {
      icon: Zap,
      title: 'Natural Light',
      description: 'Maximum natural light while maintaining thermal efficiency'
    },
    {
      icon: Star,
      title: 'Garden Connection',
      description: 'Seamless connection between indoor and outdoor living spaces'
    },
    {
      icon: CheckCircle,
      title: 'Property Value',
      description: 'Increase your home\'s value and appeal to potential buyers'
    }
  ]

  const planningFeatures = [
    {
      feature: 'Planning Permission',
      description: 'We handle all planning permission applications and building regulations'
    },
    {
      feature: 'Site Survey',
      description: 'Comprehensive site survey to ensure the best design and positioning'
    },
    {
      feature: 'Custom Design',
      description: 'Tailored designs to match your home\'s architecture and your needs'
    },
    {
      feature: 'Quality Materials',
      description: 'Premium materials and glazing for long-lasting performance'
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
              Conservatories
            </h1>
            <p className="text-xl md:text-2xl text-[#5a8a6f] max-w-3xl mx-auto">
              Traditional Victorian, Edwardian, and modern conservatory designs with planning guidance. 
              Create your perfect garden room with quality craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Why Choose Our Conservatories?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quality conservatories that enhance your home's living space and garden connection.
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

      {/* Conservatory Types */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Conservatory Styles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of conservatory styles to suit your home's architecture and your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {conservatoryTypes.map((conservatory, index) => (
              <div
                key={conservatory.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${conservatory.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                    {conservatory.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {conservatory.description}
                  </p>
                  <ul className="space-y-2">
                    {conservatory.features.map((feature) => (
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

      {/* Planning & Design */}
      <section className="section-padding bg-[#1a4d2e]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Planning & Design
            </h2>
            <p className="text-xl text-[#5a8a6f] max-w-3xl mx-auto">
              We handle all aspects of conservatory planning and design to ensure a smooth process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {planningFeatures.map((feature, index) => (
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
              Professional installation from start to finish, ensuring your conservatory meets all requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Free Consultation',
                description: 'We visit your home to discuss your requirements and assess the site.'
              },
              {
                step: '02',
                title: 'Design & Planning',
                description: 'Our team creates a custom design and handles planning permissions.'
              },
              {
                step: '03',
                title: 'Professional Installation',
                description: 'Our experienced team builds your conservatory to the highest standards.'
              },
              {
                step: '04',
                title: 'Quality Assurance',
                description: 'We ensure everything meets our high standards and your satisfaction.'
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
              Ready for Your Conservatory?
            </h2>
            <p className="text-xl text-[#5a8a6f] mb-8 max-w-3xl mx-auto">
              Create your perfect garden room with a quality conservatory. Get your free quote today 
              and start enjoying your new living space.
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