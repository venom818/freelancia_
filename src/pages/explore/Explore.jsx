import React from 'react';
import { Link } from 'react-router-dom';
import './Explore.scss';

const Explore = () => {
  const categories = [
    {
      id: 1,
      title: 'Graphics & Design',
      icon: '🎨',
      description: 'Logo design, branding, illustrations',
      color: '#FF6B6B'
    },
    {
      id: 2,
      title: 'Programming & Tech',
      icon: '💻',
      description: 'Web development, mobile apps, software',
      color: '#4ECDC4'
    },
    {
      id: 3,
      title: 'Digital Marketing',
      icon: '📈',
      description: 'SEO, social media, advertising',
      color: '#45B7D1'
    },
    {
      id: 4,
      title: 'Writing & Translation',
      icon: '✍️',
      description: 'Content writing, translation, editing',
      color: '#96CEB4'
    },
    {
      id: 5,
      title: 'Video & Animation',
      icon: '🎬',
      description: 'Video editing, motion graphics, animation',
      color: '#FFEAA7'
    },
    {
      id: 6,
      title: 'Music & Audio',
      icon: '🎵',
      description: 'Voice over, music production, sound design',
      color: '#DDA0DD'
    },
    {
      id: 7,
      title: 'AI Services',
      icon: '🤖',
      description: 'AI development, machine learning, automation',
      color: '#98D8C8'
    },
    {
      id: 8,
      title: 'Business Services',
      icon: '💼',
      description: 'Consulting, virtual assistance, accounting',
      color: '#F7DC6F'
    }
  ];

  const featuredServices = [
    {
      id: 1,
      title: 'Professional Logo Design',
      freelancer: 'Sarah Design',
      rating: 5,
      price: '$50',
      image: '/img/art.jpg'
    },
    {
      id: 2,
      title: 'Website Development',
      freelancer: 'Tech Solutions',
      rating: 5,
      price: '$200',
      image: '/img/web.jpg'
    },
    {
      id: 3,
      title: 'Social Media Marketing',
      freelancer: 'Digital Pro',
      rating: 4,
      price: '$100',
      image: '/img/beautiful3.jpg'
    },
    {
      id: 4,
      title: 'Content Writing',
      freelancer: 'Word Smith',
      rating: 5,
      price: '$75',
      image: '/img/beautiful4.jpg'
    }
  ];

  return (
    <div className="explore">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1>Explore Amazing Services</h1>
          <p>Discover talented freelancers and get your projects done with excellence</p>
          <div className="search-box">
            <input type="text" placeholder="What service are you looking for?" />
            <button>Search</button>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="categories-section">
        <div className="container">
          <h2>Browse by Category</h2>
          <div className="categories-grid">
            {categories.map((category) => (
              <div key={category.id} className="category-card" style={{ borderColor: category.color }}>
                <div className="category-icon" style={{ backgroundColor: category.color }}>
                  <span>{category.icon}</span>
                </div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <Link to={`/gigs?category=${category.title.toLowerCase()}`} className="explore-btn">
                  Explore
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Services */}
      <div className="featured-section">
        <div className="container">
          <h2>Featured Services</h2>
          <div className="services-grid">
            {featuredServices.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p className="freelancer">by {service.freelancer}</p>
                  <div className="rating">
                    {[...Array(service.rating)].map((_, i) => (
                      <span key={i} className="star">⭐</span>
                    ))}
                  </div>
                  <div className="price">Starting at {service.price}</div>
                  <Link to={`/gig/${service.id}`} className="view-btn">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>10K+</h3>
              <p>Active Freelancers</p>
            </div>
            <div className="stat-item">
              <h3>50K+</h3>
              <p>Completed Projects</p>
            </div>
            <div className="stat-item">
              <h3>95%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="container">
          <h2>Ready to Start Your Project?</h2>
          <p>Join thousands of satisfied clients who found the perfect freelancer</p>
          <div className="cta-buttons">
            <Link to="/register" className="cta-btn primary">Get Started</Link>
            <Link to="/gigs" className="cta-btn secondary">Browse Services</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
