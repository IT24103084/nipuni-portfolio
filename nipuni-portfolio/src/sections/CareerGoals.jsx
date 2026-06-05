// CareerGoals.jsx — Career vision and milestones with smooth animations

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionTag from '../components/SectionTag'
import { careerGoals } from '../data'

export default function CareerGoals() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section id="career-goals" className="relative py-32">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-0 w-[600px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(176,110,243,0.06),transparent)] blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(79,195,247,0.05),transparent)] blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionTag>Professional Direction</SectionTag>
          <h2 className="font-display font-extrabold text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] mb-4">
            Career <span className="text-gradient">Goals</span>
          </h2>
          <p className="text-[#9aa0b8] text-base max-w-xl leading-relaxed">
            A practical roadmap focused on internship readiness and steady technical growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10">
          {/* Vision Statement */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="glass p-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[linear-gradient(135deg,rgba(124,106,247,0.2),rgba(176,110,243,0.2))] flex items-center justify-center flex-shrink-0 border border-[rgba(124,106,247,0.2)]">
                <svg className="w-6 h-6 text-[#7c6af7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg mb-1">My Vision</h3>
                <p className="text-xs text-[#616880] uppercase tracking-widest">Professional Path</p>
              </div>
            </div>
            <p className="text-[#e8eaf6] leading-relaxed mb-6 text-sm">
              {careerGoals.vision}
            </p>
            <div className="pt-6 border-t border-[rgba(255,255,255,0.1)]">
              <p className="text-[11px] text-[#616880] uppercase tracking-widest font-medium mb-4">Focus Areas</p>
              <div className="flex flex-wrap gap-2">
                {careerGoals.focusAreas.map((area, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-[rgba(124,106,247,0.1)] text-[#7c6af7] border border-[rgba(124,106,247,0.2)]"
                  >
                    {area}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Milestones */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {careerGoals.milestones.map((milestone, i) => (
              <motion.div
                key={milestone.id}
                variants={itemVariants}
                className="glass p-6 hover:border-[rgba(124,106,247,0.4)] transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[linear-gradient(135deg,rgba(124,106,247,0.15),rgba(79,195,247,0.15))] flex items-center justify-center flex-shrink-0 border border-[rgba(124,106,247,0.2)] group-hover:border-[rgba(124,106,247,0.4)] transition-colors">
                    <span className="text-lg">{milestone.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-display font-bold text-base text-[#e8eaf6]">
                        {milestone.title}
                      </h4>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${
                        milestone.status === 'Ongoing' ? 'bg-[rgba(76,175,80,0.2)] text-[#4caf50]' :
                        milestone.status === 'In Progress' ? 'bg-[rgba(255,152,0,0.2)] text-[#ffa500]' :
                        milestone.status === 'Planned' ? 'bg-[rgba(33,150,243,0.2)] text-[#4fc3f7]' :
                        'bg-[rgba(156,39,176,0.2)] text-[#b06ef3]'
                      }`}>
                        {milestone.status}
                      </span>
                    </div>
                    <p className="text-sm text-[#9aa0b8] leading-relaxed">
                      {milestone.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
