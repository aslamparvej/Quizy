import React from "react";
import "./Header.scss";

const Header = () => {
  let sideNavbarAnimationFlag = true;

  const sideNavbarAnimation = () => {
    const sideNavbar = document.getElementById("sideNavbar");
    if (sideNavbarAnimationFlag) {
      sideNavbar.style.width = "4rem";
      sideNavbarAnimationFlag = false;
    } else {
      sideNavbar.style.width = "22rem";
      sideNavbarAnimationFlag = true;
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
