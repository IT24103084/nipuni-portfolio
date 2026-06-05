// Certifications.jsx
// Each card shows the certificate image with a click-to-enlarge lightbox.
// Place your images in /public/certificates/ (jpg, png, webp all work).

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { CheckCircle, ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionTag from '../components/SectionTag'
import { certifications } from '../data'

// ── Placeholder shown when image hasn't been added yet ──────────────────────
function ImagePlaceholder({ icon, title, issuer }) {
  const isCompTIA = issuer === 'CompTIA'
  
  return (
    <div 
      className="w-full h-full flex flex-col items-center justify-center gap-4 select-none relative overflow-hidden"
      style={{ 
        background: isCompTIA 
          ? 'linear-gradient(135deg, rgba(79,195,247,0.1), rgba(156,39,176,0.1))'
          : 'rgba(124,106,247,0.05)'
      }}
    >
      {/* Decorative elements for CompTIA */}
      {isCompTIA && (
        <>
          <div className="absolute top-4 right-4 w-12 h-12 rounded-full border-2 border-[#4fc3f7]/30" />
          <div className="absolute bottom-4 left-4 w-8 h-8 rounded border-2 border-[#9c27b0]/30" />
        </>
      )}
      
      <div className="relative z-10 text-center">
        <span className="text-5xl mb-3 block">{icon}</span>
        <span className="text-sm font-semibold text-[#e8eaf6] mb-2 block">{title}</span>
        <span className="text-xs text-[#616880]">{issuer}</span>
      </div>
      
      {!isCompTIA && (
        <span className="text-[10px] text-[#3a3f55]">Add image to /public/certificates/</span>
      )}
    </div>
  )
}

// ── Single certificate card ──────────────────────────────────────────────────
function CertCard({ cert, index, onOpen }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.1 }}
      className="glass glass-hover overflow-hidden flex flex-col group cursor-pointer"
      onClick={() => onOpen(index)}
    >
      {/* ── Certificate image area ── */}
      <div className="relative overflow-hidden bg-[#0b0f1a]" style={{ aspectRatio: '16/10' }}>
        {cert.image && !imgError ? (
          <>
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImgError(true)}
            />
            {/* Hover zoom overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 backdrop-blur-sm rounded-full p-3">
                <ZoomIn size={20} className="text-white" />
              </div>
            </div>
          </>
        ) : (
          <ImagePlaceholder icon={cert.icon} title={cert.title} issuer={cert.issuer} />
        )}
      </div>

      {/* ── Card body ── */}
      <div className="p-6 flex flex-col flex-1">
        <div className="text-[11px] text-[#7c6af7] font-semibold uppercase tracking-widest mb-2">
          {cert.issuer}
        </div>
        <h3 className="font-display font-bold text-[0.92rem] leading-snug mb-2 flex-1">
          {cert.title}
        </h3>
        <p className="text-xs text-[#616880] leading-relaxed mb-4">{cert.desc}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-green-400 font-medium">
            <CheckCircle size={13} /> Completed
          </div>
          <span className="text-xs text-[#3a3f55] group-hover:text-[#7c6af7] transition-colors">
            Click to view ↗
          </span>
        </div>
      </div>
    </motion.div>
  )
}

// ── Lightbox ─────────────────────────────────────────────────────────────────
function Lightbox({ certs, activeIndex, onClose, onPrev, onNext }) {
  const cert = certs[activeIndex]
  const [imgError, setImgError] = useState(false)

  // Reset error state when switching certificate
  const handlePrev = () => { setImgError(false); onPrev() }
  const handleNext = () => { setImgError(false); onNext() }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(16px)' }}
      onClick={onClose}
    >
      {/* Dialog — stop click propagation so clicking inside doesn't close */}
      <motion.div
        initial={{ scale: 0.88, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-3xl glass overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
          aria-label="Close"
        >
          <X size={18} className="text-white" />
        </button>

        {/* Image */}
        <div className="bg-[#0a0d18] flex items-center justify-center" style={{ minHeight: 300 }}>
          {cert.image && !imgError ? (
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full object-contain max-h-[65vh]"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex flex-col items-center gap-3 py-20 text-[#616880]">
              <span className="text-6xl">{cert.icon}</span>
              <p className="text-sm font-semibold">{cert.issuer}</p>
              {cert.issuer === 'CompTIA' ? (
                <p className="text-xs text-[#616880]">Default Certificate View</p>
              ) : (
                <p className="text-xs text-[#3a3f55]">Add your file to /public/certificates/</p>
              )}
            </div>
          )}
        </div>

        {/* Info footer */}
        <div className="p-6 flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="text-xs text-[#7c6af7] font-semibold uppercase tracking-widest mb-1">
              {cert.issuer}
            </div>
            <h3 className="font-display font-bold text-base leading-snug mb-1">{cert.title}</h3>
            <p className="text-xs text-[#9aa0b8] leading-relaxed">{cert.desc}</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-green-400 font-medium flex-shrink-0 mt-1">
            <CheckCircle size={13} /> Completed
          </div>
        </div>

        {/* Prev / Next navigation */}
        {certs.length > 1 && (
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-3">
            <button
              onClick={handlePrev}
              className="pointer-events-auto bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors disabled:opacity-30"
              disabled={activeIndex === 0}
              aria-label="Previous"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>
            <button
              onClick={handleNext}
              className="pointer-events-auto bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors disabled:opacity-30"
              disabled={activeIndex === certs.length - 1}
              aria-label="Next"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>
        )}

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 pb-4">
          {certs.map((_, i) => (
            <button
              key={i}
              onClick={() => { setImgError(false); onNext(i) }}
              className="w-1.5 h-1.5 rounded-full transition-all duration-300"
              style={{ background: i === activeIndex ? '#7c6af7' : 'rgba(255,255,255,0.15)' }}
              aria-label={`Go to certificate ${i + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

// ── Main exported section ────────────────────────────────────────────────────
export default function Certifications() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  const [lightboxIndex, setLightboxIndex] = useState(null)

  const openLightbox = (i) => setLightboxIndex(i)
  const closeLightbox = () => setLightboxIndex(null)
  const prevCert = () => setLightboxIndex(i => Math.max(0, i - 1))
  // nextCert also accepts a direct index (used by dot indicators)
  const nextCert = (indexOrEvent) => {
    if (typeof indexOrEvent === 'number') {
      setLightboxIndex(indexOrEvent)
    } else {
      setLightboxIndex(i => Math.min(certifications.length - 1, i + 1))
    }
  }

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (lightboxIndex === null) return
    if (e.key === 'ArrowLeft') prevCert()
    if (e.key === 'ArrowRight') nextCert()
    if (e.key === 'Escape') closeLightbox()
  }

  return (
    <section
      id="certifications"
      className="relative py-32"
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(176,110,243,0.07),transparent)] blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <SectionTag>Credentials</SectionTag>
          <h2 className="font-display font-extrabold text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] mb-4">
            Certificates &amp; <span className="text-gradient">Courses</span>
          </h2>
          <p className="text-[#9aa0b8] text-base max-w-xl leading-relaxed">
            Completed certifications demonstrating commitment to continuous learning.
            Click any card to view the full certificate.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((c, i) => (
            <CertCard key={c.title + i} cert={c} index={i} onOpen={openLightbox} />
          ))}

          {/* "More coming" filler */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="glass flex flex-col items-center justify-center text-center gap-3 py-10 px-6 min-h-[200px]"
          >
            <span className="text-3xl">🎯</span>
            <p className="text-sm text-[#9aa0b8] italic">More certifications in progress…</p>
            <p className="text-xs text-[#616880]">Always learning · Always growing</p>
          </motion.div>
        </div>


      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            certs={certifications}
            activeIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevCert}
            onNext={nextCert}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
