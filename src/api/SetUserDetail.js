import { PostFetch, GetFetch } from "./Fetch";

const fetchingCurrUser = async (currUserId) => {
  const data = await GetFetch(
    "GET",
    `http://localhost:3000/api/v1/users/${currUserId}`
  );
  let userData = data.data.user;
  if (userData.img) {
    let imgStr = convertToImage(userData.img.data.data);
    userData = { ...userData, img: imgStr };
    console.log("SetUserData", userData);
  }
  return userData;
};

const convertToImage = (recImg) => {
  let base64Flag = "data:image/jpeg;base64,";
  let imageStr = arrayBufferToBase64(recImg);
  let newimg = base64Flag + imageStr;
  return newimg;
};

function arrayBufferToBase64(buffer) {
  var binary = "";
  var bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  return window.btoa(binary);
}

export default fetchingCurrUser;
