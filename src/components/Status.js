import React from "react";
import "./css/status.css";
import data from "../data/statusData.json";
import { MdPhotoCamera } from "react-icons/md";

export default function Status() {
  return (
    <>
      <div className="status">
        <img
          className={
            Math.floor(Math.random() * 2) ? "plain-boder" : "dashed-boder"
          }
          src="https://picsum.photos/id/1015/200/300"
          alt="img"
        />

        <div className="data">
          <h5 className="name">My Status</h5>
          <p>Tap to add status updates</p>
        </div>
      </div>
      <span className="vup">Viewed updates</span>
      {data.map((details, index) => {
        return (
          <div className="status" key={details.id}>
            <img
              className={
                Math.floor(Math.random() * 2) ? "dashed-boder" : "plain-boder"
              }
              src={details.url}
              alt="img"
            />

            <div className="data">
              <h5 className="name">{details.name}</h5>
              <p>{details.time}</p>
            </div>
          </div>
        );
      })}
      <MdPhotoCamera className="status-cam" />
    </>
  );
}
