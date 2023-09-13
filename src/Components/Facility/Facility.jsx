import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Facility.css";
import data from "../../utils/facility.json";
import { sliderSettings } from "../../utils/Common";

const Facility = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth f-container">
        <div className="facility">Facility</div>
        <div className="f-head flexColStart food">
          <span className="blueText">OUR BEST FACILITIES</span>
          <span className="foodText">Facilities in our hotel</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart f-card">
                <img src={card.image} alt="home" />
                <span className="blueText facilityText">{card.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Facility;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter f-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
