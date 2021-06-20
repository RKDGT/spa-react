import React from "react";
import "./DownloadApp.css";
import PhoneBack from "../../img/Vector Smart Object.png";

import PlayMarket from "../../img/play-market.png";
import AppStore from "../../img/download-on-the-app-store-apple.png";

function DownloadApp() {
  return (
    <div className="download-our-app">
      <div className="download-our-app-main-content">
        <div className="download-our-app-header">
          <p className="download-our-app-header-title"> Download our App now ! </p>
          <p className="download-our-app-header-description">
            The rise of mobile devices transforms the way we consume inform The
            rise of mobile devices transforms the way we consume inform
          </p>
        </div>
        <div className="download-our-app-links">
          <a
            className="our-app-links"
            target="_blank"
            rel="noopener noreferrer"
            href="https://play.google.com/store?utm_source=emea_Med&utm_medium=hasem&utm_content=071614&utm_campaign=Evergreen&pcampaignid=MKT-EG-emea-ua-all-Med-hasem-py-Evergreen-071614-1%7CONSEM_kwid_43700007031591568&gclid=CjwKCAjwn6GGBhADEiwAruUcKiID6QdXh7OoA8Kj7p2F79Ov_Wcq587li3we9j9Q56aS1HsyB3znmxoC6KcQAvD_BwE&gclsrc=aw.ds"
          >
            <img src={PlayMarket} alt="nothing" />
          </a>
          <a
            className="our-app-links"
            target="_blank"
            rel="noopener noreferrer"
            href="https://apps.apple.com/ua/app/apple-store/id375380948?l=en"
          >
            <img src={AppStore} alt="nothing" />
          </a>
        </div>
      </div>
      <img src={PhoneBack} className="download-our-app-imj" alt="nothing" />
    </div>
  );
}

export default DownloadApp;
