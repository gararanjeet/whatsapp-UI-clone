import React, { useState, useEffect } from "react";
import "./css/chat.css";
import data from "../data/chatData.json";
import { SiGooglemessages } from "react-icons/si";
import DpPopup from "./DpPopup";
import { render } from "@testing-library/react";

export default function Chat() {
  const [popup, togglePopup] = useState(false);
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");

  const trim = (string) => {
    return string.length > 10 ? string.substring(1, 30) + "..." : string;
  };

  useEffect(() => {
    render(
      <DpPopup
        id="deleted"
        popup={popup}
        url={url}
        name={name}
        togglePopup={togglePopup}
      />
    );
    console.log(popup);
  }, [popup, url, name]);

  return (
    <>
      {data.map((details) => {
        return (
          <div className="chat" key={details.id}>
            <img
              src={details.url}
              onClick={() => {
                togglePopup(!popup);
                setUrl(details.url);
                setName(details.name);
              }}
              alt="img"
            />

            <div className="data">
              <h5 className="name">{details.name}</h5>
              <p>{trim(details.lastMsg)}</p>
            </div>
            <span>{details.time}</span>
          </div>
        );
      })}
      <SiGooglemessages className="chat-msg" />
    </>
  );
}
