import { useEffect, useState } from "react";
import * as MovieApi from "../../services/movie-api-service";
import RenderCard from "../renderCard/render-card";

function UserMovies({ className = "" }) {
  const [userMovieList, setUserMovieList] = useState([]);

  useEffect(() => {
    MovieApi.getUserMovies()
      .then((movies) => {
        const uniqueMovies = movies.filter(
          (movie, index, self) =>
            index === self.findIndex((m) => m.id === movie.id)
        );
        setUserMovieList(uniqueMovies);
      })
      .catch((error) => console.error("Error fetching user movies:", error));
  }, []);

  const handleDelete = (movie) => {
    console.log("movie", movie);
    MovieApi.deleteUserMovie(movie.id)
      .then(() => {
        setUserMovieList((prevList) =>
          prevList.filter((m) => m.id !== movie.id)
        );
      })
      .catch((error) =>
        console.error(error, "Dentro del catch de handleDelete")
      );
  };

  return (
    <>
      <h2>My Movies</h2>
      <div className={`d-flex flex-wrap gap-3 ${className}`}>
        {userMovieList.map((movie) => (
          <RenderCard key={movie.id} movie={movie} onDelete={handleDelete} />
        ))}
      </div>
    </>
  );
}

export default UserMovies;

