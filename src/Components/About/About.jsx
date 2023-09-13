import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="a-wrapper">
      <div className="about">About Me</div>
      <div className="paddings flexCenter innerWidth a-container">
        {/* left side */}
        <div className="about-left">
          <div className="image-about">
            <img src="./About.png" alt="about" />
          </div>
        </div>
        {/* left side */}
        <div className="flexColStart about-right">
          <div className="about-title">
            <div className="title">STAYHERE.com</div>
            <h1>Hotels with 5 star class</h1>
          </div>
          <div className="flexColStart">
            <span className="about-des">
              stayhere hotel provides everything you need, from family rooms,
            </span>
            <span className="about-des">
              important meetings, beautiful and classy gardens,
            </span>
            <span className="about-des">to healthy food and drinks</span>
          </div>
          <div className="flexCenter">
            <button className="button buttonSign">View More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
