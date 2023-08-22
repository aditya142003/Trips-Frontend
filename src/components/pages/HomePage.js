import React, { useState, useEffect, useContext } from "react";
import Header from "../molecules/Common/Header";
import NavBar from "../molecules/Common/NavBar";
import HomeFeed from "../molecules/Home/Feed";
import HomeFact from "../molecules/Home/Fact";
import HomeStories from "../molecules/Home/Stories";
import { PostFetch, GetFetch } from "../../api/Fetch";
import DataContext from "../../context/DataContext";
function HomePage() {
  const { data, setData } = useContext(DataContext);

  useEffect(() => {
    fetching();
  }, []);

  const fetching = async () => {
    const data = await GetFetch("GET", "http://localhost:3000/api/v1/posts/");
    console.log(data);
  };

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
