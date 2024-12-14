import { useEffect, useState } from "react";
import * as MovieApi from "../../services/api-service";
import RenderCard from "../renderCard/render-card";

function RenderCards({ className = "" }) {
  const [movieList, setMovieList] = useState([]);
  const [counter, setCounter] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    MovieApi.trendingMovies(page)
      .then((movies) => {
        console.log(movies);
        setMovieList(movies.results);
      })
      .catch((error) => console.error(error));
  }, [page]);
  console.log(movieList);

  const firstTenMovies = (num) => {
    if (num % 2 === 0) {
      return movieList.slice(10, 20);
    } else {
      return movieList.slice(0, 10);
    }
    
  };
  const handlePrevious = () => {
    setCounter((counter) => counter - 1);
    if (counter % 2 !== 0) {
      setPage((page) => page - 1);
    }
  };
  const handleNext = () => {
    setCounter((counter) => counter + 1);
    if (counter % 2 === 0) {
      setPage((page) => page + 1);
    }
  };
  return (
    <>
      <div>
        <h2>Render Cards</h2>
        <div className={`d-flex flex-wrap gap-3 ${className}`}>
          {firstTenMovies(counter).map((movie) => (
            <RenderCard key={movie.id} movie={movie} />
          ))}
        </div>
        <button
          type="button"
          className="btn btn-secondary"
          disabled= {counter <= 1 ? 'disable' : ''}
          onClick={() => handlePrevious()}
        >
          Previous
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => handleNext()}
        >
          Next
        </button>
        <p>counter</p>
        {counter}
        <p>page</p>
        {page}
      </div>
      ;
    </>
  );
}
export default RenderCards;
