import { useEffect, useState } from "react";
import * as MovieApi from "../../services/movie-api-service";
import RenderCard from "../renderCard/render-card";

function RenderCards({ className = "", selectedGenre }) {
  const [movieList, setMovieList] = useState([]);
  const [counter, setCounter] = useState(1);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (selectedGenre === null) {
      MovieApi.trendingMovies(page).then((movies) => {
        // console.log(movies.total_pages);
        setMovieList(movies.results);
        setTotalPages(movies.total_pages);
      });
    } else {
      MovieApi.discoverMovies(selectedGenre, page).then((movies) => {
        // console.log(movies.total_pages);
        setMovieList(movies.results);
        setTotalPages(movies.total_pages);
      });
    }
  }, [selectedGenre, page]);

  const handleWatch = (movie) => {
    // console.log("Movie added to watchlist:", movie);
    MovieApi.addMovieUser(movie)
      .then(() =>
        setMovieList((prevList) => prevList.filter((m) => m.id !== movie.id))
      )
      .catch((error) =>
        console.error(error, "Dentro del catch de handleWatch")
      );
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
      <div>
        <h2>Movies</h2>
        <div className={`d-flex flex-wrap gap-3 ${className}`}>
          {fiveMovies(counter).map((movie) => (
            <RenderCard
              key={movie.id}
              movie={movie}
              onWatchList={handleWatch}
            />
          ))}
        </div>
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
        {counter}/{page}/{selectedGenre}
      </div>
      ;
    </>
  );
}
export default RenderCards;
