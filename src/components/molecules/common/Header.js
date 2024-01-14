import React, { useState, useEffect, useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import profile from "./20221215_201458.jpg";
import DataContext from "../../../context/DataContext";
import Loading from "../../atoms/Loading";
import { PersonOutline, PersonOutlined } from "@mui/icons-material";

function Header() {
  const { currUser, setCurrUser } = useContext(DataContext);

  return currUser ? (
    <div className="Header">
      <h2 className="Header--heading">Trips</h2>
      <div className="Header__searchCont">
        <SearchIcon
          className="Header__searchCont--icon"
          fontSize="large"
        ></SearchIcon>
        <input
          placeholder="Search for Travellers, and Locations"
          className="Header__searchCont--input"
        />
      </div>
      <button className="Button--purple">Create</button>
      <div className="Header__profileCont">
        {currUser?.img ? (
          <img src={currUser.img} className="Header__profileCont--image" />
        ) : (
          <PersonOutlined className="Header__profileCont--image"/>
        )}
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Header;
