import React, { useState, useEffect, useContext } from "react";
import Header from "../molecules/Common/Header";
import NavBar from "../molecules/Common/NavBar";
import { PostFetch, GetFetch } from "../../api/Fetch";
import DataContext from "../../context/DataContext";
import fetchingCurrUser from "../../api/SetUserDetail";
import { PersonOutline } from "@mui/icons-material";
import Loading from "../atoms/Loading";

function ProfilePage() {
  const [currUserId, setCurrUserId] = useState("");
  const [countRender, setcountRender] = useState(0);
  const { currUser, setCurrUser } = useContext(DataContext);

  useEffect(() => {
    setCurrUserId(JSON.parse(localStorage.getItem("currUserId")));
  }, []);

  useEffect(() => {
    setcountRender(countRender + 1);
    if (countRender != 0) {
      const data = new Promise((res, rej) => {
        res(fetchingCurrUser(currUserId));
        rej(fetchingCurrUser(currUserId));
      });
      data
        .then((dataRec) => {
          console.log("Profile", dataRec);
          setCurrUser(dataRec);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [currUserId]);

  return currUser ? (
    <div className="ProfilePage">
      <Header />
      <NavBar tab="Profile" />
      <div className="ProfilePage__Container">
        <img src={currUser.img} className="ProfilePage__Container--image" />
        <div className="ProfilePage__Container--Info">
          <div>
            <p className="ProfilePage__Container--InfoUsername">
              {currUser.username}
            </p>
            <button className="Button--blue">Edit Profile</button>
          </div>
          <div>
            <div className="ProfilePage__Container--Follow">
              <div>19 Posts</div>
              <div>482 Followers</div>
              <div>529 Following</div>
            </div>
          </div>
          <div>
            <div className="ProfilePage__Container--Bio">
              <br></br>
              <b>{currUser.fullName}</b>
              <br></br>
              Enjoying the Journey<br></br>
              React Developer
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default ProfilePage;
