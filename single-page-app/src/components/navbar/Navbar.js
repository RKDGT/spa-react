import React from "react";
import "./Navbar.css";
import Button from "../button/Button";
import Logo from "../logo/Logo";
import RightNav from "../RightNav/RightNav";
function Navbar() {
  const openNavPanel=()=>{
    
  }
  return (
    <nav className="navbar">
      <Logo />
      <RightNav />
    </nav>
  );
}

export default Navbar;
