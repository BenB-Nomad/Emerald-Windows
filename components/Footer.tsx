'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Windows', href: '/services/windows' },
      { name: 'Doors', href: '/services/doors' },
      { name: 'Sunrooms', href: '/services/sunrooms' },
      { name: 'Conservatories', href: '/services/conservatories' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Projects', href: '/projects' },
      { name: 'Get Quote', href: '/contact' },
    ],
    support: [
      { name: 'Installation Guide', href: '/support/installation' },
      { name: 'Maintenance Tips', href: '/support/maintenance' },
      { name: 'Warranty Info', href: '/support/warranty' },
    ]
  }

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'Twitter', href: '#', icon: Twitter },
  ]

  return (
    <footer className="bg-[#1a4d2e] text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-2">
              <Image
                src="/images/emerald.png"
                alt="Emerald Windows Logo"
                width={120}
                height={120}
                className="w-24 h-24 object-contain"
              />
            </Link>
            <p className="text-gray-300 mb-2 leading-relaxed text-sm">
              Family-owned since 1983, Emerald Windows has been providing quality windows, 
              doors, sunrooms, and conservatories across Kildare and Leinster.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3 text-[#5a8a6f]" />
                <span className="text-gray-300 text-xs">+353 1 234 5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3 text-[#5a8a6f]" />
                <span className="text-gray-300 text-xs">info@emeraldwindows.ie</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-3 h-3 text-[#5a8a6f]" />
                <span className="text-gray-300 text-xs">Kildare, Ireland</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold mb-2 text-[#5a8a6f]">Services</h3>
            <ul className="space-y-1">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-[#5a8a6f] transition-colors text-xs"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold mb-2 text-[#5a8a6f]">Company</h3>
            <ul className="space-y-1">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-[#5a8a6f] transition-colors text-xs"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-[#2d5a3d] mt-4 pt-3">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-3 mb-2 md:mb-0">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-6 h-6 bg-[#2d5a3d] rounded-full flex items-center justify-center text-gray-300 hover:bg-[#5a8a6f] hover:text-white transition-colors"
                >
                  <social.icon className="w-3 h-3" />
                </motion.a>
              ))}
            </div>
            
            <div className="text-gray-400 text-xs">
              © {currentYear} Emerald Windows. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 