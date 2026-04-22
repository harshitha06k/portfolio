import { useEffect, useState } from 'react';
import './Resume.css';

function Resume() {
  const [pdfSrc, setPdfSrc] = useState('');

  useEffect(() => {
    const base = window.location.origin + 
      window.location.pathname.split('#')[0].replace(/\/+$/, '');
    setPdfSrc(base + '/resume.pdf');
  }, []);

  return (
    <div className="page resume-page">

      <section className="res-hero">
        <div className="res-hero-inner">
          <p className="res-eyebrow asr d1">
            <span className="eyebrow-line" />
            Curriculum Vitae
          </p>
          <h1 className="res-title au d2">Résumé<em>.</em></h1>
        </div>
      </section>

      <section className="res-viewer-section">
        <div className="res-viewer-inner">

          {/* top bar — no download button */}
          <div className="res-info-bar au d1">
            <div className="res-info-left">
              <span className="res-info-dot" />
              <span className="res-info-text">resume.pdf</span>
            </div>
          </div>

          {/* PDF iframe — #toolbar=0 hides browser's built-in toolbar/download */}
          <div className="res-pdf-wrap au d2">
            {pdfSrc ? (
              <iframe
                src={`${pdfSrc}#toolbar=0&navpanes=0&scrollbar=0`}
                title="Resume PDF"
                className="res-pdf-iframe"
              />
            ) : (
              <div className="res-pdf-loading">Loading…</div>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}

export default Resume;