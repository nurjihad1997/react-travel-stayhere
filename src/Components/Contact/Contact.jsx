import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth c-container">
        <div className="flexColCenter inner-container">
          <span className="contactText">Contact with STAYHERE</span>
          <span className="secondaryText">
            Do you want to discuss with us?
            <br />
            contact us immediately
          </span>
          <button className="button">
            <a href="mailto:jihadfirman97@gmail.com">Contact Me</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
