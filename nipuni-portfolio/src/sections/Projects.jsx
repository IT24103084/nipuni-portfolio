// Projects.jsx — Clean, user-friendly project cards with features.

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, ExternalLink, ChevronRight } from 'lucide-react'
import SectionTag from '../components/SectionTag'
import { projects } from '../data'

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: (index % 2) * 0.12 }}
      whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(124,106,247,0.15)', transition: { duration: 0.3 } }}
      className="glass p-8 rounded-xl border border-white/8 group hover:border-white/12 transition-colors duration-300"
    >
      {/* Top accent bar */}
      <motion.div 
        initial={{ scaleX: 0, originX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.1 + (index % 2) * 0.12 }}
        className="h-1 bg-gradient-to-r from-[#7c6af7] via-[#b06ef3] to-transparent rounded-full mb-6" 
      />

        {/* Header with icon and timeline */}
        <div className="flex items-start justify-between mb-5">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.15 + (index % 2) * 0.12, duration: 0.5 }}
            className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl flex-shrink-0"
            style={{ background: project.iconBg, border: `1.5px solid ${project.iconBorder}` }}
          >
            {project.icon}
          </motion.div>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 + (index % 2) * 0.12 }}
            className="text-xs font-medium px-3 py-1 rounded-full"
            style={{ background: 'rgba(124,106,247,0.08)', color: 'var(--text3)' }}
          >
            {project.timeline}
          </motion.span>
        </div>

        {/* Title */}
        <motion.h3 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.1 + (index % 2) * 0.12 }}
          className="font-display font-bold text-lg leading-snug mb-3 group-hover:text-gradient transition-all duration-300"
          style={{ color: 'var(--text)' }}
        >
          {project.title}
        </motion.h3>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.15 + (index % 2) * 0.12 }}
          className="text-sm leading-relaxed mb-5"
          style={{ color: 'var(--text2)' }}
        >
          {project.description}
        </motion.p>

        {/* Features / What I built */}
        {project.features && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 + (index % 2) * 0.12 }}
            className="mb-6 pb-6 border-b border-white/8"
          >
            <div className="text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
              What I Built
            </div>
            <ul className="space-y-2">
              {project.features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.05 + (index % 2) * 0.12 }}
                  className="flex items-start gap-2 text-sm"
                  style={{ color: 'var(--text2)' }}
                >
                  <ChevronRight size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Tech badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.25 + (index % 2) * 0.12 }}
          className="flex flex-wrap gap-2 mb-6"
        >
          {project.tech.map((t, i) => (
            <motion.span 
              key={t}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.28 + i * 0.04 + (index % 2) * 0.12, duration: 0.3 }}
              className="tech-badge text-xs font-medium"
            >
              {t}
            </motion.span>
          ))}
        </motion.div>

        {/* Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 + (index % 2) * 0.12 }}
          className="flex gap-3 pt-4 border-t border-white/8"
        >
          <motion.a 
            whileHover={{ scale: 1.05, x: 2 }}
            whileTap={{ scale: 0.95 }}
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-ghost text-xs flex items-center gap-1.5"
          >
            <Github size={14} /> GitHub
          </motion.a>
          {project.demo && project.demo !== '#' && (
            <motion.a 
              whileHover={{ scale: 1.05, x: 2 }}
              whileTap={{ scale: 0.95 }}
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-outline text-xs flex items-center gap-1.5"
            >
              <ExternalLink size={14} /> Live Demo
            </motion.a>
          )}
        </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section id="projects" className="relative py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <SectionTag>Portfolio</SectionTag>
          <h2 className="font-display font-extrabold text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-[#9aa0b8] text-base max-w-xl leading-relaxed">
            Hands-on projects combining machine learning, full-stack development, and real-world problem solving.
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
