import React from "react";
import Header from "../Header/Header";

import './Home.scss'

const Home = () => {
  return (
    <div className="app-container">
      <div className="quiz-contaner">
        <div className="side-navbar" id="sideNavbar">
        <div className="title-container">
            <h1><span><i class="fa-regular fa-circle-question"></i></span><span id="logo"> Quizy</span></h1>
          </div>
        </div>
        <div className="right-side-conatiner">
          <Header />
          <div className="main-container-div" id="mainContainerDiv"></div>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
