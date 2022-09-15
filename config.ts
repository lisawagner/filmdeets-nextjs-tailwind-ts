// Configuration for TMDB API
// Read more about the API here: https://developers.themoviedb.org/

const API_URL: string = 'https://api.themoviedb.org/3/';
const API_KEY: string | undefined = process.env.API_KEY;

// Base Urls
const SEARCH_BASE_URL: string = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const POPULAR_BASE_URL: string = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;

const TRENDING_BASE_URL: string = `${API_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`
// const NETFLIX_BASE_URL: string = `${API_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`
const TOP_RATED_BASE_URL: string = `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`

const ADVENTURE_BASE_URL: string = `${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=12`
const ACTION_BASE_URL: string = `${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`
const COMEDY_BASE_URL: string = `${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`
const FANTASY_BASE_URL: string = `${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=14`
// const HORROR_BASE_URL: string = `${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`
const SCIFI_BASE_URL: string = `${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=878`
const THRILLER_BASE_URL: string = `${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=53`
// const ROMANCE_BASE_URL: string = `${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`
// const DOCUMENTARY_BASE_URL: string = `${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`

const SIMILAR_BASE_URL: string = `${API_URL}/movie/453395/similar?api_key=${API_KEY}&language=en-US&page=1`
// For single movie
const movieUrl = (id?: string) => `${API_URL}movie/${id}?api_key=${API_KEY}`;
const creditsUrl = (id?: string) => `${API_URL}movie/${id}/credits?api_key=${API_KEY}`;

// Images
const IMAGE_BASE_URL: string = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE: string = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE: string = 'w780';
const THUMB_SIZE: string = 'w342'

export {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
  ADVENTURE_BASE_URL,
  ACTION_BASE_URL,
  COMEDY_BASE_URL,
  FANTASY_BASE_URL,
  SCIFI_BASE_URL,
  THRILLER_BASE_URL,
  SIMILAR_BASE_URL,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  movieUrl,
  creditsUrl,
  THUMB_SIZE
};
