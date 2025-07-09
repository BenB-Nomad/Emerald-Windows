import React from 'react'
import { Shield, Zap, Star, CheckCircle, ArrowRight, Sun } from 'lucide-react'

export const metadata = {
  title: 'Sunrooms - Emerald Windows',
  description: 'Guardian roof systems creating beautiful "Room Outside" spaces for year-round enjoyment. Professional installation across Kildare and Leinster.',
}

export default function SunroomsPage() {
  const sunroomTypes = [
    {
      title: 'Guardian Roof Sunrooms',
      description: 'Premium Guardian roof systems providing year-round comfort and natural light.',
      features: ['Guardian roof system', 'Year-round use', 'Natural light', 'Energy efficient'],
      image: '/images/tenweb_media_rpsjpec2h.webp'
    },
    {
      title: 'Conservatory Style',
      description: 'Traditional conservatory designs with modern Guardian roof technology.',
      features: ['Classic design', 'Modern roof', 'Versatile space', 'Garden connection'],
      image: '/images/tenweb_media_sirpbq38j.webp'
    },
    {
      title: 'Modern Extensions',
      description: 'Contemporary sunroom extensions with clean lines and maximum functionality.',
      features: ['Modern design', 'Clean lines', 'Maximum space', 'Custom options'],
      image: '/images/tenweb_media_rper347qx.webp'
    },
    {
      title: 'Garden Rooms',
      description: 'Seamless indoor-outdoor living spaces perfect for relaxation and entertainment.',
      features: ['Garden access', 'Natural ventilation', 'Flexible use', 'Beautiful views'],
      image: '/images/tenweb_media_RGBL6Z9HV.webp'
    }
  ]

  const benefits = [
    {
      icon: Sun,
      title: 'Year-Round Comfort',
      description: 'Guardian roof systems provide comfortable temperatures all year'
    },
    {
      icon: Zap,
      title: 'Natural Light',
      description: 'Maximum natural light while protecting from harmful UV rays'
    },
    {
      icon: Star,
      title: 'Extra Living Space',
      description: 'Create additional living space without major construction'
    },
    {
      icon: CheckCircle,
      title: 'Property Value',
      description: 'Increase your home\'s value and appeal to potential buyers'
    }
  ]

  const guardianFeatures = [
    {
      feature: 'Thermal Efficiency',
      description: 'Advanced insulation keeps your sunroom comfortable in all seasons'
    },
    {
      feature: 'UV Protection',
      description: 'Special coatings protect furniture and flooring from sun damage'
    },
    {
      feature: 'Noise Reduction',
      description: 'Multi-layer construction significantly reduces external noise'
    },
    {
      feature: 'Low Maintenance',
      description: 'Self-cleaning glass and durable materials require minimal upkeep'
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
              Sunrooms
            </h1>
            <p className="text-xl md:text-2xl text-[#5a8a6f] max-w-3xl mx-auto">
              Guardian roof systems creating beautiful "Room Outside" spaces for year-round enjoyment. 
              Transform your home with natural light and extra living space.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Why Choose Our Sunrooms?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quality sunrooms that enhance your home's living space and connection to the outdoors.
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

      {/* Sunroom Types */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Sunroom Styles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of sunroom styles to suit your home and lifestyle needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {sunroomTypes.map((sunroom, index) => (
              <div
                key={sunroom.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${sunroom.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                    {sunroom.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {sunroom.description}
                  </p>
                  <ul className="space-y-2">
                    {sunroom.features.map((feature) => (
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

      {/* Guardian Roof Features */}
      <section className="section-padding bg-[#1a4d2e]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Guardian Roof Technology
            </h2>
            <p className="text-xl text-[#5a8a6f] max-w-3xl mx-auto">
              Advanced Guardian roof systems provide superior performance and comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guardianFeatures.map((feature, index) => (
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
              Professional installation from start to finish, ensuring your sunroom meets all requirements.
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
                description: 'Our experienced team builds your sunroom to the highest standards.'
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
              Ready for Your Sunroom?
            </h2>
            <p className="text-xl text-[#5a8a6f] mb-8 max-w-3xl mx-auto">
              Create your perfect "Room Outside" with a Guardian roof sunroom. Get your free quote today 
              and start enjoying year-round comfort and natural light.
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