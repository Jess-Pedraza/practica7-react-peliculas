export function getMovieImg(path, width = 500) {
  return path
    ? `https://image.tmdb.org/t/p/w${width}${path}`
    : "https://via.placeholder.com/500x750?text=Sin+Imagen";
}