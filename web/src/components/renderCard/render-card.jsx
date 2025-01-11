import { Link } from "react-router-dom";
import { WhatsappShareButton, WhatsappIcon } from "react-share";

function RenderCard({
  movie,
  onWatchList,
  onDelete,
  onHandleFavorite,
  showFavoriteButton = false,
  showWatchButton = true,
  showWhatsAppButton = false,
}) {
  return (
    <div className="card event-item hover-shadow" style={{ width: "12rem" }}>
      <Link to={`/movie/${movie.id}`}>
        <img
          width={"191px"}
          height={"286px"}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "/src/assets/placeholder_moviePoster2.webp"
          }
          className="card-img-top"
          alt={movie.original_title}
        />
      </Link>

      <div className="card-body">
        <h5 className="card-title mb-1 fw-light text-break">
          {onDelete && (
            <button
              className="btn btn-sm btn-danger mb-3"
              onClick={() => onDelete(movie)}
            >
              Remove
            </button>
          )}

          {/* Render the Favorite button if showFavoriteButton is true */}
          {showFavoriteButton && (
            <button
              className="btn btn-sm btn-warning ms-2 me-1 mb-3"
              onClick={() => onHandleFavorite(movie)}
            >
              Favorite
            </button>
          )}
          {showWhatsAppButton && (
            <button className="btn btn-sm ms-2 pb-3">
              <WhatsappShareButton
                url={`http://localhost:5173/movie/${movie.id}`}
              >
                <WhatsappIcon size={35} round={true}></WhatsappIcon>
              </WhatsappShareButton>
            </button>
          )}

          {/* Render the Watch button if showWatchButton is true */}
          {showWatchButton && (
            <button
              className="mb-2 btn btn-sm btn-success"
              onClick={() => onWatchList(movie)}
            >
              Watch
            </button>
          )}
          <br />
          <p className="small mb-2">
            {movie.vote_average === 0 ? (
              <strong className="fw-bold"> &quot;Not voted yet&quot;</strong>
            ) : (
              <>
                <span className="ms-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 30 30"
                    fill="#001f3f"
                  >
                    <path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path>
                  </svg>
                </span>{" "}
                : {movie.vote_average.toFixed(1)}
              </>
            )}
          </p>
          <p className="small text-muted">
            {movie.release_date ? (
              movie.release_date
            ) : (
              <strong>&quot;Unknow&quot;</strong>
            )}
          </p>
        </h5>
      </div>
    </div>
  );
}
export default RenderCard;
