import React from "react";

import Tab from "../tab/Tab";
import PricingCard from "../pricing-card/PricingCard";
import "./Pricing.css";

function Pricing(args) {
  return (
    <>
      <div id="pricing">
        <h2 className="why-choose-us-header-title">
          Get awesome features, without extra charges
        </h2>
        <p className="why-choose-us-header-description">
          The rise of mobile devices transforms the way we consume information
          entirely and the world's most elevant channels such as Facebook
        </p>
        <Tab />
        <div id="Monthly" className="tabcontent">
          <div className="pricing-cards">
            <PricingCard
              price="$0"
              per="month"
              toWhom="For small teams or office"
              listWhatInlude={[
                "Drag & Drop Builder",
                "1,000's of Templates",
                "Blog Support Tools",
                "eCommerce Store",
                "Start free trial",
              ]}
              isFree={true}
              otherOptionLinks={[]}
            />
            <PricingCard
              price="$99"
              per="month"
              toWhom="For small teams or office"
              listWhatInlude={[
                "Drag & Drop Builder",
                "1,000's of Templates",
                "Blog Support Tools",
                "eCommerce Store",
                "Start free trial",
              ]}
              isFree={true}
              otherOptionLinks={[
                {
                  link: "#",
                  display: "Or Start 14 days trial",
                },
              ]}
            />
          </div>
        </div>
        <div id="Annually" className="tabcontent">
          <div className="pricing-cards">
            <PricingCard
              price="Hz what must be here"
              per="month"
              toWhom="For small teams or office"
              listWhatInlude={[
                "Drag & Drop Builder",
                "1,000's of Templates",
                "Blog Support Tools",
                "eCommerce Store",
                "Start free trial",
              ]}
              isFree={true}
              otherOptionLinks={[]}
            />
            <PricingCard
              price="Hz what must be here"
              per="month"
              toWhom="For small teams or office"
              listWhatInlude={[
                "Drag & Drop Builder",
                "1,000's of Templates",
                "Blog Support Tools",
                "eCommerce Store",
                "Start free trial",
              ]}
              isFree={true}
              otherOptionLinks={[]}
            />
            <PricingCard
              price="Hz what must be here"
              per="month"
              toWhom="For small teams or office"
              listWhatInlude={[
                "Drag & Drop Builder",
                "1,000's of Templates",
                "Blog Support Tools",
                "eCommerce Store",
                "Start free trial",
              ]}
              isFree={true}
              otherOptionLinks={[]}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
