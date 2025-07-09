import React from 'react'
import { Shield, Zap, Star, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Windows - Emerald Windows',
  description: 'Energy-efficient uPVC, casement, and sash windows with double and triple glazing options. Professional installation across Kildare and Leinster.',
}

export default function WindowsPage() {
  const windowTypes = [
    {
      title: 'Casement Windows',
      description: 'Traditional hinged windows that open outward, perfect for ventilation and easy cleaning.',
      features: ['Easy to operate', 'Excellent ventilation', 'Secure locking', 'Energy efficient'],
      image: '/images/pexels-michaelgaultphotos-6303114.jpg'
    },
    {
      title: 'Sash Windows',
      description: 'Classic vertical sliding windows that maintain the character of period properties.',
      features: ['Period authentic', 'Smooth operation', 'Secure design', 'Heritage approved'],
      image: '/images/pexels-curtis-adams-1694007-3773582.jpg'
    },
    {
      title: 'Tilt & Turn Windows',
      description: 'Versatile windows that can tilt for ventilation or turn for full opening and cleaning.',
      features: ['Multiple opening modes', 'Easy cleaning', 'Child safe', 'Modern design'],
      image: '/images/pexels-heyho-8143711.jpg'
    },
    {
      title: 'Bay & Bow Windows',
      description: 'Elegant projecting windows that create additional space and architectural interest.',
      features: ['Extra space', 'Architectural appeal', 'Natural light', 'Custom design'],
      image: '/images/aaron-huber-_Oktyc2rzXs-unsplash.jpg'
    }
  ]

  const benefits = [
    {
      icon: Zap,
      title: 'Energy Efficiency',
      description: 'A-rated windows can reduce your heating bills by up to 20%'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Multi-point locking systems provide maximum protection'
    },
    {
      icon: Star,
      title: 'Noise Reduction',
      description: 'Double and triple glazing significantly reduce external noise'
    },
    {
      icon: CheckCircle,
      title: 'Low Maintenance',
      description: 'uPVC frames require minimal upkeep and last for decades'
    }
  ]

  const glazingOptions = [
    {
      type: 'Double Glazing',
      description: 'Two panes of glass with an air gap for improved insulation',
      benefits: ['Energy efficient', 'Noise reduction', 'Cost effective', 'Standard option'],
      image: '/images/tenweb_media_rper347qx.webp'
    },
    {
      type: 'Triple Glazing',
      description: 'Three panes of glass for maximum thermal performance',
      benefits: ['Maximum insulation', 'Superior noise reduction', 'Premium option', 'Future-proof'],
      image: '/images/tenweb_media_RGBL6Z9HV.webp'
    },
    {
      type: 'Low-E Glass',
      description: 'Special coating that reflects heat back into your home',
      benefits: ['Enhanced efficiency', 'UV protection', 'Furniture protection', 'Climate control'],
      image: '/images/tenweb_media_szlb9h70e.webp'
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
              Windows
            </h1>
            <p className="text-xl md:text-2xl text-[#5a8a6f] max-w-3xl mx-auto">
              Energy-efficient uPVC, casement, and sash windows with advanced glazing options. 
              Transform your home with quality craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Why Choose Our Windows?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quality windows that enhance your home's comfort, security, and energy efficiency.
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

      {/* Window Types */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Window Styles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of window styles to suit your home's architecture and your lifestyle needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {windowTypes.map((window, index) => (
              <div
                key={window.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
              >
                <div className="relative h-64">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${window.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                    {window.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {window.description}
                  </p>
                  <ul className="space-y-2">
                    {window.features.map((feature) => (
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

      {/* Glazing Options */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Glazing Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right glazing for your needs, from energy efficiency to noise reduction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {glazingOptions.map((option, index) => (
              <div
                key={option.type}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${option.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                    {option.type}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {option.description}
                  </p>
                  <ul className="space-y-2">
                    {option.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-[#1a4d2e] rounded-full mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
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
                description: 'Our experienced team installs your windows with minimal disruption.'
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
              Ready for New Windows?
            </h2>
            <p className="text-xl text-[#5a8a6f] mb-8 max-w-3xl mx-auto">
              Transform your home with energy-efficient windows. Get your free quote today 
              and start saving on your energy bills.
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