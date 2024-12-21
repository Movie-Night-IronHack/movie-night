import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand">Search Movies & Series</a>
        <div className="mt-3">
          <Link to="/" className="btn btn-light">
            Home Page
          </Link>
          <Link to="/watchlist" className="btn btn-light">
            My Movies
          </Link>
        </div>
        <form className="d-flex" role="search">
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
