import React from "react";
import HomeActionButtons from "./HomeActionButtons";

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
    </div>
  );
};
export default Home;
