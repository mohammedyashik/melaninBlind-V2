import React, { useState } from "react";
import "./RequestForm.css";
import { sendEmail } from "../../utils/SendEmail";

const RequestForm = () => {
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
        form_type: "Request Form",
        name: formData.name,
        email: formData.email,
        linkedin: formData.linkedin
      });
      setStatus("success");
      setMessage("Form submitted successfully ✅");
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
      setMessage("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-header">
          <span className="close">✕</span>
        </div>

        <h2>MelaninBlind</h2>

        <div className="input-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>LinkedIn URL</label>
          <input
            type="url"
            name="linkedin"
            required
            placeholder="https://linkedin.com/in/..."
            value={formData.linkedin}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="button" disabled={loading}>
          {loading ? "Sending..." : "Submit"}
        </button>

        {message && (
          <p className={`message-text ${status}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default RequestForm;