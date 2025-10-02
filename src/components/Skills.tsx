"use client"

import { Code, Palette, Wrench } from "lucide-react"
import { motion } from "motion/react"

interface SkillCategory {
  title: string
  icon: React.ComponentType<any>
  skills: string[]
  color: string
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["C", "C++", "Python"],
    color: "from-blue-50 to-blue-100"
  },
  {
    title: "Frontend Development", 
    icon: Palette,
    skills: ["HTML", "CSS", "Bootstrap", "PHP", "JavaScript"],
    color: "from-green-50 to-green-100"
  },
  {
    title: "Frameworks & Tools",
    icon: Wrench,
    skills: ["Django", "Next.js", "Node.js", "React.js", "LangChain"],
    color: "from-purple-50 to-purple-100"
  }
]

interface SkillsProps {
  className?: string
}

function Skills({ className }: SkillsProps) {
  return (
    <section className={className}>
      <div className="text-center mb-8 sm:mb-12">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>
        <motion.p 
          className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          A comprehensive overview of my technical expertise across different domains
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <div className="bg-card rounded-lg border border-border p-5 sm:p-6 h-full hover:shadow-lg transition-all duration-300 hover:border-primary/20">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-muted-foreground group-hover:text-card-foreground transition-colors duration-300">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills