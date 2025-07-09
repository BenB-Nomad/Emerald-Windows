import React from 'react'
import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'

const Sunrooms = () => {
  const sunroomTypes = [
    {
      name: "Conservatory Style",
      description: "Traditional glass-roofed sunrooms that maximize natural light.",
      image: "/images/tenweb_media_szlb9h70e.webp",
      benefits: ["Maximum light", "Traditional design", "Glass roof", "Year-round use"]
    },
    {
      name: "Solid Roof",
      description: "Modern sunrooms with insulated solid roofs for better temperature control.",
      image: "/images/tenweb_media_RGBL6Z9HV.webp",
      benefits: ["Better insulation", "Temperature control", "Modern design", "Energy efficient"]
    },
    {
      name: "Garden Room",
      description: "Versatile spaces that blend seamlessly with your garden.",
      image: "/images/tenweb_media_rper347qx.webp",
      benefits: ["Garden connection", "Versatile use", "Natural materials", "Custom design"]
    },
    {
      name: "Orangery",
      description: "Elegant sunrooms with brick pillars and glass panels.",
      image: "/images/tenweb_media_sirpbq38j.webp",
      benefits: ["Elegant design", "Brick pillars", "Glass panels", "Period style"]
    }
  ]

  const features = [
    {
      title: "Thermal Efficiency",
      description: "Advanced insulation systems keep your sunroom comfortable in all seasons."
    },
    {
      title: "Natural Light",
      description: "Large windows and glass panels maximize natural light throughout the day."
    },
    {
      title: "Custom Design",
      description: "Tailored to your home's architecture and your specific needs."
    },
    {
      title: "Year-Round Use",
      description: "Proper heating and ventilation systems for comfortable use in any season."
    }
  ]

  const benefits = [
    {
      icon: "🏠",
      title: "Extra Living Space",
      description: "Add valuable square footage to your home without the cost of a full extension."
    },
    {
      icon: "🌞",
      title: "Natural Light",
      description: "Enjoy the benefits of natural light while being protected from the elements."
    },
    {
      icon: "🌿",
      title: "Garden Connection",
      description: "Create a seamless connection between your indoor and outdoor spaces."
    },
    {
      icon: "💰",
      title: "Property Value",
      description: "Increase your home's value with this desirable addition."
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-emerald-700 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/tenweb_media_RGBL6Z9HV.webp)',
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
            Sunrooms
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Create your perfect year-round living space
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Premium Sunroom Solutions</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Transform your home with a beautiful sunroom that provides year-round living space 
              filled with natural light. Our sunrooms are designed to enhance your lifestyle 
              while adding value to your property.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sunroom Types</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-emerald-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Conservatory Style
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-emerald-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Solid Roof
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-emerald-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Garden Room
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-emerald-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Orangery
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-emerald-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Thermal Efficiency
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-emerald-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Natural Light
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-emerald-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom Design
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-emerald-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Year-Round Use
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sunroom Types */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Sunroom Types</h2>
            <p className="text-xl text-gray-600">
              Choose from our range of sunroom styles to suit your home and lifestyle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sunroomTypes.map((type, index) => (
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

      {/* Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Benefits of a Sunroom</h2>
            <p className="text-xl text-gray-600">
              Discover how a sunroom can transform your home and lifestyle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Key Features</h2>
            <p className="text-xl text-gray-600">
              Our sunrooms are built with quality and comfort in mind
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
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

      {/* Design Process */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Design Process</h2>
            <p className="text-xl text-gray-600">
              From concept to completion, we guide you through every step
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-emerald-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600">Free consultation to understand your vision and requirements</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-emerald-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600">Custom design that perfectly matches your home's architecture</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-emerald-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Construction</h3>
              <p className="text-gray-600">Professional construction by our skilled team</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="bg-emerald-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Completion</h3>
              <p className="text-gray-600">Final inspection and handover of your beautiful new sunroom</p>
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

export default Sunrooms 