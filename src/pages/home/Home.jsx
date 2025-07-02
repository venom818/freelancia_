import React from 'react';
import Featured from '../../components/featured/Featured';
import Slide from '../../components/Slide/Slide'; 
import "./Home.scss";
import { cards, projects, Sprojects } from "../../data";
import CatCard from "../../components/catCard/CatCard";
import WCard from '../../components/wCard/WCard'; 
import ProjectCard from '../../components/projectCard/ProjectCard';

import { freelancerProfile } from '@/api/auth';

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <Slide slidesToShow={5} autoplay={true}>
        {cards.map(card => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>
      
      {/* Text section below slider and above video */}
      <div className="slider-info-section" style={{textAlign: 'center', margin: '32px auto 0 auto', maxWidth: '700px'}}>
        <h2 style={{fontSize: '2rem', fontWeight: 700, color: '#232323', marginBottom: '10px'}}>Discover Top Freelance Services</h2>
        <p style={{fontSize: '1.1rem', color: '#555', fontWeight: 400}}>
          Browse categories and find the perfect expert for your project. Fast, secure, and tailored to your needs.
        </p>
      </div>

      {/* features section is for video part */}
      <div className='features'>
        <div className='container'>
          <div className="video-player-wrapper">
            <video width="100%" height="100%"
              src="/img/video3.mp4"
              loop
              muted
              autoPlay>
            </video>
          </div>
          <div className="video-overlay-text">
            <h1>Unlock Your Creative Potential</h1>
            <p>Find the perfect services for your business, from graphic design to marketing and more.</p>
            <button>Explore Services</button>
          </div>
        </div>
      </div>

      {/* Section below video and above features2 */}
      <div className="video-info-section" style={{textAlign: 'center', margin: '40px auto 0 auto', maxWidth: '700px'}}>
        <h2 style={{fontSize: '2rem', fontWeight: 700, color: '#232323', marginBottom: '10px'}}>Why Choose Freelancia?</h2>
        <p style={{fontSize: '1.1rem', color: '#555', fontWeight: 400}}>
          Seamless collaboration, secure payments, and access to top talent worldwide. Join a thriving community and take your projects to the next level.
        </p>
      </div>

      <div className='features2'>
        <div className='container2'>
          <div className="features2-left">
            <h2 className="features2-heading">
              The <span className="features2-highlight">premium</span> freelance<br/>solution for businesses
            </h2>
            <div className="features2-features">
              <div className="features2-feature">
                <span className="features2-icon">✔</span>
                <div>
                  <div className="features2-title">Dedicated hiring experts</div>
                  <div className="features2-desc">Get matched with the right talent for your project's needs.</div>
                </div>
              </div>
              <div className="features2-feature">
                <span className="features2-icon">✔</span>
                <div>
                  <div className="features2-title">Satisfaction guarantee</div>
                  <div className="features2-desc">Order confidently, with guaranteed results and support.</div>
                </div>
              </div>
              <div className="features2-feature">
                <span className="features2-icon">✔</span>
                <div>
                  <div className="features2-title">Advanced management tools</div>
                  <div className="features2-desc">Integrate freelancers into your team and workflow.</div>
                </div>
              </div>
              <div className="features2-feature">
                <span className="features2-icon">✔</span>
                <div>
                  <div className="features2-title">Flexible payment models</div>
                  <div className="features2-desc">Pay per project or hourly for long-term collaboration.</div>
                </div>
              </div>
            </div>
            <button className="features2-btn">Try Now</button>
          </div>

          <div className="features2-right">
            <div className="features2-image-card">
              {/* Illustration from undraw.co */}
              <img className="features2-illustration" src="./img/beautiful3.png" alt="Teamwork" />
              {/* Project Status Badge */}
              <div className="features2-status-badge">
                <span className="features2-status-dot"></span>
                Project Status
                <span className="features2-status-value">92%</span>
              </div>
              {/* Chart/Card Overlay */}
              <div className="features2-chart-card">
                <span className="features2-chart-value">$8,900</span>
                <svg className="features2-chart-svg" width="60" height="28" viewBox="0 0 60 28"><polyline points="0,20 15,10 30,18 45,8 60,12" fill="none" stroke="#3bb77e" strokeWidth="2"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Slide slidesToShow={5} arrowScroll={5}>
        {Sprojects.map(card => (
          <ProjectCard key={card.id} item={card} />
        ))}
      </Slide> */}

      {/* New section for moodboard-like photos - NOW A GRID */}
      <div className="photo-section">
        <div className="container">
          <h2>Inspiring Projects</h2>
          {/* Removed Slide component here */}
          <div className="photo-grid"> {/* New div to act as the grid container */}
            {projects.map(project => (
              <WCard key={project.id} item={{ img: project.img, title: project.cat, desc: project.username }} />
            ))}
          </div>
        </div>
      </div>

      <div className='container3'>
        <div className="container3-quote">
          <span className="container3-icon">💡</span>
          <span className="container3-text">"Creativity is the currency of the future. Start your freelance journey today!"</span>
        </div>
      </div>
    </div>
  );
}
export default Home;//dup