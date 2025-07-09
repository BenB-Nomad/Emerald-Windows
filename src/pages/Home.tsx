import React from 'react'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import Testimonial from '../components/Testimonial'
import ContactForm from '../components/ContactForm'

const Home = () => {
  const services = [
    {
      title: "Windows",
      description: "High-quality, energy-efficient windows for your home",
      image: "/images/tenweb_media_rper347qx.webp",
      link: "/services/windows"
    },
    {
      title: "Doors",
      description: "Beautiful and secure doors to enhance your home",
      image: "/images/tenweb_media_sirpbq38j.webp",
      link: "/services/doors"
    },
    {
      title: "Sunrooms",
      description: "Bright and comfortable sunrooms for year-round enjoyment",
      image: "/images/tenweb_media_RGBL6Z9HV.webp",
      link: "/services/sunrooms"
    },
    {
      title: "Conservatories",
      description: "Elegant conservatories to extend your living space",
      image: "/images/tenweb_media_szlb9h70e.webp",
      link: "/services/conservatories"
    }
  ]

  const testimonials = [
    {
      name: "Sarah O'Connor",
      location: "Dublin",
      text: "Emerald Windows transformed our home with their beautiful windows. Professional service from start to finish.",
      rating: 5
    },
    {
      name: "Michael Walsh",
      location: "Cork",
      text: "Excellent quality and craftsmanship. Our new conservatory is absolutely stunning.",
      rating: 5
    },
    {
      name: "Emma Byrne",
      location: "Galway",
      text: "Highly recommend Emerald Windows. They delivered exactly what we wanted on time and within budget.",
      rating: 5
    }
  ]

  return (
    <div className="bg-white">
      <Hero />
      
      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in high-quality windows, doors, sunrooms, and conservatories 
              to enhance your home's beauty and functionality.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">
              Ready to transform your home? Contact us for a free consultation.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}

export default Home 