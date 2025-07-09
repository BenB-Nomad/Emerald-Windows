import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Services = () => {
  const services = [
    {
      title: "Windows",
      description: "High-quality, energy-efficient windows for your home",
      image: "/images/tenweb_media_rper347qx.webp",
      link: "/services/windows",
      features: [
        "Energy efficient double and triple glazing",
        "Various styles: casement, sash, tilt & turn",
        "Custom sizes and colors available",
        "10-year warranty"
      ]
    },
    {
      title: "Doors",
      description: "Beautiful and secure doors to enhance your home",
      image: "/images/tenweb_media_sirpbq38j.webp",
      link: "/services/doors",
      features: [
        "Front doors, back doors, and patio doors",
        "Composite, uPVC, and timber options",
        "Enhanced security features",
        "Weather-resistant materials"
      ]
    },
    {
      title: "Sunrooms",
      description: "Bright and comfortable sunrooms for year-round enjoyment",
      image: "/images/tenweb_media_RGBL6Z9HV.webp",
      link: "/services/sunrooms",
      features: [
        "Year-round living space",
        "Thermal efficiency for all seasons",
        "Custom design options",
        "Professional installation"
      ]
    },
    {
      title: "Conservatories",
      description: "Elegant conservatories to extend your living space",
      image: "/images/tenweb_media_szlb9h70e.webp",
      link: "/services/conservatories",
      features: [
        "Traditional and modern designs",
        "Glass or polycarbonate roofs",
        "Heating and ventilation options",
        "Planning permission assistance"
      ]
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-emerald-700 flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative text-center text-white z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Comprehensive solutions for windows, doors, sunrooms, and conservatories
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 text-emerald-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to={service.link}
                    className="inline-flex items-center bg-emerald-700 text-white px-6 py-3 rounded-md hover:bg-emerald-800 transition-colors duration-200 font-medium"
                  >
                    Learn More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Services?</h2>
            <p className="text-xl text-gray-600 mb-12">
              We provide comprehensive solutions with unmatched quality and service
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-emerald-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Guaranteed</h3>
                <p className="text-gray-600">
                  All our products come with comprehensive warranties and quality guarantees.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-emerald-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Installation</h3>
                <p className="text-gray-600">
                  Our experienced team ensures fast and professional installation.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-emerald-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">
                  We're here to help with any questions or support you need.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services 