import React from "react";
import Header from "../molecules/Common/Header";
import NavBar from "../molecules/Common/NavBar";

function ExplorePage() {
  return (
    <div className="ExplorePage__Container">
      <Header />
      <div className="ExplorePage__Container--content">
        <NavBar tab="Explore" />
      </div>
    </div>
  );
}

export default ExplorePage;
