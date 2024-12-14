import { useEffect, useState } from "react";
import * as MovieApi from "../../services/api-service";
import RenderCard from "../renderCard/render-card";

function RenderCards({ className = "" }) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {

    MovieApi.trendingMovies()
      .then((movies) => setMovieList(movies.results))
      .catch((error)=> console.error(error));
    

  }, []);

  return (
    <>
      <h2>Render Cards</h2>
      <div className={`d-flex flex-wrap gap-3 ${className}`}>
        {movieList.map((movie)=>(
          <RenderCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}
export default RenderCards;
