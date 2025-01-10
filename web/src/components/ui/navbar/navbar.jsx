import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${query}`);
    }
  };

  return (
    <nav className="navbar bg-dark-subtle fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <div>
          <img src="/claqueta.png" alt="home icon" width="30px" className="pb-2"/>
          <a className="navbar-brand ps-2">Search Movies</a>
        </div>
        <div className="d-flex align-items-center gap-2">
          <Link to="/" className="btn btn-light">
            Home
          </Link>
          <Link to="/watchlist" className="btn btn-light">
            Watchlist
          </Link>
          <Link to="/favorite" className="btn btn-light">
            Favorite
          </Link>
          <Link to="/search" className="btn btn-light">
            Search
          </Link>
        </div>
        <form
          className="d-flex align-items-center"
          role="search"
          onSubmit={handleSearch}
        >
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
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
