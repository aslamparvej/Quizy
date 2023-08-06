import "./App.scss";
// import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app-container">
      <div className="quiz-contaner">
        <div className="side-navbar" id="sideNavbar"></div>
        <div className="right-side-conatiner">
          <Header />
          <div className="main-container-div" id="mainContainerDiv"></div>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
