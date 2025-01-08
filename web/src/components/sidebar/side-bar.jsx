import "./side-bar.css"

function SideBar() {
  return (
    <div className="d-flex flex-column text-white" style={{ minWidth: "200px" }}>
      <h2 className="fs-1">Side Bar</h2>
      <a href="#trending" className="fs-3 mt-5 sidebar-a">Trending</a>
      <a href="#now-playing" className="fs-3 mt-5 sidebar-a">Now Playing</a>
      <a href="#top-rated" className="fs-3 mt-5 sidebar-a">Top Rated</a>
      <a href="#upcoming" className="fs-3 mt-5 sidebar-a">Upcoming</a>
    </div>
  );
}

export default SideBar;
