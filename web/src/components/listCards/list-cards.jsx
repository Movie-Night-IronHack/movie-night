import { useEffect, useState } from "react";
import * as MovieApi from "../../services/movie-api-service";
import RenderCard from "../renderCard/render-card";

function ListCards({ className = "", selectedGenre, onCategorySelect, nowPlayingMovies = [] }) {
  const [movieList, setMovieList] = useState([]);
  const [counter, setCounter] = useState(1);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [categoryName, setCategoryName] = useState("Trending");

  const categories = [
    { name: "Action", id: 28 },
    { name: "Adventure", id: 12 },
    { name: "Animation", id: 16 },
    { name: "Comedy", id: 35 },
    { name: "Crime", id: 80 },
    { name: "Documentary", id: 99 },
    { name: "Drama", id: 18 },
    { name: "Family", id: 10751 },
    { name: "Fantasy", id: 14 },
    { name: "History", id: 36 },
    { name: "Horror", id: 27 },
    { name: "Music", id: 10402 },
    { name: "Mystery", id: 9648 },
    { name: "Romance", id: 10749 },
    { name: "Science Fiction", id: 878 },
    { name: "TV Movie", id: 10770 },
    { name: "Thriller", id: 53 },
    { name: "War", id: 10752 },
    { name: "Western", id: 37 },
    { name: "Trending", id: null },
  ];

  useEffect(() => {
    if (selectedGenre === null) {
      MovieApi.trendingMovies(page).then((movies) => {
        const filteredMovies = movies.results.filter(
          (movie) => !nowPlayingMovies.some((np) => np.id === movie.id)
        );
        setMovieList(filteredMovies);
        setTotalPages(movies.total_pages);
      });
    } else {
      MovieApi.discoverMovies(selectedGenre, page).then((movies) => {
        const filteredMovies = movies.results.filter(
          (movie) => !nowPlayingMovies.some((np) => np.id === movie.id)
        );
        setMovieList(filteredMovies);
        setTotalPages(movies.total_pages);
      });
    }
  }, [selectedGenre, nowPlayingMovies, page]);

  const handleWatch = (movie) => {
    MovieApi.getUserMovies()
      .then((userMovies) => {
        const isAlreadyAdded = userMovies.some(
          (userMovie) => userMovie.id === movie.id
        );

        if (!isAlreadyAdded) {
          MovieApi.addMovieUser(movie)
            .then(() => {
              setMovieList((prevList) =>
                prevList.filter((m) => m.id !== movie.id)
              );
            })
            .catch((error) => console.error("Error adding movie:", error));
        } else {
          console.log("Movie is already in the watchlist.");
        }
      })
      .catch((error) => console.error("Error fetching user movies:", error));
  };

  const fiveMovies = () => {
    switch (counter) {
      case 1:
        return movieList.slice(0, 5);
      case 2:
        return movieList.slice(5, 10);
      case 3:
        return movieList.slice(10, 15);
      case 4:
        return movieList.slice(15, 20);
      case 5:
        setPage((prePage) => prePage + 1);
        setCounter(1);
        return movieList.slice(0, 5);
      case 0:
        setPage((prePage) => prePage - 1);
        setCounter(4);
        return movieList.slice(15, 20);
    }
  };

  const handlePrevious = () => {
    setCounter((counter) => counter - 1);
  };
  const handleNext = () => {
    setCounter((counter) => counter + 1);
  };

  return (
    <>
      <div id="trending">
        <div className="d-flex mb-4">
          <div className="me-auto">
            <h2 className="text-white">{categoryName} Movies</h2>
          </div>
          <div className="dropdown me-5 pt-2">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filter {categoryName}
            </button>

            <ul className="dropdown-menu">
              {categories.map((category) => (
                <li key={category.name}>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => {
                      onCategorySelect(category.id);
                      setCategoryName(category.name);
                    }}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`d-flex flex-wrap gap-3 ${className}`}>
          {fiveMovies(counter).map((movie) => (
            <RenderCard
              key={movie.id}
              movie={movie}
              onWatchList={handleWatch}
            />
          ))}
        </div>
        <div className="d-flex gap-2 my-5">
          <button
            type="button"
            className="btn btn-secondary"
            disabled={counter === 1 && page === 1 ? "disable" : ""}
            onClick={() => handlePrevious()}
          >
            Previous
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            disabled={page > totalPages}
            onClick={() => handleNext()}
          >
            Next
          </button>
          <p className="text-white pt-2">
            Page: {page}/{Math.floor(totalPages / 4)}, Display: {counter}/4
          </p>
        </div>
      </div>
    </>
  );
}
export default ListCards;
