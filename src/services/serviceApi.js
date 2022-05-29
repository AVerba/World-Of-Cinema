import { apiSettings } from './settings';
import { Notify } from 'notiflix';

const { BASE_URL, API_KEY } = apiSettings;

const fetchSearchMovies = async query => {
  const response = await fetch(
    `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}&page=${1}`
  );

  if (response.ok) {
    return response.json();
  }
  return Notify.failure(`Sorry, but not found movie like ${query}`);
};
const fetchTrendsMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
  );
  if (response.ok) {
    return response.json();
  }
};
const fetchMovieById = async id => {
  const response = await fetch(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
  );
  if (response.ok) {
    return response.json();
  }
};

const fetchCastMovie = async id => {
  const response = await fetch(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );
  if (response.ok) {
    return response.json();
  }
  return Notify.failure('Oops, an error occurred');
};

const fetchReviewsMovies = async id => {
  const response = await fetch(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
  );
  if (response.ok) {
    return response.json();
  }
  return Notify.failure('Oops, an error occurred');
};
export const fetchMovieDetails = async id => {
  const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  if (response.ok) {
    return response.json();
  }
  return Notify.failure('Oops, an error occurred');
};

const api = {
  fetchSearchMovies,
  fetchTrendsMovies,
  fetchMovieById,
  fetchMovieDetails,
  fetchReviewsMovies,
  fetchCastMovie,
};

export default api;
