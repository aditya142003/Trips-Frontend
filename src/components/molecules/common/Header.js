import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import profile from "./20221215_201458.jpg";

function header() {
  return (
    <div className="Header__container">
      <h2 className="Header__container--heading">TripTea</h2>
      <div className="Header__container--searchCont">
        <SearchIcon
          className="Header__container--searchlogo"
          fontSize="large"
        ></SearchIcon>
        <input
          placeholder="Search for Travellers, and Locations"
          className="Header__container--search"
        />
      </div>
      <button className="Header__container--buttonPurple">Create</button>
      <div className="Header__container--profileCont">
        <img src={profile} className="Header__container--profile" />
      </div>
    </div>
  );
}

export default header;
