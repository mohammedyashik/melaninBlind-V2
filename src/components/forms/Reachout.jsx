import React, { useState } from "react";
import "./Reachout.css";
import { sendEmail } from "../../utils/SendEmail";

const Reachout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedin: ""
  });

  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await sendEmail("template_75rv3mf", {
        form_type: "Collaboration Enquiry",
        name: formData.name,
        email: formData.email,
        linkedin: formData.linkedin
      });

      setStatus("success");
      setMessage("Request received. We will get back to you shortly.");

      setFormData({
        name: "",
        email: "",
        linkedin: ""
      });

      setTimeout(() => {
        setMessage("");
      }, 3000);

    } catch (error) {
      console.error("Email send failed:", error);
      setStatus("error");
      setMessage("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reach-viewport">
      <div className="tech-bg"></div>

      <div className="reach-wrapper">
        <form className="reach-panel" onSubmit={handleSubmit}>
          <div
            className="back-link"
            onClick={() => window.history.back()}
          >
            [ Back ]
          </div>

          <div className="header-zone">
            <h2>Collaboration Enquiry</h2>
            <p className="subtitle">
              Partnerships • Research • Clinical • Strategic
            </p>
          </div>

          <div className="data-field">
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
            <div className="focus-line"></div>
          </div>

          <div className="data-field">
            <input
              type="email"
              name="email"
              required
              placeholder="Work Email"
              value={formData.email}
              onChange={handleChange}
            />
            <div className="focus-line"></div>
          </div>

          <div className="data-field">
            <input
              type="url"
              name="linkedin"
              required
              placeholder="LinkedIn or Professional Profile"
              value={formData.linkedin}
              onChange={handleChange}
            />
            <div className="focus-line"></div>
          </div>

          <button
            type="submit"
            className="neon-btn"
            disabled={loading}
          >
            {loading ? (
              <div className="dot-pulse"></div>
            ) : (
              "Submit Enquiry"
            )}
          </button>

          {message && (
            <div className={`console-msg ${status}`}>
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Reachout;
