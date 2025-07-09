import React from 'react'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import Testimonial from '@/components/Testimonial'
import Link from 'next/link'
import { ArrowRight, Star, Award, Users, Clock } from 'lucide-react'

export default function Home() {
  const services = [
    {
      title: 'Windows',
      description: 'Energy-efficient uPVC, casement, and sash windows with double and triple glazing options.',
      image: '/images/pexels-michaelgaultphotos-6303114.jpg',
      href: '/services/windows',
      features: ['uPVC & Composite', 'Double/Triple Glazing', 'Energy Efficient', 'Secure Locking']
    },
    {
      title: 'Doors',
      description: 'Premium composite and uPVC doors with advanced security features and Palladio designs.',
      image: '/images/pexels-curtis-adams-1694007-3773582.jpg',
      href: '/services/doors',
      features: ['Composite & uPVC', 'Espag Locks', 'Monocoque Core', 'Palladio Design']
    },
    {
      title: 'Sunrooms',
      description: 'Guardian roof systems creating beautiful "Room Outside" spaces for year-round enjoyment.',
      image: '/images/pexels-heyho-8143711.jpg',
      href: '/services/sunrooms',
      features: ['Guardian Roof', 'Year-round Use', 'Custom Design', 'Professional Installation']
    },
    {
      title: 'Conservatories',
      description: 'Traditional Victorian, Edwardian, and modern conservatory designs with planning guidance.',
      image: '/images/point3d-commercial-imaging-ltd-IdWUP1SZ9uw-unsplash.jpg',
      href: '/services/conservatories',
      features: ['Victorian/Edwardian', 'Planning Permission', 'Custom Sizes', 'Quality Materials']
    }
  ]

  const testimonials = [
    {
      name: 'Sarah O\'Connor',
      location: 'Kildare',
      content: 'Emerald Windows transformed our home with beautiful new windows. The installation was professional and the quality is outstanding. Highly recommend!',
      rating: 5,
      image: '/images/laura-cleffmann-z3drmcczVTc-unsplash.jpg'
    },
    {
      name: 'Michael Walsh',
      location: 'Dublin',
      content: 'We had our conservatory installed last year and couldn\'t be happier. The team was excellent from start to finish, and the result is stunning.',
      rating: 5,
      image: '/images/nicolas-solerieu-4gRNmhGzYZE-unsplash.jpg'
    },
    {
      name: 'Emma Byrne',
      location: 'Wicklow',
      content: 'The sunroom they built for us is perfect. We use it all year round and the Guardian roof system is fantastic. Great value for money.',
      rating: 5,
      image: '/images/adam-kring-DZ_qUcUrOXg-unsplash.jpg'
    }
  ]

  const stats = [
    { icon: Clock, value: '30+', label: 'Years Experience' },
    { icon: Users, value: '200k+', label: 'Homes Transformed' },
    { icon: Award, value: '100%', label: 'Completion Rate' },
    { icon: Star, value: '4.9', label: 'Customer Rating' }
  ]

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Services Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From energy-efficient windows to stunning conservatories, we provide comprehensive 
              solutions to enhance your home's comfort, security, and value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/services"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-[#1a4d2e]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center text-white"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-[#5a8a6f]" />
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-[#5a8a6f]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what homeowners across Kildare and Leinster 
              have to say about their experience with Emerald Windows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={testimonial.name}
                {...testimonial}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-white border-t border-gray-200">
        <div className="container-custom">
          <div className="text-center text-gray-900">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to Transform Your Home?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get your free, no-obligation quote today. Our team will visit your home, 
              discuss your requirements, and provide a detailed estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="btn-primary text-lg px-8 py-4"
              >
                Book Your Free Quote
              </Link>
              <Link 
                href="/projects"
                className="btn-secondary text-lg px-8 py-4"
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