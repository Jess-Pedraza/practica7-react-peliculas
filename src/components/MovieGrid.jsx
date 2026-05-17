import { useEffect, useState } from "react";
import { get } from "../services/httpClient";
import MovieCard from "./MovieCard";

function MovieGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie")
      .then((data) => setMovies(data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="movies-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movieId={movie.id}
          title={movie.title}
          posterPath={movie.poster_path}
          voteAverage={movie.vote_average}
        />
      ))}
    </div>
  );
}

export default MovieGrid;