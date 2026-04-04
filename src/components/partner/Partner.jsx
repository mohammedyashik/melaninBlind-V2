import melaninLogo from "../../assets/melanin.png";
import "./Partner.css";
import { useNavigate } from "react-router-dom";

const Partner = () => {
  const navigate = useNavigate();
  
  return (
    <div className="partner-page-wrapper">
      <div className="this-container">
        <header className="header">
          <span className="badge">GET IN TOUCH</span>
          <h1>Work  with  MelaninBlind</h1>
          <p className="subtitle">
            We are engaging with clinical partners, healthcare systems, global health organisations, investors, and research institutions. If this problem aligns with your work — we should connect..
          </p>
        </header>

        <div className="grid">
          {/* Card 1 */}
          <div className="card-pro clinical-border">
            <div className="icon-wrapper">💊</div>
            <h3>Clinical Pilot</h3>
            <p>
              GP clinics and hospital outpatient departments in Chennai and South India — participate in a 500-lesion clinical study. Structured protocol, no-cost deployment, and contribution to peer-reviewed publication.
            </p>
            <button className="btn-primary" onClick={() => navigate("/applynow")}>
              Apply Now
            </button>
          </div>

          {/* Card 2 */}
          <div className="card-pro investment-border">
            <div className="icon-wrapper">💼</div>
            <h3>Invest or Partner</h3>
            <p>
              Seed round in progress. Engaging with investors and strategic partners aligned with medtech, diagnostics, and global health deployment. Detailed materials available on request.
            </p>
            <button className="btn-gold" onClick={() => navigate("/requestform")}>
              Request Pitch Deck
            </button>
          </div>

          {/* Card 3 */}
          <div className="card-pro research-border">
            <div className="icon-wrapper">🔬</div>
            <h3>Research Collab</h3>
            <p>
              Open to collaboration with clinicians, researchers, and institutions in dermatology, biomedical engineering, and global health for validation, publication, and clinical integration.
            </p>
            <button className="btn-primary" onClick={() => navigate("/reachout")}>
              Reach Out
            </button>
          </div>
        </div>

        {/* Floating Contact Bar */}
        <div className="contact-strip">
          <div className="strip-item"><span>✉</span> mohammedyashik.b@gmail.com</div>
          <div className="strip-item"><span>📞</span> +91 9566857390</div>
          <div className="strip-item"><span>📍</span> Chennai, India</div>
        </div>
      </div>

      <footer className="main-footer">

        {/* Pre-footer banner */}
        <div className="footer-banner">
          <div className="footer-banner-overlay">
            <h2>Ready to Change Dermatology?</h2>
            <p>Join MelaninBlind's mission to make skin cancer screening skin-tone agnostic.</p>
            <button className="btn-banner" onClick={() => navigate("/applynow")}>
              Get Involved
            </button>
          </div>
        </div>

        {/* Main footer body */}
        <div className="footer-inner">

          {/* Brand column */}
          <div className="footer-brand">
            <img src={melaninLogo} alt="MelaninBlind" className="footer-logo-img" />
            <p className="footer-tagline">Skin Cancer Triage. Reimagined with Impedance Physics.</p>
            <p className="footer-disclaimer">
              MelaninBlind is in pre-clinical development. Device not yet regulatory cleared.
              Information intended for partnership purposes only.
            </p>

            {/* Social icons */}
            <div className="footer-socials">
              <a href="mailto:mohammedyashik.b@gmail.com" aria-label="Email" className="social-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m2 7 10 7 10-7"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter / X" className="social-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Nav columns */}
          <div className="footer-links-group">
            <div className="link-col">
              <h4>PRODUCT</h4>
              <a href="#how">How It Works</a>
              <a href="#science">The Science</a>
              <a href="#outcomes">Clinical Outcomes</a>
              <a href="#tech">Technology</a>
            </div>
            <div className="link-col">
              <h4>COMPANY</h4>
              <a href="#about">About</a>
              <a href="#pilot">Clinical Pilot</a>
              <a href="#contact">Contact</a>
              <a href="#team">Our Team</a>
            </div>
            <div className="link-col">
              <h4>RESOURCES</h4>
              <a href="#pitch">Pitch Deck</a>
              <a href="#apply">Apply</a>
              <a href="mailto:mohammedyashik.b@gmail.com">Email Us</a>
              <a href="#faq">FAQ</a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h4>STAY UPDATED</h4>
            <p>Get updates on our clinical trials, research publications, and funding rounds.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="your@email.com" className="newsletter-input" />
              <button type="submit" className="newsletter-btn">Subscribe</button>
            </form>
            <div className="contact-info">
              <p><span>✉</span> mohammedyashik.b@gmail.com</p>
              <p><span>📞</span> +91 9566857390</p>
              <p><span>📍</span> Chennai, India</p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>© 2026 MelaninBlind · Uped Learning Solutions Pvt Ltd · All rights reserved.</p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <span className="divider-dot">·</span>
            <a href="#terms">Terms of Use</a>
            <span className="divider-dot">·</span>
            <a href="#cookies">Cookies</a>
          </div>
        </div>

      </footer>
    </div>
  );
};

export default Partner;
