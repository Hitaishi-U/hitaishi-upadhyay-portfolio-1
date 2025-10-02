"use client"

import React, { useState } from 'react'
import { Phone, Mail, Linkedin, Instagram, Send, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import emailjs from 'emailjs-com'

interface ContactProps {
  className?: string
}

function Contact({ className }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)
    
    try {
      // Send email via EmailJS
      await emailjs.send(
        'service_wddvrbg', // Service ID
        'template_pnnmu6v', // Template ID
        {
          name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        'YTTfMkHxUy4oBByfM' // Public Key
      )
      
      setIsSubmitted(true)
      toast.success('Message sent successfully!')
      
      // Reset form after success
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' })
        setIsSubmitted(false)
      }, 3000)
      
    } catch (error) {
      console.error('EmailJS Error:', error)
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '9039131555',
      href: 'tel:9039131555'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'hitaishi.2111@gmail.com',
      href: 'mailto:hitaishi.2111@gmail.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/hitaishi-upadhyay',
      href: 'https://linkedin.com/in/hitaishi-upadhyay'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@hitaishi49',
      href: 'https://instagram.com/hitaishi49'
    }
  ]

  return (
    <section className={`py-12 sm:py-16 bg-gradient-to-br from-gradient-start to-gradient-end ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get In <span className="text-highlight">Touch</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Ready to start your next project? Let's collaborate and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6">
                Let's Connect
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8">
                I'm always excited to discuss new opportunities and creative projects. 
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === 'LinkedIn' || item.label === 'Instagram' ? '_blank' : undefined}
                  rel={item.label === 'LinkedIn' || item.label === 'Instagram' ? 'noopener noreferrer' : undefined}
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-card rounded-lg hover:bg-accent transition-colors duration-200 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-foreground text-sm sm:text-base">{item.label}</p>
                    <p className="text-muted-foreground text-xs sm:text-sm truncate">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Media Section */}
            <div className="pt-4 sm:pt-6 border-t border-border">
              <h4 className="text-base sm:text-lg font-semibold text-foreground mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-3 sm:space-x-4">
                <a
                  href="https://linkedin.com/in/hitaishi-upadhyay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://instagram.com/hitaishi49"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full"
                  disabled={isSubmitting || isSubmitted}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className="w-full"
                  disabled={isSubmitting || isSubmitted}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or inquiry..."
                  rows={5}
                  className="w-full resize-none"
                  disabled={isSubmitting || isSubmitted}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2 sm:py-3 text-sm sm:text-base"
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact