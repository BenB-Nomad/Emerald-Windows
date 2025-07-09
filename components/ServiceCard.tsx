'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  image: string
  href: string
  features: string[]
  delay?: number
}

const ServiceCard = ({ title, description, image, href, features, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <div className="mb-6">
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-[#1a4d2e] flex-shrink-0" />
                <span className="text-sm text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <Link 
          href={href}
          className="inline-flex items-center space-x-2 text-[#1a4d2e] hover:text-[#2d5a3d] font-semibold group-hover:translate-x-1 transition-all duration-200"
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  )
}

export default ServiceCard 