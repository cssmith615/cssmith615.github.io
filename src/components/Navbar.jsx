import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-shadow duration-200 ${
        scrolled ? 'shadow-md' : ''
      } bg-white border-b border-slate-200`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="font-heading text-lg font-semibold text-[#1E293B] tracking-tight"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          Charles Smith
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-150 pb-0.5 border-b-2 ${
                  isActive
                    ? 'text-[#1E293B] border-[#10B981]'
                    : 'text-[#475569] border-transparent hover:text-[#1E293B]'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href="#resume"
            className="ml-2 px-4 py-1.5 rounded text-sm font-semibold bg-[#1E293B] text-white hover:bg-[#10B981] transition-colors duration-150"
          >
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#1E293B] transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#1E293B] transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#1E293B] transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-6 pb-4 flex flex-col gap-3">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-sm font-medium py-1 border-l-2 pl-3 ${
                  isActive
                    ? 'text-[#1E293B] border-[#10B981]'
                    : 'text-[#475569] border-transparent'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href="#resume"
            onClick={() => setMenuOpen(false)}
            className="mt-1 px-4 py-1.5 rounded text-sm font-semibold bg-[#1E293B] text-white text-center"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  )
}
