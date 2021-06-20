import React, { useState } from "react";
import "./RightNav.css";
import Button from "../button/Button";
import Hamburger from "hamburger-react";
function RightNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={`hambg ${open ? "show" : ""}`}>
        <Hamburger toggled={open} toggle={() => setOpen(!open)} />
      </div>

      <div className={`nav-items ${open ? "show" : ""}`}>
        <a href="#header-main">Home</a>
        <a href="#feature">Key Features</a>
        <a href="#why-us">Why us</a>
        <a href="#pricing">Pricing</a>
        <a href="#testimonila">Testiminial</a>
        <a href="#FAQ">FAQ</a>
        <Button text={"Try for free"} />
      </div>
    </>
  );
}

export default RightNav;
