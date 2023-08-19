import React, { useState } from "react";
import Like from "@mui/icons-material/FavoriteBorderOutlined";
import LikeFill from "@mui/icons-material/FavoriteOutlined";
import Comment from "@mui/icons-material/ChatBubbleOutlineRounded";
import Save from "@mui/icons-material/BookmarkBorderOutlined";
import Options from "@mui/icons-material/MoreHorizRounded";
import Share from "@mui/icons-material/SendRounded";
import Post from "../Common/20221215_201458.jpg";

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
          <div className="Feed" key={post.Id}>
            <div className="Feed__profile">
              <img src={Post} className="Feed__profile--image" />
              <div className="Feed__profile--name">
                <div>
                  <span>Aditya Bhatnagar</span>
                  <span className="Feed__time">3hr Ago</span>
                </div>
                <div>Udaipur, India</div>
              </div>
              <Options fontSize="inherit" className="Feed__icon"></Options>
            </div>

            <img src={post.Image} className="Feed__postimage" />
            <div className="Feed__reaction">
              <div>
                <Like fontSize="inherit" className="Feed__icon"></Like>
                <Comment
                  fontSize="inherit"
                  className="Feed__icon"
                  onClick={(e) => {
                    commentOpen(e, post.Id);
                  }}
                ></Comment>
                <Share fontSize="inherit" className="Feed__icon"></Share>
              </div>
              <div>
                <Save fontSize="inherit" className="Feed__icon"></Save>
              </div>
            </div>
            <div className="Feed__footer">
              <div className="Feed__footer--likes">{post.LikesCount} likes</div>
              <div className="Feed__footer--caption">{post.Caption}</div>
            </div>
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
