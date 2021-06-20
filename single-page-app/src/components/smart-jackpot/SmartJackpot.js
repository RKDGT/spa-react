import React from "react";

import _FC1 from "../../img/speed.png";
import _FC2 from "../../img/prototyping.png";
import _FC3 from "../../img/vector.png";

import Card from "../ico-description-card/Card";
import "./SmartJackpot.css";

function SmartJackpot(args) {
  return (
    <>
      <div className="smart-jackpot">
        <div className="smart-jackpot-header">
          <p className="smart-jackpot-header-title">
            Smart jackpots that you may love this anytime & anywhere
          </p>
          <p className="smart-jackpot-header-description">
            The rise of mobile devices transforms the way we consume information
            entirely and the world's most elevant channels such as Facebook
          </p>
        </div>
        <div className="smart-jackpot-cards">
          <Card
            class="incolumn-left"
            picture={_FC1}
            header="Fast Performance"
            header_color="#f55767"
            description="Get your blood test delivered at home collect a sample from the news your blood tests"
          />
          <Card
            class="incolumn-left"
            picture={_FC2}
            header="Prototyping"
            header_color="#2563ff"
            description="Get your blood test delivered at home collect a sample from the news your blood tests"
          />
          <Card
            class="incolumn-left"
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

export default SmartJackpot;
