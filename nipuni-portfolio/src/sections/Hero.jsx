// Hero.jsx — Full-screen hero with 3D sphere and animated intro text.

import { motion } from 'framer-motion'
import { Github, Linkedin, ChevronDown, MessageCircle, BookOpen } from 'lucide-react'
import NeuralSphere from '../components/NeuralSphere'
import { personalInfo } from '../data'

// Staggered container variant
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      {/* Ambient orbs */}
      <div className="absolute top-[-120px] right-[-200px] w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(124,106,247,0.14),transparent)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-[-100px] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(176,110,243,0.09),transparent)] blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center">

          {/* ── Left: Text content ── */}
          <motion.div variants={container} initial="hidden" animate="show">

            {/* Available badge */}
            <motion.div variants={item} className="inline-flex items-center gap-2 text-xs text-slate-600 dark:text-[#9aa0b8] bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-4 py-2 rounded-full mb-7 font-medium">
              <span className="w-2 h-2 bg-green-400 rounded-full shadow-[0_0_8px_#4ade80]" style={{ animation: 'blink 2s infinite' }} />
              Open to Internship Opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={item}
              className="font-display font-bold leading-[1.05] tracking-tight mb-4 text-gradient"
              style={{ fontSize: 'clamp(2.6rem,5vw,4.4rem)' }}
            >
              {personalInfo.name.split(' ')[0]}<br />
              {personalInfo.name.split(' ')[1]}
            </motion.h1>

            {/* Title */}
            <motion.p variants={item} className="text-base text-slate-600 dark:text-[#9aa0b8] mb-5 leading-relaxed">
              <strong className="text-[#7c6af7] font-medium">Data Science Undergraduate</strong>
              &nbsp;· SLIIT, Sri Lanka<br />
              Aspiring Data Scientist &amp; AI/ML Enthusiast
            </motion.p>

            {/* Description */}
            <motion.p variants={item} className="text-[0.95rem] text-slate-600 dark:text-[#9aa0b8] leading-[1.85] mb-10 max-w-[480px]">
              A motivated second-year undergraduate building expertise in machine learning,
              data analysis, and intelligent systems — driven by curiosity and a passion
              for turning data into insight.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-3 mb-8">
              <a href="#projects" className="btn-primary">
                <BookOpen size={16} /> View Projects
              </a>
              <motion.a
                href="/NIPUNI_KARUNANAYAKE_CV.pdf"
                download="NIPUNI_KARUNANAYAKE_CV.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV
              </motion.a>
              <a href="#contact" className="btn-outline">
                <MessageCircle size={16} /> Contact Me
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <Github size={16} /> GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <Linkedin size={16} /> LinkedIn
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={item} className="flex gap-10">
              {[
                { num: '4+', label: 'Projects' },
                { num: '5+', label: 'Certificates' },
                { num: '2nd', label: 'Year UG' },
              ].map(s => (
                <div key={s.label}>
                  <div className="font-display font-extrabold text-[1.8rem] leading-none text-gradient mb-1">{s.num}</div>
                  <div className="text-xs text-slate-500 dark:text-[#616880] uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: 3D Neural Sphere ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative flex items-center justify-center mt-8 lg:mt-0"
          >
            {/* Canvas wrapper */}
            <div className="w-full max-w-[500px] h-[440px] md:h-[480px] rounded-2xl overflow-hidden"
              style={{ background: 'rgba(15,20,40,0.6)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <NeuralSphere />
            </div>

            {/* Floating info cards */}
            <motion.div
              className="glass hidden md:block absolute top-[8%] right-[-16px] px-4 py-3 text-xs"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="text-slate-500 dark:text-[#616880] text-[10px] uppercase tracking-wider mb-1">Model Accuracy</div>
              <div className="text-[#7c6af7] font-semibold">94.2%</div>
            </motion.div>

            <motion.div
              className="glass hidden md:block absolute bottom-[18%] left-[-16px] px-4 py-3 text-xs"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            >
              <div className="text-slate-500 dark:text-[#616880] text-[10px] uppercase tracking-wider mb-1">Stack</div>
              <div className="text-[#7c6af7] font-semibold">Python · ML · AI</div>
            </motion.div>

            <motion.div
              className="glass hidden md:block absolute top-[58%] right-[-10px] px-4 py-3 text-xs"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            >
              <div className="text-slate-500 dark:text-[#616880] text-[10px] uppercase tracking-wider mb-1">Status</div>
              <div className="text-green-400 font-semibold">● Available</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 dark:text-[#616880] hover:text-[#7c6af7] transition-colors"
        style={{ animation: 'float 3s ease-in-out infinite' }}
      >
        <ChevronDown size={22} />
      </motion.a>
    </section>
  )
}
