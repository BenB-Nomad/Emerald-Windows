import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can add email sending logic here
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg shadow-lg"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          >
            <option value="">Select a service</option>
            <option value="windows">Windows</option>
            <option value="doors">Doors</option>
            <option value="sunrooms">Sunrooms</option>
            <option value="conservatories">Conservatories</option>
          </select>
        </div>
      </div>
      <div className="mt-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          placeholder="Tell us about your project..."
        />
      </div>
      <div className="mt-6">
        <button
          type="submit"
          className="w-full bg-emerald-700 text-white py-3 px-6 rounded-md hover:bg-emerald-800 transition-colors duration-200 font-medium"
        >
          Send Message
        </button>
      </div>
    </motion.form>
  )
}

export default ContactForm 