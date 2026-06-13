// LearningPath.jsx — Learning statistics and platforms with animations

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionTag from '../components/SectionTag'
import { learningPath } from '../data'

export default function LearningPath() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const platformVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section id="learning-path" className="relative py-32">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-1/3 left-0 w-[500px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(176,110,243,0.06),transparent)] blur-3xl" />
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
          <SectionTag>Continuous Development</SectionTag>
          <h2 className="font-display font-extrabold text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] mb-4">
            Learning <span className="text-gradient">Path</span>
          </h2>
          <p className="text-slate-700 dark:text-[#9aa0b8] text-base max-w-xl leading-relaxed">
            Continuously upskilling through industry-recognized certifications and hands-on learning platforms
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { label: 'Certifications', value: learningPath.stats.certifications, icon: '📜' },
            { label: 'In Progress', value: learningPath.stats.inProgress, icon: '⚡' },
            { label: 'Hours Learning', value: learningPath.stats.hoursLearning, icon: '⏱️' },
            { label: 'Platforms Used', value: learningPath.stats.platformsUsed, icon: '🌐' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={statVariants}
              className="glass p-6 text-center group hover:border-[rgba(124,106,247,0.3)] transition-colors"
            >
              <div className="text-3xl mb-3 inline-block">{stat.icon}</div>
              <div className="font-display font-bold text-2xl bg-gradient-to-r from-[#7c6af7] to-[#4fc3f7] bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <p className="text-[11px] text-slate-600 dark:text-[#616880] uppercase tracking-widest font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8">
          {/* Learning Platforms */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="glass p-8"
          >
            <h3 className="font-display font-bold text-lg mb-6 text-slate-900 dark:text-[#e8eaf6]">
              Learning Platforms
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {learningPath.platforms.map((platform, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass p-4 text-center text-sm font-medium text-slate-900 dark:text-[#e8eaf6] hover:border-[rgba(124,106,247,0.3)] transition-colors cursor-default"
                >
                  {platform}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Current Learning */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-[#e8eaf6]">
              Currently Learning
            </h3>
            {learningPath.currentLearning.map((learning, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass p-5 group hover:border-[rgba(124,106,247,0.3)] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-display font-bold text-base text-slate-900 dark:text-[#e8eaf6]">
                      {learning.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-[#616880] mt-1">{learning.platform}</p>
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full flex-shrink-0 ${
                    learning.status === 'In Progress' 
                      ? 'bg-[rgba(255,152,0,0.2)] text-[#ffa500]' 
                      : 'bg-[rgba(76,175,80,0.2)] text-[#4caf50]'
                  }`}>
                    {learning.status}
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="relative h-2 bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden border border-[rgba(124,106,247,0.1)]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${learning.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-[#7c6af7] to-[#4fc3f7]"
                  />
                </div>
                <p className="text-xs text-slate-700 dark:text-[#9aa0b8] mt-2">{learning.progress}% completed</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

