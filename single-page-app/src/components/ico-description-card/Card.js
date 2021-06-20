import React from "react";
import "./Card.css";

function Card(args) {
  return (
    <>
      <div className={args.class} style={{ color: args.header_color }}>
        <img className={`${args.class}-img`} src={args.picture} alt="nothing"></img>
        <div className={`${args.class}-text`}>
          <h5 className="header-sub"> {args.header} </h5>
          <p className="text-sub">{args.description}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
