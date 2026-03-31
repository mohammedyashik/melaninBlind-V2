import { Camera, Smartphone, Activity, Clock } from 'lucide-react';
import "./Science.css";

const Science = () => {
 const data = [
    { type: 'I', label: 'Very Fair', accuracy: '70%', color: '#F9E4D4', barClass: 'works-well' },
    { type: 'II', label: 'Fair', accuracy: '65%', color: '#E9C4A6', barClass: 'works-well' },
    { type: 'III', label: 'Medium', accuracy: '50%', color: '#D4A373', barClass: 'partial' },
    { type: 'IV', label: 'Olive', accuracy: '30%', color: '#8B5E3C', barClass: 'fails' },
    { type: 'V', label: 'Brown', accuracy: '20%', color: '#5C3D2E', barClass: 'fails' },
    { type: 'VI', label: 'Deep', accuracy: '17%', color: '#2C1B12', barClass: 'fails' },
  ];

  return (
    <>
      <section id="science" className="science-section">
      <div className="science-container">
        
        {/* Left Side: Physics Description */}
        <div className="science-left">
          <div className="sci-label">— THE SCIENCE</div>
          <h1 className="sci-title">
            Clinically validated impedance physics — delivered in a handheld patch.
          </h1>

          <div className="sci-description">
            <p>
              Electrical Impedance Spectroscopy has been studied for over four decades.
              The Nevisense system — a commercial predecessor — demonstrated 
              <b style={{color:"black"}}> 96.6% melanoma sensitivity</b> in an international multicentre clinical trial 
              and received FDA clearance in 2012.
            </p>

            <p>
              The principle is well established. Cancer cells exhibit disrupted membranes 
              and altered junctions, leading to measurable differences in electrical behaviour. 
              A multi-frequency sweep across a lesion generates an impedance profile — a direct 
              readout of underlying cellular structure.
            </p>

            <p>
              Melanin — the pigment responsible for skin colour — is optically dominant but 
              electrically transparent. Optical systems cannot penetrate it, which is why 
              imaging-based AI fails on darker skin.
              <b style={{color:"black"}}> Electrical signals are unaffected by melanin.</b> They measure the tissue directly.
            </p>

            <p className="sci-insight">
              This is not a new theory. It is established physics — now made accessible.
            </p>
          </div>

          {/* Signal Visualization Placeholder */}
          <div className="sci-graph-box">
             <div className="graph-header">
                EIS SIGNAL — 1KHZ TO 2.5MHZ — NORMAL VS MALIGNANT TISSUE — MELANIN-INDEPENDENT
             </div>

             <div className="wave-box">
                <svg viewBox="0 0 800 120" className="wave-svg">
                  
                  {/* Normal Wave */}
                  <path
                    className="wave normal-wave"
                    d="M0,60 Q40,40 80,60 T160,60 T240,60 T320,60 T400,60 T480,60 T560,60 T640,60 T720,60 T800,60"
                  />

                  {/* Cancer Wave */}
                  <path
                    className="wave cancer-wave"
                    d="M0,60 Q40,10 80,60 T160,60 T240,60 T320,60 T400,60 T480,60 T560,60 T640,60 T720,60 T800,60"
                  />
                </svg>
               </div>
          </div>

          <div className="sci-footer-tag">
            15+ validation and clinical studies referenced 
            <span>• FDA-cleared pathway established • CDSCO Class B regulatory pathway — India</span>
          </div>
        </div>

        {/* Right Side: Data Cards */}
        <div className="science-right">
          <div className="sci-card">
            <h2 className="sci-value">96.6%</h2>
            <p className="sci-meta">Melanoma sensitivity — international multicentre trial</p>
            <span className="sci-source">Malvehy et al. — British Journal of Dermatology — 2014 — PMC4257582</span>
          </div>

          <div className="sci-card">
            <h2 className="sci-value gold">1,943</h2>
            <p className="sci-meta">Lesions evaluated — histopathology-verified</p>
            <span className="sci-source">Malvehy et al. — BJD 2014 — 5 US + 17 European sites</span>
          </div>

          <div className="sci-card">
            <h2 className="sci-value blue">FDA 2012</h2>
            <p className="sci-meta">First clearance of EIS for skin cancer detection</p>
            <span className="sci-source">FDA 510(k) K143188 — Nevisense 3.0 — SciBase AB</span>
          </div>

          <div className="sci-card">
            <h2 className="sci-value green">2025</h2>
            <p className="sci-meta">Battery-free NFC EIS patch — peer-reviewed validation</p>
            <span className="sci-source">PMC11484435 — Validates melaninBlind architecture</span>
          </div>

          <div className="sci-card alert">
            <h2 className="sci-value red">17%</h2>
            <p className="sci-meta">AI accuracy on dark skin vs ~70% on fair skin</p>
            <span className="sci-source">Kamulegeya et al. — BMC Med Educ — 2023</span>
          </div>
        </div>
      </div>
    </section>

    <section className="bias-section">
      <div className="bias-container">
        <div className="sci-label">— SYSTEMIC BIAS IN CURRENT DIAGNOSTICS</div>

        <h1 className="bias-title">
          Most diagnostic tools were never built for all skin tones.
        </h1>

        <p className="bias-subtitle">
          This is not intentional — it is a consequence of optical physics and training data bias.
          The result is a significant accuracy gap across skin types.
          melaninBlind removes this limitation at the measurement level.
        </p>

        <div className="chart-box">
          <div className="chart-header">
            FITZPATRICK SCALE — AI OPTICAL ACCURACY VS EIS (MELANINBLIND)
          </div>
          
          <div className="fitzpatrick-grid">
            {data.map((item, idx) => (
              <div key={idx} className="chart-column">
                <div className="skin-circle" style={{ backgroundColor: item.color }}>{item.type}</div>
                <div className="skin-label">{item.label}</div>
                <div className="bar-container">
                   <div className={`accuracy-bar ${item.barClass}`} style={{ height: item.accuracy }}></div>
                </div>
                <div className="accuracy-val" style={{ color: item.barClass === 'fails' ? '#EF4444' : item.barClass === 'partial' ? '#F59E0B' : '#10B981' }}>
                  {item.accuracy}
                </div>
                <div className="check-icon">✓</div>
              </div>
            ))}
            <div className="divider-line"></div>
          </div>

          <div className="chart-footer">
            <p>EIS (melaninBlind) ✓ Consistent accuracy across all Fitzpatrick skin types</p>
            <span>Kamulegeya et al. — BMC Medical Education — 2023</span>
            
            <div className="legend">
               <div><span className="dot well"></span> AI performs well (≥65%)</div>
               <div><span className="dot partial"></span> AI shows variable accuracy</div>
               <div><span className="dot fails"></span> AI performance drops significantly</div>
               <div><span className="dot eis"></span> EIS remains consistent</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Science
