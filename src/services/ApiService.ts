// Constants for the base URL and API key
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '8246306bee45758b9cae4e0b6a240224';

// Common fetch function to handle API requests and JSON parsing
const fetchApiData = async (endpoint: string) => {
  const response = await fetch(endpoint);

  // Throw error in case of error
  if (!response.ok) {
    throw new Error("Network response not ok");
  }

  // Parse the JSON response and return it as a promise
  return response.json();
};

/**
 * Fetch a list of movies.
 * @returns An array of movie results.
 */
export const fetchMovies = () => {
  // Construct the endpoint URL for fetching movies
  const endpoint = `${BASE_URL}/discover/movie?api_key=${API_KEY}`;
  // Fetch and parse data, then return the results
  return fetchApiData(endpoint).then((data) => data.results);
};

/**
 * Fetch movie details by ID.
 * @param movieId - The ID of the movie.
 * @returns The movie details.
 */
export const fetchMovieById = (movieId: number) => {
  // Construct the endpoint URL for fetching a specific movie by ID
  const endpoint = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`;
  // Fetch and return movie details
  return fetchApiData(endpoint);
};

/**
 * Search for movies by name.
 * @param name - The name of the movie to search for.
 * @returns An array of movie results.
 */
export const searchMovie = (name: string) => {
  // Construct the endpoint URL for searching movies by name
  const endpoint = `${BASE_URL}/search/movie?query=${name}&api_key=${API_KEY}`;
  // Fetch and parse data, then return the results
  return fetchApiData(endpoint).then((data) => data.results);
};
