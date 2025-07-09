'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    })
    
    alert('Thank you for your message! We\'ll get back to you soon.')
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+353 1 234 5678', 'Mon-Fri 8am-6pm']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@emeraldwindows.ie', 'Get a free quote']
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['Kildare, Ireland', 'Serving Leinster']
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Monday - Friday: 8am-6pm', 'Saturday: 9am-4pm']
    }
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl shadow-lg p-8"
      >
        <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
          Get Your Free Quote
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4d2e] focus:border-[#1a4d2e] transition-colors"
                placeholder="Your full name"
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
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4d2e] focus:border-[#1a4d2e] transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4d2e] focus:border-[#1a4d2e] transition-colors"
                placeholder="+353 1 234 5678"
              />
            </div>
            
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                Service Required
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4d2e] focus:border-[#1a4d2e] transition-colors"
              >
                <option value="">Select a service</option>
                <option value="windows">Windows</option>
                <option value="doors">Doors</option>
                <option value="sunrooms">Sunrooms</option>
                <option value="conservatories">Conservatories</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4d2e] focus:border-[#1a4d2e] transition-colors resize-none"
              placeholder="Tell us about your project requirements..."
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </motion.div>

      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div>
          <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
            Contact Information
          </h3>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Ready to transform your home? Get in touch with our team for a free, 
            no-obligation quote. We'll visit your home, discuss your requirements, 
            and provide a detailed estimate.
          </p>
        </div>

        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="flex items-start space-x-4"
            >
              <div className="w-12 h-12 bg-[#1a4d2e] rounded-lg flex items-center justify-center flex-shrink-0">
                <info.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                {info.details.map((detail, i) => (
                  <p key={i} className={`${i === 0 ? 'text-gray-700' : 'text-gray-500'} text-sm`}>
                    {detail}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <MapPin className="w-12 h-12 mx-auto mb-2" />
            <p>Interactive Map</p>
            <p className="text-sm">Kildare, Ireland</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ContactForm 