import React from 'react'
import { Clock, Users, Award, Star, MapPin, Phone, Mail } from 'lucide-react'

export const metadata = {
  title: 'About Us - Emerald Windows',
  description: 'Learn about Emerald Windows, a family-owned Irish company with over 30 years of experience in windows, doors, sunrooms, and conservatories.',
}

export default function AboutPage() {
  const stats = [
    { icon: Clock, value: '1983', label: 'Established' },
    { icon: Users, value: '200k+', label: 'Homes Transformed' },
    { icon: Award, value: '100%', label: 'Completion Rate' },
    { icon: Star, value: '4.9', label: 'Customer Rating' }
  ]

  const timeline = [
    {
      year: '1983',
      title: 'Company Founded',
      description: 'Emerald Windows was established as a family business in Kildare, Ireland.',
      image: '/images/tenweb_media_rper347qx.webp'
    },
    {
      year: '1995',
      title: 'Expansion',
      description: 'Extended services to include doors and conservatories across Leinster.',
      image: '/images/tenweb_media_RGBL6Z9HV.webp'
    },
    {
      year: '2005',
      title: 'Innovation',
      description: 'Introduced Guardian roof systems and advanced energy-efficient solutions.',
      image: '/images/tenweb_media_szlb9h70e.webp'
    },
    {
      year: '2015',
      title: 'Digital Transformation',
      description: 'Launched online consultation and design tools for customers.',
      image: '/images/tenweb_media_rnk23d8za.webp'
    },
    {
      year: '2023',
      title: '40 Years Strong',
      description: 'Celebrating four decades of quality craftsmanship and customer satisfaction.',
      image: '/images/tenweb_media_sdwe65xkz.webp'
    }
  ]

  const values = [
    {
      title: 'Quality Craftsmanship',
      description: 'Every installation is completed to the highest standards with attention to detail.',
      image: '/images/tenweb_media_rwjslpurf.webp'
    },
    {
      title: 'Customer Focus',
      description: 'We put our customers first, ensuring satisfaction at every step of the process.',
      image: '/images/tenweb_media_RUBGZ33XM.webp'
    },
    {
      title: 'Innovation',
      description: 'Continuously adopting new technologies and materials for better results.',
      image: '/images/tenweb_media_rpsjpec2h.webp'
    },
    {
      title: 'Reliability',
      description: 'Trusted by thousands of homeowners across Ireland for over 30 years.',
      image: '/images/tenweb_media_sirpbq38j.webp'
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
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-[#5a8a6f] max-w-3xl mx-auto">
              Four decades of excellence in transforming Irish homes with quality windows, 
              doors, sunrooms, and conservatories.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-[#1a4d2e]" />
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                The Home of Good Craftsmanship
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 1983, Emerald Windows began as a small family business with a simple mission: 
                to provide quality windows and doors to homeowners across Kildare and Leinster.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Over the past 40 years, we've grown from a local window installer to one of Ireland's 
                most trusted names in home improvements, serving over 200,000 satisfied customers.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we continue to be family-owned and operated, maintaining the same commitment 
                to quality, craftsmanship, and customer service that our founders established.
              </p>
            </div>

            <div className="relative">
              <div 
                className="w-full h-96 rounded-xl bg-cover bg-center"
                style={{
                  backgroundImage: `url('/images/pexels-michaelgaultphotos-6303114.jpg')`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four decades of growth, innovation, and commitment to excellence.
            </p>
          </div>

          <div className="space-y-16">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
                }`}
              >
                <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                    <div className="text-3xl font-bold text-[#1a4d2e] mb-3">{item.year}</div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
                  </div>
                </div>
                
                <div className={`relative ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div 
                    className="w-full h-80 rounded-xl bg-cover bg-center shadow-lg"
                    style={{
                      backgroundImage: `url(${item.image})`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${value.image})`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-[#1a4d2e]">
        <div className="container-custom text-center text-white">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-[#5a8a6f] mb-8 max-w-3xl mx-auto">
              Join thousands of satisfied customers who have transformed their homes with Emerald Windows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="btn-primary text-lg px-8 py-4 bg-white text-[#1a4d2e] hover:bg-gray-100"
              >
                Get Your Free Quote
              </a>
              <a 
                href="tel:+35312345678"
                className="btn-secondary text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-[#1a4d2e]"
              >
                Call Us Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 