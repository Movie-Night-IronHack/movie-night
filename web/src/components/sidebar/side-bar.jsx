import "./side-bar.css";

function SideBar() {
  return (
    <div
      className="d-flex flex-column text-white"
      style={{ minWidth: "100px" }}
    >
      <button className="btn mt-3 btn-sm bg-light rounded">
        <a href="#list-cards" className="fs-5 sidebar-a text-black">
          Trending
        </a>
      </button>
      <button className="btn mt-3 btn-sm">
        <a href="#now-playing" className="fs-5 sidebar-a">
          Now Playing
        </a>
      </button>
      <button className="btn mt-3 btn-sm bg-light rounded">
        <a href="#top-rated" className="fs-5 sidebar-a text-black">
          Top Rated
        </a>
      </button>
      <button className="btn mt-3 btn-sm ">
        <a href="#upcoming" className="fs-5 sidebar-a">
          Upcoming
        </a>
      </button>
    </div>
  );
}

export default SideBar;
