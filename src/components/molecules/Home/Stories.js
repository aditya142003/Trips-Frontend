import React from "react";
import Story from "../Common/20221215_201458.jpg";

function HomeStories() {
  return (
    <div className="Stories">
      <div>
        <div className="Stories__story">
          <img src={Story} className="Stories__story--Image" />
        </div>
        <div className="Stories__profile">
          <img src={Story} className="Stories__profile--image" />
        </div>
      </div>
    </div>
  );
}

export default HomeStories;
