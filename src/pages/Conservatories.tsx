import React from 'react'
import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'

const Conservatories = () => {
  const conservatoryTypes = [
    {
      name: "Victorian",
      description: "Classic Victorian conservatories with elegant bay fronts and ornate details.",
      image: "/images/tenweb_media_szlb9h70e.webp",
      benefits: ["Elegant design", "Bay front", "Ornate details", "Period style"]
    },
    {
      name: "Edwardian",
      description: "Traditional Edwardian conservatories with clean lines and rectangular shape.",
      image: "/images/tenweb_media_rper347qx.webp",
      benefits: ["Clean lines", "Rectangular shape", "Traditional style", "Versatile use"]
    },
    {
      name: "Lean-to",
      description: "Practical lean-to conservatories that fit perfectly against existing walls.",
      image: "/images/tenweb_media_RGBL6Z9HV.webp",
      benefits: ["Space efficient", "Cost effective", "Easy installation", "Modern design"]
    },
    {
      name: "P-Shaped",
      description: "Versatile P-shaped conservatories that combine different styles.",
      image: "/images/tenweb_media_sirpbq38j.webp",
      benefits: ["Versatile design", "Multiple zones", "Custom layout", "Maximum space"]
    }
  ]

  const features = [
    {
      title: "Glass Roof Systems",
      description: "Advanced glazing technology for optimal light transmission and thermal performance."
    },
    {
      title: "Heating & Ventilation",
      description: "Integrated heating and ventilation systems for year-round comfort."
    },
    {
      title: "Custom Design",
      description: "Tailored to your home's architecture and your specific requirements."
    },
    {
      title: "Planning Support",
      description: "Expert guidance on planning permission and building regulations."
    }
  ]

  const benefits = [
    {
      icon: "🏛️",
      title: "Traditional Elegance",
      description: "Add timeless beauty to your home with classic conservatory designs."
    },
    {
      icon: "🌞",
      title: "Natural Light",
      description: "Enjoy abundant natural light while being protected from the elements."
    },
    {
      icon: "🏠",
      title: "Extra Space",
      description: "Create valuable additional living space without the cost of a full extension."
    },
    {
      icon: "🌿",
      title: "Garden Connection",
      description: "Seamlessly connect your indoor and outdoor living spaces."
    }
  ]

  const materials = [
    {
      name: "uPVC",
      description: "Low maintenance and energy efficient frames in various colors.",
      features: ["Low maintenance", "Energy efficient", "Cost effective", "Long lasting"]
    },
    {
      name: "Aluminium",
      description: "Slim profiles and modern aesthetics for contemporary homes.",
      features: ["Slim profiles", "Modern design", "Durable", "Weather resistant"]
    },
    {
      name: "Timber",
      description: "Natural beauty with excellent insulation properties.",
      features: ["Natural beauty", "Excellent insulation", "Traditional appeal", "Sustainable"]
    },
    {
      name: "Composite",
      description: "Combines the best of timber and uPVC for ultimate performance.",
      features: ["Best of both worlds", "Low maintenance", "High performance", "Long warranty"]
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-emerald-700 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/tenweb_media_szlb9h70e.webp)',
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
            Conservatories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Traditional elegance meets modern comfort
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Premium Conservatory Solutions</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Add timeless elegance to your home with our beautiful conservatories. We combine 
              traditional design with modern technology to create spaces that are both beautiful 
              and functional, providing year-round enjoyment of your garden views.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Conservatory Styles</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-emerald-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Victorian
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-emerald-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Edwardian
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-emerald-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Lean-to
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-emerald-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  P-Shaped
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
                  Glass Roof Systems
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-emerald-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Heating & Ventilation
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
                  Planning Support
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conservatory Types */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Conservatory Types</h2>
            <p className="text-xl text-gray-600">
              Choose from our range of traditional and modern conservatory styles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {conservatoryTypes.map((type, index) => (
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Benefits of a Conservatory</h2>
            <p className="text-xl text-gray-600">
              Discover how a conservatory can enhance your home and lifestyle
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

      {/* Materials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frame Materials</h2>
            <p className="text-xl text-gray-600">
              Choose the perfect material for your conservatory frames
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

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Key Features</h2>
            <p className="text-xl text-gray-600">
              Our conservatories are built with quality and tradition in mind
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

      {/* Installation Process */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Installation Process</h2>
            <p className="text-xl text-gray-600">
              From planning to completion, we ensure a smooth and professional experience
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Site Survey</h3>
              <p className="text-gray-600">Comprehensive site survey and planning consultation</p>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Design & Planning</h3>
              <p className="text-gray-600">Custom design and planning permission assistance</p>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Handover</h3>
              <p className="text-gray-600">Final inspection and handover of your beautiful conservatory</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4">
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

export default Conservatories 