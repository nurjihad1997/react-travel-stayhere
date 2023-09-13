import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Services.css";
import data from "../../utils/services.json";
import { sliderSettings } from "../../utils/Common";

const FoodServices = () => {
  return (
    <section className="s-wrapper">
      <div className="paddings innerWidth s-container">
        <div className="services">Services</div>
        <div className="s-head flexColStart food">
          <span className="blueText">MENU ROOM</span>
          <span className="foodText">Special BedRoom</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart s-card">
                <img src={card.image} alt="home" />
                <span className="blueText">{card.name}</span>
                <span className="secondaryText">{card.description}</span>
                <span className="secondaryText s-price">
                  <span style={{color: "red"}}>{card.price}</span>
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default FoodServices;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter s-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};

