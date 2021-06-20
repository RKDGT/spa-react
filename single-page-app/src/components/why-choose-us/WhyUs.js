import React from "react";
import _FC1 from "../../img/speed.png";
import _FC2 from "../../img/prototyping.png";
import _FC3 from "../../img/vector.png";

import Card from "../ico-description-card/Card";
import "./WhyUs.css";

function WhyUs(args) {
  return (
    <>
      <div className="why-choose-us" id="why-us">
        <div className="why-choose-us-header">
          <h2 className="why-choose-us-header-title">
            Why you should choose our app
          </h2>
          <p className="why-choose-us-header-description">
            The rise of mobile devices transforms the way we consume information
            entirely and the world's most elevant channels such as Facebook
          </p>
        </div>
        <div className="why-choose-us-cards">
          <Card
            class="incolumn-center"
            picture={_FC1}
            header="Fast Performance"
            header_color="#f55767"
            description="Get your blood test delivered at home collect a sample from the news your blood tests"
          />
          <Card
            class="incolumn-center"
            picture={_FC2}
            header="Prototyping"
            header_color="#2563ff"
            description="Get your blood test delivered at home collect a sample from the news your blood tests"
          />
          <Card
            class="incolumn-center"
            picture={_FC3}
            header="Vector Editing"
            header_color="#40975f"
            description="Get your blood test delivered at home collect a sample from the news your blood tests"
          />
        </div>
        <div className="why-choose-us-cards">
          <Card
            class="incolumn-center"
            picture={_FC1}
            header="Fast Performance"
            header_color="#f55767"
            description="Get your blood test delivered at home collect a sample from the news your blood tests"
          />
          <Card
            class="incolumn-center"
            picture={_FC2}
            header="Prototyping"
            header_color="#2563ff"
            description="Get your blood test delivered at home collect a sample from the news your blood tests"
          />
          <Card
            class="incolumn-center"
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

export default WhyUs;
