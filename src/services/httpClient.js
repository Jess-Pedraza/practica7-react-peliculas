const API_BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export async function get(path) {
  const url = `${API_BASE_URL}${path}${
    path.includes("?") ? "&" : "?"
  }api_key=${API_KEY}&language=es-MX`;

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });

  if (!response.ok) {
    throw new Error("Error en la solicitud");
  }

  return response.json();
}