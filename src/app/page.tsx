"use client"

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Page() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden w-full">
      <Navigation />
      
      <main className="w-full overflow-x-hidden">
        <section id="home" className="w-full">
          <Hero />
        </section>
        
        <section id="about" className="py-12 sm:py-16 px-4 w-full">
          <About />
        </section>
        
        <section id="skills" className="py-12 sm:py-16 px-4 bg-gradient-to-br from-background to-secondary/20 w-full">
          <div className="max-w-6xl mx-auto w-full">
            <Skills />
          </div>
        </section>
        
        <section id="projects" className="py-12 sm:py-16 px-4 w-full">
          <div className="max-w-6xl mx-auto w-full">
            <Projects />
          </div>
        </section>
        
        <section id="contact" className="w-full">
          <Contact />
        </section>
      </main>
    </div>
  )
}