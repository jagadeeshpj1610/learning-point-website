import { Link } from 'react-router-dom'
import './Footer.css'
import { Youtube, Mail } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-logo">
            <img src="/photos/logo.jpeg" alt="Learning Point" style={{ height: '40px', width: '40px', borderRadius: '8px', objectFit: 'cover' }} />
            <div>
              <div className="footer-logo-name">Learning Point</div>
              <div className="footer-logo-sub">IIT JEE Coaching</div>
            </div>
          </div>
          <p className="footer-desc">
            Expert coaching for IIT JEE, NEET, EAMCET & Intermediate. Concept-based learning with 15+ years experienced faculty in Kavadiguda, Hyderabad.
          </p>
          <div className="footer-social">
            <a href="https://youtube.com/@vamshirao9962" target="_blank" rel="noreferrer" className="fsoc"><Youtube size={16} /></a>
            <a href="mailto:learningpoint1729@gmail.com" className="fsoc"><Mail size={16} /></a>
            <a href="https://wa.me/918247725301" target="_blank" rel="noreferrer" className="fsoc"><FaWhatsapp size={16} /></a>
          </div>
        </div>

        <div>
          <div className="footer-col-title">Quick Links</div>
          <div className="footer-links">
            {[['/', 'Home'], ['/about', 'About Us'], ['/courses', 'Courses'], ['/results', 'Our Results'], ['/gallery', 'Gallery'], ['/contact', 'Contact']].map(([to, label]) => (
              <Link key={to} to={to}>{label}</Link>
            ))}
          </div>
        </div>

        <div>
          <div className="footer-col-title">Courses</div>
          <div className="footer-links">
            {['IIT JEE', 'EAMCET', 'NEET', 'Intermediate (MPC)', 'Class X', 'BITSAT'].map(c => (
              <Link key={c} to="/courses">{c}</Link>
            ))}
          </div>
        </div>

        <div>
          <div className="footer-col-title">Contact</div>
          <div className="footer-contact">
            <div className="fci">📞 82477 25301</div>
            <div className="fci">📞 98856 09184</div>
            <div className="fci">📞 98665 81315</div>
            <div className="fci">✉️ learningpoint1729@gmail.com</div>
            <div className="fci">📍 Plot No. 9, Solitier Residency, Kavadiguda, Hyderabad 500080</div>
            <div className="fci">🕐 Morning: 6–8:30 AM | Evening: 6–8:30 PM</div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div>© 2026 Learning Point IIT JEE. All rights reserved.</div>
      </div>
    </footer>
  )
}
