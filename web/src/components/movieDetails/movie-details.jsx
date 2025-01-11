import { useEffect, useState } from "react";
import PageLayout from "../layouts/page-layout";
import NavBar from "../ui/navbar/navbar";
import * as MovieApi from "../../services/movie-api-service";
import { useParams } from "react-router-dom";
import Trailer from "../trailer/trailer";
import {
  WhatsappShareButton,
  FacebookShareButton,
  WhatsappIcon,
  FacebookIcon,
} from "react-share";

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null); // Initialize as null
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors
  const [trailerId, setTrailerId] = useState(null);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      MovieApi.getMovieDetails(movieId),
      MovieApi.getMovieVideos(movieId), // Fetch trailer data
    ])
      .then(([movieData, videoData]) => {
        setMovie(movieData);
        setLoading(false);

        // Find the first YouTube trailer video
        const youtubeTrailer = videoData.results.find(
          (video) => video.site === "YouTube" && video.type === "Trailer"
        );
        if (youtubeTrailer) {
          setTrailerId(youtubeTrailer.key); // Set YouTube video ID
        }
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
          <div className="flex-shrink-0">
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "/src/assets/placeholder_moviePoster2.webp"
              }
              alt={movie.original_title}
              style={{ width: "500px", height: "auto", borderRadius: "8px" }}
            />
          </div>

          <div className="card event-item" style={{ width: "200rem" }}>
            <div className="card-body">
              {movie.original_title && (
                <p className="card-title mb-1 text-break">
                  <strong>Original Title:</strong> {movie.original_title}
                </p>
              )}
              {movie.release_date && (
                <p className="text-muted">
                  <strong>Release Date:</strong> {movie.release_date}
                </p>
              )}
              {movie.vote_average > 0 && (
                <p className="text-muted">
                  <strong>Rating:</strong> {movie.vote_average.toFixed(1)}
                </p>
              )}
              {movie.overview && (
                <p className="text-muted">
                  <strong>Overview: </strong>
                  {movie.overview}
                </p>
              )}

              <p className="text-muted">
                <strong>Homepage: </strong>
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
                <strong>Genres: </strong>
                {movie.genres.map((genre, index) => (
                  <span key={index}>
                    {genre.name}{" "}
                    {movie.genres.length > 0 && index < movie.genres.length - 1
                      ? "/"
                      : ""}{" "}
                  </span>
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
              <div className="container col-4">
                <Trailer videoId={trailerId} />
              </div>
            </div>
            <div className="d-flex justify-content-center gap-2 pb-3">
              <div>
                <WhatsappShareButton
                  url={`http://localhost:5173/movie/${movieId}`}
                >
                  <WhatsappIcon size={45} round={true}></WhatsappIcon>
                </WhatsappShareButton>
              </div>
              <div>
                <FacebookShareButton
                  url={`http://localhost:5173/movie/${movieId}`}
                >
                  <FacebookIcon size={45} round={true}></FacebookIcon>
                </FacebookShareButton>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}

export default MovieDetails;
