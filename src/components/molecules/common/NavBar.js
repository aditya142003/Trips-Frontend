import React from "react";
import "./NavBar.css";
import profile from "./20221215_201458.jpg";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import Explore from "@mui/icons-material/ExploreOutlined";
import Clicks from "@mui/icons-material/CameraAltOutlined";
import Message from "@mui/icons-material/EmailOutlined";
import Notification from "@mui/icons-material/FavoriteBorderOutlined";
import Travel from "@mui/icons-material/HikingOutlined";
import Profile from "@mui/icons-material/Person2Outlined";
import Saved from "@mui/icons-material/BookmarkBorderOutlined";
import Settings from "@mui/icons-material/SettingsOutlined";

function NavBar(props) {
  window.onload = function () {
    const selTab = document.getElementById(props.tab);
    selTab.style.backgroundColor = "var(--color-gray)";
  };

  return (
    <div className="NavBar__container">
      <div className="NavBar__container--profileCont">
        <div className="NavBar__container--profile">
          <img src={profile} className="NavBar__container--profile--image" />
        </div>
        <div className="NavBar__container--nameCont">
          <div>Aditya Bhatnagar</div>
          <div>@Aditya</div>
        </div>
      </div>
      <div className="NavBar__container--nav">
        <div className="NavBar__container--tabs firstTab" id="Home">
          <div>
            <HomeIcon fontSize="larger"></HomeIcon>
          </div>
          <div>Home</div>
        </div>
        <div className="NavBar__container--tabs" id="Explore">
          <div>
            <Explore fontSize="larger"></Explore>
          </div>
          <div>Explore</div>
        </div>
        <div className="NavBar__container--tabs" id="Clicks">
          <div>
            <Clicks fontSize="larger"></Clicks>
          </div>
          <div>Clicks</div>
        </div>
        <div className="NavBar__container--tabs" id="Messages">
          <div>
            <Message fontSize="larger"></Message>
          </div>
          <div>Messages</div>
        </div>
        <div className="NavBar__container--tabs" id="Notification">
          <div>
            <Notification fontSize="larger"></Notification>
          </div>
          <div>Notifications</div>
        </div>
        <div className="NavBar__container--tabs" id="Travel">
          <div>
            <Travel fontSize="larger"></Travel>
          </div>
          <div>Travel Guide</div>
        </div>
        <div className="NavBar__container--tabs" id="Profile">
          <div>
            <Profile fontSize="larger"></Profile>
          </div>
          <div>Profile</div>
        </div>
        <div className="NavBar__container--tabs" id="Saved">
          <div>
            <Saved fontSize="larger"></Saved>
          </div>
          <div>Saved</div>
        </div>
        <div className="NavBar__container--tabs" id="Settings">
          <div>
            <Settings fontSize="larger"></Settings>
          </div>
          <div>Settings</div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
