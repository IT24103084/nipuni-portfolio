// Contact.jsx — Contact form + info cards.

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Linkedin, Github, Send, CheckCircle } from 'lucide-react'
import SectionTag from '../components/SectionTag'
import { personalInfo } from '../data'

const contactItems = [
  {
    icon: <Mail size={18} />,
    label: 'Email',
    value: 'nipunikarunanayake2@gmail.com',
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: <Linkedin size={18} />,
    label: 'LinkedIn',
    value: 'nipuni-karunanayake',
    href: personalInfo.linkedin,
  },
  {
    icon: <Github size={18} />,
    label: 'GitHub',
    value: 'github.com/IT24103084',
    href: personalInfo.github,
  },
]

export default function Contact() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3500)
  }

  return (
    <section id="contact" className="relative py-32 pb-40">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(124,106,247,0.08), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionTag>Get In Touch</SectionTag>
          <h2
            className="font-display font-extrabold leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', color: 'var(--text)' }}
          >
            Let&apos;s <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--text2)' }}>
            Whether it&apos;s an internship opportunity, collaboration, or a conversation about
            data science — I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 items-start">
          {/* Contact info cards */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="flex flex-col gap-4"
          >
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label === 'LinkedIn' || item.label === 'GitHub' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="glass glass-hover flex items-center gap-4 p-5 no-underline"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'rgba(124,106,247,0.1)',
                    border: '1px solid rgba(124,106,247,0.2)',
                    color: 'var(--accent)',
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div
                    className="text-[11px] uppercase tracking-widest mb-0.5"
                    style={{ color: 'var(--text3)' }}
                  >
                    {item.label}
                  </div>
                  <div className="text-sm font-medium break-all" style={{ color: 'var(--text)' }}>
                    {item.value}
                  </div>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="glass p-10"
          >
            <h3
              className="font-display font-bold text-xl mb-1"
              style={{ color: 'var(--text)' }}
            >
              Send a Message
            </h3>
            <p className="text-sm mb-8" style={{ color: 'var(--text2)' }}>
              I typically respond within 24 hours.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    className="block text-[11px] font-medium uppercase tracking-wider mb-2"
                    style={{ color: 'var(--text2)' }}
                  >
                    First Name
                  </label>
                  <input className="form-input" type="text" placeholder="Jane" required />
                </div>
                <div>
                  <label
                    className="block text-[11px] font-medium uppercase tracking-wider mb-2"
                    style={{ color: 'var(--text2)' }}
                  >
                    Last Name
                  </label>
                  <input className="form-input" type="text" placeholder="Doe" required />
                </div>
              </div>

              <div className="mb-4">
                <label
                  className="block text-[11px] font-medium uppercase tracking-wider mb-2"
                  style={{ color: 'var(--text2)' }}
                >
                  Email Address
                </label>
                <input className="form-input" type="email" placeholder="jane@example.com" required />
              </div>

              <div className="mb-4">
                <label
                  className="block text-[11px] font-medium uppercase tracking-wider mb-2"
                  style={{ color: 'var(--text2)' }}
                >
                  Subject
                </label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Internship opportunity / Collaboration / Other"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  className="block text-[11px] font-medium uppercase tracking-wider mb-2"
                  style={{ color: 'var(--text2)' }}
                >
                  Message
                </label>
                <textarea
                  className="form-input"
                  rows={5}
                  placeholder="Tell me what you have in mind…"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center"
                style={
                  sent
                    ? { background: 'linear-gradient(135deg,#4caf50,#388e3c)' }
                    : undefined
                }
              >
                {sent ? (
                  <>
                    <CheckCircle size={16} /> Sent! Thank you.
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* CV Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="mt-16 glass p-10 rounded-lg text-center max-w-2xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xs uppercase tracking-widest mb-4"
            style={{ color: 'var(--accent)' }}
          >
            Resume
          </motion.p>
          
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="font-display font-extrabold text-3xl mb-4"
            style={{ color: 'var(--text)' }}
          >
            Download My CV
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sm mb-8 leading-relaxed"
            style={{ color: 'var(--text2)' }}
          >
            Get a full overview of my education, technical skills, project work, and internship readiness.
          </motion.p>

          <motion.a
            href="/NIPUNI_KARUNANAYAKE_CV.pdf"
            download="NIPUNI_KARUNANAYAKE_CV.pdf"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 btn-primary px-8 py-3 rounded-full"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}