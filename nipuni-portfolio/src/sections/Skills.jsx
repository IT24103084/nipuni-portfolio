// Skills.jsx — Skills displayed as categories with list items and animations

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionTag from '../components/SectionTag'
import { skillCategories, softSkills } from '../data'

function SkillCategory({ category, index, isLeft }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: isLeft ? -24 : 24 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative"
    >
      {/* Category title with accent line */}
      <div className="flex items-center gap-4 mb-8">
        <motion.h3 
          variants={itemVariants}
          className="font-display font-bold text-xl"
          style={{ 
            background: 'linear-gradient(135deg, #4fc3f7, #9c27b0)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {category.title}
        </motion.h3>
        <motion.div
          variants={itemVariants}
          className="flex-1 h-[2px]"
          style={{ background: 'linear-gradient(90deg, #4fc3f7, transparent)' }}
        />
      </div>

      {/* Skills list */}
      <motion.div
        variants={containerVariants}
        className="space-y-4"
      >
        {category.skills.map((skill) => (
          <motion.div
            key={skill}
            variants={itemVariants}
            whileHover={{ x: isLeft ? 8 : -8 }}
            className="glass glass-hover p-4 flex items-center gap-3 group cursor-pointer"
          >
            <motion.div
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: '#4fc3f7' }}
              whileHover={{ scale: 1.5 }}
            />
            <span className="text-base text-slate-900 dark:text-[#e8eaf6] group-hover:text-[#4fc3f7] transition-colors duration-300">
              {skill}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

function SoftSkillsSection({ isLeft }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: isLeft ? -24 : 24 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative"
    >
      {/* Title with accent line */}
      <div className="flex items-center gap-4 mb-8">
        <motion.h3 
          variants={itemVariants}
          className="font-display font-bold text-xl"
          style={{ 
            background: 'linear-gradient(135deg, #4fc3f7, #9c27b0)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Soft Skills
        </motion.h3>
        <motion.div
          variants={itemVariants}
          className="flex-1 h-[2px]"
          style={{ background: 'linear-gradient(90deg, #4fc3f7, transparent)' }}
        />
      </div>

      {/* Skills list */}
      <motion.div
        variants={containerVariants}
        className="space-y-4"
      >
        {softSkills.map((skill) => (
          <motion.div
            key={skill}
            variants={itemVariants}
            whileHover={{ x: isLeft ? 8 : -8 }}
            className="glass glass-hover p-4 flex items-center gap-3 group cursor-pointer"
          >
            <motion.div
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: '#4fc3f7' }}
              whileHover={{ scale: 1.5 }}
            />
            <span className="text-base text-slate-900 dark:text-[#e8eaf6] group-hover:text-[#4fc3f7] transition-colors duration-300">
              {skill}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default function Skills() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section id="skills" className="relative py-32">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[600px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(79,195,247,0.08),transparent)] blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(156,39,176,0.06),transparent)] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <SectionTag>Expertise</SectionTag>
          <h2 className="font-display font-extrabold text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] mb-4">
            Skills &amp; <span className="text-gradient">Expertise</span>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - First 3 skill categories */}
          <div className="space-y-16">
            {skillCategories.slice(0, 3).map((cat, i) => (
              <SkillCategory key={cat.title} category={cat} index={i} isLeft={true} />
            ))}
          </div>

          {/* Right column - Last 2 skill categories + Soft Skills */}
          <div className="space-y-16">
            {skillCategories.slice(3, 5).map((cat, i) => (
              <SkillCategory key={cat.title} category={cat} index={i + 3} isLeft={false} />
            ))}
            <SoftSkillsSection isLeft={false} />
          </div>
        </div>
      </div>
    </section>
  )
}

