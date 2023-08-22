import React from "react";
import LoadingGif from "../../resources/Loading.gif";

function Loading() {
  return (
    <div className="loading__container">
      <img src={LoadingGif}  className="loading__container--img"/>
    </div>
  );
}

export default Loading;
