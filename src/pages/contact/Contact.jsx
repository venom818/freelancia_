import { useRefresh } from "@/contexts/refreshcontext";
import React, { useState, useEffect } from "react";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    //subject: "", //as per the mid-defence
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { refreshKey } = useRefresh();

  useEffect(() => {
    setFormData({ name: "", email: "", message: "" });
    setErrors({ name: "", email: "", message: "" });
    window.scrollTo({ top: 0, behavior: "smooth" }); // smooth scroll here
  }, [refreshKey]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Re-validate the specific field on change
    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };

      if (name === "name") {
        updatedErrors.name = value.trim() ? "" : "Name is required.";
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

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
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

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Stop submission if errors exist
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert("Thank you for your message! We will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email Us",
      info: "support@freelancia.com",
      description: "Get in touch with our support team",
    },
    {
      icon: "📞",
      title: "Call Us",
      info: "9867241332",
      description: "Speak with our customer service",
    },
    {
      icon: "📍",
      title: "Visit Us",
      info: "Manigram, Nepathya College",
      description: "Drop by our office anytime",
    },
    {
      icon: "⏰",
      title: "Business Hours",
      info: "Mon - Fri: 9AM - 6PM",
      description: "We're here to help you",
    },
  ];

  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        'You can create an account by clicking the "Register" button in the top navigation. Choose between freelancer or client account based on your needs.',
    },
    {
      question: "How do I post a job?",
      answer:
        'After creating a client account, you can post jobs by clicking "Post Job" in your dashboard. Fill in the job details and requirements.',
    },
    {
      question: "How do I apply for jobs?",
      answer:
        "As a freelancer, you can browse available jobs and submit proposals. Make sure your profile is complete to increase your chances.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our platform.",
    },
    {
      question: "How do I get paid for my work?",
      answer:
        "Once your project is completed and approved by the client, payment will be released to your account within 3-5 business days.",
    },
  ];

  return (
    <div className="contact">
      {/* Hero Section */}
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
        {/* Contact Form and Info */}
        <div className="contact-section">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name">
                    Full Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <div className="error-text">{errors.name}</div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email Address <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <div className="error-text">{errors.email}</div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your inquiry..."
                    rows="6"
                    maxLength={500}
                  />
                  <div className="char-counter">
                    {formData.message.length}/500 characters
                  </div>
                  {errors.message && (
                    <div className="error-text">{errors.message}</div>
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

            {/* Contact Information */}
            <div className="contact-info">
              <h2>Contact Information</h2>
              <div className="info-grid">
                {contactInfo.map((item, index) => (
                  <div key={index} className="info-item">
                    <div className="info-icon">{item.icon}</div>
                    <div className="info-content">
                      <h3>{item.title}</h3>
                      <p className="info-text">{item.info}</p>
                      <p className="info-description">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="additional-info">
          <div className="info-cards">
            <div className="info-card">
              <h3>Support Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
              <p>Saturday: 10:00 AM - 4:00 PM EST</p>
              <p>Sunday: Closed</p>
            </div>
            <div className="info-card">
              <h3>Response Time</h3>
              <p>
                We typically respond to inquiries within 24 hours during
                business days.
              </p>
              <p>For urgent matters, please call us directly.</p>
            </div>
            <div className="info-card">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="#" className="social-link">
                  Facebook
                </a>
                <a href="#" className="social-link">
                  Twitter
                </a>
                <a href="#" className="social-link">
                  LinkedIn
                </a>
                <a href="#" className="social-link">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
