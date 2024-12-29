import { useEffect, useState } from "react";
import PageLayout from "../layouts/page-layout";
import NavBar from "../ui/navbar/navbar";
import * as MovieApi from "../../services/movie-api-service";
import RenderCard from "../renderCard/render-card";

function Favorite({ className = "" }) {
  const [favoriteList, setFavoriteList] = useState([]);
  useEffect(() => {
    MovieApi.getFavoriteMovies()
      .then((movies) => {
        setFavoriteList(movies);
      })
      .catch((error) =>
        console.error("Error fectching favorite movies", error)
      );
  }, []);

  const handleDelete = (movie) => {
    MovieApi.deleteFavoriteMovie(movie.id)
      .then(() => {
        setFavoriteList((prevList) =>
          prevList.filter((m) => m.id !== movie.id)
        );
      })
      .catch((error) =>
        console.error(error, "Dentro del catch de handleDelete")
      );
  };

  return (
    <>
      <NavBar />
      <div className={`container mt-4 ${className}`}>
        <PageLayout>
          <h2>Favorite</h2>
          <div className={`d-flex flex-wrap gap-3 ${className}`}>
            {favoriteList.map((movie) => (
              <RenderCard
                key={movie.id}
                movie={movie}
                onDelete={handleDelete}
                showFavoriteButton={false} // Hide Favorite button
                showWatchButton={false}
              />
            ))}
          </div>
        </PageLayout>
      </div>
    </>
  );
}

export default Favorite;
