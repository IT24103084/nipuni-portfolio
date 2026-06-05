// About.jsx — About section with profile card on left and bio content on right

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { personalInfo } from '../data'

function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="about" className="relative py-32">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(124,106,247,0.08),transparent)] blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(79,195,247,0.06),transparent)] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header with badge and title */}
        <FadeUp className="mb-16">
          <motion.div
            className="inline-flex items-center gap-2 text-[#7c6af7] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-[#7c6af7]/20 bg-[#7c6af7]/5 mb-6"
          >
            <span className="w-2 h-2 bg-[#7c6af7] rounded-full" />
            About Me
          </motion.div>
          <h2 className="font-display font-extrabold text-[clamp(2rem,3.5vw,3rem)] leading-[1.1]">
            Turning data into<br />
            <span className="text-gradient">meaningful insight</span>
          </h2>
        </FadeUp>

        {/* Two-column layout: Profile Card + Bio Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left: Profile Card */}
          <FadeUp delay={0.1} className="lg:col-span-1">
            <div className="space-y-4">
              {/* Main Profile Card */}
              <motion.div 
                ref={ref}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                whileHover={{ y: -8 }}
                className="glass glass-hover p-8 rounded-lg relative overflow-hidden group flex flex-col items-center justify-center"
              >
                {/* Glow on hover */}
                <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-[radial-gradient(circle,rgba(124,106,247,0.2),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10 text-center">
                  {/* Avatar - Square with rounded corners */}
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-24 h-24 rounded-2xl flex items-center justify-center mb-6 mx-auto font-display font-extrabold text-3xl text-white"
                    style={{ background: 'linear-gradient(135deg,#7c6af7,#b06ef3)' }}
                  >
                    NK
                  </motion.div>
                  
                  {/* Name only */}
                  <h3 className="font-display font-bold text-xl">{personalInfo.name}</h3>
                </div>
              </motion.div>

              {/* Info Cards Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {/* Degree */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.25, duration: 0.6 }}
                  whileHover={{ y: -4 }}
                  className="glass glass-hover p-4 rounded-lg text-center"
                >
                  <p className="text-[#4fc3f7] text-xs uppercase tracking-wider mb-2 font-bold">Degree</p>
                  <p className="text-[#e8eaf6] font-bold text-sm">BSc (Hons) Data Science</p>
                </motion.div>

                {/* Institute */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  whileHover={{ y: -4 }}
                  className="glass glass-hover p-4 rounded-lg text-center"
                >
                  <p className="text-[#4fc3f7] text-xs uppercase tracking-wider mb-2 font-bold">Institute</p>
                  <p className="text-[#e8eaf6] font-bold text-sm">SLIIT, Sri Lanka</p>
                </motion.div>

                {/* CGPA */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.32, duration: 0.6 }}
                  whileHover={{ y: -4 }}
                  className="glass glass-hover p-4 rounded-lg text-center col-span-1"
                >
                  <p className="text-[#b06ef3] text-xs uppercase tracking-wider mb-2 font-bold">CGPA</p>
                  <p className="text-[#e8eaf6] font-bold text-sm">3.55 / 4.0</p>
                </motion.div>

                {/* Location */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.35, duration: 0.6 }}
                  whileHover={{ y: -4 }}
                  className="glass glass-hover p-4 rounded-lg text-center"
                >
                  <p className="text-[#4fc3f7] text-xs uppercase tracking-wider mb-2 font-bold">Location</p>
                  <p className="text-[#e8eaf6] font-bold text-sm">Kurunegala, Sri Lanka</p>
                </motion.div>

                {/* Focus */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  whileHover={{ y: -4 }}
                  className="glass glass-hover p-4 rounded-lg text-center"
                >
                  <p className="text-[#4fc3f7] text-xs uppercase tracking-wider mb-2 font-bold">Focus</p>
                  <p className="text-[#e8eaf6] font-bold text-sm">ML · AI · Data · Web</p>
                </motion.div>
              </div>
            </div>
          </FadeUp>

          {/* Right: Bio Content */}
          <FadeUp delay={0.15} className="lg:col-span-1 flex flex-col justify-start">
            <div className="space-y-8">
              {/* Bio paragraphs */}
              <div className="space-y-6">
                {personalInfo.bio.slice(0, 2).map((para, idx) => (
                  <motion.p 
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                    className="text-[#b0b8d0] leading-[1.85] text-base lg:text-lg"
                  >
                    {para}
                  </motion.p>
                ))}
              </div>

              {/* Currently focused on */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h3 className="text-[#e8eaf6] font-display font-bold text-base mb-4">Currently focused on</h3>
                <ul className="space-y-3">
                  {[
                    'Building machine learning and AI models for real-world problems',
                    'Developing full-stack web applications with modern technologies',
                    'Deepening expertise in data analysis and predictive modeling',
                    'Seeking internships to gain industry experience',
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.45 + i * 0.08, duration: 0.5 }}
                      className="flex items-start gap-3 text-[#9aa0b8] text-sm"
                    >
                      <span className="text-[#4fc3f7] font-bold mt-1">▸</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Email link */}
              <motion.a
                href={`mailto:${personalInfo.email}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.65, duration: 0.6 }}
                whileHover={{ color: '#e8eaf6' }}
                className="text-[#4fc3f7] text-sm font-medium hover:text-[#e8eaf6] transition-colors duration-300 inline-block border-b border-[#4fc3f7] hover:border-[#e8eaf6] pb-1 pt-4"
              >
                {personalInfo.email}
              </motion.a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
