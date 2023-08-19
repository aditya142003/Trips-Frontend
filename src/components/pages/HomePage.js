import React, { useState, useEffect } from "react";
import Header from "../molecules/Common/Header";
import NavBar from "../molecules/Common/NavBar";
import HomeFeed from "../molecules/Home/Feed";
import HomeFact from "../molecules/Home/Fact";
import HomeStories from "../molecules/Home/Stories";

function HomePage() {
  return (
    <div className="HomePage__Container">
      <Header />
      <div className="HomePage__Container--content">
        <NavBar tab="Home" />
        <div className="HomePage__midCont">
          <HomeStories />
          <HomeFeed />
        </div>
        <HomeFact />
      </div>
    </div>
  );
}

export default HomePage;
