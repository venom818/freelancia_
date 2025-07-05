import React, { useState } from 'react';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email Us',
      info: 'support@freelancia.com',
      description: 'Get in touch with our support team'
    },
    {
      icon: '📞',
      title: 'Call Us',
      info: '9867241332',
      description: 'Speak with our customer service'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      info: 'Manigram, Nepathya College',
      description: 'Drop by our office anytime'
    },
    {
      icon: '⏰',
      title: 'Business Hours',
      info: 'Mon - Fri: 9AM - 6PM',
      description: 'We\'re here to help you'
    }
  ];

  const faqs = [
    {
      question: 'How do I create an account?',
      answer: 'You can create an account by clicking the "Register" button in the top navigation. Choose between freelancer or client account based on your needs.'
    },
    {
      question: 'How do I post a job?',
      answer: 'After creating a client account, you can post jobs by clicking "Post Job" in your dashboard. Fill in the job details and requirements.'
    },
    {
      question: 'How do I apply for jobs?',
      answer: 'As a freelancer, you can browse available jobs and submit proposals. Make sure your profile is complete to increase your chances.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our platform.'
    },
    {
      question: 'How do I get paid for my work?',
      answer: 'Once your project is completed and approved by the client, payment will be released to your account within 3-5 business days.'
    }
  ];

  return (
    <div className="contact">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </div>

      <div className="container">
        {/* Contact Form and Info */}
        <div className="contact-section">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What is this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us more about your inquiry..."
                    rows="6"
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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
              <p>We typically respond to inquiries within 24 hours during business days.</p>
              <p>For urgent matters, please call us directly.</p>
            </div>
            <div className="info-card">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 