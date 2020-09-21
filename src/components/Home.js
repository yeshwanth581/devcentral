import React from "react";
import HomeActionButtons from "./HomeActionButtons";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <div className="brand-title">DevCentral.</div>
        <p className="brand-subtitle">
          One stop central to become a Complete Developer.
        </p>
      </div>
      <HomeActionButtons />
      <Footer />
    </div>
  );
};
export default Home;
