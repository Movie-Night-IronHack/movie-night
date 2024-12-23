function RenderCard({ movie, onWatchList, onDelete }) {
  // console.log("RenderCard props:", { onWatchList });
  return (
    <div className="card event-item" style={{ width: "10rem" }}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        className="card-img-top"
        alt={movie.original_title}
      />
      <div className="card-body">
        <h5 className="card-title mb-1 fw-light text-break">
          {onDelete ? (
            <button
              className="btn btn-sm btn-danger"
              onClick={() => onDelete(movie)}
            >
              Remove
            </button>
          ) : (
            <button
              className="btn btn-sm btn-success"
              onClick={() => onWatchList(movie)}
            >
              Watch
            </button>
          )}
          <br />
          <h6>vote: {movie.vote_average.toFixed(1)}</h6>
          {movie.release_date}
        </h5>
      </div>
    </div>
  );
}
export default RenderCard;
