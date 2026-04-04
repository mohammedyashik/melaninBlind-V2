import React, { useState } from "react";
import "./ApplyNow.css";
import { sendEmail } from "../../utils/SendEmail";

const ApplyNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedin: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      await sendEmail("template_75rv3mf", {
        form_type: "Apply Now",
        name: formData.name,
        email: formData.email,
        linkedin: formData.linkedin,
      });

      setMessage({ type: "success", text: "Application submitted successfully!" });
      setFormData({
        name: "",
        email: "",
        linkedin: "",
      });
    } catch (error) {
      console.error(error);
      setMessage({ type: "error", text: "Failed to send application." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-wrapper">
      <div className="split-container">
        <div className="form-section">
          <header className="form-header">

            <span className="back-btn" onClick={() => window.history.back()}>
              ← Back
            </span>
          </header>

          <div className="form-content">
            <h1>Partner with Us</h1>
            <p className="subtitle">
              Clinical Pilot Application
            </p>

            <form onSubmit={handleSubmit}>

              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Professional Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <input
                  type="url"
                  name="linkedin"
                  placeholder="LinkedIn Profile URL"
                  value={formData.linkedin}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-footer">
                <button type="submit" className="create-btn" disabled={loading}>
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>

            </form>

            {message.text && (
              <div className={`status-msg ${message.type}`}>
                {message.text}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="visual-section">
          <div className="logo-badge">
            <div className="icon-check"></div>
          </div>

          <div className="testimonial">
            <blockquote>
              "I have been building non-invasive skin cancer diagnostic tools since 2019. MelaninBlind is the third iteration — the one that gets the physics right, the economics right, and the equity right simultaneously.."
            </blockquote>
            <cite>— Mohammed Yashik.B</cite>

            <div className="slider-dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ApplyNow;
