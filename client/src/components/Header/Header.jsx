import React from "react";
import "./Header.scss";

const Header = () => {
  let sideNavbarAnimationFlag = true;

  const sideNavbarAnimation = () => {
    const sideNavbar = document.getElementById("sideNavbar");
    const logo = document.getElementById("logo");

    if (sideNavbarAnimationFlag) {
      sideNavbar.style.width = "4rem";
      logo.style.fontSize = "0";
      sideNavbarAnimationFlag = false;
    } else {
      sideNavbar.style.width = "22rem";
      sideNavbarAnimationFlag = true;
      logo.style.fontSize = "inherit";
    }
  };

  return (
    <div className="header-container">
      <header className="header">
        <div className="header-left-container">
          <span className="side-Navbar-btn" onClick={sideNavbarAnimation}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div className="header-right-container"></div>
      </header>
    </div>
  );
};

export default Header;
