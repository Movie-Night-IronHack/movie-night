import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container d-flex align-items-center justify-content-between">
        <a className="navbar-brand">Search Movies & Series</a>
        <div className="d-flex align-items-center gap-2">
          <Link to="/" className="btn btn-light">
            Home
          </Link>
          <Link to="/watchlist" className="btn btn-light">
            My Watchlist
          </Link>
        </div>
        <form className="d-flex align-items-center" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
export default NavBar;
