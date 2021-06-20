import React from "react";
import Design from "../../img/design-and-build.png"

import Button from "../button/Button"
import "./Designed.css";

function Designed(args) {
  return (
    <>
      <div className="designed-built-by">
        <img className="designed-built-by-img" src={Design} alt="nothing" />
        <div className="designed-built-by-text">
          <p className="feature-text-header">
            Designed & built by the latest code integration
          </p>
          <p className="smart-jackpot-header-description">
            The rise of mobile devices transforms the way we consume information
            entirely and te world's most elevant channels such as Facebook
          </p>
          <Button text="Learn more"/>
        </div>
      </div>
    </>
  );
}

export default Designed;
