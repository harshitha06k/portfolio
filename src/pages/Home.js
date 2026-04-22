import { Link } from 'react-router-dom';
import './Home.css';

const ME = {
  name:         'Harshitha Kolla',        
  initials:     'HK',                     
  role:         'Artificial Intelligence Student',
  location:     'Hyderabad, India',
  university:   'Mahindra University',
  degree:       'B.Tech — Artificial Intelligence',
  gpa:          '9.29',
  phone:        '+91 8106772562',       
  personalEmail:'harshitha06k@gmail.com', 
  collegeEmail: 'se23uari065@mahindrauniversity.edu.in', 
  github:       'https://github.com/harshitha06k',
  linkedin:     'https://linkedin.com/in/harshitha-kolla-1187272ba',
  resume:       '/resume.pdf',

  tagline: 'Crafting intelligent systems and beautiful web experiences — one commit at a time.',

  about: "I’m an Artificial Intelligence student at Mahindra University, with a strong interest in building intelligent and practical solutions. My work combines machine learning and software development, where I design predictive models and translate them into usable applications. I enjoy solving real-world problems through data-driven approaches while focusing on clean, efficient, and user-friendly systems.",

  research: 'Machine Learning · Deep Learning · Natural Language Processing · Predictive Analytics . Intelligent Systems  .  Full Stack Developement',

  courses: [
    'Object-Oriented Programming', 'Data Structures & Algorithms', 'Machine Learning',
    'Database Management System',  'Operating System','Computer Networks' ,             'Software Engineering',
    'Natural Language Processing', 'Deep Neural Networks', 'GenAI & LLM'
  ],

  skills: {
    Languages: ['C', 'Python', 'Java', 'HTML', 'CSS', 'JavaScript', 'SQL'],
    Frontend:  ['React.js', 'HTML', 'CSS'],
    Backend:   ['Node.js', 'Express.js'],
    Tools:     ['Git', 'GitHub', 'VS Code', 'Matplotlib', 'Google Colab'],
    'ML / AI': ['Scikit-learn', 'XGBoost', 'PyTorch', 'Whisper', 'Wav2Vec2', 'NumPy', 'Pandas'],
  }, // ML/AI is last — spans full bottom row

  hobbies: ['Throwball', 'Kabaddi', 'Badminton', 'Listening to Music'],
};


function Home() {
  const allSkills = Object.values(ME.skills).flat();

  return (
    <div className="page home-page">

      {/* ══ HERO ══ */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow asr d1">
            <span className="eyebrow-line" />
            {ME.university} · {ME.degree}
          </p>

          <h1 className="hero-name au d2">
            {ME.name.split(' ').map((w, i) => (
              <span key={i} className="hero-name-word">{w}</span>
            ))}
          </h1>

          <p className="hero-role au d3">
            {ME.role} <span className="role-dot">·</span> {ME.location}
          </p>

          <p className="hero-tagline au d4">{ME.tagline}</p>

          <div className="hero-actions au d5">
            <a href={ME.github}   target="_blank" rel="noreferrer" className="btn-primary">GitHub ↗</a>
            <a href={ME.linkedin} target="_blank" rel="noreferrer" className="btn-primary">LinkedIn ↗</a>
          </div>
        </div>

        {/* ── PROFILE PICTURE ── */}
        <aside className="hero-aside au d3">
          <div className="profile-card">
            <div className="profile-frame">
              <img
                src="/profile.jpg"
                alt={ME.name}
                className="profile-img"
                onError={e => {
                  e.target.style.display = 'none';
                  document.getElementById('profile-fallback').style.display = 'flex';
                }}
              />
              <div id="profile-fallback" className="profile-fallback">
                <span className="profile-initials">{ME.initials}</span>
                <p className="profile-hint">Drop profile.jpg<br/>into /public</p>
              </div>
            </div>
            <div className="profile-overlay">
              <div>
                <p className="profile-overlay-name">{ME.name}</p>
                <p className="profile-overlay-role">{ME.role}</p>
              </div>
              <span className="profile-overlay-badge">AI · MU</span>
            </div>
          </div>

          <div className="profile-stats-row">
            <div className="profile-stat-chip">
              <span className="pstat-num">9.29</span>
              <span className="pstat-label">GPA</span>
            </div>
            <div className="profile-stat-chip">
              <span className="pstat-num">3×</span>
              <span className="pstat-label">Scholarship</span>
            </div>
            <div className="profile-stat-chip">
              <span className="pstat-num">3+</span>
              <span className="pstat-label">Projects</span>
            </div>
          </div>
        </aside>

        <span className="hero-bg-num" aria-hidden="true">01</span>
      </section>

      {/* ══ MARQUEE ══ */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...allSkills, ...allSkills, ...allSkills].map((s, i) => (
            <span key={i} className="marquee-word">
              {s}<span className="marquee-sep">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ══ ABOUT ══ */}
      <section className="section about-section" id="about">
        <div className="section-inner">
          <div className="section-label asr d1">
            <span className="label-num">01</span>About Me
          </div>
          <div className="about-grid">
            <div className="about-left">
              <h2 className="section-heading au d2">
                The person<br />behind the<br /><em>code.</em>
              </h2>
              <div className="accent-line au d3" />
            </div>
            <div className="about-right">
              <p className="about-body au d2">{ME.about}</p>
              <div className="about-divider au d3" />
              <div className="au d4">
                <p className="about-sublabel">Research Interests</p>
                <p className="about-subtext">{ME.research}</p>
              </div>
              <div className="about-divider au d5" />
              <div className="au d6">
                <p className="about-sublabel">Hobbies</p>
                <div className="hobby-chips">
                  {ME.hobbies.map(h => <span key={h} className="hobby-chip">{h}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ COURSEWORK ══ */}
      <section className="section awards-section">
        <div className="section-inner">
          <div className="section-label asr d1"><span className="label-num">02</span>Coursework</div>
          <h2 className="section-heading au d2">What I've<br /><em>studied.</em></h2>
          <div className="accent-line au d3" />
          <div className="course-chips">
            {ME.courses.map((c, i) => (
              <span key={i} className={`course-chip au d${(i % 4) + 2}`}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SKILLS ══ */}
      <section className="section skills-section">
        <div className="section-inner">
          <div className="section-label asr d1"><span className="label-num">03</span>Skills</div>
          <h2 className="section-heading au d2" style={{ color: 'var(--cream)' }}>
            My tech<br /><em>stack.</em>
          </h2>
          <div className="accent-line au d3" />
          <div className="skills-grid">
            {Object.entries(ME.skills).map(([cat, items], ci) => (
              <div key={cat} className={`skill-group au d${ci + 3}`}>
                <p className="skill-cat">{cat}</p>
                <div className="skill-tags">
                  {items.map(s => <span key={s} className="skill-tag">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section className="section contact-section" id="contact">
        <div className="section-inner">
          <div className="section-label asr d1"><span className="label-num">04</span>Contact</div>
          <h2 className="section-heading au d2">Let's build<br /><em>something.</em></h2>
          <div className="accent-line au d3" />
          <div className="contact-grid">
            {[
              { label: 'Phone',          value: ME.phone,                               href: `tel:${ME.phone}`,           isResume: false },
              { label: 'Personal Email', value: ME.personalEmail,                        href: `mailto:${ME.personalEmail}`, isResume: false },
              { label: 'College Email',  value: ME.collegeEmail,                         href: `mailto:${ME.collegeEmail}`,  isResume: false },
              { label: 'GitHub',         value: ME.github.replace('https://',''),        href: ME.github,                    isResume: false },
              { label: 'LinkedIn',       value: ME.linkedin.replace('https://',''),      href: ME.linkedin,                  isResume: false },
              { label: 'Resume',         value: 'View Resume',                           href: '/resume',                    isResume: true  },
            ].map((c, i) => (
              c.isResume ? (
                <Link
                  key={i}
                  to="/resume"
                  className={`contact-card au d${i + 2}`}
                >
                  <span className="contact-label">{c.label}</span>
                  <span className="contact-value">{c.value}</span>
                  <span className="contact-arrow">↗</span>
                </Link>
              ) : (
                <a
                  key={i}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className={`contact-card au d${i + 2}`}
                >
                  <span className="contact-label">{c.label}</span>
                  <span className="contact-value">{c.value}</span>
                  <span className="contact-arrow">↗</span>
                </a>
              )
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;