import React from "react";
import Navbar from "../navbar/Navbar";
import "./Header.css";
import Button from "../button/Button";
import PhoneHeader from "../../img/phone-header.png";
function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Navbar className="navbar" />
        <div className="header-main" id="header-main">
          <div className="header-main-text">
            <p className="header-main-text-1-editiors-choice">
              <i className="far fa-check-circle"></i> #1 Editiors Choice App of
              2020
            </p>
            <p className="header-main-text-best-app-for">
              Best app for your modern lifestyle
            </p>
            <p className="text-sub">
              Increase productivity with a simple to-do app, app for managing
              your personal budgets.
            </p>
            <div className="header-main-text-buttons">
              <Button text={"Try for free"} />
              <a href="#lol"> Watch demo video </a>
            </div>
          </div>
          <img
            className="header-main-phone-pict"
            src={PhoneHeader}
            alt="nothing"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
