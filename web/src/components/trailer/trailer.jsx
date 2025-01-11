function Trailer({ videoId }) {
    if (!videoId) {
      return <p className="text-muted ">Trailer not available</p>;
    }
  
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ margin: "10px 0" }}
      >
        <div
          style={{
            position: "relative",
            width: "80%", // Adjust width as needed
            maxWidth: "560px", // Max width for desktop
            paddingBottom: "56.25%", // 16:9 aspect ratio (100% * 9 / 16)
            height: 0,
            margin: "0 auto",
          }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "8px",
            }}
          ></iframe>
        </div>
      </div>
    );
  }
  
  export default Trailer;
  