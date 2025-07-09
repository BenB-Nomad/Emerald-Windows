import React from 'react'
import { motion } from 'framer-motion'

const Doors = () => {
  const doorTypes = [
    {
      name: "Front Doors",
      description: "Make a stunning first impression with our premium front doors. Choose from composite, uPVC, and timber options for security and style.",
      image: "/images/tenweb_media_rper347qx.webp"
    },
    {
      name: "Back Doors",
      description: "Secure and practical back doors for easy garden access. All doors are weather-sealed and energy efficient.",
      image: "/images/pexels-heyho-8143711.jpg"
    },
    {
      name: "Patio Doors",
      description: "Smooth sliding doors that connect your indoor and outdoor spaces. Enjoy panoramic views and easy access to your garden.",
      image: "/images/pexels-curtis-adams-1694007-3773582.jpg"
    },
    {
      name: "French Doors",
      description: "Elegant double doors that add sophistication to any room. Available in a range of finishes and glazing options.",
      image: "/images/tenweb_media_szlb9h70e.webp"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
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
            Beautiful, secure doors for every entrance
          </motion.p>
        </div>
      </section>

      {/* Door Types */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">Door Types</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From front doors to patio doors, we have the perfect solution for every entrance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {doorTypes.map((door, index) => (
              <motion.div
                key={door.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${door.image})` }}></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-emerald-800 mb-3">{door.name}</h3>
                  <p className="text-gray-600">{door.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-emerald-800 mb-4">Why Choose Our Doors?</h2>
          <p className="text-lg text-gray-700">Our doors are built for Irish weather, with advanced security features and a wide range of styles. Every installation is covered by our 20-year guarantee.</p>
        </div>
      </section>
    </div>
  )
}

export default Doors 