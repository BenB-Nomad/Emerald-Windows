import React from 'react'
import { motion } from 'framer-motion'

const Sunrooms = () => {
  const sunroomTypes = [
    {
      name: "Conservatory Style",
      description: "Traditional glass-roofed sunrooms that maximize natural light. Perfect for relaxing and entertaining year-round.",
      image: "/images/tenweb_media_szlb9h70e.webp"
    },
    {
      name: "Solid Roof",
      description: "Modern sunrooms with insulated solid roofs for better temperature control. Enjoy your sunroom in all seasons.",
      image: "/images/pexels-curtis-adams-1694007-3773582.jpg"
    },
    {
      name: "Garden Room",
      description: "Versatile spaces that blend indoor and outdoor living seamlessly. Custom designed for your needs.",
      image: "/images/pexels-heyho-8143711.jpg"
    },
    {
      name: "Orangery",
      description: "Elegant structures with brick pillars and lantern roofs for a luxurious feel.",
      image: "/images/tenweb_media_sirpbq38j.webp"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
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
            Create your perfect space to enjoy the outdoors year-round
          </motion.p>
        </div>
      </section>

      {/* Sunroom Types */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">Sunroom Types</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From traditional conservatories to modern garden rooms, find the perfect sunroom for your home
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {sunroomTypes.map((sunroom, index) => (
              <motion.div
                key={sunroom.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${sunroom.image})` }}></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-emerald-800 mb-3">{sunroom.name}</h3>
                  <p className="text-gray-600">{sunroom.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-emerald-800 mb-4">Why Choose Our Sunrooms?</h2>
          <p className="text-lg text-gray-700">Our sunrooms are designed for year-round comfort, with high-performance glazing and insulation. Add value and space to your home with a custom sunroom.</p>
        </div>
      </section>
    </div>
  )
}

export default Sunrooms 