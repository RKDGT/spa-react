import React from "react";

import WorldMap from "../../img/world map.png";

import Slider from "../slider/Slider";
import "./Testimonila.css";

function Testimonila() {
  return (
    <>
      <div className="testimonila" id="testimonila">
        <img className="testimonila-picture" src={WorldMap} alt="nothing" />
        <div className="testimonila-main-content">
          <h2 className="testimonila-main-content-header-title">
            Meet Client Satisfaction by using product
          </h2>
          <p className="testimonila-main-content-header-description">
            The rise of mobile devices transforms the way we consume information
            entirely and the world's most elevant channels such as Facebook
          </p>
          <Slider />
        </div>
      </div>
    </>
  );
}

export default Testimonila;
