import React, { useState, useEffect, useContext } from "react";
import Header from "../molecules/Common/Header";
import NavBar from "../molecules/Common/NavBar";
import HomeFeed from "../molecules/Home/Feed";
import HomeFact from "../molecules/Home/Fact";
import HomeStories from "../molecules/Home/Stories";
import DataContext from "../../context/DataContext";
import fetchingCurrUser from "../../api/SetUserDetail";

function HomePage() {
  const [currUserId, setCurrUserId] = useState("");
  const [countRender, setcountRender] = useState(0);
  const { currUser, setCurrUser } = useContext(DataContext);

  useEffect(() => {
    setCurrUserId(JSON.parse(localStorage.getItem("currUserId")));
  }, []);

  useEffect(() => {
    setcountRender(countRender + 1);
    if (countRender != 0) {
      const data = new Promise((res, rej) => {
        res(fetchingCurrUser(currUserId));
        rej(fetchingCurrUser(currUserId));
      });
      data
        .then((dataRec) => {
          console.log("Home", dataRec);
          setCurrUser(dataRec);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [currUserId]);

  return (
    <div className="HomePage__Container">
      <Header />
      <NavBar tab="Home" />
      <div className="HomePage__Container--content">
        <div className="HomePage__midCont">
          <HomeStories />
          <HomeFeed />
        </div>
      </div>
      <HomeFact />
    </div>
  );
}

export default HomePage;
