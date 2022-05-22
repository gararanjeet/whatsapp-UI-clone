import React, { useState } from "react";
import Info from "./Info";
import Nav from "./Nav";
import Options from "./Options";
import ChatArea from "./ChatArea";

import "./css/screen.css";

export default function Screen() {
  const [display, setDisplay] = useState("chat");
  return (
    <div className="screen">
      <div className="fixed-position">
        <Info />
        <Nav />
        <Options setDisplay={setDisplay} display={display} />
      </div>
      {/* {console.log(display)} */}
      <ChatArea display={display}></ChatArea>
    </div>
  );
}
