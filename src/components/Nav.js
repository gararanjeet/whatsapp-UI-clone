import React from "react";
import { BiSearch } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./css/nav.css";

export default function Nav() {
  return (
    <div className="nav">
      <h1>WhatsApp</h1>
      <BiSearch className="item" />
      <BsThreeDotsVertical className="item" />
    </div>
  );
}
