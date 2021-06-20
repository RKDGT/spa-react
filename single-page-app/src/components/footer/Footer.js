import React from "react";
import "./Footer.css";
import Logo from "../logo/Logo";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-header">
        <Logo />
      </div>
      <div className="footer-nav-links">
        <a href="#header-main">Home</a>
        <a href="#feature">Key Features</a>
        <a href="#why-us">Why us</a>
        <a href="#pricing">Pricing</a>
        <a href="#testimonila">Testiminial</a>
        <a href="#FAQ">FAQ</a>
      </div>
      <div className="footer-sub-links">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f fa-3x"></i>
        </a>
        <a
          href="https://twitter.com/?lang=uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter fa-3x"></i>
        </a>
        <a href="https://slack.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-slack-hash fa-3x"></i>
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github-square fa-3x"></i>
        </a>
      </div>
      <div className="footer-polite">
        <p className="text-sub">
          Copyright© Arifur Rahman Tushar 2019. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
