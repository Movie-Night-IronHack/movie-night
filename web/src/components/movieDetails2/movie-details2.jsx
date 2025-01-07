import { useEffect, useState } from "react";
import PageLayout from "../layouts/page-layout";
import NavBar from "../ui/navbar/navbar";
import * as MovieApi from "../../services/movie-api-service";
import { useParams } from "react-router-dom";

function MovieDetails2() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null); // Initialize as null
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors

  useEffect(() => {
    setLoading(true);
    MovieApi.getMovieDetails(movieId)
      .then((movie) => {
        setMovie(movie);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movie details", error);
        setError("Failed to load movie details. Please try again later.");
        setLoading(false);
      });
  }, [movieId]);

  if (loading) {
    return (
      <>
        <NavBar />
        <PageLayout>
          <p>Loading movie details...</p>
        </PageLayout>
      </>
    );
  }

  if (error) {
    return (
      <>
        <NavBar />
        <PageLayout>
          <p className="text-danger">{error}</p>
        </PageLayout>
      </>
    );
  }

  if (!movie) {
    return (
      <>
        <NavBar />
        <PageLayout>
          <p>No movie details found.</p>
        </PageLayout>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <PageLayout>
        <h1 className="text-center">{movie.original_title}</h1>
        <h2 className="text-center fs-5 mb-4 text-secondary">{movie.tagline}</h2>
        <div className="d-flex flex-columns justify-content-center gap-5">
          <div>
            <p className="fw-1">Original title:<strong className="text-black"> {movie.original_title}</strong></p>
            <p><strong>{movie.release_date} · {Math.floor(movie.runtime / 60)}h{movie.runtime % 60}min </strong></p>
          </div>
          <div className="d-flex flex-columns gap-3">
            <div className="ms-5">
              <p className="text-center"><strong>Rating</strong></p>
              <p>⭐{movie.vote_average.toFixed(1)}</p>
            </div>
            <div className="ms-0">
              <p className="text-center"><strong>Popularity</strong></p>
              <p>{movie.popularity}</p>
            </div>
          </div>
        </div>
        <div className="movie-details d-flex gap-4 mb-4">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.original_title}
            style={{ width: "400px", borderRadius: "8px", margin: "auto" }}
          />
        </div>
        <div className="d-flex flex-columns mb-4 gap-3 justify-content-center">
          {movie.genres.map((genre, index) => (
            <span className="border rounded-pill border-secondary px-3" key={index}>{genre.name} </span>
          ))}
        </div>
        <hr className="mx-5 px-5"></hr>
        <p className="text-center mx-5 px-5">{movie.overview}</p>
        <hr className="mx-5 px-5"></hr>
      </PageLayout>
    </>
  );
}

export default MovieDetails2;
