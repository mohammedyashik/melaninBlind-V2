import "./Home.css";
import { useEffect } from "react";
import heroImage from "../../assets/melaninbrand.png";
import Science from "../Science/Science";
import Works from "../Works/Works";
import Whos from "../Whos/Whos";
import Clinicalpilot from "../clinical/Clinicalpilot";
import About from "../About/About";
import Partner from "../partner/Partner";

const Home = () => {
  const partners = [
    { title: 'BIRAC', subtitle: 'Government of India' },
    { title: 'DST', subtitle: 'Department of Science & Technology' },
    { title: 'IIM Bangalore', subtitle: 'IICDC National Winner' },
    { title: 'IIM Calcutta', subtitle: 'Incubation Programme' },
    { title: 'AIC-CCMB', subtitle: 'Medtech Incubation · Hyderabad' },
    { title: 'C-CAMP', subtitle: 'Bio Incubation · Bangalore' },
    { title: 'La Trobe University', subtitle: 'Melbourne · Sydney' },
    { title: 'HTIC IIT Madras', subtitle: 'Pre-Incubation 2026', highlight: true },
  ];

  const stories = [
    {
      id: '01',
      name: 'Sarah, 34 AU',
      location: 'BRISBANE, AUSTRALIA',
      skinColor: '#F5D0B4',
      quote: '"Two suspicious moles. Two biopsies. Both benign. $2,400 spent — and weeks of anxiety. There has to be a way to know — before you cut."',
      stat: '77% of biopsies return benign — most never needed.'
    },
    {
      id: '02',
      name: 'Priya, 41 IN',
      location: 'COIMBATORE, INDIA',
      skinColor: '#A6734E',
      quote: '"The AI said low risk. By the time I reached a specialist, it had progressed. The system wasn’t built for my skin tone."',
      stat: 'AI accuracy on dark skin: ~17%. On fair skin: ~70%.'
    },
    {
      id: '03',
      name: 'Emmanuel, 28 NG',
      location: 'LAGOS, NIGERIA',
      skinColor: '#4A2C1D',
      quote: '"There is no dermatologist here. My GP made the best call he could. Guessing isn’t medicine. It’s hope with a stethoscope."',
      stat: 'In many regions: 1 dermatologist per 1.5M people.'
    }
  ];

  const statsData = [
    {
      value: '1.7M+',
      description: 'New skin cancer cases each year — rising steadily',
      source: 'WHO / GLOBOCAN'
    },
    {
      value: '3B+',
      description: 'People without access to a dermatologist',
      source: 'Global health estimates'
    },
    {
      value: '$9.42B',
      description: 'Global skin diagnostics market',
      source: 'Precedence Research'
    },
    {
      value: '77%',
      description: 'Biopsies that return benign results',
      source: 'JAMA Dermatology'
    }
  ];

  useEffect(() => {
    const cards = document.querySelectorAll(".story-card");
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
    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-left">

            <div className="top-badge">
              ● MedTech · Built in India · Designed for global use
            </div>

            <h1 className="hero-title">
              melaninBlind.<br />
              <span>Skin cancer triage — built for every skin tone.</span>
            </h1>

            <p className="hero-desc">
              A 60-second, battery-free screening system that reads <br />
              <b>electrical signals — not colour.</b>
            </p>

            <p className="hero-sub">
              No imaging. No bias. No specialist required.
            </p>

            <div className="hero-buttons">
              <button className="btn-primary">See how it works →</button>
              <button className="btn-outline">Request pilot</button>
            </div>

          </div>

          <div className="hero-right">
            <div className="image-wrapper">
              <img src={heroImage} alt="melaninBlind device" />
              <div className="scan-line"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="partner-container">
        <h3 className="section-title">Backed by</h3>

        <div className="partner-grid">
          {partners.map((item, index) => (
            <div key={index} className={`partner-card ${item.highlight ? 'highlight' : ''}`}>
              <h4>{item.title}</h4>
              <p>{item.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="stats-footer">
          <span className="dot">•</span>
          <span>6+ incubations across medtech institutions</span>
          <span className="dot">•</span>
          <span>₹20L+ non-dilutive grants (prior work)</span>
          <span className="dot">•</span>
          <span>National IICDC Winner</span>
          <span className="dot">•</span>
          <span>Supported by Texas Instruments & DST</span>
        </div>
      </section>

      <section className="problem-container">
        <header className="header-content">
          <div className="label">THE PROBLEM — IN THREE LIVES</div>

          <h1>
            Same disease.<br />
            Different outcomes.<br />
            Driven by skin tone.
          </h1>

          <p className="description">
            This is not an edge case.<br />
            This is how the system works today.<br /><br />
            melaninBlind addresses this — using physics, not pigment.
          </p>
        </header>

        <div className="story-grid">
          {stories.map((story) => (
            <div key={story.id} className="story-card">
              <div className="skin-circle" style={{ backgroundColor: story.skinColor }}></div>
              <h3 className="name">{story.name}</h3>
              <p className="location">{story.location}</p>
              <p className="quote">{story.quote}</p>
              <p className="stat-line">
                <span className="arrow">→</span> {story.stat}
              </p>
              <span className="bg-number">{story.id}</span>
            </div>
          ))}
        </div>

        <footer className="disclaimer">
          Based on documented clinical and global health patterns. Names are illustrative.
        </footer>
      </section>

      <section className="stats-container">
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-item">
              <h2 className="stat-value">{stat.value}</h2>
              <p className="stat-description">{stat.description}</p>
              <span className="stat-source">{stat.source}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="howitworks">
        <Works />
      </section>

      <section id="science">
        <Science />
      </section>

      <section id="who-its-for">
        <Whos />
      </section>

      <section id="partners">
        <Clinicalpilot />
      </section>

      <section id="About">
        <About />
      </section>

      <section id="partner">
        <Partner />
      </section>
    </>
  );
};

export default Home;
