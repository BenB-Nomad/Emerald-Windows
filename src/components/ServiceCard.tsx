import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

interface ServiceCardProps {
  title: string
  description: string
  image: string
  link: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image, link }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          to={link}
          className="inline-flex items-center text-emerald-700 hover:text-emerald-800 font-medium"
        >
          Learn More
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}

export default ServiceCard 