import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import './Home.css'
import { FaWhatsapp } from 'react-icons/fa'

const chips = ['Class X', 'Intermediate', 'IIT JEE', 'NEET', 'EAMCET', 'MPC', 'BITSAT']

function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef()
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0
        const step = target / 60
        const timer = setInterval(() => {
          start += step
          if (start >= target) { setCount(target); clearInterval(timer) }
          else setCount(Math.floor(start))
        }, 20)
        obs.disconnect()
      }
    })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])
  return <span ref={ref}>{count}{suffix}</span>
}

const reviews = [
  { av: 'AM', name: 'Avinash Manyam', date: '4 years ago · Local Guide', text: 'Must-join for IIT/JEE. Truly commendable and experienced faculty — lecturers really get along with the students!' },
  { av: 'RS', name: 'Ramadevi Saagi', date: '2 days ago · New', text: 'Thank you for helping me crack EAMCET 2025! Maths sir\'s shortcuts made my exam so much easier.' },
  { av: 'TG', name: 'Trilok Gangarapu', date: '14 hours ago · New', text: 'Best institute for competitive exams. MAINS and EAPCET coaching facilities are top notch. Just go for it!' },
  { av: 'PC', name: 'Prajeeth C', date: '3 years ago', text: 'Amazing faculty! Can understand concepts easily. Love the vibe of the place. Worth every penny!' },
  { av: 'RM', name: 'Ram Madhav Madadi', date: '2 years ago', text: 'Good infrastructural facilities with experienced staff. Highly recommend it.' },
  { av: 'UK', name: 'Uday Kumar', date: '2 years ago', text: 'Best place for EAMCET crash course. Unique teaching style that makes concepts simple!' },
]

const shorts = [
  { id: 'P4YXypMxJUY', title: 'EAMCET Maths Tips & Tricks' },
  { id: 'WIxioxqBLDE', title: 'EAMCET - Short tricks' },
  { id: 'KpEqJZzET9w', title: 'Circles-shortcut(EAMCET)' },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-left">
            <div className="badge"><span className="badge-dot" /> Admissions Open 2026</div>
            <h1>Learning Point For <span>IIT JEE</span> Coaching</h1>
            <p className="tagline">"A learning curve is essential to growth"</p>
            <p className="hero-sub">Expert coaching for IIT JEE, NEET, EAMCET & Intermediate. Concept-based learning with 20+ years experienced faculty in Kavadiguda, Hyderabad.</p>
            <div className="hero-btns">
              <a href="https://wa.me/918247725301" className="btn-white" target="_blank" rel="noreferrer">
                <FaWhatsapp size={16} /> WhatsApp Us
              </a>
              <a href="tel:8247725301" className="btn-outline-white">📞 Call Now</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-card">
              <div className="hcard-tag">Courses We Offer</div>
              <div className="chips">{chips.map(c => <span className="chip" key={c}>{c}</span>)}</div>
              <div className="hcard-divider" />
              <div className="hcard-rating">
                <span className="stars">★★★★★</span>
                <span className="rnum">5.0</span>
                <span className="rsub">· 41 Google Reviews</span>
              </div>
              <div className="hcard-info"><span className="dot" />Morning: 6–8:30 AM &nbsp;|&nbsp; Evening: 6–8:30 PM</div>
              <div className="hcard-info"><span className="dot" />Kavadiguda, Gandhinagar, Hyderabad</div>
            </div>
          </div>
        </div>
      </section>

      {/* STRIP */}
      <div className="strip">
        <div className="strip-inner">
          {['🎓 IIT JEE Coaching', '📚 NEET & EAMCET', '🌅 Morning & Evening Batches', '🏆 5.0 Google Rating · 41 Reviews', '☎ 82477 25301'].map((item, i) => (
            <span className="strip-item" key={i}>{item}</span>
          ))}
        </div>
      </div>

      {/* STATS */}
      <section className="sec sec-white">
        <div className="container stats-grid">
          {[['41+', 'Google Reviews'], [`20+`, 'Years Experience'], ['5.0★', 'Google Rating'], ['25', 'Max Batch Size']].map(([n, l]) => (
            <div className="stat-box" key={l}>
              <div className="stat-num">{n}</div>
              <div className="stat-lbl">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="sec sec-cream">
        <div className="container about-preview">
          <div className="about-text">
            <span className="sec-tag">About Us</span>
            <h2 className="sec-title">Hyderabad's Most <span>Trusted</span> IIT JEE Coaching</h2>
            <p>Learning Point is Hyderabad's trusted coaching center for IIT JEE, NEET, and EAMCET. Our concept-based learning approach has helped hundreds of students crack competitive exams.</p>
            <p>Led by <strong>Mr. Vamshi Rao</strong> (MSc, BEd, PhD — Mathematics) with 20+ years of experience, we provide personalized attention with a maximum of 25 students per batch.</p>
            <div className="feat-grid">
              {[['👨‍🏫', 'Expert Faculty'], ['💡', 'Unique Tricks'], ['🏗️', 'Good Infrastructure'], ['🌅', 'Flexible Batches'], ['❤️', 'Individual Attention'], ['🌟', '5.0 Star Rated']].map(([ico, lbl]) => (
                <div className="feat-pill" key={lbl}><span className="feat-ico">{ico}</span>{lbl}</div>
              ))}
            </div>
            <Link to="/about" className="btn-primary" style={{ marginTop: '24px', display: 'inline-flex' }}>Know More →</Link>
          </div>
          <div className="about-panel">
            <div className="quote-mark">"</div>
            <p className="quote-text">One can experience concept based learning here. Good infrastructural facilities with experienced staff and a conducive environment.</p>
            <div className="panel-stats">
              {[['5.0★', 'Rating'], ['41+', 'Reviews'], ['2', 'Batches']].map(([n, l]) => (
                <div className="panel-stat" key={l}><div className="pnum">{n}</div><div className="plbl">{l}</div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COURSES PREVIEW */}
      <section className="sec sec-white">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span className="sec-tag">Our Programs</span>
            <h2 className="sec-title">Courses We <span>Offer</span></h2>
            <p className="sec-sub" style={{ margin: '0 auto' }}>From Class X to IIT JEE — comprehensive coaching for every student.</p>
          </div>
          <div className="courses-preview-grid">
            {[
              { ico: '📖', title: 'Class X', desc: 'Strong board exam preparation with all subjects covered by dedicated teachers.', tags: ['Maths', 'Science', 'English', 'Social'] },
              { ico: '🎯', title: 'Intermediate (MPC)', desc: 'Expert coaching for Maths, Physics & Chemistry with focus on concept clarity.', tags: ['Physics', 'Chemistry', 'Maths'] },
              { ico: '🔬', title: 'IIT JEE & NEET & EAMCET', desc: 'Specialized coaching with unique tricks & shortcuts. Students cracking IIT JEE, NEET & EAMCET 2025!', tags: ['IIT JEE', 'NEET', 'EAMCET'] },
            ].map(({ ico, title, desc, tags }, i) => (
              <div className="card course-card" key={i}>
                <div className="course-top-bar" />
                <div className="course-ico">{ico}</div>
                <h3 className="course-title">{title}</h3>
                <p className="course-desc">{desc}</p>
                <div className="course-tags">{tags.map(t => <span className="ctag" key={t}>{t}</span>)}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link to="/courses" className="btn-outline">View All Courses →</Link>
          </div>
        </div>
      </section>

      {/* RESULTS PREVIEW */}
      <section className="sec results-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="sec-tag">Our Achievements</span>
            <h2 className="sec-title" style={{ color: 'white' }}>Student <span style={{ color: '#BAE6FD' }}>Results</span></h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', maxWidth: '500px', margin: '0 auto' }}>Our students consistently achieve top ranks in EAMCET, JEE and board exams.</p>
          </div>
          <div className="results-grid">
            {[
              { name: 'Rachana', achievement: '960/1000', exam: 'Board Exams', icon: '🏆' },
              { name: 'Meher Sai', achievement: 'Rank 733', exam: 'TS EAMCET', icon: '🥇' },
              { name: 'Siddarth', achievement: 'Rank 992', exam: 'TS EAMCET', icon: '🥈' },
              { name: 'Learning Point Student', achievement: '99.2%ile', exam: 'JEE Mains', icon: '🎯' },
            ].map(({ name, achievement, exam, icon }) => (
              <div className="result-card" key={name}>
                <div className="result-icon">{icon}</div>
                <div className="result-achievement">{achievement}</div>
                <div className="result-exam">{exam}</div>
                <div className="result-name">{name}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link to="/results" className="btn-white">View All Results →</Link>
          </div>
        </div>
      </section>

      {/* YOUTUBE SHORTS */}
      <section className="sec sec-cream">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span className="sec-tag">YouTube Shorts</span>
            <h2 className="sec-title">Learn From Our <span>Expert Faculty</span></h2>
            <p className="sec-sub" style={{ margin: '0 auto' }}>Quick tips, tricks and concepts for IIT JEE, NEET & EAMCET from Mr. Vamshi Rao.</p>
          </div>
          <div className="shorts-grid">
            {shorts.map(({ id, title }) => (
              <div className="short-card card" key={id}>
                <a href={`https://www.youtube.com/shorts/${id}`} target="_blank" rel="noreferrer" className="short-thumb">
                  <div className="short-play">▶</div>
                  <div className="short-placeholder">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#BAE6FD" strokeWidth="1.5"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></svg>
                    <span style={{ fontSize: '12px', color: '#64748B' }}>YouTube Short</span>
                  </div>
                </a>
                <div className="short-body">
                  <div className="short-title">{title}</div>
                  <a href={`https://www.youtube.com/shorts/${id}`} target="_blank" rel="noreferrer" className="short-btn">Watch on YouTube ↗</a>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '28px' }}>
            <a href="https://youtube.com/@vamshirao9962" target="_blank" rel="noreferrer" className="btn-primary">🎬 Visit Our YouTube Channel</a>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="sec sec-white">
        <div className="container">
          <div className="reviews-top">
            <div>
              <span className="sec-tag">Testimonials</span>
              <h2 className="sec-title">What Students & <span>Parents Say</span></h2>
            </div>
            <div className="rating-showcase">
              <div className="rating-big">5.0</div>
              <div><div className="stars-big">★★★★★</div><div className="rcnt">Based on 41 Google Reviews</div></div>
            </div>
          </div>
          <div className="reviews-grid">
            {reviews.map(({ av, name, date, text }) => (
              <div className="card rcard" key={name}>
                <div className="rcard-stars">★★★★★</div>
                <p className="rcard-text">"{text}"</p>
                <div className="rcard-author">
                  <div className="rcard-av">{av}</div>
                  <div><div className="rcard-name">{name}</div><div className="rcard-date">{date}</div></div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <a href="https://www.google.com/maps/place/LEARNING+POINT/@17.4189079,78.4903468,17z/data=!4m8!3m7!1s0x3bcb99e746c506fb:0x67f7f1a5d3b1217f!8m2!3d17.4189079!4d78.4903468!9m1!1b1" target="_blank" rel="noreferrer" className="btn-outline">View All 41 Reviews on Google →</a>
            {/* <a href="https://share.google/qBSzSXIgh2o7mJ8Sg" target="_blank" rel="noreferrer" className="btn-outline">View All 41 Reviews on Google →</a> */}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="container cta-inner">
          <div>
            <h2>Ready to Start Your Journey?</h2>
            <p>Join Learning Point today. Morning & Evening batches available. Limited seats per batch!</p>
          </div>
          <div className="cta-btns">
            <a href="https://wa.me/918247725301" className="btn-white" target="_blank" rel="noreferrer">
              <FaWhatsapp size={16} /> WhatsApp Us
            </a>
            <Link to="/contact" className="btn-outline-white">Enquire Now →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
