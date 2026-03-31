import "./Works.css";
import { Camera, Smartphone, Activity, Clock } from 'lucide-react';
import { useEffect } from "react";

const Works = () => {
    const steps = [
  {
    id: '01',
    title: 'Apply the Patch',
    icon: <Camera size={20} />,
    desc: 'Place the melaninBlind patch directly on the lesion. No preparation, no discomfort. Designed to function across all skin tones and anatomical sites.'
  },
  {
    id: '02',
    title: 'Scan with Any Phone',
    icon: <Smartphone size={20} />,
    desc: 'Use any NFC-enabled smartphone to initiate the scan. The device wirelessly powers the patch and triggers the measurement — no external hardware or setup required.'
  },
  {
    id: '03',
    title: 'EIS Measures Tissue Properties',
    icon: <Activity size={20} />,
    desc: 'A multi-frequency electrical sweep captures the impedance profile of the tissue. Cellular structure alters electrical behaviour, enabling detection independent of skin pigmentation.',
    highlight: true
  },
  {
    id: '04',
    title: 'Result in 60 Seconds',
    icon: <Clock size={20} />,
    desc: 'Three outcomes: Normal, Monitor, or Refer. The result provides a clear next step for the clinician, with no reliance on subjective visual interpretation.'
  }
];

useEffect(() => {
  const elements = document.querySelectorAll(".step-card, .works-header, .pilot-btn");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
}, []);
    
  return (
    <>
       <section className="works-section">
      <div className="container">
        <header className="works-header">
          <span className="label">— HOW IT WORKS</span>
          <h1>Four steps. Sixty seconds.<br />Designed for real-world care.</h1>
          <p className="subtitle">
            No specialised equipment. No additional infrastructure. 
            A patch, a smartphone, and clinically validated impedance measurement.
          </p>
        </header>

        <div className="steps-container">
          <div className="connector-line"></div>
          
          <div className="steps-grid">
            {steps.map((step) => (
              <div key={step.id} className={`step-card ${step.highlight ? 'active-border' : ''}`}>
                <div className="icon-wrapper">
                  {step.icon}
                </div>
                <span className="step-number">STEP {step.id}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="cta-wrapper">
          <button className="pilot-btn">
            Bring melaninBlind to your clinic → Apply for clinical pilot
          </button>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default Works;
