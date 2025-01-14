import { useState } from "react";
import "./side-bar.css";

function SideBar() {
  const [selectedButton, setSelectedButton] = useState("list-cards");
  const handleClick = (btnName) => {
    setSelectedButton(btnName);
  }
  return (
    <div
      className=" fixed-top d-flex flex-rows mt-5 gap-5 justify-content-center text-white"
      style={{ minWidth: "100px" }}
    >
      <button
        onClick={() => handleClick("list-cards")}
        className={`btn btn-sm mt-3 rounded ${selectedButton === "list-cards" ? "btn-selected" : "no-selected"}`}>
        <a href="#list-cards" className="fs-5">
          Trending
        </a>
      </button>
      <button
        onClick={() => handleClick("now-playing")}
        className={`btn btn-sm mt-3 rounded ${selectedButton === "now-playing" ? "btn-selected" : "no-selected"}`}>
        <a href="#now-playing" className="fs-5">
          Now Playing
        </a>
      </button>
      <button
        onClick={() => handleClick("top-rated")}
        className={`btn btn-sm mt-3 rounded ${selectedButton === "top-rated" ? "btn-selected" : "no-selected"}`}>
        <a href="#top-rated" className="fs-5">
          Top Rated
        </a>
      </button>
      <button
        onClick={() => handleClick("upcoming")}
        className={`btn btn-sm mt-3 rounded ${selectedButton === "upcoming" ? "btn-selected" : "no-selected"}`}>
        <a href="#upcoming" className="fs-5">
          Upcoming
        </a>
      </button>
    </div>
  );
}

export default SideBar;
