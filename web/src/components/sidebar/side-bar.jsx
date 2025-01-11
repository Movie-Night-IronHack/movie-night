import { useState } from "react";
import "./side-bar.css";

function SideBar() {
  const [selectedButton, setSelectedButton] = useState(null);
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
        className={`btn btn-sm mt-3 rounded ${selectedButton === "list-cards" ? "btn-selected" : "bg-light"}`}>
        <a href="#list-cards" style={{textDecoration:"none", color:"grey"}} className="fs-5">
          Trending
        </a>
      </button>
      <button
        onClick={() => handleClick("now-playing")}
        className={`btn btn-sm mt-3 rounded ${selectedButton === "now-playing" ? "btn-selected" : "bg-light"}`}>
        <a href="#now-playing" style={{textDecoration:"none", color:"grey"}} className="fs-5">
          Now Playing
        </a>
      </button>
      <button
        onClick={() => handleClick("top-rated")}
        className={`btn btn-sm mt-3 rounded ${selectedButton === "top-rated" ? "btn-selected" : "bg-light"}`}>
        <a href="#top-rated" style={{textDecoration:"none", color:"grey"}} className="fs-5">
          Top Rated
        </a>
      </button>
      <button
        onClick={() => handleClick("upcoming")}
        className={`btn btn-sm mt-3 rounded ${selectedButton === "upcoming" ? "btn-selected" : "bg-light"}`}>
        <a href="#upcoming" style={{textDecoration:"none", color:"grey"}} className="fs-5">
          Upcoming
        </a>
      </button>
    </div>
  );
}

export default SideBar;
