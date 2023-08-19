import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import profile from "./20221215_201458.jpg";

function Header() {
  // const [data, setData] = useState({});
  // const [img, setimg] = useState("");

  // function arrayBufferToBase64(buffer) {
  //   var binary = "";
  //   var bytes = [].slice.call(new Uint8Array(buffer));
  //   bytes.forEach((b) => (binary += String.fromCharCode(b)));
  //   return window.btoa(binary);
  // }

  // const fetchFunc = async () => {
  //   fetch("http://localhost:3000/api/v1/users", {
  //     credentials: "include",
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setData(data);
  //       var base64Flag = "data:image/jpeg;base64,";
  //       let imageStr = arrayBufferToBase64(data.data.users[1].img.data.data);
  //       let newimg = base64Flag + imageStr;
  //       return newimg;
  //     })
  //     .then((img) => {
  //       setimg(img);
  //     });
  // };

  // useEffect(() => {
  //   fetchFunc();
  // }, []);

  // useEffect(() => {
  //   console.log(data);
  //   console.log(img);
  // }, [data, img]);

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

export default Header;
