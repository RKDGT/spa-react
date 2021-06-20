import React, { useEffect, useState } from "react";

import user_1 from "../../img/hz1.png";
import user_2 from "../../img/hz2.png";
import user_3 from "../../img/h3.png";
import user_4 from "../../img/hz4.png";

import Slide from "../Slide/Slide";
import "./Slider.css";

function Slider() {
  const [slides, setSlides] = useState([{}]);

  const toNext = () => {
    const indexCurrent = slides.findIndex((el) => {
      if (el.type !== undefined) {
        return el.type === "shown";
      }
      return -1;
    });
    if (indexCurrent !== -1) {
      slides[indexCurrent].type = "";
      if (indexCurrent + 1 < slides.length) {
        slides[indexCurrent + 1].type = "shown";
      } else {
        slides[0].type = "shown";
      }
      console.log(slides);
      setSlides([...slides]);
    }
  };
  const toPrev = () => {
    const indexCurrent = slides.findIndex((el) => {
      if (el.type !== undefined) {
        return el.type === "shown";
      }
      return -1;
    });
    if (indexCurrent !== -1) {
      slides[indexCurrent].type = "";
      if (indexCurrent - 1 > -1) {
        slides[indexCurrent - 1].type = "shown";
      } else {
        slides[slides.length - 1].type = "shown";
      }
      setSlides([...slides]);
    }
  };

  useEffect(() => {
    setSlides([
      {
        type: "shown",
        rait: "4",
        commnetTitle: "User friendly & Customizable",
        commentDescription:
          "Bring to the table win-win survival strategies to ensure proactBring to the table win-win survival strategies to ensure proact",
        userPict: user_1,
        userName: "Zoltan Nemeth",
        userIncumbency: "CEO of Pixler Lab",
      },
      {
        type: "",
        rait: "3",
        commnetTitle: "User friendly & Customizable",
        commentDescription:
          "Bring to the table win-win survival strategies to ensure proactBring to the table win-win survival strategies to ensure proact",
        userPict: user_2,
        userName: "NoName",
        userIncumbency: "CEO of Pixler Lab",
      },
      {
        type: "",
        rait: "4",
        commnetTitle: "User friendly & Customizable",
        commentDescription:
          "Bring to the table win-win survival strategies to ensure proactBring to the table win-win survival strategies to ensure proact",
        userPict: user_3,
        userName: "NoName2",
        userIncumbency: "CEO of Pixler Lab",
      },
      {
        type: "",
        rait: "2",
        commnetTitle: "User friendly & Customizable",
        commentDescription:
          "Bring to the table win-win survival strategies to ensure proactBring to the table win-win survival strategies to ensure proact",
        userPict: user_4,
        userName: "NoName3",
        userIncumbency: "CEO of Pixler Lab",
      },
    ]);
  }, []);
  return (
    <>
      <div className="slider">
        <div className="slider-items">
          {slides.map((val, index) => {
            return (
              <Slide
                toPrev={toPrev}
                toNext={toNext}
                type={val.type}
                rait={val.rait}
                commnetTitle={val.commnetTitle}
                commentDescription={val.commentDescription}
                userPict={val.userPict}
                userName={val.userName}
                userIncumbency={val.userIncumbency}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Slider;
