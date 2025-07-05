import React from 'react';
import './About.scss';

const About = () => {
  const teamMembers = [
    {
      name: 'Thakur Kunwar',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?auto=compress&cs=tinysrgb&w=1600',
      description: 'Passionate about connecting talented freelancers with amazing opportunities.'
    },
    {
      name: 'Venom Gahatraj',
      role: 'Head of Operations',
      image: '../img/abin.jpg',
      description: 'Ensuring smooth operations and excellent user experience.'
    },
    {
      name: 'Sumit Kawar',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg?auto=compress&cs=tinysrgb&w=1600',
      description: 'Building innovative solutions to make freelancing easier.'
    }
  ];

  const values = [
    {
      icon: '🤝',
      title: 'Trust & Reliability',
      description: 'We build lasting relationships based on trust and transparency.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Constantly improving our platform with cutting-edge technology.'
    },
    {
      icon: '🌟',
      title: 'Excellence',
      description: 'Committed to delivering the highest quality service to our users.'
    },
    {
      icon: '🌍',
      title: 'Community',
      description: 'Fostering a supportive community of freelancers and clients.'
    }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1>About Freelancia</h1>
          <p>Connecting talented freelancers with amazing opportunities worldwide</p>
        </div>
      </div>

      {/* Story Section */}
      <div className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Freelancia was born from a simple idea: to make freelancing accessible, 
                reliable, and secure for everyone. Founded in 2025, we've been on a 
                mission to bridge the gap between talented professionals and businesses 
                seeking quality work and secure payment.
              </p>
              <p>
                What started as a small platform has grown into a thriving community of 
                thousands of freelancers and clients. We believe that everyone deserves 
                the opportunity to work on projects they love, from anywhere in the world.
              </p>
            </div>
            <div className="story-image">
              <img src="/img/beautiful4.jpg" alt="Our Story" />
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              To empower freelancers and businesses by providing a seamless, secure, 
              and innovative platform that connects talent with opportunity. We strive 
              to make freelancing not just a job, but a fulfilling career choice.
            </p>
            <div className="mission-stats">
              <div className="stat">
                <h3>10K+</h3>
                <p>Active Freelancers</p>
              </div>
              <div className="stat">
                <h3>5K+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat">
                <h3>50K+</h3>
                <p>Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="values-section">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <div className="container">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                  <p className="description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="container">
          <h2>Join Our Community</h2>
          <p>Ready to start your freelancing journey or find the perfect talent?</p>
          <div className="cta-buttons">
            <a href="/register" className="cta-btn primary">Get Started</a>
            <a href="/contact" className="cta-btn secondary">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
