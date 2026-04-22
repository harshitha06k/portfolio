import './Projects.css';

const PROJECTS = [
  {
    index: '01',
    name: 'Hybrid Predictive Maintenance',
    period: 'Feb – May 2025',
    category: 'Machine Learning',
    headline:
      'Multi-phase ML pipeline predicting machine failure before it happens using NASA CMAPSS dataset.',
    bullets: [
      'Applied PCA and K-Means clustering to identify degradation stages and generate labeled datasets for supervised learning.',
      'Trained Random Forest and XGBoost models, evaluated with F1-score, RMSE, MAE, and R² metrics.',
    ],
    tags: ['Python', 'Scikit-learn', 'XGBoost', 'PCA', 'K-Means', 'Pandas', 'NumPy', 'Google Colab'],
    github: 'https://github.com/harshitha06k/hybrid-predictive-maintenance',
    live: '',
  },
  {
    index: '02',
    name: 'Full Stack Task Management App',
    period: 'Aug – Dec 2025',
    category: 'Full Stack',
    headline:
      'Responsive task manager with drag-and-drop workflow, calendar scheduling, and persistent storage.',
    bullets: [
      'Implemented HTML5 Drag & Drop API for dynamic task movement across workflow stages.',
      'Developed calendar-based scheduling and localStorage-backed state for real-time UI updates.',
    ],
    tags: ['HTML', 'CSS', 'JavaScript ES6+', 'Drag & Drop API', 'LocalStorage', 'Git'],
    github: 'https://github.com/harshitha06k/automatic-subtitle-generator',
    live: '',
  },
  {
    index: '03',
    name: 'Automatic Subtitle Generator',
    period: 'Aug – Dec 2025',
    category: 'NLP / Speech',
    headline:
      'End-to-end speech-to-text system auto-generating .srt subtitle files from audio.',
    bullets: [
      'Integrated Whisper and Wav2Vec2 models for multilingual and noisy audio transcription.',
      'Implemented audio preprocessing, timestamp alignment, and evaluated transcription quality using WER.',
    ],
    tags: ['Python', 'Whisper', 'Wav2Vec2', 'PyTorch', 'NLP', 'Speech Recognition'],
    github: 'https://github.com/harshitha06k/automatic-subtitle-generator',
    live: '',
  },
];

const INTERNSHIP = {
  company: 'Accenture',
  program: 'Go For Gold — Pre-Internship Training Program',
  period: 'Dec 2025 – Jan 2026',
  points: [
    'Completed structured training via the iAspire platform, including a Python programming course.',
    'Developed coding fundamentals and improved analytical and professional communication skills.',
  ],
};

function Projects() {
  return (
    <div className="page proj-page">

      {/* ══ HEADER ══ */}
      <section className="proj-hero">
        <div className="proj-hero-inner">
          <p className="proj-eyebrow asr d1">
            <span className="eyebrow-line" />Selected Work · 2025 — 2026
          </p>
          <h1 className="proj-title au d2">
            Projects<em>.</em>
          </h1>
          <p className="proj-sub au d3">
            Things I've built — each linked to the source code on GitHub.
          </p>
        </div>
      </section>

      {/* ══ PROJECT CARDS ══ */}
      <section className="proj-list">
        <div className="proj-list-inner">
          {PROJECTS.map((p, i) => (
            <article key={p.index} className={`proj-card au d${i + 1}`}>

              <div className="proj-card-top">
                <div className="proj-card-meta">
                  <span className="proj-cat">{p.category}</span>
                  <span className="proj-period">{p.period}</span>
                </div>
                <span className="proj-index">{p.index}</span>
              </div>

              <h2 className="proj-name">{p.name}</h2>
              <p className="proj-headline">{p.headline}</p>

              <ul className="proj-bullets">
                {p.bullets.map((b, bi) => (
                  <li key={bi} className="proj-bullet">
                    <span className="bullet-dot" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="proj-tags">
                {p.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}
              </div>

              <div className="proj-card-actions">
                <a href={p.github} target="_blank" rel="noreferrer" className="proj-btn-primary">
                  View on GitHub ↗
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="proj-btn-ghost">
                    Live Demo ↗
                  </a>
                )}
              </div>

            </article>
          ))}
        </div>
      </section>

      {/* ══ INTERNSHIP ══ */}
      <section className="intern-section">
        <div className="intern-inner">
          <div className="section-label asr d1">
            <span className="label-num">✦</span>Internship & Training
          </div>

          <div className="intern-card au d2">
            <div className="intern-left">
              <span className="intern-badge">Accenture</span>
              <h3 className="intern-program">{INTERNSHIP.program}</h3>
              <p className="intern-period">{INTERNSHIP.period}</p>
            </div>
            <div className="intern-right">
              {INTERNSHIP.points.map((pt, i) => (
                <p key={i} className="intern-point">
                  <span className="intern-arrow">→</span>
                  {pt}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER CTA ══ */}
      <section className="proj-cta-section">
        <div className="proj-cta-inner">
          <h2 className="cta-heading au d1">
            See everything on<br /><em>GitHub.</em>
          </h2>
          <a
            href="https://github.com/harshitha06k"
            target="_blank"
            rel="noreferrer"
            className="cta-btn au d2"
          >
            View GitHub Profile ↗
          </a>
        </div>
      </section>

    </div>
  );
}

export default Projects;