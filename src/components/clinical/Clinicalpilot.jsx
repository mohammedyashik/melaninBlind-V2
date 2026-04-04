import {
  Target,
  Battery,
  Clock,
  Smartphone,
  DollarSign,
  ShieldCheck,
} from "lucide-react";
import { Calendar, Inbox, FileText } from "lucide-react";
import "./Clinicalpilot.css";

const Clinicalpilot = () => {
  const features = [
    {
      icon: <Target size={20} />,
      title: "Skin-Tone Independent by Design",
      desc: "Electrical impedance measurement is unaffected by melanin. Consistent performance across all Fitzpatrick types — defined by physics, not dependent on training data.",
    },
    {
      icon: <Battery size={20} />,
      title: "Fully Battery-Free Operation",
      desc: "Powered entirely through NFC from a standard smartphone. No charging, no maintenance, and no dependency on external power sources.",
    },
    {
      icon: <Clock size={20} />,
      title: "60-Second Clinical Output",
      desc: "From application to triage decision in under one minute. Enables immediate clinical action without laboratory delay or specialist dependency.",
    },
    {
      icon: <Smartphone size={20} />,
      title: "Compatible with Standard Smartphones",
      desc: "Operates with any NFC-enabled device. No proprietary reader, no pairing, and no additional infrastructure required.",
    },
    {
      icon: <DollarSign size={20} />,
      title: "Low-Cost, Scalable Model",
      desc: "Designed for high-volume deployment. Cost structure enables use across primary care, hospital systems, and global health programmes.",
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Defined Regulatory Pathway",
      desc: "Aligned with CDSCO Class B in India and FDA 510(k) pathways via established impedance-based precedents.",
    },
  ];
  const scrollToPartner = () => {
  const element = document.getElementById("partner");
  if (element) {
    element.scrollIntoView({ 
      behavior: "smooth", 
      block: "start" 
    });
  }
};

  return (
    <>
      <section className="clinical-section">
        <div className="clinical-container">
          {/* Header Section */}
          <header className="clinical-header">
            <div className="sci-label">— CLINICAL PILOT PROGRAMME</div>
            <h1 className="clinical-title">
              Participate in a 500-lesion clinical study supporting regulatory validation.
            </h1>
            <p className="clinical-subtitle">
              We are onboarding GP clinics, hospital outpatient departments, and
              community health programmes across Chennai and South India. This
              pilot generates histopathology-correlated data required for CDSCO
              Class B submission, while providing early clinical access to the system.
            </p>
          </header>

          {/* Info Cards Grid */}
          <div className="clinical-grid">
            <div className="clinical-card">
              <div className="clinical-icon-box">
                <Calendar size={20} color="#f87171" />
              </div>
              <h3>Structured 3-Month Pilot</h3>
              <p>
                Standardised protocol, ethics documentation, and data collection
                framework provided. Clinics contribute patient access and biopsy correlation.
              </p>
            </div>

            <div className="clinical-card">
              <div className="clinical-icon-box">
                <Inbox size={20} color="#fb923c" />
              </div>
              <h3>No-Cost Pilot Deployment</h3>
              <p>
                All patches are provided during the study phase. Participating sites
                provide clinical workflow integration and follow-up data.
              </p>
            </div>

            <div className="clinical-card">
              <div className="clinical-icon-box">
                <FileText size={20} color="#94a3b8" />
              </div>
              <h3>Clinical Publication Contribution</h3>
              <p>
                Participating clinicians are included in authorship of the
                peer-reviewed study publication, contributing to early clinical evidence generation.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="clinical-cta">
             <button className="apply-btn" onClick={scrollToPartner}>
              Apply for the Clinical Pilot →
            </button>
          </div>

          {/* Footer Credits */}
          <footer className="clinical-footer">
            <p>
              Incubated at <b>HTIC IIT Madras</b> • Supported by <b>BIRAC and DST</b> • CDSCO Class B submission targeted for 2027
            </p>
          </footer>
        </div>
      </section>

      <section className="props-section">
        <div className="props-container">
          <header className="props-header">
            <div className="props-label">— WHY MELANINBLIND</div>
            <h1 className="props-main-title">
              Built for consistent, accessible skin cancer triage.
            </h1>
            <p className="props-subtitle">
              Designed to operate across clinical settings — from primary care to global health systems.
            </p>
          </header>

          <div className="props-grid">
            {features.map((f, i) => (
              <div key={i} className="prop-card">
                <div className="prop-icon-box">{f.icon}</div>
                <h3 className="prop-title">{f.title}</h3>
                <p className="prop-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Clinicalpilot;
