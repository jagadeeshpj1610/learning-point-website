import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'


// ─── ABOUT PAGE ────────────────────────────────────────────────────────────
import { Link } from 'react-router-dom'
import './Pages.css'

const whys = [
  ['👨‍🏫', 'Experienced Faculty', 'Highly qualified teachers who explain concepts clearly. Led by Mr. Vamshi Rao with 15+ years of experience.'],
  ['💡', 'Unique Tricks & Shortcuts', 'Special maths tricks and EAMCET shortcuts that make exams much easier — students cracking EAMCET 2025!'],
  ['🏗️', 'Good Infrastructure', 'Well-equipped classrooms in a conducive learning environment. Small batches of max 25 students.'],
  ['❤️', 'Individual Attention', 'Every student gets personal attention. We identify strengths and weaknesses and work on them individually.'],
  ['🌅', 'Flexible Batches', 'Morning batch (6–8:30 AM) and Evening batch (6–8:30 PM) to suit every student\'s schedule.'],
  ['🌟', '5.0 Star Rated', 'Rated 5.0 stars by 41+ students and parents on Google. The trust of our community is our biggest achievement.'],
  ['📚', 'Quality Study Material', 'Excellent study material covering all topics with shortcut methods and most-repeated model questions.'],
  ['🎯', 'Exam Focused Teaching', 'Discussion of most repeated model questions, portion-wise tests, and present exam trending questions.'],
]

export function About() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="sec-tag">About Us</span>
          <h1>Hyderabad's Most <span>Trusted</span><br />IIT JEE Coaching</h1>
          <p>15+ years of experience. Concept-based learning. Proven results.</p>
        </div>
      </div>

      <section className="sec sec-white">
        <div className="container about-grid">
          <div>
            <span className="sec-tag">Our Story</span>
            <h2 className="sec-title">About <span>Learning Point</span></h2>
            <p className="body-text">Learning Point is Hyderabad's trusted coaching center for IIT JEE, NEET, EAMCET, and Intermediate. Located in Kavadiguda, Gandhinagar, Hyderabad, we have been shaping academic futures with concept-based learning for over 15 years.</p>
            <p className="body-text">Our philosophy — <em>"A learning curve is essential to growth"</em> — drives everything we do. We believe every student has the potential to excel when given the right guidance, individual attention, and conceptual clarity.</p>
            <p className="body-text">With a maximum batch size of 25 students, we ensure every student receives personalized attention. Our faculty uses unique shortcut methods, discusses most-repeated model questions, and conducts regular portion-wise tests to prepare students thoroughly.</p>
          </div>
          <div className="about-side-panel">
            <div className="info-card">
              <div className="info-icon">👨‍🏫</div>
              <div className="info-title">Mr. Vamshi Rao</div>
              <div className="info-sub">MSc, BEd, PhD — Mathematics</div>
              <div className="info-desc">15+ years of experience in teaching Mathematics for IIT JEE, EAMCET and competitive exams. Known for unique shortcuts and tricks that simplify complex problems.</div>
            </div>
            <div className="quick-facts">
              {[['📍', 'Address', 'Plot No. 9, Near Samrakshana School, Solitier Residency, Kavadiguda, Hyderabad 500080'], ['📞', 'Phone', '82477 25301 | 98856 09184'], ['✉️', 'Email', 'learningpoint1729@gmail.com'], ['🕐', 'Timings', 'Morning: 6–8:30 AM | Evening: 6–8:30 PM'], ['👥', 'Batch Size', 'Max 25 students per batch'], ['🌐', 'Mode', 'Offline + Online']].map(([ico, lbl, val]) => (
                <div className="quick-fact" key={lbl}>
                  <span className="qf-ico">{ico}</span>
                  <div><div className="qf-lbl">{lbl}</div><div className="qf-val">{val}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-cream">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="sec-tag">Why Choose Us</span>
            <h2 className="sec-title">Why Students Choose <span>Learning Point</span></h2>
          </div>
          <div className="why-grid">
            {whys.map(([ico, title, desc]) => (
              <div className="why-card" key={title}>
                <div className="why-ico">{ico}</div>
                <div className="why-title">{title}</div>
                <div className="why-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container cta-strip-inner">
          <div>
            <h3>Ready to Join Learning Point?</h3>
            <p>Limited seats available. Enroll today!</p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="https://wa.me/918247725301" target="_blank" rel="noreferrer" className="btn-primary btn-outline-white">
              <FaWhatsapp size={16} /> WhatsApp
            </a>
            <Link to="/contact" className="btn-outline-white">Contact Us →</Link>
          </div>
        </div>
      </section>
    </>
  )
}

// ─── COURSES PAGE ───────────────────────────────────────────────────────────
const allCourses = [
  {
    ico: '🔬', title: 'IIT JEE', sub: 'Yearly & Crash Course', popular: true,
    desc: 'Specialized IIT JEE coaching with unique tricks, shortcut methods and focused guidance. Faculty with 15+ years experience. Most of our students achieved below 5000 ranks in EAMCET 2021 & 2022.',
    tags: ['IIT JEE Main', 'JEE Advanced', 'BITSAT'], subjects: ['Mathematics', 'Physics', 'Chemistry'],
    fee: 'Upto ₹1,80,000/year approx', batches: 'Morning 6–8:30 AM | Evening 6–8:30 PM'
  },
  {
    ico: '🎯', title: 'EAMCET', sub: 'TS & AP EAMCET', popular: false,
    desc: 'Expert EAMCET coaching with chapter-wise weightage focus, unique tricks in Maths, and shortcut methods. Students cracked EAMCET 2025 with our help!',
    tags: ['TS EAMCET', 'AP EAMCET', 'Crash Course'], subjects: ['Mathematics', 'Physics', 'Chemistry'],
    fee: 'Contact for details', batches: 'Morning 6–8:30 AM | Evening 6–8:30 PM'
  },
  {
    ico: '💊', title: 'NEET', sub: 'Medical Entrance', popular: false,
    desc: 'Comprehensive NEET preparation with concept-based teaching in Physics, Chemistry and Biology. Expert faculty for all three subjects.',
    tags: ['NEET UG', 'Medical Entrance'], subjects: ['Physics', 'Chemistry', 'Biology'],
    fee: 'Contact for details', batches: 'Morning 6–8:30 AM | Evening 6–8:30 PM'
  },
  {
    ico: '📖', title: 'Intermediate (MPC)', sub: 'Class XI & XII', popular: false,
    desc: 'Expert coaching for Intermediate MPC students. Strong focus on concept clarity and board exam preparation along with competitive exam readiness.',
    tags: ['TSBIE', 'CBSE', 'ISC'], subjects: ['Mathematics', 'Physics', 'Chemistry'],
    fee: 'Contact for details', batches: 'Morning 6–8:30 AM | Evening 6–8:30 PM'
  },
  {
    ico: '📗', title: 'Class X', sub: 'Board Exam Prep', popular: false,
    desc: 'Strong foundation for Class X students. Bridge & Regular courses to make IIT JEE journey easier starting from 10th grade itself.',
    tags: ['CBSE', 'SSC', 'ICSE'], subjects: ['Mathematics', 'Science', 'English', 'Social'],
    fee: 'Contact for details', batches: 'Morning 6–8:30 AM | Evening 6–8:30 PM'
  },
  {
    ico: '⚡', title: 'BITSAT', sub: 'Crash Course', popular: false,
    desc: 'Specialized BITSAT preparation with focused coaching on Maths, Physics, Chemistry and English proficiency.',
    tags: ['BITSAT', 'BITS Pilani'], subjects: ['Mathematics', 'Physics', 'Chemistry', 'English'],
    fee: 'Contact for details', batches: 'Morning 6–8:30 AM | Evening 6–8:30 PM'
  },
]

export function Courses() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="sec-tag">Our Programs</span>
          <h1>Courses We <span>Offer</span></h1>
          <p>Comprehensive coaching from Class X to IIT JEE Advanced</p>
        </div>
      </div>

      <section className="sec sec-white">
        <div className="container">
          <div className="all-courses-grid">
            {allCourses.map(({ ico, title, sub, popular, desc, tags, subjects, fee, batches }) => (
              <div className={`course-detail-card ${popular ? 'popular' : ''}`} key={title}>
                {popular && <div className="popular-badge">⭐ Most Popular</div>}
                <div className="cdc-top-bar" />
                <div className="cdc-header">
                  <div className="cdc-ico">{ico}</div>
                  <div>
                    <div className="cdc-title">{title}</div>
                    <div className="cdc-sub">{sub}</div>
                  </div>
                </div>
                <p className="cdc-desc">{desc}</p>
                <div className="cdc-section-title">Subjects</div>
                <div className="cdc-tags">{subjects.map(s => <span className="ctag" key={s}>{s}</span>)}</div>
                <div className="cdc-section-title" style={{ marginTop: '12px' }}>Exam Focus</div>
                <div className="cdc-tags">{tags.map(t => <span className="ctag-gold" key={t}>{t}</span>)}</div>
                <div className="cdc-info">
                  <div className="cdc-info-row"><span>💰</span><div><div className="cdc-info-lbl">Fee</div><div className="cdc-info-val">{fee}</div></div></div>
                  <div className="cdc-info-row"><span>🕐</span><div><div className="cdc-info-lbl">Batches</div><div className="cdc-info-val">{batches}</div></div></div>
                </div>
                <a href="https://wa.me/918247725301" className="btn-primary" target="_blank" rel="noreferrer">
                  <FaWhatsapp size={16} /> WhatsApp : 82477 25301
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-cream">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="sec-tag">Fee Structure</span>
          <h2 className="sec-title">Transparent <span>Pricing</span></h2>
          <p className="sec-sub" style={{ margin: '0 auto 32px' }}>Affordable fees with quality education. No hidden charges.</p>
          <div className="fee-note-box">
            <div className="fee-note-icon">💡</div>
            <div>
              <div className="fee-note-title">Contact Us for Current Fee Details</div>
              <div className="fee-note-text">IIT JEE yearly course: Upto ₹1,80,000/year approx. For crash courses and other programs, contact us directly.</div>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '16px', flexWrap: 'wrap' }}>
                <a href="https://wa.me/918247725301" className="btn-primary" target="_blank" rel="noreferrer">💬 WhatsApp: 82477 25301</a>
                <a href="tel:9885609184" className="btn-outline">📞 98856 09184</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// ─── RESULTS PAGE ───────────────────────────────────────────────────────────
const results = [
  { name: 'Rachana', achievement: '960 / 1000', exam: 'Board Exams', year: '2021', icon: '🏆', color: '#0EA5E9' },
  { name: 'Meher Sai', achievement: 'Rank 733', exam: 'TS EAMCET', year: '2022', icon: '🥇', color: '#0284C7' },
  { name: 'Siddarth (Annamaneni)', achievement: 'Rank 992', exam: 'TS EAMCET', year: '2021', icon: '🥈', color: '#0369A1' },
  { name: 'Nithish (Choti)', achievement: 'Rank 2312', exam: 'TS EAMCET', year: '2022', icon: '🎯', color: '#0EA5E9' },
  { name: 'Tejas Tadla', achievement: 'Rank 5944', exam: 'TS EAMCET', year: '2022', icon: '⭐', color: '#0284C7' },
  { name: 'Anonymous', achievement: '97.7 Percentile', exam: 'JEE Mains', year: '2021', icon: '🎓', color: '#0369A1' },
  { name: 'Sai Kiran', achievement: '98.2%', exam: 'Board Topper', year: '2021', icon: '🏅', color: '#0EA5E9' },
]

export function Results() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="sec-tag">Our Achievements</span>
          <h1>Student <span>Results</span></h1>
          <p>Our students consistently achieve top ranks in EAMCET, JEE and board exams</p>
        </div>
      </div>

      <section className="sec sec-white">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="sec-tag">EAMCET & JEE Results</span>
            <h2 className="sec-title">Our <span>Toppers</span></h2>
          </div>
          <div className="results-big-grid">
            {results.map(({ name, achievement, exam, year, icon, color }) => (
              <div className="result-big-card" key={name}>
                <div className="rbc-icon" style={{ background: color }}>{icon}</div>
                <div className="rbc-achievement">{achievement}</div>
                <div className="rbc-exam">{exam} · {year}</div>
                <div className="rbc-name">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-cream">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span className="sec-tag">Our Track Record</span>
            <h2 className="sec-title">Why Our <span>Results Speak</span></h2>
          </div>
          <div className="track-grid">
            {[['Most of our students', 'achieved below 5000 ranks in EAMCET 2021 & 2022'], ['15+ years', 'of proven teaching experience'], ['97.7 percentile', 'in JEE Mains achieved by our student'], ['960/1000', 'scored in board exams by our student Rachana']].map(([n, l]) => (
              <div className="track-card" key={n}>
                <div className="track-num">{n}</div>
                <div className="track-lbl">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-white">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="sec-tag">Student Testimonial</span>
          <h2 className="sec-title">What Our <span>Students Say</span></h2>
          <div className="testimonial-highlight">
            <div className="th-quote">"Good morning sir. I got 97.7 percentile in JEE 2nd attempt. Thank you soo much for your support sir. 🙏🙏"</div>
            <div className="th-author">— A Learning Point Student</div>
          </div>
          <div className="testimonial-highlight">
            <div className="th-quote">"Thank you for helping me to crack EAMCET 2025 especially maths sir give me so many shortcuts that made my exam so much easier."</div>
            <div className="th-author">— Ramadevi Saagi, EAMCET 2025</div>
          </div>
        </div>
      </section>
    </>
  )
}

// ─── GALLERY PAGE ────────────────────────────────────────────────────────────
// const galleryItems = [
//   { label: '📚 Active Learning Session', size: 'large', img: '/photos/unnamed (2).webp' },
//   { label: '🏫 Our Classroom', size: 'small', img: '/photos/unnamed (3).webp' },
//   { label: '👨‍🎓 Our Students', size: 'small', img: '/photos/2021-04-04.webp' },
//   { label: '🎯 Expert Teaching', size: 'small', img: '/photos/74e9619d-0510-41ae-a11d-c1133e00f6a5.jpeg' },
//   { label: '🏆 Achievements', size: 'small', img: '/photos/801947f8-ed64-4516-9123-3487c94a4556.jpeg' },
//   { label: '🏗️ Our Centre', size: 'large', img: '/photos/unnamed (1).webp' },
// ]

// export function Gallery() {
//   const [selected, setSelected] = useState(null)

//   return (
//     <>
//       <div className="page-hero">
//         <div className="container">
//           <span className="sec-tag">Gallery</span>
//           <h1>Life at <span>Learning Point</span></h1>
//           <p>A glimpse into our vibrant classrooms and learning environment</p>
//         </div>
//       </div>
//       <section className="sec sec-white">
//         <div className="container">
//           <div className="gallery-masonry">
//             {galleryItems.map((item, i) => (
//               <div
//                 className={`gallery-item ${item.size}`}
//                 key={i}
//                 style={{ animationDelay: `${i * 0.08}s` }}
//                 onClick={() => setSelected(item)}
//               >
//                 <img src={item.img} alt={item.label} />
//                 <div className="gallery-label">{item.label}</div>
//               </div>
//             ))}
//           </div>
//           <div style={{ textAlign: 'center', marginTop: '32px', color: 'var(--gray)', fontSize: '13px' }}>
//             📸 Visit our <a href="https://www.justdial.com" target="_blank" rel="noreferrer" style={{ color: 'var(--sky)' }}>Just Dial page</a> for 100+ photos.
//           </div>
//         </div>
//       </section>

//       {selected && (
//         <div className="lightbox" onClick={() => setSelected(null)}>
//           <button className="lightbox-close" onClick={() => setSelected(null)}>✕</button>
//           <img src={selected.img} alt={selected.label} />
//         </div>
//       )}
//     </>
//   )
// }

// ─── CONTACT PAGE ────────────────────────────────────────────────────────────
// export function Contact() {
//   return (
//     <>
//       <div className="page-hero">
//         <div className="container">
//           <span className="sec-tag">Contact Us</span>
//           <h1>Visit Us <span>Today!</span></h1>
//           <p>We're here to help you achieve your academic goals</p>
//         </div>
//       </div>
//       <section className="sec sec-white">
//         <div className="container contact-grid">
//           <div>
//             <h2 className="sec-title" style={{ marginBottom: '24px' }}>Get In <span>Touch</span></h2>
//             <div className="contact-items">
//               {[
//                 ['📍', 'Address', 'Plot No. 9, Near Samrakshana School, Solitier Residency, Gandhinagar, Kavadiguda, Hyderabad, Telangana 500080'],
//                 ['📞', 'Phone Numbers', '82477 25301  |  98856 09184  |  98665 81315'],
//                 ['✉️', 'Email', 'learningpoint1729@gmail.com'],
//                 ['🕐', 'Batch Timings', 'Morning: 6:00 AM – 8:30 AM\nEvening: 6:00 PM – 8:30 PM'],
//                 ['📅', 'Working Days', 'Monday to Saturday'],
//                 ['⭐', 'Google Rating', '5.0 ★ · 41 Reviews · Coaching Center'],
//               ].map(([ico, lbl, val]) => (
//                 <div className="contact-item" key={lbl}>
//                   <div className="ci-ico">{ico}</div>
//                   <div>
//                     <div className="ci-lbl">{lbl}</div>
//                     <div className="ci-val">{val.split('\n').map((l, i) => <span key={i}>{l}{val.includes('\n') && i === 0 && <br />}</span>)}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div style={{ display: 'flex', gap: '12px', marginTop: '28px', flexWrap: 'wrap' }}>
//               <a href="https://wa.me/918247725301" className="btn-primary" target="_blank" rel="noreferrer">
//                 <FaWhatsapp size={16} /> WhatsApp Us
//               </a>
//               <a href="tel:8247725301" className="btn-outline">📞 Call Now</a>
//             </div>
//             <div className="map-box">
//               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0!2d78.4903468!3d17.4189079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99e746c506fb%3A0x67f7f1a5d3b1217f!2sLEARNING%20POINT!5e0!3m2!1sen!2sin!4v1" allowFullScreen loading="lazy" title="Learning Point Location" />
//             </div>
//           </div>

//           <div className="contact-form-box">
//             <h3 className="form-title">Send an Enquiry</h3>
//             <p className="form-sub">We'll get back to you within a few hours</p>
//             <div className="form-row">
//               <div className="form-field"><label>Your Name</label><input type="text" placeholder="Full name" /></div>
//               <div className="form-field"><label>Phone Number</label><input type="text" placeholder="+91 XXXXX XXXXX" /></div>
//             </div>
//             <div className="form-field">
//               <label>Course Interested</label>
//               <select><option>Select a course...</option><option>IIT JEE</option><option>EAMCET</option><option>NEET</option><option>Intermediate (MPC)</option><option>Class X</option><option>BITSAT</option></select>
//             </div>
//             <div className="form-field">
//               <label>Preferred Batch</label>
//               <select><option>Select batch...</option><option>Morning (6:00 AM – 8:30 AM)</option><option>Evening (6:00 PM – 8:30 PM)</option></select>
//             </div>
//             <div className="form-field"><label>Message</label><textarea placeholder="Any questions or requirements..." /></div>
//             <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '13px' }}>Send Enquiry →</button>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }
