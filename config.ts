// Configuration for TMDB API
// Read more about the API here: https://developers.themoviedb.org/

const API_URL: string = 'https://api.themoviedb.org/3/';
const API_KEY: string | undefined = process.env.API_KEY;

// Base Urls
const SEARCH_BASE_URL: string = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const TOP_RATED_BASE_URL: string = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US`;
const DISCOVER_BASE_URL: string = `${API_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`
const GENRE_BASE_URL: string =`${API_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`

// For ID based searches
const movieUrl = (id?: string) => `${API_URL}movie/${id}?api_key=${API_KEY}`;
const creditsUrl = (id?: string) => `${API_URL}movie/${id}/credits?api_key=${API_KEY}`;
const genreUrl = (id?: string) => `${API_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&with_genres=${id}`
const peopleUrl = (id?: string) => `${API_URL}person/${id}?api_key=${API_KEY}&language=en-US`
const knownForUrl = (id?: string) => `${API_URL}person/${id}/movie_credits?api_key=${API_KEY}&language=en-US`

// Images
const IMAGE_BASE_URL: string = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE: string = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE: string = 'w780';
const THUMB_SIZE: string = 'w342'

export {
  API_URL,
  API_KEY,
  SEARCH_BASE_URL,
  TOP_RATED_BASE_URL,
  DISCOVER_BASE_URL,
  GENRE_BASE_URL,
  IMAGE_BASE_URL,
  movieUrl,
  creditsUrl,
  genreUrl,
  peopleUrl,
  knownForUrl,
  THUMB_SIZE,
  BACKDROP_SIZE,
  POSTER_SIZE,
};
