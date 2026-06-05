// Navbar.jsx
// Responsive navigation with scroll-based background and mobile menu.

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certificates' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'py-3 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/5'
            : 'py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="font-display font-extrabold text-xl text-gradient">
            NK.
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-1 list-none">
            {links.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-slate-600 dark:text-[#9aa0b8] hover:text-slate-900 dark:hover:text-white px-3 py-2 rounded-full transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side: Theme toggle + Mobile hamburger */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              className="md:hidden p-2 text-slate-600 dark:text-[#9aa0b8] hover:text-slate-900 dark:hover:text-white transition"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[99] bg-white dark:bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            <button
              className="absolute top-6 right-6 text-slate-600 dark:text-[#9aa0b8] hover:text-slate-900 dark:hover:text-white transition"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X size={26} />
            </button>
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="font-display text-3xl font-bold text-slate-600 dark:text-[#9aa0b8] hover:text-[#7c6af7] transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
