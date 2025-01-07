import { useEffect, useState } from "react";
import * as MovieApi from "../../services/movie-api-service";
import Trailer from "./trailer";

function Trailers({ movies }) {
  const [trailers, setTrailers] = useState([]);

  useEffect(() => {
    const fetchTrailers = async () => {
      try {
        const trailerData = await Promise.all(
          movies.map(async (movie) => {
            try {
              const videos = await MovieApi.getMovieVideos(movie.id);
              const youtubeTrailer = videos.results.find(
                (video) => video.site === "YouTube" && video.type === "Trailer"
              );
              return {
                movieId: movie.id,
                title: movie.title,
                trailerId: youtubeTrailer?.key || null,
              };
            } catch (error) {
              console.error(
                `Error fetching trailer for movie ${movie.id}`,
                error
              );
              return { movieId: movie.id, title: movie.title, trailerId: null };
            }
          })
        );

        setTrailers(trailerData.filter((trailer) => trailer.trailerId)); // Only keep trailers with IDs
      } catch (error) {
        console.error("Error fetching trailers:", error);
      }
    };

    fetchTrailers();
  }, [movies]);

  return (
    <div className="trailers mt-4">
      <h3 className="text-white">Trailers (Now Playing)</h3>
      <div className="d-flex flex-wrap gap-2">
        {trailers.map((trailer) => (
          <div key={trailer.movieId} style={{ width: "300px" }}>
            <h5 className="text-white text-center">{trailer.title}</h5>
            <Trailer videoId={trailer.trailerId} />
          </div>
        ))}
        {trailers.length === 0 && (
          <p className="text-muted">No trailers available for these movies.</p>
        )}
      </div>
    </div>
  );
}

export default Trailers;
