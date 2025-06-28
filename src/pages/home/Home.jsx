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
      <h1>Popular Services Provided By Us</h1>
      {/* This Slide is for the 'cards' section */}
      <Slide slidesToShow={5} autoplay={true}>
        {cards.map(card => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>

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

      <div className='features2'>
        <div className='container2'>
          <div className="left">
            <h2>Empower Your Vision, Hire the Best</h2>
            <p>Connect with top freelancers and bring your ideas to life. From design to development, marketing to crypto payments—your next project starts here.</p>
            <h2>Transparent, Secure, and Crypto-Ready</h2>
            <p>Experience seamless project management and payments with our secure, blockchain-powered platform. Your talent, your terms, your wallet.</p>
            <button className="cta-btn">Get Started Now</button>
          </div>

          <div className="right">
            <div className='containerright'>
            <img src='./img/girl.jpg'>
            </img>
            </div>
          </div>
        </div>
      </div>

      <Slide slidesToShow={5} arrowScroll={5}>
        {Sprojects.map(card => (
          <ProjectCard key={card.id} item={card} />
        ))}
      </Slide>

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
       
    </div>
  );
}
export default Home;//dup