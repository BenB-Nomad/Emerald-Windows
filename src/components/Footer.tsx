import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#1a4d2e] text-white py-8">
      <div className="container-custom">
        <div className="text-center">
          <img
            src="/images/emerald.png"
            alt="Emerald Windows Logo"
            className="w-32 h-32 mx-auto mb-4 object-contain"
          />
          <p className="text-sm text-gray-300">
            © 2024 Emerald Windows. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 