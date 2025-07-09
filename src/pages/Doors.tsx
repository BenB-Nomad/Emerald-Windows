import React from 'react'
import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'

const Doors = () => {
  const doorTypes = [
    {
      name: "Front Doors",
      description: "Make a stunning first impression with our premium front doors.",
      image: "/images/tenweb_media_sirpbq38j.webp",
      benefits: ["Enhanced security", "Kerb appeal", "Energy efficient", "Custom design"]
    },
    {
      name: "Back Doors",
      description: "Secure and practical back doors for easy garden access.",
      image: "/images/tenweb_media_rper347qx.webp",
      benefits: ["Easy access", "Security features", "Weather resistant", "Low maintenance"]
    },
    {
      name: "Patio Doors",
      description: "Seamlessly connect indoor and outdoor living spaces.",
      image: "/images/tenweb_media_RGBL6Z9HV.webp",
      benefits: ["Large openings", "Natural light", "Easy operation", "Modern design"]
    },
    {
      name: "French Doors",
      description: "Elegant double doors that add sophistication to any room.",
      image: "/images/tenweb_media_szlb9h70e.webp",
      benefits: ["Classic design", "Wide openings", "Elegant appearance", "Versatile use"]
    }
  ]

  const materials = [
    {
      name: "Composite",
      description: "Ultimate performance with wood core and weather-resistant exterior.",
      features: ["Superior strength", "Weather resistant", "Low maintenance", "Long warranty"]
    },
    {
      name: "uPVC",
      description: "Cost-effective and low-maintenance solution for modern homes.",
      features: ["Cost effective", "Low maintenance", "Energy efficient", "Durable"]
    },
    {
      name: "Timber",
      description: "Natural beauty with excellent insulation properties.",
      features: ["Natural beauty", "Excellent insulation", "Traditional appeal", "Sustainable"]
    },
    {
      name: "Aluminium",
      description: "Slim profiles and modern aesthetics for contemporary homes.",
      features: ["Slim profiles", "Modern design", "Durable", "Weather resistant"]
    }
  ]

  const securityFeatures = [
    {
      title: "Multi-Point Locking",
      description: "Advanced locking systems with multiple engagement points for maximum security."
    },
    {
      title: "Security Glass",
      description: "Laminated or toughened glass options to prevent forced entry."
    },
    {
      title: "Anti-Snap Cylinders",
      description: "High-security cylinders that resist common break-in techniques."
    },
    {
      title: "Hinge Bolts",
      description: "Additional security with hinge-side protection against forced entry."
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-emerald-700 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/tenweb_media_sirpbq38j.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative text-center text-white z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-4"
          >
            Doors
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Beautiful and secure doors to enhance your home
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Premium Door Solutions</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our doors combine style, security, and durability to create the perfect entrance to your home. 
              We offer a comprehensive range of door types and materials to suit every need and preference.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Door Types</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-emerald-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Front Doors
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-emerald-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Back Doors
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-emerald-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Patio Doors
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-emerald-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  French Doors
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Materials & Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-emerald-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Composite Materials
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-emerald-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Enhanced Security
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-emerald-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Weather Resistant
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-emerald-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Energy Efficient
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Door Types */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Door Types</h2>
            <p className="text-xl text-gray-600">
              Choose from our range of door styles to suit your home and lifestyle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {doorTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={type.image}
                    alt={type.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.name}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 text-emerald-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Materials</h2>
            <p className="text-xl text-gray-600">
              Choose the perfect material for your doors based on your needs and preferences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {materials.map((material, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{material.name}</h3>
                <p className="text-gray-600 mb-4">{material.description}</p>
                <ul className="space-y-2 text-sm">
                  {material.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-600">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Security Features</h2>
            <p className="text-xl text-gray-600">
              Our doors are designed with advanced security features to protect your home
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Energy Efficiency */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Energy Efficiency</h2>
            <p className="text-xl text-gray-600">
              Our doors help keep your home warm in winter and cool in summer
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-emerald-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Thermal Performance</h3>
              <p className="text-gray-600">
                Advanced insulation keeps your home comfortable year-round.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-emerald-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Weather Seals</h3>
              <p className="text-gray-600">
                Multiple weather seals prevent drafts and moisture ingress.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-emerald-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">A-Rated Energy</h3>
              <p className="text-gray-600">
                Our doors achieve the highest energy efficiency ratings.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Get a Free Quote</h2>
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Doors 