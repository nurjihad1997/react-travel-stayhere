import React from "react";
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="mini-title">STAYHERE.com</div>
            <h1>
              Time To Take <br />a Vacation
            </h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">
              feel the best service at our inn,
            </span>
            <span className="secondaryText">
              at low prices and guaranteed satisfaction
            </span>
          </div>
          <div className="flexCenter">
            <button className="button buttonSign">Sign In</button>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
            <div className="image-container">
                <img src="./Hero.png" alt="hero" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
