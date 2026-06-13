// Education.jsx — Timeline-style education section.

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionTag from '../components/SectionTag'
import { education, careerHighlights } from '../data'

function EduItem({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 28, scale: 0.95 }}
      animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: index * 0.12 }}
      whileHover={{ x: 8, transition: { duration: 0.3 } }}
      className="glass glass-hover p-8 mb-5 relative group overflow-hidden"
    >
      {/* Animated background accent on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div 
          className="absolute -inset-8 opacity-20 blur-2xl"
          style={{ background: `radial-gradient(circle, ${item.accent}, transparent)` }}
        />
      </div>

      {/* Timeline dot with animation */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3 }}
        className="absolute -left-[38px] top-9 w-3 h-3 rounded-full shadow-[0_0_12px_currentColor]"
        style={{ background: item.accent, color: item.accent }}
      />

      <div className="relative z-10">
        <motion.div 
          initial={{ opacity: 0.7 }}
          whileHover={{ opacity: 1 }}
          className="text-xs font-semibold uppercase tracking-widest mb-2" 
          style={{ color: item.accent }}
        >
          {item.period}
        </motion.div>
        <h3 className="font-display font-bold text-[1.08rem] mb-1">{item.degree}</h3>
        <p className="text-sm text-slate-600 dark:text-[#9aa0b8] mb-3">{item.school}</p>
        <p className="text-[0.84rem] text-[#616880] leading-relaxed mb-4">{item.desc}</p>
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border"
          style={{ color: item.accent, borderColor: item.accent + '33', background: item.accent + '11' }}
        >
          {item.badge}
        </motion.span>
      </div>
    </motion.div>
  )
}

function CareerHighlightCard({ highlight, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      whileHover={{ y: -6, boxShadow: '0 10px 40px rgba(124,106,247,0.15)' }}
      className="glass glass-hover p-6 relative overflow-hidden group rounded-lg"
    >
      {/* Top accent bar */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7c6af7] to-[#4fc3f7]"
        style={{ originX: 0 }}
      />

      <div className="relative z-10">
        {/* Icon circle */}
        <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 text-lg"
          style={{ background: 'rgba(124,106,247,0.1)', border: '1.5px solid rgba(124,106,247,0.3)' }}>
          {['🎯', '⚙️', '🚀', '🤝'][index % 4]}
        </div>

        <h4 className="font-display font-bold text-sm mb-2 text-slate-900 dark:text-[#e8eaf6] group-hover:text-gradient transition-all">
          {highlight.title}
        </h4>
        <p className="text-xs text-slate-600 dark:text-[#9aa0b8] leading-relaxed group-hover:text-[#b0b8d0] transition-colors">
          {highlight.description}
        </p>
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute -inset-8 opacity-20 blur-xl"
          style={{ background: 'radial-gradient(circle, rgba(124,106,247,0.3), transparent)' }} />
      </div>
    </motion.div>
  )
}

export default function Education() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section id="education" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionTag>Academic Journey</SectionTag>
          <h2 className="font-display font-extrabold text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] mb-4">
            Education &amp;<br />
            <span className="text-gradient">Background</span>
          </h2>
          <p className="text-slate-700 dark:text-[#9aa0b8] text-base leading-relaxed max-w-md">
            Building a strong academic foundation in Data Science and Information Technology at SLIIT.
          </p>
        </motion.div>

        {/* Two-column layout: Career Highlights (left) + Timeline (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left: Career Highlights - Single Column */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {careerHighlights.map((highlight, i) => (
              <CareerHighlightCard key={highlight.title} highlight={highlight} index={i} />
            ))}
          </motion.div>

          {/* Right: Education Timeline */}
          <div className="relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#7c6af7] via-[#b06ef3] to-transparent" />

            {education.map((item, i) => (
              <EduItem key={item.degree} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
