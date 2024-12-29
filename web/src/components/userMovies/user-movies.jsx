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

  const handleFavorite = (movie) => {
    MovieApi.getFavoriteMovies()
      .then((favoriteMovies) => {
        const isAlreadyAdded = favoriteMovies.some(
          (favoriteMovie) => favoriteMovie.id === movie.id
        );

        if (!isAlreadyAdded) {
          MovieApi.addFavoriteMovie(movie)
            .then(() => {
              setUserMovieList((prevList) =>
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

  return (
    <>
      <div>
        <h2>Watchlist</h2>
        <div className={`d-flex flex-wrap gap-3 ${className}`}>
          {userMovieList.map((movie) => (
            <RenderCard
              key={movie.id}
              movie={movie}
              onDelete={handleDelete}
              showFavoriteButton={true} // Show Favorite button
              showWatchButton={false}
              onHandleFavorite={handleFavorite}
              
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default UserMovies;
