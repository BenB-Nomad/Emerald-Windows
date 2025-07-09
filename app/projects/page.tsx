import React from 'react'
import { Star, MapPin, Calendar } from 'lucide-react'

export const metadata = {
  title: 'Our Projects - Emerald Windows',
  description: 'View our portfolio of completed projects including windows, doors, sunrooms, and conservatories across Kildare and Leinster.',
}

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'Victorian Conservatory - Kildare',
      category: 'Conservatories',
      description: 'A stunning Victorian-style conservatory with traditional detailing and modern energy efficiency.',
      image: '/images/tenweb_media_szlb9h70e.webp',
      location: 'Kildare',
      date: '2023',
      rating: 5,
      features: ['Victorian Design', 'Double Glazing', 'Planning Permission', 'Custom Size']
    },
    {
      id: 2,
      title: 'Modern Sunroom Extension',
      category: 'Sunrooms',
      description: 'Contemporary sunroom with Guardian roof system, creating a year-round living space.',
      image: '/images/tenweb_media_rpsjpec2h.webp',
      location: 'Dublin',
      date: '2023',
      rating: 5,
      features: ['Guardian Roof', 'Year-round Use', 'Modern Design', 'Energy Efficient']
    },
    {
      id: 3,
      title: 'Complete Window Replacement',
      category: 'Windows',
      description: 'Full house window replacement with triple-glazed uPVC windows for maximum energy efficiency.',
      image: '/images/pexels-michaelgaultphotos-6303114.jpg',
      location: 'Wicklow',
      date: '2023',
      rating: 5,
      features: ['Triple Glazing', 'uPVC Frames', 'Secure Locking', 'Energy A-Rated']
    },
    {
      id: 4,
      title: 'Composite Front Door',
      category: 'Doors',
      description: 'Premium composite front door with Palladio design and advanced security features.',
      image: '/images/tenweb_media_rnk23d8za.webp',
      location: 'Meath',
      date: '2023',
      rating: 5,
      features: ['Composite Material', 'Palladio Design', 'Espag Locks', 'Monocoque Core']
    },
    {
      id: 5,
      title: 'Edwardian Conservatory',
      category: 'Conservatories',
      description: 'Classic Edwardian conservatory with period-appropriate styling and modern comforts.',
      image: '/images/tenweb_media_sdwe65xkz.webp',
      location: 'Louth',
      date: '2023',
      rating: 5,
      features: ['Edwardian Style', 'Heritage Design', 'Planning Approved', 'Custom Glazing']
    },
    {
      id: 6,
      title: 'Guardian Sunroom',
      category: 'Sunrooms',
      description: 'Luxury sunroom with Guardian roof system, creating the perfect "Room Outside" experience.',
      image: '/images/tenweb_media_rwjslpurf.webp',
      location: 'Westmeath',
      date: '2023',
      rating: 5,
      features: ['Guardian Roof', 'Luxury Finish', 'Year-round Comfort', 'Custom Design']
    }
  ]

  const categories = ['All', 'Windows', 'Doors', 'Sunrooms', 'Conservatories']

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-[#1a4d2e]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2d5a3d] to-[#1a4d2e]" />
        <div className="relative z-10 container-custom text-center text-white">
          <div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl text-[#5a8a6f] max-w-3xl mx-auto">
              Discover our portfolio of completed projects across Kildare and Leinster. 
              From energy-efficient windows to stunning conservatories.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Recent Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through our latest projects and see the quality craftsmanship 
              that has made us a trusted name in home improvements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#1a4d2e] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4 flex items-center bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-900 ml-1">
                      {project.rating}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Details */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.date}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full bg-[#1a4d2e] hover:bg-[#2d5a3d] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '40+', label: 'Years Experience' },
              { number: '100%', label: 'Customer Satisfaction' },
              { number: '200k+', label: 'Homes Transformed' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-emerald-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Let us transform your home with the same quality and craftsmanship 
              you see in our portfolio. Get your free quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="btn-primary text-lg px-8 py-4 bg-white text-emerald-500 hover:bg-gray-100"
              >
                Get Your Free Quote
              </a>
              <a 
                href="/services"
                className="btn-secondary text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-emerald-500"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 