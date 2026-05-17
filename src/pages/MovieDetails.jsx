import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../services/httpClient";
import { getMovieImg } from "../utils/getMovieImg";

function MovieDetails() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    get(`/movie/${movieId}`)
      .then((data) => setMovie(data))
      .catch((error) => console.error(error));
  }, [movieId]);

  if (!movie) {
    return <p>Cargando...</p>;
  }

  const imageUrl = getMovieImg(movie.poster_path, 500);

  return (
    <div className="details-container">
      <img src={imageUrl} alt={movie.title} />

      <div>
        <h1>{movie.title}</h1>
            <p>
                <strong>Fecha de estreno:</strong>{" "}
                    {movie.release_date}
            </p>

            <p>
                 <strong>Calificación:</strong> ⭐{" "}
                     {movie.vote_average}
            </p>
        <p>
          <strong>Descripción:</strong>{" "}
          {movie.overview}
        </p>

        <p>
          <strong>Géneros:</strong>{" "}
          {movie.genres?.map((genre) => genre.name).join(", ")}
        </p>
      </div>
    </div>
  );
}

export default MovieDetails;