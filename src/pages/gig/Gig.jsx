import React from "react";
import "./Gig.scss";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Don't forget to import its CSS!
const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadCrumbs">FREELANCIA > GRAPHICS & DESIGN ></span>
          <h1>Photo Manipulaiton with cool looking effects</h1>

          <div className="user">
            <img
              className="pp"
              src="../img/abin1.png"
              alt=""
            />
            <span>Venom Gahatraj</span>
            <div className="stars">
              <img src="/img/5stars.png" alt="" />
              {/* <span>5</span> */}
            </div>
          </div>

          {/* Replaced Slider with Carousel */}
          <Carousel
            // Equivalent to slidesToShow={1} in infinite-react-carousel (default behavior)
            // Equivalent to arrowScroll={1} (default behavior)
            className="slider" // Keep your custom class for styling
            showArrows={true} // Show navigation arrows
            showStatus={false} // Hide "1 of 3" status
            showIndicators={true} // Show pagination dots (set to false if you don't want them)
            showThumbs={false} // Hide thumbnail navigation
            infiniteLoop={true} // Enable infinite looping
            autoPlay={true} // Enable autoplay (optional)
            interval={3000} // Autoplay interval in ms (optional)
            // No direct 'centerMode' for multiple visible items like infinite-react-carousel's specific layout
            // For the "peeking" effect, you will need custom CSS on .carousel .slide
          >
            <div>
              <img
                src="../img/camoflague.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="../img/carspeed.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="../img/timetravel.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="../img/baba.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="../img/travel.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="../img/venomart2.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="../img/healthyhomes.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="../img/thanos.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="../img/.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="../img/haldi.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="../img/burger.jpg"
                alt=""
              />
            </div>
            
            
          </Carousel>

          <h2>About this gig</h2>
          <p>
            I use an AI program to create images based on text prompts. This
            means I can help you create a vision you have through a textual
            description of your scene without requiring any reference images.
            Some things I've found it often excels at are: Character portraits
            (e.g., a picture to go with your Dnd character), Landscapes (e.g.,
            wallpapers, illustrations to compliment a story), Logos (e.g.,
            Esports team, business, profile picture). You can be as vague or as
            descriptive as you want. Being more vague will allow the AI to be
            more creative, which can sometimes result in unique images. You can
            also be incredibly precise if you have a clear image of what you
            want in mind. All of the images I create are original and will be
            found nowhere else. If you have any questions, you are more than
            welcome to send me a message.
          </p>

          <div className="seller">
            <h2>About The Freelancer</h2>
            <div className="user">
              <img
                src="/img/abin1.png"
                alt=""
              />
              <div className="info">
                {" "}
                {/* Added info div for better alignment */}
                <span>Venom Gahatraj</span>
                <div className="stars">
                  <img src="/img/5stars.png" alt="" />
                  {/* <span>5</span> */}
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item">
                  <span className="title">Member Since</span>
                  <span className="desc">August 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Language</span>
                  <span className="desc">English</span>
                
                </div>
              </div>
              <hr /> {/* Moved hr inside the box for better visual grouping */}
              <p>
                My name is Abin Gahatraj. I enjoy creating AI-generated art in my
                spare time. I have a lot of experience using AI programs, and that
                means I know what to prompt the AI with to get great and
                incredibly detailed results.
              </p>
            </div>
          </div>

          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb"
                  alt=""
                />
                <div className="info">
                  <span>Thakur Kunwar</span>
                  <div className="country">
                    {" "}
                    {/* Corrected class name to 'country' */}
                    <img src="https://flagpedia.net/data/flags/icon/96x54/us.png" alt="" />
                    <span>Antartica</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/5stars.png" alt="" />
                {/* <span>5</span> */}
              </div>
              <p>
                I just want to say that wet with ai was the first and after this
                the only artist I'll be using on freeancia. Communication was amazing
                each and every day they sent me images that I was free to request
                changes to. They listened, understood, and delivered above and beyond my expectations.
                I absolutely recommend this gig and know already that I will be back.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb"
                  alt=""
                />
                <div className="info">
                  <span>Sumit Kawar</span>
                  <div className="country">
                    <img src="https://flagpedia.net/data/flags/icon/96x54/us.png" alt="" />{" "}
                    {/* Added missing image src */}
                    <span>Sahara Desert</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/5stars.png" alt="" />
                {/* <span>5</span> */}
              </div>
              <p>
                I just want to say that wet with ai was the first and after this
                the only artist I'll be using on freeancia. Communication was amazing
                each and every day they sent me images that I was free to request
                changes to. They listened, understood, and delivered above and beyond my expectations.
                I absolutely recommend this gig and know already that I will be back.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="price">
            <h3>AI generated image</h3>
            <h2>$ 59.99</h2>
          </div>
          <p>
            I will create a unique high quality AI generated image
            based on a description that you give me.
          </p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>2 Days Delivery</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />{" "}
              {/* Changed icon to represent revisions */}
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="/img/check.png" alt="" />{" "}
              {/* Changed icon for features */}
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <img src="/img/check.png" alt="" />
              <span>Artwork delivery</span>
            </div>
            <div className="item">
              <img src="/img/check.png" alt="" />
              <span>Image upscaling</span>
            </div>
            <div className="item">
              <img src="/img/check.png" alt="" />
              <span>Commercial Use</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Gig;