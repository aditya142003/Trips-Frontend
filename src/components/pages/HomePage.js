import React from "react";
import Header from "../molecules/common/Header";
import "./HomePage.css";
import NavBar from "../molecules/common/NavBar";
import HomeFeed from "../molecules/HomePage/HomeFeed";
import HomeFact from "../molecules/HomePage/HomeFact";
import HomeStories from "../molecules/HomePage/HomeStories";

function HomePage() {
  return (
    <div className="HomePage__Container">
      <Header />
      <div className="HomePage__Container--content">
        <NavBar tab="Home" />
        <div>
          <HomeStories />
          <HomeFeed />
        </div>
        <HomeFact />
      </div>
    </div>
  );
}

export default HomePage;
