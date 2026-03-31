import melaninLogo from "../../assets/melanin.png";
import "./Partner.css";
import { useNavigate } from "react-router-dom";

const Partner = () => {
  const navigate = useNavigate();
  return (
    <>
     <div className="this-container">
      <header className="header">
        <div className="get-in-touch">GET IN TOUCH</div>
        <h1>Work with melaninBlind</h1>
        <p className="subtitle">
          We are engaging with clinical partners, healthcare systems, global health organisations, 
          investors, and research institutions. If this problem aligns with your work — we should connect.
        </p>
      </header>

      <div className="grid">

      <div className="card" style={{ borderTop: "4px solid #117a65" }}>
          <div className="icon-box">💊</div>
          <h3>Clinical Pilot Participation</h3>
          <p>
            GP clinics and hospital outpatient departments in Chennai and South India — 
            participate in a 500-lesion clinical study. Structured protocol, no-cost deployment, 
            and contribution to peer-reviewed publication.
          </p>
          <button style={{ backgroundColor: "#117a65" }} onClick={() =>navigate("/applynow")}>
            Apply for clinical pilot →
          </button>
      </div>

      {/* Card 2: Invest or Partner */}
      <div className="card" style={{ borderTop: "4px solid #e1a945" }}>
          <div className="icon-box">💼</div>
          <h3>Investment & Strategic Partnerships</h3>
          <p>
            Seed round in progress. Engaging with investors and strategic partners 
            aligned with medtech, diagnostics, and global health deployment. 
            Detailed materials available on request.
          </p>
          <button style={{ backgroundColor: "#e1a945" }} onClick={()=>navigate("/requestform")}>
            Request pitch deck →
          </button>
      </div>

      {/* Card 3: Research Collaboration */}
      <div className="card" style={{ borderTop: "4px solid #117a65" }}>
          <div className="icon-box">🔬</div>
          <h3>Research & Clinical Collaboration</h3>
          <p>
            Open to collaboration with clinicians, researchers, and institutions 
            in dermatology, biomedical engineering, and global health for validation, 
            publication, and clinical integration.
          </p>
          <button style={{ backgroundColor: "#117a65" }} onClick={() =>navigate("/reachout")}>
            Submit enquiry →
          </button>
      </div>
  </div>

      <footer className="footer">
        <div className="footer-item"><span>✉</span> mohammedyashik.b@melaninblind.com</div>
        <div className="footer-item"><span>📞</span> +91 9566857390</div>
        <div className="footer-item"><span>🌐</span> linkedin.com/in/mohammed-yashik/</div>
        <div className="footer-item"><span>📍</span> Chennai, India</div>
      </footer>
    </div>

    <footer className="main-footer">
      <div className="footer-content">
        {/* Brand Column */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={melaninLogo} alt="melaninBlind" />
          </div>
          <p className="footer-tagline">
            Skin cancer triage — enabled by impedance physics.
          </p>
          <p className="footer-disclaimer">
            melaninBlind is currently in pre-clinical development and has not yet received regulatory clearance. 
            This website is intended for informational and partnership purposes. Clinical performance data referenced 
            is derived from peer-reviewed studies on impedance-based diagnostic systems, including Nevisense.
          </p>
        </div>

        {/* Product Column */}
        <div className="footer-links">
          <h4>PRODUCT</h4>
          <ul>
            <li><a href="#how">How It Works</a></li>
            <li><a href="#science">The Science</a></li>
            <li><a href="#outcomes">Clinical Outcomes</a></li>
            <li><a href="#why">Why melaninBlind</a></li>
          </ul>
        </div>

        {/* Company Column */}
        <div className="footer-links">
          <h4>COMPANY</h4>
          <ul>
            <li><a href="#about">Founder</a></li>
            <li><a href="#pilot">Clinical Pilot</a></li>
            <li><a href="#who">Use Cases</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Resources Column */}
        <div className="footer-links">
          <h4>RESOURCES</h4>
          <ul>
            <li><a href="#pitch">Request Pitch Deck</a></li>
            <li><a href="#apply">Apply for Pilot</a></li>
            <li><a href="#linkedin">LinkedIn</a></li>
            <li><a href="mailto:mohammedyashik.b@gmail.com">mohammedyashik.b@melaninblind.com</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          © 2026 melaninBlind · Chennai, India
        </div>
        <div className="footer-legal">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Use</a>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Partner;
