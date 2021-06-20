import React from "react";

import "./Slide.css";

const rait = (num) => {
  let res = [];
  for (let i = 0; i < 5; i++) {
    if (i < parseInt(num)) {
      res.push(
        <i className="fas fa-star" style={{ color: "yellow" }} key={i}></i>
      );
    } else {
      res.push(<i className="fas fa-star" key={i}></i>);
    }
  }
  return res;
};

function Slide(args) {
  return (
    <div className={`slider-item ${args.type}`}>
      <div className="slider-item-star-rait">{rait(args.rait)}</div>
      <h5 className="slider-item-header"> {args.commnetTitle} </h5>
      <p className="slider-item-description">{args.commentDescription}</p>
      <div className="slider-item-footer">
        <div className="slider-item-footer-user">
            <img
              className="slider-item-user-pict"
              src={args.userPict}
              alt="nothing"
            ></img>
          <div className="slider-item-user-personal-info">
            <h5 className="slider-item-user-personal-info-header">
              {args.userName}
            </h5>
            <p className="text-sub">
              {args.userIncumbency}
            </p>
          </div>
        </div>
        <div className="slider-item-navigation-buttons">
          <button
            className={`slider-prev-item ${args.type}`}
            onClick={() => {
              args.toPrev();
            }}
          >
            <i className="fas fa-arrow-left"> </i>
          </button>
          <hr className="vertical" />
          <button
            className={`slider-next-item  ${args.type}`}
            onClick={() => {
              args.toNext();
            }}
          >
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slide;
