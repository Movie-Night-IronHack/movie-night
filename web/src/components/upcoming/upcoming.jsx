import { useEffect, useState } from "react";
import * as MovieApi from "../../services/movie-api-service";
import RenderCard from "../renderCard/render-card";

function Upcoming({ className = "", onFetchMovies }) {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [counter, setCounter] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    MovieApi.upcoming(page).then((movies) => {
      setUpcomingMovies(movies.results);
      if (onFetchMovies) {
        onFetchMovies(movies.results);
      }
      setTotalPages(movies.total_pages);
    });
  }, [page]);

  const fiveMovies = () => {
    switch (counter) {
      case 1:
        return upcomingMovies.slice(0, 5);
      case 2:
        return upcomingMovies.slice(5, 10);
      case 3:
        return upcomingMovies.slice(10, 15);
      case 4:
        return upcomingMovies.slice(15, 20);
      case 5:
        setPage((prePage) => prePage + 1);
        setCounter(1);
        return upcomingMovies.slice(0, 5);
      case 0:
        setPage((prePage) => prePage - 1);
        setCounter(4);
        return upcomingMovies.slice(15, 20);
    }
  };

  const handleWatch = (movie) => {
    MovieApi.getUserMovies()
      .then((userMovies) => {
        const isAlreadyAdded = userMovies.some(
          (userMovie) => userMovie.id === movie.id
        );

        if (!isAlreadyAdded) {
          MovieApi.addMovieUser(movie)
            .then(() => {
              setUpcomingMovies((prevList) =>
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

  const handlePrevious = () => {
    setCounter((counter) => counter - 1);
  };
  const handleNext = () => {
    setCounter((counter) => counter + 1);
  };

  return (
    <div className="">
      <h2 className="text-white">Upcoming</h2>
   
      <div className={`d-flex flex-wrap gap-3 mt-2 ${className}`}>
        {fiveMovies(counter).map((movie) => (
          <RenderCard key={movie.id} movie={movie} onWatchList={handleWatch} />
        ))}
      </div>
      <div className="d-flex gap-2 mt-2">
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
        <p className="text-black">
        Page: {page}/{Math.floor(totalPages / 4)}, Display: {counter}/4
      </p>
      </div>
    </div>
  );
}
export default Upcoming;
