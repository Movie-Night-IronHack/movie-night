import "./side-bar.css";

function SideBar() {
  return (
    <div
      className=" fixed-top d-flex flex-rows mt-5 gap-5 justify-content-center text-white"
      style={{ minWidth: "100px" }}
    >
      <button 
        className="btn btn-sm mt-3 bg-light rounded">
        <a href="#list-cards" style={{color:"rgb(105,105,105)"}} className="fs-5 sidebar-a">
          Trending
        </a>
      </button>
      <button className="btn btn-sm mt-3 bg-light rounded">
        <a href="#now-playing" style={{color:"rgb(105,105,105)"}} className="fs-5 sidebar-a">
          Now Playing
        </a>
      </button>
      <button className="btn mt-3 btn-sm bg-light rounded">
        <a href="#top-rated" style={{color:"rgb(105,105,105)"}} className="fs-5 sidebar-a ">
          Top Rated
        </a>
      </button>
      <button className="btn btn-sm mt-3 bg-light rounded">
        <a href="#upcoming" style={{color:"rgb(105,105,105)"}} className="fs-5 sidebar-a ">
          Upcoming
        </a>
      </button>
    </div>
  );
}

export default SideBar;
