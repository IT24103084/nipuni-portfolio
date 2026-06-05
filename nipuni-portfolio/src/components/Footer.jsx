// Footer.jsx — Simple footer with copyright and nav links.

import { Github, Linkedin } from 'lucide-react'
import { personalInfo } from '../data'

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 flex-wrap">
        <p className="text-xs text-[#616880]">
          © 2026 Nipuni Karunanayake · Built with 💜 · All rights reserved
        </p>

        <div className="flex items-center gap-6">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className="text-xs text-[#616880] hover:text-[#7c6af7] transition-colors">
              {l.label}
            </a>
          ))}
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
            className="text-[#616880] hover:text-[#7c6af7] transition-colors">
            <Github size={16} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
            className="text-[#616880] hover:text-[#7c6af7] transition-colors">
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
