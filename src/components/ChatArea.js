import React from "react";
import Chat from "./Chat";
import Status from "./Status";
import "./css/chatArea.css";
import Calls from "./Calls";

function ChatArea({ display }) {
  return (
    <div className="chatArea">
      {display === "chat" ? (
        <Chat />
      ) : display === "status" ? (
        <Status />
      ) : (
        <Calls />
      )}
    </div>
  );
}

export default ChatArea;
