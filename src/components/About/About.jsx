import React from 'react';
import { Check } from 'lucide-react';
import "./About.css";
// Corrected import: Images are default exports, do not use { }
import image from "../../assets/DSC04786.JPG"; 

const About = () => {
  const credentials = [
  { text: "₹20L+ in non-dilutive grants secured across prior medtech ventures" },
  { text: "National Winner — IICDC (Texas Instruments, DST, IIM Bangalore)" },
  { text: "Incubated at 6+ leading medtech and research institutions" },
  { text: "Built multiple non-invasive skin cancer diagnostics to working prototype" },
  { text: "International research exposure — La Trobe University (Melbourne, Sydney)" },
  { text: "Synthesised 50+ research papers in impedance and skin cancer diagnostics" },
  { text: "Presented across national startup stages in India" },
  { text: "Prior medtech exit — Co-Founder & COO, Livvolta Healthcare" }
];
  
  return (
    <section className="founder-section">
      <div className="founder-container">
        <div className="sci-label">THE FOUNDER</div>
        <h1 className="founder-title">
          Built at the intersection of<br />
          medicine, physics, and scale.
        </h1>

        <div className="founder-content">
          {/* Sidebar with Image */}
          <div className="founder-sidebar">
            <div className="image-frame">
              <div className="frame-label">Mohammed Yashik Sahib"</div>
              <div className="frame-sub">Biomedical Engineer • Founder, melaninBlind</div>
              <img 
                src={image} 
                alt="Mohammed Yashik B" 
                className="profile-img"
              />
            </div>
          </div>

          {/* Bio and Stats */}
          <div className="founder-main">
            <h2 className="name">Mohammed Yashik B</h2>
            <p className="role">
               Founder & CEO • Biomedical Engineer <br />
               Building skin cancer triage for every skin tone
            </p>
            
            <blockquote className="quote">
              "Most systems fail because they rely on imaging. melaninBlind works because it relies on physics.
              This is the third iteration — the one that finally gets accuracy, access, and scale right."
            </blockquote>

            <div className="credentials-grid">
              {credentials.map((item, index) => (
                <div key={index} className="credential-item">
                  <Check size={16} className="check-icon" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <div className="contact-footer">
              <div className="contact-col">
                <a href="mailto:mohammedyashik.b@melaninblind.com">mohammedyashik.b@melaninblind.com</a>
                <p>+91 9566857390</p>
              </div>
              <div className="contact-col">
                <a href="https://linkedin.com/in/mohammed-yashik/">linkedin.com/in/mohammed-yashik/</a>
                <p>melaninblind.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hiring-bar">
          We're hiring: <span>Head of Clinical Affairs</span> • <span>Head of Hardware Engineering</span> • <span>Head of Business Development</span>
        </div>
      </div>
    </section>
  );
};

export default About;
