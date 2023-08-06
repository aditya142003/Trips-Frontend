import React, { useState } from "react";
import "./HomeFeed.css";
import Like from "@mui/icons-material/FavoriteBorderOutlined";
import LikeFill from "@mui/icons-material/FavoriteOutlined";
import Comment from "@mui/icons-material/ChatBubbleOutlineRounded";
import Save from "@mui/icons-material/BookmarkBorderOutlined";
import Options from "@mui/icons-material/MoreHorizRounded";
import Share from "@mui/icons-material/SendRounded";
import Post from "../common/20221215_201458.jpg";

function HomeFeed() {
  let CommentObj = [
    {
      Id: "1",
      PostId: "1",
      Comment: "Hello",
      CommentLikes: "5",
    },
    {
      Id: "2",
      PostId: "1",
      Comment: "My",
      CommentLikes: "6",
    },
  ];

  let PostObj = [
    {
      Id: "1",
      Image: Post,
      Caption: "Aditya",
      LikesCount: "5",
    },
    {
      Id: "2",
      Image: Post,
      Caption: "Bhatnagar",
      LikesCount: "10",
    },
  ];

  window.addEventListener("click", (e) => {
    const comment = document.getElementsByClassName("CommentSection");
    for (let i = 0; i < comment.length; i++) {
      comment[i].style.height = "0%";
      comment[i].style.top = "100%";
      comment[i].style.visibility = "hidden";
    }
  });

  function commentOpen(e, postId) {
    e.stopPropagation();
    const Allcomment = document.getElementsByClassName("CommentSection");
    for (let i = 0; i < Allcomment.length; i++) {
      if (Allcomment[i].getAttribute("dataKey") === postId) {
        Allcomment[i].style.height = "80%";
        Allcomment[i].style.top = "20%";
        Allcomment[i].style.visibility = "visible";
      }
    }
  }

  return (
    <div>
      {PostObj.map((post) => {
        return (
          <div className="HomeFeed__container" key={post.Id}>
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
              <img src={post.Image} className="HomeFeed__container--image" />
            </div>
            <div className="HomeFeed__container--options">
              <div>
                <Like fontSize="inherit" className="HomeFeed__icon"></Like>
                <Comment
                  fontSize="inherit"
                  className="HomeFeed__icon"
                  onClick={(e) => {
                    commentOpen(e, post.Id);
                  }}
                ></Comment>
                <Share fontSize="inherit" className="HomeFeed__icon"></Share>
              </div>
              <div>
                <Save fontSize="inherit" className="HomeFeed__icon"></Save>
              </div>
            </div>
            <div className="HomeFeed__container--caption">
              <div className="HomeFeed__likes">{post.LikesCount} likes</div>
              <div className="HomeFeed__caption">{Post.Caption}</div>
            </div>
            <div className="HomeFeed__container--comments"></div>
            <div
              className="CommentSection"
              onClick={(e) => {
                e.stopPropagation();
              }}
              datakey={post.Id}
            >
              {CommentObj.map((comment) => {
                return (
                  <div
                    style={{ fontSize: "25px", display: "flex" }}
                    key={comment.Id}
                  >
                    <div>{comment.Comment}, </div>
                    <div>{comment.CommentLikes}</div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HomeFeed;
