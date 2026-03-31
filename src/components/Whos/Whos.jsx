import React, { useState } from 'react';
import { Stethoscope, Building2, Globe, Heart, ShieldCheck } from 'lucide-react';
import "./Whos.css"

const Whos = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { 
      name: "GP / Family Medicine", 
      icon: <Stethoscope size={18}/>,
      title: "General Practitioners",
      desc: "General practitioners are the first point of contact for most skin concerns. They manage high patient volumes without specialised dermatology training and rely heavily on visual judgement. melaninBlind provides an objective, 60-second triage decision — reducing unnecessary referrals and limiting the cascade of avoidable biopsies."
    },
    { 
      name: "Hospital Outpatient", 
      icon: <Building2 size={18}/>,
      title: "Hospital Outpatient Departments",
      desc: "Dermatology outpatient departments operate under significant load, with long wait times and high patient volumes. Introducing melaninBlind at triage level enables early filtering of low-risk cases — reducing backlog and allowing specialists to focus on clinically relevant patients."
    },
    { 
      name: "Community Health Workers", 
      icon: <Globe size={18}/>,
      title: "Community Health Workers",
      desc: "In many regions, community health workers are the only accessible healthcare providers. melaninBlind requires no specialist training, no external power source, and no laboratory infrastructure — enabling objective skin cancer triage in low-resource and remote environments."
    },
    { 
      name: "NGO / Global Health", 
      icon: <Heart size={18}/>,
      title: "NGO and Global Health Programmes",
      desc: "Global health programmes operate in environments where early detection is limited by infrastructure and cost. melaninBlind is designed to integrate within these systems — enabling scalable, low-cost triage using a single patch and a standard smartphone."
    },
    { 
      name: "Dermatology Clinics", 
      icon: <ShieldCheck size={18}/>,
      title: "Dermatology Clinics",
      desc: "For dermatology practices, melaninBlind functions as a pre-screening layer — reducing low-risk referrals and improving clinical efficiency. Only patients with meaningful risk profiles proceed to specialist evaluation, improving workflow and patient outcomes."
    }
  ];

  const techCards = [
    {
      value: "96.6%",
      label: "Melanoma Sensitivity — Multicentre Trial",
      desc: "Validated across multiple international clinical sites with histopathology as the reference standard. The same impedance-based principles apply consistently across all skin types.",
      source: "Malvehy et al. — British Journal of Dermatology — 2014 — PMC4257582",
      color: "teal"
    },
    {
      value: "FDA",
      label: "Regulatory Pathway Established",
      desc: "Electrical impedance-based skin cancer detection received FDA clearance in 2012, with subsequent updates. melaninBlind follows an equivalent regulatory pathway, adapted for CDSCO Class B in India.",
      source: "FDA 510(k) K143188 — Nevisense 3.0 — SciBase AB",
      color: "gold"
    },
    {
      value: "2025",
      label: "Battery-Free EIS Patch — Validated",
      desc: "Recent peer-reviewed work demonstrates fully battery-free, NFC-powered impedance diagnostics, validating the underlying hardware architecture used in melaninBlind.",
      source: "Peer-reviewed publication — 2025",
      color: "blue"
    }
  ];

  const outcomes = [
    {
      percentage: "~85%",
      label: "of cases",
      status: "NORMAL",
      subtitle: "No further intervention",
      desc: "Impedance profile consistent with normal tissue. The patient is discharged with routine follow-up, avoiding unnecessary biopsy and associated cost.",
      footer: "Routine follow-up",
      colorClass: "green"
    },
    {
      percentage: "~10%",
      label: "of cases",
      status: "MONITOR",
      subtitle: "Scheduled reassessment",
      desc: "Borderline impedance signature. The patient is monitored over time with a scheduled follow-up, without immediate invasive procedures.",
      footer: "Re-evaluate in 90 days",
      colorClass: "yellow"
    },
    {
      percentage: "~5%",
      label: "of cases",
      status: "REFER",
      subtitle: "Specialist evaluation required",
      desc: "High-confidence abnormal signal. The patient is referred for biopsy and specialist care with clinical justification.",
      footer: "Refer to dermatologist",
      colorClass: "red"
    }
  ];

  return (
    <>
    <section id="who-its-for" className="who-section">
      <div className="who-container">
        <div className="who-layout">
          {/* LEFT SIDE: Selection Tabs */}
          <div className="who-left">
            <div className="sci-label">— WHO IT'S FOR</div>
            <h1 className="who-title">Built for first-contact clinical care.</h1>
            <p className="who-subtitle">
              Designed for healthcare settings where initial triage decisions are made — often without access to a dermatologist.
            </p>
            
            <div className="tabs-list">
              {tabs.map((tab, i) => (
                <div key={i} className={`tab-item ${activeTab === i ? 'active' : ''}`} onClick={() => setActiveTab(i)}>
                  <div className="tab-icon">{tab.icon}</div>
                  {tab.name}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Dynamic Content */}
          <div className="who-right">
            <div className="img-placeholder">
               <div className="pattern-overlay"></div>
               <p>melaninBlind in clinical workflow</p>
               <span>Objective triage • 60 seconds • skin-tone independent</span>
            </div>
            
            <div className="who-detail-card">
              <h3>{tabs[activeTab].title}</h3>
              <p>{tabs[activeTab].desc}</p>
            </div>

            <div className="quote-card">
              <p>"melaninBlind enables any primary care provider to make a consistent, objective triage decision — independent of visual interpretation or skin tone."</p>
              <span className="quote-author">— Mohammed Yashik B, Founder</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="outcome-section">
      <div className="outcome-container">
        {/* Header Section */}
        <div className="outcome-header">
          <h1 className="outcome-main-title">One scan. Three outcomes. A clear next step.</h1>
          <p className="outcome-main-desc">
            melaninBlind does not diagnose cancer. It enables triage — providing a clear,
            evidence-based next step for the clinician without reliance on subjective judgement.
          </p>
        </div>

        {/* Status Bar */}
        <div className="status-nav">
          <span>PATCH APPLIED</span>
          <span>→</span>
          <span>NFC SCAN</span>
          <span>→</span>
          <span>EIS ANALYSIS</span>
          <span>→</span>
          <span className="active-status">RESULT IN 60 SECONDS</span>
        </div>

        {/* Cards Grid */}
        <div className="outcome-grid">
          {outcomes.map((item, index) => (
            <div key={index} className={`outcome-card ${item.colorClass}`}>
              <div className="circle-stat">
                <span className="percent">{item.percentage}</span>
                <span className="label">{item.label}</span>
              </div>
              <h2 className="status-title">{item.status}</h2>
              <div className="divider"></div>
              <h4 className="subtitle">{item.subtitle}</h4>
              <p className="description">{item.desc}</p>
              <div className="card-footer-btn">{item.footer}</div>
            </div>
          ))}
        </div>

        {/* Bottom Small Text */}
        <div className="outcome-footer-meta">
          ~96% sensitivity maintained • up to 77% unnecessary biopsies avoided • validated EIS clinical protocol
        </div>
      </div>
    </section>

    <section className="proven-tech-section">
      <div className="proven-container">
        {/* Top Header */}
        <div className="proven-label">— PROVEN TECHNOLOGY</div>
        <h1 className="proven-title">
          Established science.<br />
          Re-engineered for accessibility.
        </h1>
        <p className="proven-subtitle">
          Electrical impedance spectroscopy is clinically validated, peer-reviewed, and
          regulatory-cleared. melaninBlind translates this into a low-cost, battery-free format.
        </p>

        {/* Feature Quote Box */}
        <div className="proven-quote-box">
          <p>
            "Electrical impedance enables direct measurement of tissue properties — independent of skin pigmentation. <span className="highlight-text">The signal remains consistent across all skin tones.</span>"
          </p>
        </div>

        {/* Info Cards */}
        <div className="proven-grid">
          {techCards.map((card, index) => (
            <div key={index} className={`tech-card ${card.color}`}>
              <h2 className="tech-value">{card.value}</h2>
              <h4 className="tech-label">{card.label}</h4>
              <p className="tech-desc">{card.desc}</p>
              <span className="tech-source">{card.source}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    </>
  )
}

export default Whos;
