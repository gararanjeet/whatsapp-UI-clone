import React from "react";
import { MdPhotoCamera } from "react-icons/md";
import "./css/options.css";

function Options({ setDisplay, display }) {
  return (
    <div className="options">
      <MdPhotoCamera className="cam-icon" />
      <div className="labels">
        <span
          className={display === "chat" ? "green-color" : ""}
          onClick={() => {
            setDisplay("chat");
          }}
        >
          Chats
        </span>
        <span
          className={display === "status" ? "green-color" : ""}
          onClick={() => setDisplay("status")}
        >
          status
        </span>
        <span
          className={display === "calls" ? "green-color" : ""}
          onClick={() => setDisplay("calls")}
        >
          calls
        </span>
      </div>
    </div>
  );
}

export default Options;
