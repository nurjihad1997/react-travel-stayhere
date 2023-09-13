import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-links paddings flexCenter innerWidth">
        <div className="footer-links-wrapper">
          <div className="footer-links-item">
            <h2>About Us</h2>
            <a href="/">How it Works</a>
            <a href="/">Testimonials</a>
            <a href="/">Careers</a>
            <a href="/">Investors</a>
            <a href="/">Term of Services</a>
          </div>
          <div className="footer-links-item">
            <h2>Social Media</h2>
            <a href="/">Instagram</a>
            <a href="/">Twitter</a>
            <a href="/">Youtube</a>
            <a href="/">Facebook</a>
            <a href="/">TikTok</a>
          </div>
        </div>
        <div className="footer-links-wrapper">
          <div className="footer-links-item">
            <h2>Solutions</h2>
            <a href="/">Features</a>
            <a href="/">Pricing</a>
            <a href="/">Interpice oofer</a>
            <a href="/">Healthy place</a>
          </div>
          <div className="footer-links-item">
            <h2>Company</h2>
            <a href="/">Story</a>
            <a href="/">Malang, East Java, Indonesian</a>
            <a href="/">stayhere@mail.com</a>
            <a href="/">+62 8880-xxxx</a>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="social-media">
        <div className="social-media-wrapper">
          <div className="footer-logo">
            <img src="./Logo.png" alt="" width={120} />
          </div>
          <small className="website-rights">Copyright 2022 Landing Page</small>
        </div>
      </section>
    </div>
  );
};

export default Footer;
