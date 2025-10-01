"use client"

import { motion } from "motion/react"
import { Calendar, Code } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  date: string
  index: number
}

function ProjectCard({ title, description, technologies, date, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative bg-card rounded-lg p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border h-full"
    >
      <div className="space-y-3 sm:space-y-4">
        {/* Project Title */}
        <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
          {description}
        </p>
        
        {/* Technologies */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <Code className="h-3 w-3" />
            <span>Technologies</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Date */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
          <Calendar className="h-3 w-3" />
          <span>{date}</span>
        </div>
      </div>
      
      {/* Hover Effect Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gradient-start/10 to-gradient-end/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  )
}

interface ProjectsProps {
  className?: string
}

export default function Projects({ className }: ProjectsProps) {
  const projects = [
    {
      title: "Credit Risk Assessment Using ML",
      description: "Advanced machine learning model for assessing credit risk with comprehensive feature engineering and interpretable predictions using SHAP values. Built with modern MLOps practices and deployed via interactive web interface.",
      technologies: ["Python", "Scikit-learn", "XGBoost", "SHAP", "Streamlit"],
      date: "Apr 2025"
    },
    {
      title: "Financial Literacy LLM Tutor",
      description: "Interactive AI tutor powered by large language models to teach financial concepts. Features voice interaction capabilities and conversational learning experiences tailored to individual learning styles.",
      technologies: ["LLM", "Whisper", "LangChain"],
      date: "Jan 2025"
    },
    {
      title: "AI-based Career Path Predictor",
      description: "Intelligent career guidance system that combines machine learning algorithms with large language models to predict optimal career paths based on skills, interests, and market trends.",
      technologies: ["ML", "LLM Integration"],
      date: "Oct 2024"
    }
  ]

  return (
    <section className={`py-12 sm:py-16 ${className}`}>
      <div className="space-y-8 sm:space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 sm:space-y-4 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground"
          >
            Featured <span className="text-highlight">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
          >
            Showcasing innovative solutions in machine learning, AI, and financial technology
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              date={project.date}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}