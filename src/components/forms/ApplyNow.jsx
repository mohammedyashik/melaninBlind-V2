import React, { useState } from "react";
import "./ApplyNow.css";
import { sendEmail } from "../../utils/SendEmail";

const ApplyNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedin: "",
  });

  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await sendEmail("template_75rv3mf", {
        form_type: "Clinical Pilot Application",
        name: formData.name,
        email: formData.email,
        linkedin: formData.linkedin,
      });

      setStatus("success");
      setMessage("Application received. Our team will review and respond shortly.");

      // clear form
      setFormData({
        name: "",
        email: "",
        linkedin: "",
      });
    } catch (error) {
      console.error("Email send failed:", error);
      setStatus("error");
      setMessage("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="apply-viewport">
      <div className="bg-overlay"></div>

      <div className="apply-container">
        <form className="apply-form" onSubmit={handleSubmit}>
          <div className="accent-bar"></div>

          <div className="apply-header">
            <span className="back-btn" onClick={() => window.history.back()}>
              ← Back
            </span>
          </div>

          <div className="title-section">
            <h2>Clinical Pilot Application</h2>
            <p>For clinics, hospitals, and healthcare programmes</p>
          </div>

          <div className="field-wrapper">
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="field-wrapper">
            <input
              type="email"
              name="email"
              required
              placeholder="Work Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="field-wrapper">
            <input
              type="url"
              name="linkedin"
              required
              placeholder="LinkedIn or Professional Profile"
              value={formData.linkedin}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? <span className="loader"></span> : "Submit Application"}
          </button>

          {message && <div className={`status-msg ${status}`}>{message}</div>}
        </form>
      </div>
    </div>
  );
};

export default ApplyNow;
