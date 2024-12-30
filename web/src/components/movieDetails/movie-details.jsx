import { useEffect, useState } from "react";
import PageLayout from "../layouts/page-layout";
import NavBar from "../ui/navbar/navbar";
import * as MovieApi from "../../services/movie-api-service";
import { useParams } from "react-router-dom";

function MovieDetails() {
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
        <div className="movie-details d-flex gap-4">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.original_title}
            style={{ width: "400px", borderRadius: "8px" }}
          />
          <div className="card event-item" style={{ width: "200rem" }}>
            <div className="card-body">
              <p className="card-title mb-1 text-break"><strong>Original Title:</strong> {movie.original_title}</p>
              <p className="text-muted">
                <strong>Release Date:</strong> {movie.release_date}
              </p>
              <p className="text-muted">
                <strong>Rating:</strong> {movie.vote_average.toFixed(1)}
              </p>

              <p className="text-muted">
                <strong>Overview: </strong>
                {movie.overview}
              </p>

              <p className="text-muted">
                <strong>Homepage:</strong>{" "}
                <a
                  href={movie.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-info"
                >
                  {movie.homepage}
                </a>
              </p>
              <p className="text-muted">
                <strong>Genres:</strong>{" "}
                {movie.genres.map((genre, index) => (
                  <span key={index}>{genre.name} / </span>
                ))}
              </p>
              <p className="text-muted">
                <strong>Production Companies:</strong>{" "}
                {movie.production_companies.map((company, index) => (
                  <span key={index}>{company.name} / </span>
                ))}
              </p>
              <p className="text-muted">
                <strong>Production Countries:</strong>{" "}
                {movie.production_countries.map((productionCountry, index) => (
                  <span key={index}>{productionCountry.name} / </span>
                ))}
              </p>
            </div>

            <p className="text-white">{movie.overview}</p>
          </div>
        </div>
      </PageLayout>
    </>
  );
}

export default MovieDetails;
