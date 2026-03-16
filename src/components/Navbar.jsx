import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'
import { FaWhatsapp } from 'react-icons/fa'


const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/courses', label: 'Courses' },
  { to: '/results', label: 'Results' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => setOpen(false), [location])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner container">
        <Link to="/" className="nav-logo">
          <img src="/learning-point-website/photos/logo.jpeg" alt="Learning Point" style={{ height: '40px', width: '40px', borderRadius: '8px', objectFit: 'cover' }} loading='lazy' />
          <div>
            <div className="logo-name">Learning Point</div>
            <div className="logo-sub">IIT JEE · Hyderabad</div>
          </div>
        </Link>

        <ul className="nav-links">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} className={({ isActive }) => isActive ? 'active' : ''}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <a href="https://wa.me/918247725301" className="nav-cta" target="_blank" rel="noreferrer">
          <FaWhatsapp size={16} /> Enquire Now
        </a>

        <button className={`hamburger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          {navLinks.map(({ to, label }) => (
            <NavLink key={to} to={to} className={({ isActive }) => isActive ? 'active' : ''}>
              {label}
            </NavLink>
          ))}
          <a href="https://wa.me/918247725301" className="mobile-cta" target="_blank" rel="noreferrer">
            💬 Enquire Now
          </a>
        </div>
      )}
    </nav>
  )
}
