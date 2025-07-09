import React from 'react'
import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div className="bg-white pt-16">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 mb-6"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 mb-8"
        >
          Ready to transform your home? Contact us for a free consultation and quote. 
          We're here to help with all your window, door, sunroom, and conservatory needs.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </div>
  )
}

export default Contact 