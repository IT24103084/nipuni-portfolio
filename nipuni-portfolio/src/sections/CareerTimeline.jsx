// CareerTimeline.jsx — Career timeline with animated milestones

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionTag from '../components/SectionTag'
import { careerTimeline } from '../data'

export default function CareerTimeline() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section id="career-timeline" className="relative py-32">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/3 w-[600px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(79,195,247,0.07),transparent)] blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionTag>Journey So Far</SectionTag>
          <h2 className="font-display font-extrabold text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] mb-4">
            Career <span className="text-gradient">Timeline</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={timelineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Vertical line */}
          <div className="absolute left-[20px] top-0 bottom-0 w-1 bg-gradient-to-b from-[rgba(124,106,247,0.3)] via-[rgba(79,195,247,0.3)] to-transparent" />

          {/* Timeline items */}
          {careerTimeline.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative mb-8 pl-20"
            >
              {/* Circle marker */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: idx * 0.15, duration: 0.4 }}
                className="absolute left-0 top-1 w-11 h-11 rounded-full bg-gradient-to-br from-[#7c6af7] to-[#4fc3f7] flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-[rgba(124,106,247,0.3)] dark:text-white"
              >
                {idx + 1}
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.15 + 0.1, duration: 0.5 }}
                className="glass p-6 group hover:border-[rgba(124,106,247,0.4)] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-[#e8eaf6]">
                    {item.title}
                  </h3>
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[linear-gradient(135deg,rgba(124,106,247,0.15),rgba(79,195,247,0.15))] text-[#4fc3f7] border border-[rgba(79,195,247,0.2)]">
                    {item.milestone}
                  </span>
                </div>
                <p className="text-[#7c6af7] text-sm font-semibold mb-3">{item.year}</p>
                <p className="text-slate-700 dark:text-[#9aa0b8] leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
