import React from "react";
import Phone from "../../img/Phone copy 4.png";
import _FC1 from "../../img/speed.png";
import _FC2 from "../../img/prototyping.png";

import Card from "../ico-description-card/Card";
import Button from "../button/Button";
import "./UltimateFeature.css";

function UltimateFeature(args) {
  return (
    <>
      <div className="ultimate-features-that-we-built">
        <div className="ultimate-features-that-we-built-text">
          <p className="ultimate-features-that-we-built-text-header">
            Ultimate features that we built
          </p>
          <p className="ultimate-features-that-we-built-text-sub">
            The rise of mobile devices transforms the way we consume information
            entirely and the world's most elevant channels such as Facebook.
          </p>
          <br />
          <div className="why-choose-us-cards">
            <Card
              class="incolumn-left"
              picture={_FC1}
              header="Fast Performance"
              header_color="black"
              description="Get your blood test delivered at home collect a sample from the news your blood tests"
            />
            <Card
              class="incolumn-left"
              picture={_FC2}
              header="Fast Performance"
              header_color="black"
              description="Get your blood test delivered at home collect a sample from the news your blood tests"
            />
          </div>
          <div className="why-choose-us-cards">
            <Card
              class="incolumn-left"
              picture={_FC1}
              header="Fast Performance"
              header_color="black"
              description="Get your blood test delivered at home collect a sample from the news your blood tests"
            />
            <Card
              class="incolumn-left"
              picture={_FC2}
              header="Fast Performance"
              header_color="black"
              description="Get your blood test delivered at home collect a sample from the news your blood tests"
            />
          </div>
          <Button text="See-all" />
        </div>
        <img
          className="ultimate-features-that-we-built-phone"
          src={Phone}
          alt="nothing"
        />
      </div>
    </>
  );
}

export default UltimateFeature;
