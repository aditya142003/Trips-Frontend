import React, { useState, useEffect, useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import profile from "./20221215_201458.jpg";
import DataContext from "../../../context/DataContext";

function Header() {
  const { data } = useContext(DataContext);

  console.log(data);
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
        <img src={profile} className="Header__profileCont--image" />
      </div>
    </div>
  );
}

export default Header;
