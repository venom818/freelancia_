// import React from "react";
// import "./Footer.scss"
// const Footer = () =>{
//     return(
//         <div className="footer">
//         {/* inside footer */}

//           <div className="container">
//           {/* inside container */}
//              <div className="top">
//                <div className="item">
//                 <h2> Categories</h2>
//                 <span>Graphics Design</span>
//                 <span>Digital Marketing</span>
//                 <span>Writting & Translation</span>
//                 <span>Video & Animatoon</span>
//                 <span>Web Development</span>
//                 <span>UI/UX Designing</span>
//                 <span>Data Scientist</span>
//                </div>

//                <div className="item">
//                 <h2> Resources</h2>
//                 <span>Help & Support</span>
//                 <span>Success stories</span>
//                 <span>Freelancia Services</span>
//                 <span>Blog</span>
//                 <span>Release Note</span>

//                </div>

//                <div className="item">
//                 <h2> Company</h2>
//                 <span>About Us</span>
//                 <span>Patners</span>
//                 <span>Contact Us</span>
//                 <span>Our Impact</span>
//                 <span>Press</span>
//                 <span>Leadership</span>
//                </div>

//                <div className="item">
//                 <h2> For Clients</h2>
//                 <span> How to hire</span>
//                 <span>Project Catalog</span>
//                 <span>Business plus</span>
//                 <span>Direct contracts</span>
//                </div>

//              </div>

// <hr/>
//              <div className="bottom">
//                 <div className="left">
//                     {/* <h2>Freelancia</h2> */}
//                     <span>Freelancia Ltd. 2025</span>
//                 </div>
//                 <div className="right">
//                     <div className="social">
//                         <img src="./img/insta.png" alt="" />
//                         <img src="./img/facebook.png" alt="" />
//                         <img src="./img/twitter.png" alt="" />
//                         <img src="./img/youtube.png" alt="" />
//                         <img src="./img/linkedin.png" alt="" />
//                     </div>
//                     <div className="link">
//                         <span>English</span>
//                     </div>
//                 </div>
//              </div>

//        {/* container ending */}
//           </div>
//         {/* footer ending */}
//         </div>

//     )
// }

// export default Footer;

import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <a href="/categories/graphics-design">Graphics Design</a>
            <a href="/categories/digital-marketing">Digital Marketing</a>
            <a href="/categories/writing-translation">Writing & Translation</a>
            <a href="/categories/video-animation">Video & Animation</a>
            <a href="/categories/web-development">Web Development</a>
            <a href="/categories/ui-ux">UI/UX Designing</a>
            <a href="/categories/data-science">Data Science</a>
          </div>

          <div className="item">
            <h2>Resources</h2>
            <a href="/help-center">Help & Support</a>
            <a href="/success-stories">Success Stories</a>
            <a href="/how-it-works">How Escrow Works</a>
            <a href="/blog">Blog</a>
            <a href="/safety-center">Safety Center</a>
            <a href="/dispute-resolution">Dispute Resolution</a>
          </div>

          <div className="item">
            <h2>Company</h2>
            <a href="/about">About Us</a>
            <a href="/partners">Partners</a>
            <a href="/contact">Contact Us</a>
            <a href="/careers">Careers</a>
            <a href="/press">Press</a>
            <a href="/terms">Terms of Service</a>
            <a href="/privacy">Privacy Policy</a>
          </div>

          <div className="item">
            <h2>Payments</h2>
            <a href="/payment-methods">Payment Methods</a>
            <a href="/escrow-explained">Escrow Explained</a>
            <a href="/fees">Fee Structure</a>
            <a href="/refunds">Refund Policy</a>
            <a href="/payout-options">Payout Options</a>
          </div>
        </div>

        <hr />

        <div className="bottom">
          <div className="left">
            <span>© Freelancia Ltd. {new Date().getFullYear()}</span>
            <a href="/security">Security</a>
            <a href="/accessibility">Accessibility</a>
          </div>
          <div className="right">
            <div className="social">
              <a
                href="https://www.instagram.com/thakur_kunwar2/"
                aria-label="Instagram"
              >
                <img src="/img/insta.png" alt="Instagram" />
              </a>
              <a href="https://facebook.com" aria-label="Facebook">
                <img src="/img/facebook.png" alt="Facebook" />
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <img src="/img/twitter.png" alt="Twitter" />
              </a>
              <a href="https://youtube.com" aria-label="YouTube">
                <img src="/img/youtube.png" alt="YouTube" />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <img src="/img/linkedin.png" alt="LinkedIn" />
              </a>
            </div>
            <div className="link">
              <select aria-label="Language selector">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
