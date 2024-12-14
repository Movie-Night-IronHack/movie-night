function RenderCard({ movie }) {
  console.log(movie);
  return (
    <div className="card event-item" style={{ width: "10rem" }}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        className="card-img-top"
        alt={movie.original_title}
      />
      <div className="card-body">
        <h5 className="card-title mb-1 fw-light text-break">
          {movie.original_title}
        </h5>
      </div>
    </div>
  );
}
export default RenderCard;

{
  /* <div className="card event-item">
<img src={event.poster} className="card-img-top" alt={event.title} />
<div className="card-body">
  <h5 className="card-title mb-1 fw-light text-break">
    <Link to={`/events/${event.id}`}>{event.title}</Link>
  </h5>
  <p className="mb-0 fs-xs">
    <strong>{dayjs(event.eventDate).format("lll")}</strong>
  </p>
  <p className="text-muted fw-lighter fs-xs">{event.location}</p>
  <div className="d-flex gap-1 flex-wrap mb-1">
    {event.categories.map((category) => (
      <span key={category} className="badge text-bg-light">
        {category}
      </span>
    ))}
  </div>
  <button
    className="btn btn-sm btn-danger"
    onClick={() => onDelete(event)}
  >
    delete
  </button>
</div>
</div> */
}
