import React from "react";
import data from "../data/callData.json";
import { BsArrowDownLeft } from "react-icons/bs";
import { BsArrowUpRight } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import "./css/calls.css";

function Calls() {
  return (
    <>
      {data.map((details) => {
        return (
          <div className="calls" key={details.id}>
            <img src={details.url} alt="img" />

            <div className="data">
              <h5 className="name">{details.name}</h5>
              <p>
                {Math.floor(Math.random() * 2) ? (
                  <BsArrowDownLeft
                    className={
                      Math.floor(Math.random() * 2)
                        ? "color-green"
                        : "color-red"
                    }
                  />
                ) : (
                  <BsArrowUpRight
                    className={
                      Math.floor(Math.random() * 2)
                        ? "color-green"
                        : "color-red"
                    }
                  />
                )}
                {details.time}
              </p>
            </div>
            <IoIosCall className="cal-icon" />
          </div>
        );
      })}
      <IoCallSharp className="call-phn" />
    </>
  );
}

export default Calls;
