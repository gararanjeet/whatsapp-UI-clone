import React from "react";
import "./css/info.css";
import { IoMdAlarm } from "react-icons/io";
import { FiHeadphones } from "react-icons/fi";
import { AiFillSignal } from "react-icons/ai";
import { BiWifi } from "react-icons/bi";
import { FaBatteryHalf } from "react-icons/fa";

export default function Info() {
  return (
    <div className="info">
      <span className="time item">22:10</span>
      <IoMdAlarm className="item" />
      <FiHeadphones className="item" />
      <AiFillSignal className="item" />
      <BiWifi className="item" />
      <FaBatteryHalf className="item" />
    </div>
  );
}
