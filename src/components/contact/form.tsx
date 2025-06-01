'use client'

import React, { useState } from 'react'
import PrimaryButton from '../ui/PrimaryButton'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Send formData to backend
    // console.log('Form submitted:', formData)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Doe"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="john@example.com"
            required
          />
        </div>
      </div>

      {/* Phone & Subject */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="+880 1234-567890"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Project Inquiry"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Your Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Tell us about your project or inquiry..."
        />
      </div>

      {/* Submit Button */}
      <PrimaryButton>Submit</PrimaryButton>
    </form>
  )
}

export default ContactForm
