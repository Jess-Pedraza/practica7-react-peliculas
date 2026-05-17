import { Link } from "react-router-dom";
import { getMovieImg } from "../utils/getMovieImg";

function MovieCard({
  title,
  posterPath,
  movieId,
  voteAverage,
}) {
  const imageUrl = getMovieImg(posterPath, 500);

  return (
    <div className="movie-card">
      <Link to={`/movies/${movieId}`}>
        <img
          src={imageUrl}
          alt={title}
          className="movie-image"
        />

        <h3>{title}</h3>
        <p
            style={{
             textAlign: "center",
             paddingBottom: "15px",
             color: "#facc15",
                 }}>
             ⭐ {voteAverage}
        </p>
      </Link>
    </div>
  );
}

export default MovieCard;