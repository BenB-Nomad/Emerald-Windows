'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  initial?: any
  animate?: any
  transition?: any
  viewport?: any
  whileInView?: any
}

const AnimatedSection = ({ 
  children, 
  className = '', 
  initial = { opacity: 0, y: 30 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.6 },
  viewport = { once: true },
  whileInView = { opacity: 1, y: 0 }
}: AnimatedSectionProps) => {
  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      viewport={viewport}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection 