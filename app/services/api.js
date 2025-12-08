const API_KEY = "07a43faf51msh64497e1bb075befp1ed6abjsnb48149f9812b";
const API_HOST = "imdb236.p.rapidapi.com";

export const getPopularMovies = async () => {
  const url = `https://imdb236.p.rapidapi.com/api/imdb/most-popular-movies`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": API_HOST,
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    return result;
  } catch (error) {
    return error;
  }
};

// const topMovies = await getPopularMovies();
// console.log(topMovies);

export const searchMovies = async (searchQuery) => {
  if (!searchQuery || searchQuery.trim().length === 0) return [];

  const url = `https://imdb236.p.rapidapi.com/api/imdb/search?originalTitle=${encodeURIComponent(
    searchQuery
  )}&r=json`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": API_HOST,
    },
  };

  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status}`);
    }

    const data = await res.json();

    // OMDB alternative returns: { Response: "False", Error: "Movie not found!" }
    if (data.Response === "False") {
      return [];
    }

    return data.results || [];
  } catch (error) {
    console.error("Movie search failed:", error);
    return [];
  }
};
