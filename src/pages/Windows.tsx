import React from 'react'
import { motion } from 'framer-motion'

const Windows = () => {
  const windowTypes = [
    {
      name: "Casement Windows",
      description: "Hinged windows that open outward, perfect for ventilation and easy cleaning. Our casement windows are designed for Irish weather and maximum energy efficiency.",
      image: "/images/cropped/tenweb_media_rpsjpec2h.webp"
    },
    {
      name: "Sash Windows",
      description: "Traditional sliding windows with classic design and smooth operation. Ideal for period homes and modern builds alike.",
      image: "/images/cropped/pexels-curtis-adams-1694007-3773582.jpg"
    },
    {
      name: "Tilt & Turn Windows",
      description: "Versatile windows that can tilt for ventilation or turn for full opening. Great for easy cleaning and secure ventilation.",
      image: "/images/cropped/pexels-heyho-8143711.jpg"
    },
    {
      name: "Bay Windows",
      description: "Create a sense of space and light with our beautiful bay windows, custom-made for your home.",
      image: "/images/cropped/tenweb_media_sirpbq38j.webp"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
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
            Windows
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Premium quality windows designed for Irish homes
          </motion.p>
        </div>
      </section>

      {/* Window Types */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">Window Types</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of window styles to suit every home and preference
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {windowTypes.map((window, index) => (
              <motion.div
                key={window.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${window.image})` }}></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-emerald-800 mb-3">{window.name}</h3>
                  <p className="text-gray-600">{window.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-emerald-800 mb-4">Why Choose Our Windows?</h2>
          <p className="text-lg text-gray-700">All our windows are A-rated for energy efficiency, come with a 20-year guarantee, and are installed by our expert team. We offer a wide range of styles and finishes to suit every home in Ireland.</p>
        </div>
      </section>
    </div>
  )
}

export default Windows 