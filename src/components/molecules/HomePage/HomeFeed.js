import React from "react";
import "./HomeFeed.css";
import Like from "@mui/icons-material/FavoriteBorderOutlined";
import Comment from "@mui/icons-material/ChatBubbleOutlineRounded";
import Save from "@mui/icons-material/BookmarkBorderOutlined";
import Options from "@mui/icons-material/MoreHorizRounded";
import Share from "@mui/icons-material/SendRounded";
import Post from "../common/20221215_201458.jpg";

function HomeFeed() {
  let arr = [1, 1, 1, 1, 1];
  return (
    <div>
      {arr.map((e) => {
        return (
          <div className="HomeFeed__container">
            <div className="HomeFeed__headingCont">
              <div className="HomeFeed__container--profile">
                <img
                  src={Post}
                  className="HomeFeed__container--profile--image"
                />
              </div>
              <div className="HomeFeed__container--profilename">
                <div>
                  <span>Aditya Bhatnagar</span>
                  <span className="HomeFeed__time">3hr Ago</span>
                </div>
                <div>Udaipur, India</div>
              </div>
              <Options fontSize="inherit" className="HomeFeed__icon"></Options>
            </div>

            <div className="HomeFeed__container--Postimage">
              <img src={Post} className="HomeFeed__container--image" />
            </div>
            <div className="HomeFeed__container--options">
              <div>
                <Like fontSize="inherit" className="HomeFeed__icon"></Like>
                <Comment
                  fontSize="inherit"
                  className="HomeFeed__icon"
                ></Comment>
                <Share fontSize="inherit" className="HomeFeed__icon"></Share>
              </div>
              <div>
                <Save fontSize="inherit" className="HomeFeed__icon"></Save>
              </div>
            </div>
            <div className="HomeFeed__container--caption">
              <div className="HomeFeed__likes">202 likes</div>
              <div className="HomeFeed__caption">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
            <div className="HomeFeed__container--comments"></div>
          </div>
        );
      })}
    </div>
  );
}

export default HomeFeed;
