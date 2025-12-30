export default function Resume() {
  return (
    <section className="section resume-section">
      <h2>Resume</h2>
      <p className="lead">Download the PDF or view it inline.</p>

      {/* Developer Resume */}
      <div className="resume-block">
        <h3>Developer Resume</h3>
        <div className="tag-row">
          <a className="btn primary" href="/src/assets/Imran.cv.pdf" download>
            Download Developer Resume
          </a>
          <a
            className="btn"
            href="/src/assets/Imran.cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in new tab
          </a>
        </div>
        <iframe
          src="/src/assets/Imran.cv.pdf"
          title="Digital Marketing Resume PDF"
          className="resume-embed"
        />
      </div>

      {/* Digital Marketing Resume */}
      <hr style={{ margin: '2rem 0', opacity: 0.4, width: '80%' }} />
      <div className="resume-block">
        <h3>Digital Marketing Resume</h3>
        <div className="tag-row">
          <a className="btn primary" href="/src/assets/Imran.resume.pdf" download>
            Download Digital Marketing Resume
          </a>
          <a
            className="btn"
            href="/src/assets/Imran.resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in new tab
          </a>
        </div>
        <iframe
          src="/src/assets/Imran.resume.pdf"
          title="Digital Marketing Resume PDF"
          className="resume-embed"
        />
      </div>
    </section>
  );
}
