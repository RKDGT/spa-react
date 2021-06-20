import React from "react";

import _1 from "../../img/9.png";
import _2 from "../../img/Group 44.png";
import _3 from "../../img/Group 56.png";
import _4 from "../../img/Group 57.png";
import _5 from "../../img/Group 86.png";
import _FC1 from "../../img/speed.png";
import _FC2 from "../../img/prototyping.png";
import _FC3 from "../../img/vector.png";
import FeaturePhone from "../../img/feature-phone.png";

import Card from "../ico-description-card/Card";
import "./Feature.css";

function Feature() {
  return (
    <>
      <div className="feature" id="feature">
        <p className="top-header">Trusted companies like</p>
        <div className="top-trusted-companies">
          <img src={_1} alt="nothing" />
          <img src={_2} alt="nothing" />
          <img src={_3} alt="nothing" />
          <img src={_4} alt="nothing" />
          <img src={_5} alt="nothing" />
        </div>
      </div>
      <div className="feature-content">
        <img className="feature-phone" src={FeaturePhone} alt="nothing" />
        <div className="feature-text">
          <p className="feature-text-header">Awasome apps feature</p>
          <p className="text-sub">
            Increase productivity with a simple to-do app, app for managing your
            personal budgets.
          </p>
          <br />
          <Card 
          class="inline-left"
          picture={_FC1} 
          header="Fast Performance" 
          header_color="#f55767"
          description="Get your blood test delivered at home collect a sample from the news your blood tests" 
          />
          <Card 
          class="inline-left"
          picture={_FC2} 
          header="Prototyping"
          header_color="#2563ff" 
          description="Get your blood test delivered at home collect a sample from the news your blood tests" 
          />
          <Card 
          class="inline-left"
          picture={_FC3} 
          header="Vector Editing"
          header_color="#40975f" 
          description="Get your blood test delivered at home collect a sample from the news your blood tests" 
          />
        </div>
      </div>
    </>
  );
}

export default Feature;
