import React from "react";
import SanguineFinal_20MB from "./SanguineFinal_20MB.mp4"

export default function Landing() {
  return (
    <div style={{height: "112vh", backgroundColor: "#1a1a1a", paddingLeft: "4rem", paddingRight: "4rem"}}>
      <video
        className=""
        autoPlay="true"
        muted="true"
        poster=""
        preload="true"
        // controls="false"
        loop="true"
        // width="92%"
        style={{width: "100%"}}
      ><source src={SanguineFinal_20MB}></source></video>
    </div>
  );
}
