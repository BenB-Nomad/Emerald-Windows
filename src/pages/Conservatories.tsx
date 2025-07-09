import React from 'react'
import { motion } from 'framer-motion'

const Conservatories = () => {
  const conservatoryTypes = [
    {
      name: "Victorian",
      description: "Classic Victorian conservatories with elegant bay fronts and ornate details. A timeless addition to any home.",
      image: "/images/pexels-curtis-adams-1694007-3773582.jpg"
    },
    {
      name: "Edwardian",
      description: "Traditional Edwardian conservatories with clean lines and rectangular shape. Maximise your living space with style.",
      image: "/images/tenweb_media_rpsjpec2h.webp"
    },
    {
      name: "Georgian",
      description: "Symmetrical Georgian conservatories with balanced proportions and classic style. Brighten your home with natural light.",
      image: "/images/tenweb_media_sirpbq38j.webp"
    },
    {
      name: "P-Shaped",
      description: "Versatile P-shaped conservatories for larger homes and flexible living. Custom designed for your property.",
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
            backgroundImage: 'url(/images/tenweb_media_rper347qx.webp)',
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
            Traditional conservatories that bring elegance and light to your home
          </motion.p>
        </div>
      </section>

      {/* Conservatory Types */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">Conservatory Styles</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from traditional conservatory designs that complement your home's architecture
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {conservatoryTypes.map((conservatory, index) => (
              <motion.div
                key={conservatory.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${conservatory.image})` }}></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-emerald-800 mb-3">{conservatory.name}</h3>
                  <p className="text-gray-600">{conservatory.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-emerald-800 mb-4">Why Choose Our Conservatories?</h2>
          <p className="text-lg text-gray-700">All our conservatories are built to last, with energy-efficient glazing and robust construction. Enjoy extra space and year-round comfort, tailored to your home.</p>
        </div>
      </section>
    </div>
  )
}

export default Conservatories 