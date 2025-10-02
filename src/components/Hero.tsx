"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { motion } from "motion/react"
import { Mail, Phone, Linkedin, Github, Twitter } from "lucide-react"

function Hero() {
  return (
    <section className="min-h-screen bg-background relative overflow-hidden pt-20 md:pt-0 w-full">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gradient-start to-gradient-end opacity-40" />
      
      {/* Decorative elements - responsive sizing and contained */}
      <div className="absolute top-10 left-5 md:top-20 md:left-20 w-20 h-20 md:w-32 md:h-32 bg-primary/10 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-5 md:bottom-20 md:right-20 w-24 h-24 md:w-40 md:h-40 bg-secondary/30 rounded-full blur-2xl" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 md:w-24 md:h-24 bg-accent/20 rounded-full blur-lg" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center min-h-[calc(100vh-6rem)] md:min-h-[80vh]">
          
          {/* Content Side */}
          <motion.div 
            className="order-2 lg:order-1 space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left w-full"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-3 sm:space-y-4">
              <motion.p 
                className="text-muted-foreground text-base sm:text-lg font-medium tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Welcome to my portfolio
              </motion.p>
              
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight break-words"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Hi! I Am{" "}
                <span className="text-primary">Hitaishi Upadhyay</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium break-words"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Exploring AI, Machine Learning & Intelligent Systems
              </motion.p>
            </div>
            
            <motion.div 
              className="space-y-4 sm:space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                I&apos;m a passionate B.Tech Computer Science & Engineering student with a deep fascination for Machine Learning and Artificial Intelligence. I love exploring the intersection of technology and innovation, constantly learning new frameworks and building intelligent systems that solve real-world problems.
              </p>
              
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
                My journey involves diving deep into neural networks, data science, and cutting-edge AI technologies while developing practical applications that showcase the power of intelligent systems.
              </p>
            </motion.div>
          </motion.div>
          
          {/* Image Side */}
          <motion.div 
            className="order-1 lg:order-2 flex justify-center lg:justify-end w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative max-w-full">
              {/* Decorative background circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/30 rounded-full scale-110 blur-2xl" />
              
              {/* Main image container with Dialog - responsive sizing */}
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-4 sm:border-6 md:border-8 border-white shadow-2xl bg-card cursor-pointer hover:scale-105 transition-transform duration-300 mx-auto">
                    <Image
                      src="https://drive.google.com/uc?export=view&id=1Fm7BX_2yhGu858lUS00W9GCtF42Kdtsd"
                      alt="Hitaishi Upadhyay - AI & ML Enthusiast"
                      fill
                      className="object-cover object-center"
                      priority
                      sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 450px"
                    />
                  </div>
                </DialogTrigger>
                
                <DialogContent className="sm:max-w-md w-[90vw]">
                  <DialogHeader>
                    <DialogTitle className="text-center text-xl sm:text-2xl font-bold">Hitaishi Upadhyay</DialogTitle>
                  </DialogHeader>
                  
                  <div className="flex flex-col items-center space-y-4 sm:space-y-6">
                    {/* Profile Image */}
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-primary shadow-lg">
                      <Image
                        src="https://drive.google.com/uc?export=view&id=1Fm7BX_2yhGu858lUS00W9GCtF42Kdtsd"
                        alt="Hitaishi Upadhyay"
                        width={128}
                        height={128}
                        className="object-cover object-center w-full h-full"
                      />
                    </div>
                    
                    {/* Contact Icons */}
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                      <Button
                        variant="outline"
                        size="icon"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors h-10 w-10 sm:h-12 sm:w-12"
                        asChild
                      >
                        <a href="mailto:hitaishi.upadhyay@gmail.com" aria-label="Email">
                          <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                        </a>
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="icon"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors h-10 w-10 sm:h-12 sm:w-12"
                        asChild
                      >
                        <a href="tel:+919876543210" aria-label="Phone">
                          <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                        </a>
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="icon"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors h-10 w-10 sm:h-12 sm:w-12"
                        asChild
                      >
                        <a href="https://linkedin.com/in/hitaishi-upadhyay" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                          <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                        </a>
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="icon"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors h-10 w-10 sm:h-12 sm:w-12"
                        asChild
                      >
                        <a href="https://github.com/hitaishi-upadhyay" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                          <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                        </a>
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="icon"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors h-10 w-10 sm:h-12 sm:w-12"
                        asChild
                      >
                        <a href="https://twitter.com/hitaishi_u" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                          <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                        </a>
                      </Button>
                    </div>
                    
                    <p className="text-center text-muted-foreground text-xs sm:text-sm px-4">
                      AI & ML Enthusiast | B.Tech CSE Student
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
              
              {/* Floating accent elements - contained and responsive */}
              <motion.div 
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full shadow-lg"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div 
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-secondary border-2 sm:border-4 border-white rounded-full shadow-lg"
                animate={{ 
                  y: [0, 10, 0],
                  x: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}

export default Hero