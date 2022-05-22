import React, { useState } from "react";
import "./css/dpPopup.css";
import { SiGooglemessages } from "react-icons/si";
import { IoIosCall } from "react-icons/io";
import { IoVideocam } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";

function DpPopup({ popup, url, name, togglePopup }) {
  console.log("came here");
  const [cls, setCls] = useState("overlay");
  return popup ? (
    <div
      className={cls}
      onClick={() => setCls((prevCls) => prevCls + " hidden")}
    >
      <div className="popup">
        <p>{name}</p>
        <img src={url} alt="dp" />
        <div className="footer">
          <SiGooglemessages />
          <IoIosCall />
          <IoVideocam />
          <IoMdInformationCircleOutline />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default DpPopup;
