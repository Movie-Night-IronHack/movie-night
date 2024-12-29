function RenderCard({
  movie,
  onWatchList,
  onDelete,
  onHandleFavorite,
  showFavoriteButton = false,
  showWatchButton = true,
}) {
  return (
    <div className="card event-item" style={{ width: "10.5rem" }}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        className="card-img-top"
        alt={movie.original_title}
      />
      <div className="card-body">
        <h5 className="card-title mb-1 fw-light text-break">
          {onDelete && (
            <button
              className="btn btn-sm btn-danger me-1"
              onClick={() => onDelete(movie)}
            >
              Remove
            </button>
          )}

          {/* Render the Favorite button if showFavoriteButton is true */}
          {showFavoriteButton && (
            <button
              className="btn btn-sm btn-warning me-1"
              onClick={() => onHandleFavorite(movie)}
            >
              Favorite
            </button>
          )}

          {/* Render the Watch button if showWatchButton is true */}
          {showWatchButton && (
            <button
              className="btn btn-sm btn-success"
              onClick={() => onWatchList(movie)}
            >
              Watch
            </button>
          )}
          <br />
          <p className="small mb-1">Vote: {movie.vote_average.toFixed(1)}</p>
          <p className="small text-muted">{movie.release_date}</p>
        </h5>
      </div>
    </div>
  );
}
export default RenderCard;
