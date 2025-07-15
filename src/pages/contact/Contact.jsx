import { useRefresh } from "@/contexts/refreshcontext";
import React, { useState, useEffect } from "react";
import "./Contact.scss";
import EmailField from "@/components/Formfill/EmailField";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { refreshKey } = useRefresh();

  useEffect(() => {
    setFormData({ fullName: "", email: "", message: "" });
    setErrors({ fullName: "", email: "", message: "" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [refreshKey]);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };

      if (name === "fullName") {
        updatedErrors.fullName = value.trim() ? "" : "Full name is required.";
      }

      if (name === "email") {
        if (!value) {
          updatedErrors.email = "Email is required.";
        } else if (!validateEmail(value)) {
          updatedErrors.email = "Please enter a valid email address.";
        } else {
          updatedErrors.email = "";
        }
      }

      if (name === "message") {
        updatedErrors.message = value.trim() ? "" : "Message is required.";
      }

      return updatedErrors;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      alert("Thank you for your message! We will get back to you soon.");
      setFormData({ fullName: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="contact">
      <div className="hero">
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="contact-section">
          <div className="contact-grid">
            <div className="contact-form">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} noValidate>
                {/* Full Name Field */}
                <div className="form-group">
                  <label htmlFor="fullName">
                    Full Name <span className="required">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) =>
                      handleInputChange("fullName", e.target.value)
                    }
                    onBlur={() =>
                      handleInputChange("fullName", formData.fullName)
                    }
                  />
                  {errors.fullName && (
                    <small className="error-text">{errors.fullName}</small>
                  )}
                </div>

                {/* Email using reusable component */}
                <EmailField
                  email={formData.email}
                  error={errors.email}
                  onChange={handleInputChange}
                  onBlur={() => handleInputChange("email", formData.email)}
                />

                {/* Message Field */}
                <div className="form-group">
                  <label htmlFor="message">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    maxLength={500}
                    placeholder="Tell us more about your inquiry..."
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    onBlur={() =>
                      handleInputChange("message", formData.message)
                    }
                  />
                  <div className="char-counter">
                    {formData.message.length}/500 characters
                  </div>
                  {errors.message && (
                    <small className="error-text">{errors.message}</small>
                  )}
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Info and rest of the layout (same as before)... */}
            {/* You can copy-paste that block from your existing code unchanged */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
