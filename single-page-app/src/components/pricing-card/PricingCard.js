import React from "react";

import "./PricingCard.css";

let isFree = (val) => {
  if (val) {
    return <button className="try-for-free-btn">Start free trial</button>;
  }
  return <button className="try-for-free-btn">Subscribe now</button>;
};

function PricingCard(args) {
  return (
    <div className="pricing-card">
      <div className="pricing-card-top">
        <p className="pricing-card-top-price-month">
          <span className="pricing-card-top-price"> {args.price} </span> /
          {args.per}
        </p>
        <p className="text-sub">{args.toWhom}</p>
      </div>
      <div className="pricing-card-buttom">
        {args.listWhatInlude.map((element,index) => {
          return (
            <p className="text-sub" key={index}>
              {element}
            </p>
          );
        })}
        {isFree(args.isFree)}
        <br />
        {args.otherOptionLinks.map((element, index) => {
          if (element.link && element.display) {
            return (
              <a href={element.link} className="link-sub" key={index}>
                {element.display}
              </a>
            );
          }
          return (<></>);
        })}
      </div>
    </div>
  );
}

export default PricingCard;
