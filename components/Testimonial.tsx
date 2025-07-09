'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

interface TestimonialProps {
  name: string
  location: string
  content: string
  rating: number
  image: string
  delay?: number
}

const Testimonial = ({ name, location, content, rating, image, delay = 0 }: TestimonialProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg p-6 relative"
    >
      {/* Quote Icon */}
      <div className="absolute top-4 right-4 text-[#1a4d2e]/20">
        <Quote className="w-8 h-8" />
      </div>

      {/* Rating */}
      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-600 mb-6 leading-relaxed italic">
        "{content}"
      </p>

      {/* Author */}
      <div className="flex items-center space-x-3">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="font-semibold text-gray-900">{name}</div>
          <div className="text-sm text-gray-500">{location}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default Testimonial 