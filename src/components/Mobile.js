import React from "react";
import Screen from "./Screen";
import Speaker from "./Speaker";
import Camera from "./Camera";
import Sencer from "./Sencer";

import { RiHome2Line } from "react-icons/ri";
import { AiOutlineLeft } from "react-icons/ai";
import { VscThreeBars } from "react-icons/vsc";

import "./css/mobile.css";

export default function Mobile() {
  return (
    <div className="mobile">
      <div className="top">
        <Speaker />
        <Sencer />
        <Camera />
      </div>

      <Screen />

      <div className="power-button" />
      <div className="volume-button" />

      <div className="navigation">
        <VscThreeBars />
        <RiHome2Line />
        <AiOutlineLeft />
      </div>
    </div>
  );
}
